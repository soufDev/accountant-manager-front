import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {DonatorRoutingModule} from "./donator-routing.module";
import {ListDonatorsComponent} from "./list-donators/list-donators.component";
import {DetailDonatorComponent} from "./detail-donator/detail-donator.component";
import {AddDonatorComponent} from "./add-donator/add-donator.component";
import {EditDonatorComponent} from "./edit-donator/edit-donator.component";
import {DonatorComponent} from "./donator.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DonatorRoutingModule
  ],
  declarations: [
    ListDonatorsComponent,
    DetailDonatorComponent,
    AddDonatorComponent,
    EditDonatorComponent,
    DonatorComponent,
  ],
  providers: [
  ]
})

export class DonatorModule {}
