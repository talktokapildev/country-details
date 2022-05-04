import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'country-info',
    pathMatch: 'full',
  },
  // {
  //   path: 'about',
  //   loadChildren: './about/about.module#AboutModule',
  // },
  {
    path: 'country-info',
    loadChildren: () => import('./country/country.module').then(m => m.CountryModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
