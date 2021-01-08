import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";

import { BayarComponent } from "./bayar.component";
import { BsDropdownModule } from "ngx-bootstrap";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { RouterModule } from "@angular/router";
import { BayarRoutes } from "./bayar.routing";

@NgModule({
  declarations: [BayarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(BayarRoutes),
    ProgressbarModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ComponentsModule
  ]
})
export class BayarModule {}
