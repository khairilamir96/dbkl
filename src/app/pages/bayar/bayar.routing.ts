import { Routes } from "@angular/router";

import { BayarComponent } from "./bayar.component";

export const BayarRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: BayarComponent
      }
    ]
  }
];
