import { Injectable, InjectionToken, Inject } from '@angular/core';
import {ApiEndpoints} from "@app/api/enums/api-endpoints.enum";

export const API_HOST = new InjectionToken<string>('API_HOST');

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public readonly host: string;

  public constructor(@Inject(API_HOST) host: string) {
    this.host = host;
  }

  public url(endpoint: ApiEndpoints, params: { [key: string]: any } = {}): string {
    return `${this.host}/${this.replaceParams(endpoint, params)}`;
  }

  private replaceParams(input: string, params: { [key: string]: any } = {}): string {
    let result = input;

    Object.entries(params).map(([key, value]) => {
      result = result.replace(`{${key}}`, value);
    });

    return result;
  }
}
