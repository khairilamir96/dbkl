import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxPrintModule } from "ngx-print";
import { ModalModule } from "ngx-bootstrap/modal";

import { InventoriComponent } from "./inventori.component";
import { RouterModule } from "@angular/router";
import { InventoriRoutes } from "./inventori.routing";

@NgModule({
  declarations: [InventoriComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(InventoriRoutes),
    NgxDatatableModule,
    PaginationModule.forRoot(),
    TooltipModule.forRoot(),
    NgxPrintModule,
    ModalModule.forRoot(),
    ComponentsModule
  ]
})
export class InventoriModule {}
