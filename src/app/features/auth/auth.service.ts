import { HttpClient } from "@angular/common/http";
import { BaseService } from "../../../core/services/base.service";
import { environment } from "../../../environments/environment.development";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { RegisterRequest } from "./register/register.request.model";
import { RegisterResponse } from "./register/register.response.model";
import { LoginResponse } from "./login/login.response.model";
import { LoginRequest } from "./login/login.request.model";
import { AccessToken } from "../../../core/models/access-token.model";
import { LocalStorageService } from "../../services/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService implements IAuthService {

  private accessToken: AccessToken | null = null;
  private readonly ACCESS_TOKEN_KEY: string = 'access_token_key';

  constructor(private _http: HttpClient, private localStorageService: LocalStorageService) {
    var baseUrl = `${environment.writableApiUrl}/auth`;
    super(baseUrl);
  }


  register(data: RegisterRequest): Observable<RegisterResponse> {

    var url = this.combinePathWithBaseUrl("/register")

    return this._http.post<RegisterResponse>(url, data).pipe(
      tap(res => { this.setAccessToken(res as AccessToken); })
    )
  }

  login(data: LoginRequest): Observable<LoginResponse> {
    var url = this.combinePathWithBaseUrl("/login")

    return this._http.post<LoginResponse>(url, data).pipe(
      tap(res => { if (res) { this.setAccessToken(res.accessToken); } })
    )
  }

  logout(): void {
    this.accessToken = null;
    this.localStorageService.removeItem(this.ACCESS_TOKEN_KEY);
  }


  setAccessToken(token: AccessToken | null): void {
    if (token) {
      this.accessToken = token;
      this.localStorageService.setItem(this.ACCESS_TOKEN_KEY, token);
    }
  }

  getAccessToken(): AccessToken | null {
    if (!this.accessToken) {
      this.accessToken = this.localStorageService.getItem<AccessToken>(this.ACCESS_TOKEN_KEY);
      return this.accessToken
    }

    return this.accessToken;
  }
}

export interface IAuthService {

  register(data: RegisterRequest): Observable<RegisterResponse>

  login(data: LoginRequest): Observable<LoginResponse>
}
