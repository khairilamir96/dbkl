import { Routes } from "@angular/router";

import { InventoriComponent } from "./inventori.component";

export const InventoriRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: InventoriComponent
      }
    ]
  }
];
