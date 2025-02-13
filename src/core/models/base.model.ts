import { AbstractControl } from "@angular/forms";

export interface BaseModel<T> extends IBaseModel {

  [key: string]: any; // index signature
  id: T | null;
}

export interface IBaseModel {

  [key: string]: any; // index signature
  id: any | null
}

export interface IBaseFormModel {

  [key: string]: AbstractControl<any, any>;
}
