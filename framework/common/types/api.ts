export interface ApiFetcherOptions {
  url: string;
  query: string;
  variables?: Variables;
}

export type Variables = { [kay: string]: string | undefined };
export interface ApiFetcherResult<T> {
  data: T;
}

export interface ApiConfig {
  apiUrl: string;
  fetch<T>(options: ApiFetcherOptions): Promise<ApiFetcherResult<T>>;
}
