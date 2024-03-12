import { useFormContext, Controller } from "react-hook-form";
import { FinalFormInput, FinalFieldInput } from "../../../types";
import { getErrorMessageByFieldState } from "../../../utils/react-utils";

export default function PlainHtmlRowController(props: {
  arrayFieldIndex: number;
  removeArrayField: (index: number) => void;
  fieldInfo: FinalFieldInput;
  arrayName: "inputFields" | "outputFields";
}) {
  const { fieldInfo, arrayName, arrayFieldIndex, removeArrayField } = props;
  const { depth, parentTypeLabel, categoryLabel } = fieldInfo;

  const { control } = useFormContext<FinalFormInput>();

  return (
    <tr>
      <td>{depth}</td>
      <td>
        {parentTypeLabel ? parentTypeLabel + categoryLabel : categoryLabel}
      </td>
      <td>
        <Controller
          name={`${arrayName}.${arrayFieldIndex}.name`}
          control={control}
          render={({ field, fieldState }) => (
            <>
              <input
                type="text"
                onChange={field.onChange}
                onBlur={field.onBlur}
                value={field.value === null ? "" : field.value}
              />
              {getErrorMessageByFieldState(fieldState)}
            </>
          )}
        />
      </td>
      <td>
        <Controller
          name={`${arrayName}.${arrayFieldIndex}.length`}
          control={control}
          render={({ field, fieldState }) => (
            <>
              <input
                type="number"
                onChange={field.onChange}
                onBlur={field.onBlur}
                value={field.value === null ? "" : field.value}
              />
              {getErrorMessageByFieldState(fieldState)}
            </>
          )}
        />
      </td>
      <td>
        <Controller
          name={`${arrayName}.${arrayFieldIndex}.plainType`}
          control={control}
          render={({ field, fieldState }) => (
            <>
              <select
                onChange={field.onChange}
                onBlur={field.onBlur}
                value={field.value}
                className="select"
              >
                <option value="">타입</option>
                <option value="String">string</option>
                <option value="Number">number</option>
                <option value="BigInteger">bigint</option>
                <option value="Boolean">boolean</option>
              </select>
              {getErrorMessageByFieldState(fieldState)}
            </>
          )}
        />
      </td>
      <td>
        <Controller
          name={`${arrayName}.${arrayFieldIndex}.requireYn`}
          control={control}
          render={({ field, fieldState }) => (
            <>
              <select
                onChange={field.onChange}
                onBlur={field.onBlur}
                value={field.value}
                className="select"
              >
                <option value="">필수여부</option>
                <option value="Y">예</option>
                <option value="N">아니오</option>
              </select>
              {getErrorMessageByFieldState(fieldState)}
            </>
          )}
        />
      </td>
      <td>
        <Controller
          name={`${arrayName}.${arrayFieldIndex}.description`}
          control={control}
          render={({ field, fieldState }) => (
            <>
              <input
                type="text"
                onChange={field.onChange}
                onBlur={field.onBlur}
                value={field.value}
                placeholder="DESCRIPTION"
              />
              {getErrorMessageByFieldState(fieldState)}
            </>
          )}
        />
      </td>
      <td style={{ textAlign: "center" }}>
        <Controller
          name={`${arrayName}.${arrayFieldIndex}.useAlarm`}
          control={control}
          render={({ field, fieldState }) => (
            <>
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  checked={field.value}
                />
                <span className="slider round"></span>
              </label>
              {getErrorMessageByFieldState(fieldState)}
            </>
          )}
        />
      </td>
      <td>
        <button
          type="button"
          className="button button-cancel"
          onClick={() => removeArrayField(arrayFieldIndex)}
        >
          삭제
        </button>
      </td>
    </tr>
  );
}
