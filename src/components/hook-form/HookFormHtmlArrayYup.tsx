import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ArrayInfo } from "../../types";
import { EMAIL_PATTERN } from "../../utils/pattern";
import {
  basicFormDefaultValues,
  inputListDefaultValues,
} from "../../utils/values";
import { v4 as uuid } from "uuid";
import { basicInfoWithArrayShapeSchema } from "../../utils/schemas";

export default function HookFormHtmlArrayYup() {
  const customDefaultValues = {
    ...basicFormDefaultValues,
    inputList: [],
  };
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ArrayInfo>({
    defaultValues: customDefaultValues,
    resolver: yupResolver(basicInfoWithArrayShapeSchema),
  });

  /* empty array를 check 할수는 없음 */
  const { fields, append, remove } = useFieldArray({
    control,
    name: "inputList",
    rules: {
      minLength: 1,
    },
  });

  const onSubmit: SubmitHandler<ArrayInfo> = (data: ArrayInfo) => {
    console.log(`data : ${JSON.stringify(data)}`);
  };

  function addRow() {
    const newInfo = { ...inputListDefaultValues, id: uuid() };
    append(newInfo);
  }

  function removeArray(arrayIndex: number) {
    remove(arrayIndex);
  }

  function removeAll() {
    remove();
  }

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* basic form start */}
      <div className="grid-root-container">
        <div className="grid-input-container">
          <div className="div-label">ID :</div>
          <div className="div-input">
            <input
              type="text"
              placeholder="ID"
              {...register("id", {
                required: "필수값입니다.",
                maxLength: { value: 10, message: "10자리이하로만입력해주세요" },
              })}
            />
            {errors && errors.id ? (
              <span className="error_message">
                {errors.id.message ? errors.id.message : "id error"}
              </span>
            ) : null}
          </div>
        </div>
        <div className="grid-input-container">
          <div className="div-label">이름 :</div>
          <div className="div-input">
            <input
              type="text"
              placeholder="NAME"
              {...register("name", { required: true })}
            />
          </div>
        </div>
        <div className="grid-input-container">
          <div className="div-label">나이 :</div>
          <div className="div-input">
            <input
              type="number"
              placeholder="AGE"
              {...register("age", { required: true, min: 1, max: 100 })}
            />
          </div>
        </div>
        <div className="grid-input-container">
          <div className="div-label">이메일 :</div>
          <div className="div-input">
            <input
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                minLength: 8,
                pattern: EMAIL_PATTERN,
              })}
            />
          </div>
        </div>
      </div>
      {/* basic form end */}
      <div className="list-form-container">
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
            onClick={addRow}
          >
            추가
          </button>
          <button
            className="button button-error"
            style={{ padding: "5px 8px" }}
            onClick={removeAll}
          >
            전체삭제
          </button>
        </div>
        {fields.map((fieldInfo, index) => {
          return (
            <div className="list-input-container" key={fieldInfo.id}>
              <div className="div-input">
                <input
                  type="text"
                  placeholder="NAME"
                  {...register(`inputList.${index}.name`, { required: true })}
                />
              </div>
              <div className="div-input">
                <input
                  type="number"
                  placeholder="길이"
                  {...register(`inputList.${index}.length`, { required: true })}
                />
              </div>
              <div className="div-input">
                <select
                  {...register(`inputList.${index}.dataType`, {
                    required: true,
                  })}
                  className="select"
                >
                  <option value="">선택하세요</option>
                  <option value="string">String</option>
                  <option value="number">Number</option>
                  <option value="OBJECT">Object</option>
                  <option value="LIST">List</option>
                </select>
              </div>
              <div className="div-input">
                <select
                  {...register(`inputList.${index}.requireYn`, {
                    required: true,
                  })}
                  className="select"
                >
                  <option value="">선택하세요</option>
                  <option value="Y">예</option>
                  <option value="N">아니오</option>
                </select>
              </div>
              <div className="div-input">
                <input
                  type="text"
                  placeholder="DESCRIPTION"
                  {...register(`inputList.${index}.description`, {
                    required: true,
                  })}
                />
              </div>
              <div className="div-input radio">
                <label className="switch">
                  <input
                    type="checkbox"
                    {...register(`inputList.${index}.checkedAlarm`)}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="div-input">
                <button
                  className="button button-cancel"
                  onClick={() => removeArray(index)}
                >
                  삭제
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="list-form-container right">
        <button className="button button-cancel">취소</button>
        <button type="submit" className="button button-info">
          저장
        </button>
      </div>
    </form>
  );
}
