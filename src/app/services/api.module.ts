import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { API_HOST } from "@app/services/api.service";
import { environment } from "@environments/environment";

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class ApiModule {
  static forRoot(): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: API_HOST,
          useValue: environment.apiUrl,
        },
      ],
    };
  }
}
