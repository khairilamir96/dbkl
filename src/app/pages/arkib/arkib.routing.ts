import { Routes } from "@angular/router";

import { ArkibComponent } from "./arkib.component";

export const ArkibRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: ArkibComponent
      }
    ]
  }
];
