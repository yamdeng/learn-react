import * as yup from "yup";
import { EMAIL_PATTERN } from "./pattern";

export const basicInfoSchema = yup.object({
  id: yup.string().required("id는 필수입니다."),
  name: yup.string().required().min(5).max(10),
  age: yup.number().required().nullable().max(100),
  //   email: yup.string().email().required(),
  email: yup.string().required().matches(EMAIL_PATTERN),
  password: yup.string().required(),
  "confirm-password": yup.string().required(),
  sex: yup.string(),
  job: yup.string(),
  useAlarm: yup.boolean().required(),
  description: yup.string(),
});

export const basicInfoShapeSchema = yup.object().shape({
  id: yup.string().required("id는 필수입니다."),
  name: yup.string().required().min(5).max(10),
  age: yup.number().required().nullable().max(100),
  //   email: yup.string().email().required(),
  email: yup.string().required().matches(EMAIL_PATTERN),
  password: yup.string().required(),
  "confirm-password": yup.string().required(),
  sex: yup.string(),
  job: yup.string(),
  useAlarm: yup.boolean().required(),
  description: yup.string(),
});

export const basicInfoWithArrayShapeSchema = yup.object().shape({
  id: yup.string().required("id는 필수입니다."),
  name: yup.string().required().min(5).max(10),
  age: yup.number().required().nullable().max(100),
  email: yup.string().email().required(),
  inputList: yup
    .array()
    .of(
      yup.object().shape({
        name: yup.string().required(),
        length: yup.number().required().nullable().max(100),
        dataType: yup.string().required(),
        requireYn: yup.string().required(),
        description: yup.string(),
        checkedAlarm: yup.boolean().required(),
      })
    )
    .required()
    .min(1, "하나의 array는 추가해야합니다."),
});

export const finalSchema = yup.object().shape({
  name: yup.string().required("이름은 필수값입니다.").max(10),
  email: yup.string().required("이메일은 필수값입니다").email(),
  inputFields: yup
    .array()
    .of(
      yup.object().shape({
        name: yup.string().required(),
        length: yup.number().required().nullable(),
        dataType: yup.string().required(),
        requireYn: yup.string().required(),
        description: yup.string().required(),
        useAlarm: yup.boolean(),
        depth: yup.number().required(),
        categoryLabel: yup.string().required(),
        parentTypeLabel: yup.string().required(),
        arrayName: yup.string().required(),

        properties: yup.array().of(
          yup.object().shape({
            name: yup.string().required(),
            length: yup.number().required().nullable(),
            dataType: yup.string().required(),
            requireYn: yup.string().required(),
            description: yup.string().required(),
            useAlarm: yup.boolean(),
            depth: yup.number().required(),
            categoryLabel: yup.string().required(),
            parentTypeLabel: yup.string().required(),
            arrayName: yup.string().required(),
          })
        ),
      })
    )
    .required(),
  outputFields: yup
    .array()
    .of(
      yup.object().shape({
        name: yup.string().required(),
        length: yup.number().required().nullable(),
        dataType: yup.string().required(),
        requireYn: yup.string().required(),
        description: yup.string().required(),
        useAlarm: yup.boolean(),
        depth: yup.number().required(),
        categoryLabel: yup.string().required(),
        parentTypeLabel: yup.string().required(),
        arrayName: yup.string().required(),

        properties: yup.array().of(
          yup.object().shape({
            name: yup.string().required(),
            length: yup.number().required().nullable(),
            dataType: yup.string().required(),
            requireYn: yup.string().required(),
            description: yup.string().required(),
            useAlarm: yup.boolean(),
            depth: yup.number().required(),
            categoryLabel: yup.string().required(),
            parentTypeLabel: yup.string().required(),
            arrayName: yup.string().required(),
          })
        ),
      })
    )
    .required(),
});
