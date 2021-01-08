import { Routes } from "@angular/router";

import { AccessComponent } from "./access.component";

export const AccessRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: AccessComponent
      }
    ]
  }
];
