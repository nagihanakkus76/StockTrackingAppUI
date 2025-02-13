import { AccessToken } from "../../../../core/models/access-token.model";
import { IBaseResponse } from "../../../../core/models/base.response.model";
import { AuthenticatorType } from "../../../enums/authenticator-type.enum";

export interface LoginResponse  extends IBaseResponse{
  accessToken: AccessToken | null;
  requiredAuthenticatorType: AuthenticatorType | null;
}
