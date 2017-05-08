import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ListRecettesComponent} from "./list-recettes/list-recettes.component";
import {DetailRecetteComponent} from "./detail-recette/detail-recette.component";
import {AddRecetteComponent} from "./add-recette/add-recette.component";
import {EditRecetteComponent} from "./edit-recette/edit-recette.component";
import {RecettesComponent} from "./recettes.component";
import {RecettesRoutingModule} from "./recettes-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RecettesRoutingModule
  ],
  declarations: [
    ListRecettesComponent,
    DetailRecetteComponent,
    AddRecetteComponent,
    EditRecetteComponent,
    RecettesComponent,
  ],
  providers: [
  ]
})

export class RecettesModule {}
