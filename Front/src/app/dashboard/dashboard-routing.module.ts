import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { MyItemsComponent } from './store/my-items/my-items.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children :[{

      path:''

  },
  {
    path:'store',
    children :[{
      path:''

    },{
  path:'my-items',
  component:MyItemsComponent
    }]
  }
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DashboardRoutingModule {}
