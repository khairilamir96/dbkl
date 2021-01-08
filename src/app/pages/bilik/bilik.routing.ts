import { Routes } from "@angular/router";

import { BilikComponent } from "./bilik.component";

export const BilikRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: BilikComponent
      }
    ]
  }
];
