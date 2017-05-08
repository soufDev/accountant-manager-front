import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecettesComponent} from "./recettes.component";
import {DetailRecetteComponent} from "./detail-recette/detail-recette.component";
import {EditRecetteComponent} from "./edit-recette/edit-recette.component";
import {AddRecetteComponent} from "./add-recette/add-recette.component";
import {ListRecettesComponent} from "./list-recettes/list-recettes.component";

const recettesRoutes: Routes = [
  {
    path: '',
    component: RecettesComponent,
    children: [
      {
        path: 'detail/:id',
        component: DetailRecetteComponent,
      },
      {
        path: 'edit/:id',
        component: EditRecetteComponent,
      },
      {
        path: 'add',
        component: AddRecetteComponent,
      },
      {
        path: '',
        component: ListRecettesComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(recettesRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})

export class RecettesRoutingModule { }
