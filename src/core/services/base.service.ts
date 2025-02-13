export class BaseService {
  _baseUrl: string;

  constructor(baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  public combinePathWithBaseUrl(path?: string): string {
    if (!path) { path = '' }
    else if (!path.startsWith("/")) { path = `/${path}` }

    return `${this._baseUrl}${path}`
  }
}
