import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxPrintModule } from "ngx-print";
import { ModalModule } from "ngx-bootstrap/modal";

import { ArkibComponent } from "./arkib.component";
import { RouterModule } from "@angular/router";
import { ArkibRoutes } from "./arkib.routing";

@NgModule({
  declarations: [ArkibComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ArkibRoutes),
    NgxDatatableModule,
    PaginationModule.forRoot(),
    TooltipModule.forRoot(),
    NgxPrintModule,
    ModalModule.forRoot(),
    ComponentsModule
  ]
})
export class ArkibModule {}
