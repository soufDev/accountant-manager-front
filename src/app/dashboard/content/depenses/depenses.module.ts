import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {DepensesRoutingModule} from "./depenses-routing.module";
import {ListDepensesComponent} from "./list-depenses/list-depenses.component";
import {DetailDepenseComponent} from "./detail-depense/detail-depense.component";
import {AddDepenseComponent} from "./add-depense/add-depense.component";
import {EditDepenseComponent} from "./edit-depense/edit-depense.component";
import {DepensesComponent} from "./depenses.component";
import {DepensesService} from "./services/depenses.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DepensesRoutingModule
  ],
  declarations: [
    ListDepensesComponent,
    DetailDepenseComponent,
    AddDepenseComponent,
    EditDepenseComponent,
    DepensesComponent,
  ],
  providers: [
    DepensesService,
  ]
})

export class DepensesModule {}
