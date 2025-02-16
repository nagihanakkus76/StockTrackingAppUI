import { FormControl } from "@angular/forms";
import { IBaseRequest } from "../../../../core/models/base.request.model";
import { IBaseFormModel } from "../../../../core/models/base.model";

export interface RegisterRequest extends IBaseRequest {
  email: string;
  password: string;

  firstName: string;
  lastName: string;

  phoneNumber?: string;
  profilePicture?: string;
}

export interface RegisterFormModel extends IBaseFormModel {

  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;

  email: FormControl<string | null>;
  password: FormControl<string | null>;
  confirmPassword: FormControl<string | null>;

  phoneNumber: FormControl<string | null>;
  profilePicture: FormControl<string | null>;

  isAgreementConfirmed: FormControl<boolean | null>;
}


