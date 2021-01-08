import { Routes } from "@angular/router";
import { EditprofileComponent } from "../../pages/examples/editprofile/editprofile.component";
import { RegisterComponent } from "../../pages/examples/register/register.component";
import { ForgotComponent } from "../../pages/examples/forgot/forgot.component";

export const AuthLayoutRoutes: Routes = [

  {
    path: "",
    children: [
      {
        path: "register",
        component: RegisterComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "editprofile",
        component: EditprofileComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "forgot",
        component: ForgotComponent
      }
    ]
  }
];
