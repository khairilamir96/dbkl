import { Routes } from "@angular/router";

import { CarianComponent } from "./carian.component";

export const CarianRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: CarianComponent
      }
    ]
  }
];
