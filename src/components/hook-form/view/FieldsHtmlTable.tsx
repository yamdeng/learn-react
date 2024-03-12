import { useContext } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { FinalFormInput } from "../../../types";
import { finalDefaultFieldInput } from "../../../utils/values";
import { v4 as uuid } from "uuid";
import PlainHtmlRow from "./PlainHtmlRow";
import CollectionHtmlRow from "./CollectionHtmlRow";
import { FieldListTypeContext } from "../../../utils/contexts";

export default function FieldsHtmlTable(props: {
  rootArrayName: "inputFields" | "outputFields";
}) {
  const { rootArrayName } = props;

  const { ioType } = useContext(FieldListTypeContext);

  const { control } = useFormContext<FinalFormInput>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: rootArrayName,
  });

  function addRow(dataType: string) {
    let categoryLabel = "";
    if (dataType === "PLAIN") {
      categoryLabel = "P";
    } else if (dataType === "OBJECT") {
      categoryLabel = "O";
    } else if (dataType === "LIST") {
      categoryLabel = "L";
    }

    const newInfo = {
      ...finalDefaultFieldInput,
      id: uuid(),
      dataType,
      depth: 1,
      categoryLabel: categoryLabel,
      parentTypeLabel: null,
      arrayName: rootArrayName,
      ioType: ioType,
    };
    append(newInfo);
  }

  function removeAll() {
    remove();
  }

  function removeArrayField(index: number) {
    remove(index);
  }

  return (
    <div className="table-container">
      <div
        className="right"
        style={{
          borderBottom: "1px solid gray",
          padding: 5,
          marginBottom: 10,
        }}
      >
        <button
          className="button button-info"
          style={{ padding: "5px 8px" }}
          onClick={() => addRow("PLAIN")}
        >
          [+Field]
        </button>
        <button
          className="button button-success"
          style={{ padding: "5px 8px" }}
          onClick={() => addRow("OBJECT")}
        >
          [+Object]
        </button>
        <button
          className="button button-success"
          style={{ padding: "5px 8px" }}
          onClick={() => addRow("LIST")}
        >
          [+List]
        </button>
        <button
          className="button button-error"
          style={{ padding: "5px 8px" }}
          onClick={removeAll}
        >
          [-delete]
        </button>
      </div>

      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th style={{ width: 80 }}>depth</th>
            <th style={{ width: 80 }}>구분</th>
            <th style={{ width: 110 }}>이름</th>
            <th style={{ width: 110 }}>길이</th>
            <th style={{ width: 110 }}>타입</th>
            <th style={{ width: 110 }}>필수</th>
            <th style={{ width: 230 }}>설명</th>
            <th style={{ width: 110 }}>알림여부</th>
            <th style={{ width: 110 }}>삭제</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((fieldInfo, index) => {
            const { id, dataType } = fieldInfo;
            let fieldComponent: any = null;
            if (dataType === "PLAIN") {
              fieldComponent = (
                <PlainHtmlRow
                  key={id}
                  arrayFieldIndex={index}
                  removeArrayField={removeArrayField}
                  fieldInfo={fieldInfo}
                  arrayName={rootArrayName as "inputFields"}
                />
              );
            } else {
              fieldComponent = (
                <CollectionHtmlRow
                  key={id}
                  arrayFieldIndex={index}
                  removeArrayField={removeArrayField}
                />
              );
            }
            return <>{fieldComponent}</>;
          })}
        </tbody>
      </table>
    </div>
  );
}
