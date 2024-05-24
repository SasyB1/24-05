import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { Page404Component } from './pages/page404/page404.component';
import { YamamayComponent } from './pages/yamamay/yamamay.component';
import { TezenisComponent } from './pages/tezenis/tezenis.component';
import { CalzedoniaComponent } from './pages/calzedonia/calzedonia.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full',
  },
  {
    path: 'homepage',
    component: HomepageComponent,
    title: 'Homepage',
  },
  {
    path: 'Yamamay',
    component: YamamayComponent,
    title: 'Yamamay',
  },
  {
    path: 'Tezenis',
    component: TezenisComponent,
    title: 'Tezenis',
  },
  {
    path: 'Calzedonia',
    component: CalzedoniaComponent,
    title: 'Calzedonia',
  },
  {
    path: 'detail/:model',
    component: DetailComponent,
    title: 'Detail',
  },
  {
    path: '**',
    component: Page404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
