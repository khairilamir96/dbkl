import { Routes } from "@angular/router";

import { FasilitiComponent } from "./fasiliti.component";

export const FasilitiRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: FasilitiComponent
      }
    ]
  }
];
