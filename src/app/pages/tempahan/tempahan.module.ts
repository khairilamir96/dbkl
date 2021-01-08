import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxPrintModule } from "ngx-print";
import { ModalModule } from "ngx-bootstrap/modal";

import { TempahanComponent } from "./tempahan.component";
import { RouterModule } from "@angular/router";
import { TempahanRoutes } from "./tempahan.routing";

@NgModule({
  declarations: [TempahanComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(TempahanRoutes),
    NgxDatatableModule,
    PaginationModule.forRoot(),
    TooltipModule.forRoot(),
    NgxPrintModule,
    ModalModule.forRoot(),
    ComponentsModule
  ]
})
export class TempahanModule {}
