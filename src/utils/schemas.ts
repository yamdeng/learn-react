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
