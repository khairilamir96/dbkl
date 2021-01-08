import { Routes } from "@angular/router";

import { SemakComponent } from "./semak.component";

export const SemakRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: SemakComponent
      }
    ]
  }
];
