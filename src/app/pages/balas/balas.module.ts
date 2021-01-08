import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";

import { BalasComponent } from "./balas.component";
import { BsDropdownModule } from "ngx-bootstrap";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { RouterModule } from "@angular/router";
import { BalasRoutes } from "./balas.routing";

@NgModule({
  declarations: [BalasComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(BalasRoutes),
    ProgressbarModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ComponentsModule
  ]
})
export class BalasModule {}
