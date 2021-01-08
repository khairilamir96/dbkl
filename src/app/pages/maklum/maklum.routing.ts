import { Routes } from "@angular/router";

import { MaklumComponent } from "./maklum.component";

export const MaklumRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: MaklumComponent
      }
    ]
  }
];
