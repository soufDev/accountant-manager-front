import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DepensesComponent} from "./depenses.component";
import {DetailDepenseComponent} from "./detail-depense/detail-depense.component";
import {EditDepenseComponent} from "./edit-depense/edit-depense.component";
import {AddDepenseComponent} from "./add-depense/add-depense.component";
import {ListDepensesComponent} from "./list-depenses/list-depenses.component";

const depensesRoutes: Routes = [
  {
    path: '',
    component: DepensesComponent,
    children: [
      {
        path: 'detail/:id',
        component: DetailDepenseComponent,
      },
      {
        path: 'edit/:id',
        component: EditDepenseComponent,
      },
      {
        path: 'add',
        component: AddDepenseComponent,
      },
      {
        path: '',
        component: ListDepensesComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(depensesRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})

export class DepensesRoutingModule { }
