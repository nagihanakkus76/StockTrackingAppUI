import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { IBaseRequest } from '../models/base.request.model';
import { IBaseResponse } from '../models/base.response.model';

export class WritableService extends BaseService implements IWritableService {

  constructor({ controllerName }: { controllerName: string }, private _http: HttpClient) {
    var baseUrl = `${environment.writableApiUrl}${controllerName}`;
    super(baseUrl);
  }

  create<TReq extends IBaseRequest, TRes extends IBaseResponse>(data: Partial<TReq>, path?: string): Observable<TRes> {

    var url = this.combinePathWithBaseUrl(path)
    return this._http.post<TRes>(url, data);
  }

  update<TReq extends IBaseRequest, TRes extends IBaseResponse>(data: Partial<TReq>, path?: string): Observable<TRes> {

    var url = this.combinePathWithBaseUrl(path)
    return this._http.put<TRes>(url, data);
  }

  delete<TRes extends IBaseResponse>(id: any, path?: string): Observable<TRes> {

    var url = this.combinePathWithBaseUrl(path)
    return this._http.delete<TRes>(`${url}/${id}`);
  }
}


export interface IWritableService {

  create<TReq extends IBaseRequest, TRes extends IBaseResponse>(data: Partial<TReq>, path?: string): Observable<TRes>;

  update<TReq extends IBaseRequest, TRes extends IBaseResponse>(data: Partial<TReq>, path?: string): Observable<TRes>;

  delete<TRes extends IBaseResponse>(id: any, path?: string): Observable<TRes>;
}
