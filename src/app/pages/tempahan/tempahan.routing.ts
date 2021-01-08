import { Routes } from "@angular/router";

import { TempahanComponent } from "./tempahan.component";

export const TempahanRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: TempahanComponent
      }
    ]
  }
];
