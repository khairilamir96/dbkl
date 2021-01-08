import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";

import { BilikComponent } from "./bilik.component";
import { BsDropdownModule } from "ngx-bootstrap";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { RouterModule } from "@angular/router";
import { BilikRoutes } from "./bilik.routing";

@NgModule({
  declarations: [BilikComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(BilikRoutes),
    ProgressbarModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ComponentsModule
  ]
})
export class BilikModule {}
