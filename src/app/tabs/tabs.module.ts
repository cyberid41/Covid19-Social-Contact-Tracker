import { SharedModule } from './../shared/shared.module';
import { PagesModule } from './../pages/pages.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    PagesModule,
    SharedModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
