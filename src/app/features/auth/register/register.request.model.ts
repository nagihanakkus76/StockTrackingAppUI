import { IBaseRequest } from "../../../../core/models/base.request.model";

export interface RegisterRequest extends IBaseRequest {
 email: string;
 password: string;

 firstName: string;
 lastName: string;

 phoneNumber?: string;
 profilePicture?: string;
}
