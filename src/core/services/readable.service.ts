import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { BaseListResponse, IBaseResponse } from '../models/base.response.model';
import { IPageRequest } from '../models/base.request.model';

export class ReadableService extends BaseService implements IReadableService {

  constructor({ controllerName }: { controllerName: string }, private _http: HttpClient) {
    var baseUrl = `${environment.writableApiUrl}${controllerName}`;
    super(baseUrl);
  }

  getList<TRes extends IBaseResponse>(pageRequest: IPageRequest, path?: string): Observable<BaseListResponse<TRes>> {

    var url = this.combinePathWithBaseUrl(path)
    var urlWithQuery = `${url}?PageIndex=${pageRequest.pageIndex}&PageSize=${pageRequest.pageSize}`

    return this._http.get<BaseListResponse<TRes>>(urlWithQuery);
  }

  getByID<TRes>(id: any, path?: string): Observable<TRes> {

    var url = this.combinePathWithBaseUrl(path)
    var urlWithId = `${url}/${id}`

    return this._http.get<TRes>(urlWithId);
  }
}


export interface IReadableService {

  getList<TRes extends IBaseResponse>(pageRequest: IPageRequest, path?: string): Observable<BaseListResponse<TRes>>

  getByID<TRes>(id: any, path?: string): Observable<TRes>
}
