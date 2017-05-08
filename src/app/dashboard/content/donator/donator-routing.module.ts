import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DonatorComponent} from "./donator.component";
import {DetailDonatorComponent} from "./detail-donator/detail-donator.component";
import {EditDonatorComponent} from "./edit-donator/edit-donator.component";
import {AddDonatorComponent} from "./add-donator/add-donator.component";
import {ListDonatorsComponent} from "./list-donators/list-donators.component";

const donatorRoutes: Routes = [
  {
    path: '',
    component: DonatorComponent,
    children: [
      {
        path: 'detail/:id',
        component: DetailDonatorComponent,
      },
      {
        path: 'edit/:id',
        component: EditDonatorComponent,
      },
      {
        path: 'add',
        component: AddDonatorComponent,
      },
      {
        path: '',
        component: ListDonatorsComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(donatorRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})

export class DonatorRoutingModule { }
