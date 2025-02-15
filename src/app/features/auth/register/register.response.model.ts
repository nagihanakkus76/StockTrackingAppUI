import { IBaseResponse } from "../../../../core/models/base.response.model";

export interface RegisterResponse extends IBaseResponse {
  token: string;
  expirationDate: Date;
  // accessToken: AccessToken;
}
