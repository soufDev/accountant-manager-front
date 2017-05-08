import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ContentComponent} from "./content.component";

const depensesRoutes: Routes = [

  {
    path: '',
    component: ContentComponent,
    children: [
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(depensesRoutes)
  ],
  exports: [
    RouterModule,
  ],
  providers: [

  ]
})

export class ContentRoutingModule { }
