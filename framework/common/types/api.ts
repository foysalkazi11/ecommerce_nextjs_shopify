export interface ApiFetcherOptions {
  url: string;
  query: string;
}
export interface ApiFetcherResult<T> {
  data: T;
}

export interface ApiConfig {
  apiUrl: string;
  fetch<T>(options: ApiFetcherOptions): Promise<ApiFetcherResult<T>>;
}
