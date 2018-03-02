import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { StoreComponent } from './store/store.component';
import { MyItemsComponent } from './store/my-items/my-items.component';
import { TheStoreComponent } from './store/the-store/the-store.component';


@NgModule({
  imports: [ThemeModule, DashboardRoutingModule],
  declarations: [DashboardComponent, StoreComponent,MyItemsComponent,TheStoreComponent],
  entryComponents: [],
  providers: []
})
export class DashboardModule {}
