import { useFieldArray, useFormContext } from "react-hook-form";
import { v4 as uuid } from "uuid";
import { finalDefaultFieldInput } from "../../../utils/values";
import { FinalFormInput, FinalFieldInput } from "../../../types";
import PlainHtmlRow from "./PlainHtmlRow";

export default function CollectionHtmlRow(props: {
  arrayFieldIndex: number;
  removeArrayField: (index: number) => void;
  fieldInfo: FinalFieldInput;
  arrayName: "inputFields" | "outputFields";
}) {
  const { fieldInfo, arrayName, arrayFieldIndex, removeArrayField } = props;
  const { depth, parentTypeLabel, categoryLabel, dataType } = fieldInfo;

  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<FinalFormInput>();

  const subListArrayName =
    `${arrayName}.${arrayFieldIndex}.properties` as "inputFields";

  const { fields, append, remove } = useFieldArray({
    control,
    name: subListArrayName,
  });

  function addRowChild(dataType: string) {
    let childCategoryLabel = "";
    if (dataType === "PLAIN") {
      childCategoryLabel = "P";
    } else if (dataType === "OBJECT") {
      childCategoryLabel = "O";
    } else if (dataType === "LIST") {
      childCategoryLabel = "L";
    }

    const newInfo = {
      ...finalDefaultFieldInput,
      id: uuid(),
      dataType,
      depth: depth + 1,
      categoryLabel: childCategoryLabel,
      parentTypeLabel: parentTypeLabel
        ? parentTypeLabel + categoryLabel
        : categoryLabel,
      arrayName: subListArrayName,
    };
    append(newInfo);
  }

  function removeArrayFieldChild(index: number) {
    remove(index);
  }

  return (
    <>
      <tr>
        <td>{depth}</td>
        <td>
          {parentTypeLabel ? parentTypeLabel + categoryLabel : categoryLabel}
        </td>
        <td>
          <input
            type="text"
            placeholder="NAME"
            {...register(`${arrayName}.${arrayFieldIndex}.name`)}
          />
          {errors[arrayName]?.[arrayFieldIndex]?.name?.message ? (
            <span className="error_message">
              {errors[arrayName]?.[arrayFieldIndex]?.name?.message}
            </span>
          ) : null}
        </td>
        <td>
          <input
            type="text"
            placeholder="LENGTH"
            {...register(`${arrayName}.${arrayFieldIndex}.length`)}
          />
          {errors[arrayName]?.[arrayFieldIndex]?.plainType?.message ? (
            <span className="error_message">
              {errors[arrayName]?.[arrayFieldIndex]?.plainType?.message}
            </span>
          ) : null}
        </td>
        <td>{dataType}</td>
        <td>
          <select
            {...register(`${arrayName}.${arrayFieldIndex}.requireYn`)}
            className="select"
          >
            <option value="">필수여부</option>
            <option value="Y">예</option>
            <option value="N">아니오</option>
          </select>
          {errors[arrayName]?.[arrayFieldIndex]?.requireYn?.message ? (
            <span className="error_message">
              {errors[arrayName]?.[arrayFieldIndex]?.requireYn?.message}
            </span>
          ) : null}
        </td>
        <td colSpan={2}>
          <button
            className="button button-info"
            onClick={() => addRowChild("PLAIN")}
          >
            [+Field]
          </button>
          <button
            className="button button-success"
            onClick={() => addRowChild("OBJECT")}
          >
            [+Object]
          </button>
          <button
            className="button button-success"
            onClick={() => addRowChild("LIST")}
          >
            [+List]
          </button>
        </td>
        <td>
          <button
            className="button button-cancel"
            onClick={() => removeArrayField(arrayFieldIndex)}
          >
            삭제
          </button>
        </td>
      </tr>
      {fields.map((fieldInfo, index) => {
        const { id, dataType } = fieldInfo;
        let fieldComponent: any = null;
        if (dataType === "PLAIN") {
          fieldComponent = (
            <PlainHtmlRow
              key={id}
              arrayFieldIndex={index}
              removeArrayField={removeArrayFieldChild}
              fieldInfo={fieldInfo}
              arrayName={subListArrayName as "inputFields"}
            />
          );
        } else {
          fieldComponent = (
            <CollectionHtmlRow
              key={id}
              arrayFieldIndex={index}
              removeArrayField={removeArrayFieldChild}
              fieldInfo={fieldInfo}
              arrayName={subListArrayName as "inputFields"}
            />
          );
        }
        return <>{fieldComponent}</>;
      })}
    </>
  );
}
