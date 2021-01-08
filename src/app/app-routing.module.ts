import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { UserLayoutComponent } from "./layouts/user-layout/user-layout.component";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { PresentationComponent } from "./pages/presentation/presentation.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "presentation",
    pathMatch: "full"
  },
  {
    path: "presentation",
    component: PresentationComponent
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "dashboards",
        loadChildren: "./pages/dashboards/dashboards.module#DashboardsModule"
      },
      {
        path: "tempahan",
        loadChildren: "./pages/tempahan/tempahan.module#TempahanModule"
      },
      {
        path: "fasiliti",
        loadChildren: "./pages/fasiliti/fasiliti.module#FasilitiModule"
      },
      {
        path: "maklum",
        loadChildren: "./pages/maklum/maklum.module#MaklumModule"
      },
      {
        path: "laporan",
        loadChildren: "./pages/laporan/laporan.module#LaporanModule"
      },
      {
        path: "map",
        loadChildren: "./pages/map/map.module#MapModule"
      },
      {
        path: "inventori",
        loadChildren: "./pages/inventori/inventori.module#InventoriModule"
      },
      {
        path: "semak",
        loadChildren: "./pages/semak/semak.module#SemakModule"
      },
      {
        path: "users",
        loadChildren: "./pages/users/users.module#UsersModule"
      },
      {
        path: "access",
        loadChildren: "./pages/access/access.module#AccessModule"
      },
      {
        path: "audit",
        loadChildren: "./pages/audit/audit.module#AuditModule"
      }
      
    ]
  },
  {
    path: "",
    component: UserLayoutComponent,
    children: [
      {
        path: "bilik",
        loadChildren: "./pages/bilik/bilik.module#BilikModule"
      },
      {
        path: "carian",
        loadChildren: "./pages/carian/carian.module#CarianModule"
      },
      {
        path: "arkib",
        loadChildren: "./pages/arkib/arkib.module#ArkibModule"
      },
      {
        path: "balas",
        loadChildren: "./pages/balas/balas.module#BalasModule"
      },
      {
        path: "penyewa",
        loadChildren: "./pages/penyewa/penyewa.module#PenyewaModule"
      },
      {
        path: "calendar",
        loadChildren: "./pages/calendar/calendar.module#CalendarModule"
      },
      {
        path: "bayar",
        loadChildren: "./pages/bayar/bayar.module#BayarModule"
      },
      {
        path: "examples",
        loadChildren: "./pages/examples/examples.module#ExamplesModule"
      }
    ]
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "examples",
        loadChildren:
          "./layouts/auth-layout/auth-layout.module#AuthLayoutModule"
      }
    ]
  },
  {
    path: "**",
    redirectTo: "dashboard"
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
