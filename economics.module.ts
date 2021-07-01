import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EconomicsPageRoutingModule } from './economics-routing.module';

import { EconomicsPage } from './economics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EconomicsPageRoutingModule
  ],
  declarations: [EconomicsPage]
})
export class EconomicsPageModule {}
