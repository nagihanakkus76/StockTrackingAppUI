import { HttpClient } from "@angular/common/http";
import { BaseService } from "../../../core/services/base.service";
import { environment } from "../../../environments/environment.development";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RegisterRequest } from "./register/register.request.model";
import { RegisterResponse } from "./register/register.response.model";
import { LoginResponse } from "./login/login.response.model";
import { LoginRequest } from "./login/login.request.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService implements IAuthService {

  constructor(private _http: HttpClient) {
    var baseUrl = `${environment.writableApiUrl}/auth`;
    super(baseUrl);
  }

  register(data: RegisterRequest): Observable<RegisterResponse> {
    var url = this.combinePathWithBaseUrl("/register")

    return this._http.post<RegisterResponse>(url, data);
  }

  login(data: LoginRequest): Observable<LoginResponse> {
    var url = this.combinePathWithBaseUrl("/login")

    return this._http.post<LoginResponse>(url, data);
  }
}


export interface IAuthService {

  register(data: RegisterRequest): Observable<RegisterResponse>

  login(data: LoginRequest): Observable<LoginResponse>
}
