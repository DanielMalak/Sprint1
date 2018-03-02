import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheStoreComponent } from './the-store.component';
import { TheStoreRoutingModule } from './the-store-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TheStoreRoutingModule
  ],
  declarations: [TheStoreComponent]
})
export class TheStoreModule { }
