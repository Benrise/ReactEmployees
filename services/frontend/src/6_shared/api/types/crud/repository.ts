import type { AxiosInstance } from 'axios';
import { CrudGetResponse, ListResponseDto } from '../types';

export interface IListParameters {
  page?: number;
  size?: number;
  searchQuery?: string;
}

export interface IParameters {
  extend?: number | boolean;
}

export class CrudRepository<T> {
  constructor(
    protected endpoint: string,
    protected axiosInstance: AxiosInstance,
  ) {}

  list(params?: IListParameters) {
    return this.axiosInstance.get<ListResponseDto<T>>(`${this.endpoint}`, {
      params: params,
    });
  }
  get(id: string | number, params?: IParameters) {
    return this.axiosInstance.get<CrudGetResponse<T>>(`${this.endpoint}/${id}`, { params });
  }
  post(payload: T, params?: IParameters) {
    return this.axiosInstance.post<CrudGetResponse<T>>(this.endpoint, payload, { params });
  }
  put(id: string | number, payload?: T, params?: IParameters) {
    return this.axiosInstance.put<CrudGetResponse<T>>(`${this.endpoint}/${id}`, payload, { params });
  }
  delete(id: string | number) {
    return this.axiosInstance.delete(`${this.endpoint}/${id}`);
  }
}
