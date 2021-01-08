import { Routes } from "@angular/router";

import { BalasComponent } from "./balas.component";

export const BalasRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: BalasComponent
      }
    ]
  }
];
