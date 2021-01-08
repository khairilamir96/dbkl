import { Routes } from "@angular/router";

import { PenyewaComponent } from "./penyewa.component";

export const PenyewaRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: PenyewaComponent
      }
    ]
  }
];
