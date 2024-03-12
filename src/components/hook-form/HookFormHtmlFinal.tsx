import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { FinalFormInput } from "../../types";
import { finalFormValues } from "../../utils/values";
import { yupResolver } from "@hookform/resolvers/yup";
import { finalSchema } from "../../utils/schemas";
import FieldsHtmlTable from "./view/FieldsHtmlTable";
import { FieldListTypeContext } from "../../utils/contexts";

export default function HookFormHtmlFinal(): React.ReactNode {
  const methods = useForm<FinalFormInput>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: finalFormValues,
    resolver: yupResolver(finalSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<FinalFormInput> = (data: FinalFormInput) => {
    console.log(`data : ${JSON.stringify(data)}`);
  };

  console.log(errors);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid-root-container">
          <div
            className="grid-input-container"
            style={{ gridTemplateColumns: "160px 430px" }}
          >
            <div className="div-label">이름 :</div>
            <div className="div-input">
              <input type="text" placeholder="NAME" {...register("name")} />
              {errors && errors.name ? (
                <span className="error_message">{errors.name.message}</span>
              ) : null}
            </div>
          </div>
          <div
            className="grid-input-container"
            style={{ gridTemplateColumns: "160px 430px" }}
          >
            <div className="div-label">이메일 :</div>
            <div className="div-input">
              <input type="text" placeholder="EMAIL" {...register("email")} />
              {errors && errors.email ? (
                <span className="error_message">{errors.email.message}</span>
              ) : null}
            </div>
          </div>
        </div>

        {/* input */}
        <FieldListTypeContext.Provider
          value={{
            ioType: "I",
          }}
        >
          <FieldsHtmlTable rootArrayName="inputFields" />
        </FieldListTypeContext.Provider>

        {/* output */}
        <FieldListTypeContext.Provider
          value={{
            ioType: "O",
          }}
        >
          <FieldsHtmlTable rootArrayName="outputFields" />
        </FieldListTypeContext.Provider>

        <div className="table-container right">
          <button type="reset" className="button button-cancel">
            취소
          </button>
          <button type="submit" className="button button-info">
            저장
          </button>
        </div>
      </form>
    </FormProvider>
  );
}
