import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";
import { DxVectorMapModule } from "devextreme-angular";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { BsDropdownModule } from "ngx-bootstrap";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxPrintModule } from "ngx-print";
import { ModalModule } from "ngx-bootstrap/modal";
import { AgmCoreModule } from '@agm/core';

import { MapComponent } from "./map.component";
import { RouterModule } from "@angular/router";
import { MapRoutes } from "./map.routing";

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MapRoutes),
    NgxDatatableModule,
    ProgressbarModule.forRoot(),
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgxPrintModule,
    ComponentsModule,
    DxVectorMapModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyArZLV8K3MMnV-jb8woX3CmbsFl8MVRtfk',
      libraries: ['places']
    })
  ]
})
export class MapModule {}
