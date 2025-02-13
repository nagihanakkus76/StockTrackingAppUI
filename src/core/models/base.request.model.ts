export interface IBaseRequest { }

export interface IPageRequest extends IBaseRequest {
  pageIndex: number;
  pageSize: number;
}
