export interface IBaseResponse { }


export interface BaseListResponse<T extends IBaseResponse> extends BasePageableModel {
  items: T[];
}

export interface BasePageableModel {
  index: number;
  size: number;
  count: number;
  pages: number;
  hasPrevious: boolean;
  hasNext: boolean;
}
