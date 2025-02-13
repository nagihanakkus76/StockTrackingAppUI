import { AccessToken } from "../../../../core/models/access-token.model";
import { IBaseResponse } from "../../../../core/models/base.response.model";

export interface RegisterResponse extends IBaseResponse {
  accessToken: AccessToken;
}
