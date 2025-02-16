import { ValidationType } from "../enums/validation-type.enum";

export interface ValidationMessageModel {
  type: ValidationType;
  message: string;
}
