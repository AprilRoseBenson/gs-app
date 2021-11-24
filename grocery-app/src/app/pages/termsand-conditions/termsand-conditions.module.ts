import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsandConditionsPageRoutingModule } from './termsand-conditions-routing.module';

import { TermsandConditionsPage } from './termsand-conditions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermsandConditionsPageRoutingModule
  ],
  declarations: [TermsandConditionsPage]
})
export class TermsandConditionsPageModule {}
