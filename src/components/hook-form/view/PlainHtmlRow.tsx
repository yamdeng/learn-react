import { useFormContext } from "react-hook-form";
import { FinalFormInput, FinalFieldInput } from "../../../types";

export default function PlainHtmlRow(props: {
  arrayFieldIndex: number;
  removeArrayField: (index: number) => void;
  fieldInfo: FinalFieldInput;
  arrayName: "inputFields" | "outputFields";
}) {
  const { fieldInfo, arrayName, arrayFieldIndex, removeArrayField } = props;
  const { depth, parentTypeLabel, categoryLabel } = fieldInfo;

  const {
    register,
    formState: { errors },
  } = useFormContext<FinalFormInput>();

  return (
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
          type="number"
          placeholder="LENGTH"
          {...register(`${arrayName}.${arrayFieldIndex}.length`)}
        />
        {errors[arrayName]?.[arrayFieldIndex]?.length?.message ? (
          <span className="error_message">
            {errors[arrayName]?.[arrayFieldIndex]?.length?.message}
          </span>
        ) : null}
      </td>
      <td>
        <select
          {...register(`${arrayName}.${arrayFieldIndex}.plainType`)}
          className="select"
        >
          <option value="">타입</option>
          <option value="String">string</option>
          <option value="Number">number</option>
          <option value="BigInteger">bigint</option>
          <option value="Boolean">boolean</option>
        </select>
        {errors[arrayName]?.[arrayFieldIndex]?.plainType?.message ? (
          <span className="error_message">
            {errors[arrayName]?.[arrayFieldIndex]?.plainType?.message}
          </span>
        ) : null}
      </td>
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
      <td>
        <input
          type="text"
          placeholder="DESCRIPTION"
          {...register(`${arrayName}.${arrayFieldIndex}.description`)}
        />
      </td>
      <td style={{ textAlign: "center" }}>
        <label className="switch">
          <input
            type="checkbox"
            {...register(`${arrayName}.${arrayFieldIndex}.useAlarm`)}
          />
          <span className="slider round"></span>
        </label>
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
  );
}
