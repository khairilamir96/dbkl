import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";

import { FasilitiComponent } from "./fasiliti.component";
import { BsDropdownModule } from "ngx-bootstrap";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { RouterModule } from "@angular/router";
import { FasilitiRoutes } from "./fasiliti.routing";

@NgModule({
  declarations: [FasilitiComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(FasilitiRoutes),
    ProgressbarModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ComponentsModule
  ]
})
export class FasilitiModule {}
