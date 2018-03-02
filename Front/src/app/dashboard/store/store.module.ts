import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { MyItemsComponent } from './my-items/my-items.component';
import { TheStoreComponent } from './the-store/the-store.component';

@NgModule({
  imports: [
    CommonModule,
    StoreRoutingModule
  ],
  declarations: [MyItemsComponent, TheStoreComponent]
})
export class StoreModule { }
