import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EconomicsPage } from './economics.page';

const routes: Routes = [
  {
    path: '',
    component: EconomicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EconomicsPageRoutingModule {}
