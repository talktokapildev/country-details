import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from './country.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
  return {
    ngModule: CoreModule,
    providers: [CountryService],
  };
}}
