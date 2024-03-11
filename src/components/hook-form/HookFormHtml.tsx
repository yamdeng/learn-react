import { useForm, SubmitHandler } from "react-hook-form";
import { BasicInfo } from "../../types";
import { EMAIL_PATTERN } from "../../utils/pattern";
import { basicFormDefaultValues } from "../../utils/values";

export default function HookFormHtml() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BasicInfo>({
    defaultValues: basicFormDefaultValues,
  });

  const onSubmit: SubmitHandler<BasicInfo> = (data: BasicInfo) => {
    console.log(`data : ${JSON.stringify(data)}`);
  };

  console.log(watch("description")); // watch를 쓰는것은 좋지 않음
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid-one-container">
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

        <div className="div-label">이름 :</div>
        <div className="div-input">
          <input
            type="text"
            placeholder="NAME"
            {...register("name", { required: true })}
          />
        </div>

        <div className="div-label">나이 :</div>
        <div className="div-input">
          <input
            type="number"
            placeholder="AGE"
            {...register("age", { required: true, min: 1, max: 100 })}
          />
        </div>

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

        <div className="div-label">암호 :</div>
        <div className="div-input">
          <input
            type="password"
            placeholder="PASSWORD"
            {...register("password", { required: true, minLength: 8 })}
          />
        </div>

        <div className="div-label">암호확인 :</div>
        <div className="div-input">
          <input
            type="password"
            placeholder="confirm PASSWORD"
            {...register("confirm-password", { required: true, minLength: 8 })}
          />
        </div>

        <div className="div-label">남/여 :</div>
        <div className="div-input radio">
          <input
            type="radio"
            id="sex_male"
            value="male"
            {...register("sex", { required: true })}
          />
          <label htmlFor="sex_male">남</label>
          <input
            type="radio"
            id="sex_female"
            value="female"
            {...register("sex", { required: true })}
          />
          <label htmlFor="sex_female">여</label>
        </div>

        <div className="div-label">직업 :</div>
        <div className="div-input radio">
          <select {...register("job", { required: true })}>
            <option value="">선택하세요</option>
            <option value="developer">Developer</option>
            <option value="pm">PM</option>
            <option value="pl">PL</option>
            <option value="owner">Owner</option>
          </select>
        </div>

        <div className="div-label">알림 :</div>
        <div className="div-input radio">
          <label className="switch">
            <input type="checkbox" {...register("useAlarm")} />
            <span className="slider round"></span>
          </label>
        </div>

        <div className="div-label">설명 :</div>
        <div className="div-input">
          <textarea
            className="textarea"
            {...register("description")}
          ></textarea>
        </div>

        <div className="right" style={{ width: 580 }}>
          <button className="button button-cancel">취소</button>
          <button type="submit" className="button button-info">
            저장
          </button>
        </div>
      </div>
    </form>
  );
}
