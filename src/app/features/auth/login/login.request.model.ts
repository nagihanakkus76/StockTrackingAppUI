import { IBaseRequest } from "../../../../core/models/base.request.model";

export interface LoginRequest extends IBaseRequest {
  email: string;
  password: string;
  authenticatorCode: string | null;
}
