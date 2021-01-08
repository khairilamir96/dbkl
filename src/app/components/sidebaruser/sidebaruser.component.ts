import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

var misc: any = {
  sidebar_mini_active: true
};

export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  isCollapsed?: boolean;
  isCollapsing?: any;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  type?: string;
  collapse?: string;
  children?: ChildrenItems2[];
  isCollapsed?: boolean;
}
export interface ChildrenItems2 {
  path?: string;
  title?: string;
  type?: string;
}
//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: "/bilik",
    title: "Permohonan Penggunaan Bilik Mesyuarat",
    type: "link",
    icontype: "ni-active-40"
  },
  {
    path: "/carian",
    title: "Semak Permohonan/ Carian",
    type: "link",
    icontype: "fas fa-search"
  },
  {
    path: "/arkib",
    title: "Senarai Arkib Tempahan",
    type: "link",
    icontype: "ni-align-left-2"
  },
  {
    path: "/balas",
    title: "Maklum Balas",
    type: "link",
    icontype: "ni-chat-round"
  },
  {
    path: "/penyewa",
    title: "Permohonan (Penyewa)",
    type: "link",
    icontype: "ni-circle-08"
  },
  {
    path: "/calendar",
    title: "Tempahan Jurufoto/ Juruvideo",
    type: "link",
    icontype: "ni-calendar-grid-58"
  },
  {
    path: "/bayar",
    title: "Pembayaran",
    type: "link",
    icontype: "ni-credit-card"
  }
];

@Component({
  selector: "app-sidebaruser",
  templateUrl: "./sidebaruser.component.html",
  styleUrls: ["./sidebaruser.component.scss"]
})
export class SidebaruserComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe(event => {
      this.isCollapsed = true;
    });
  }
  onMouseEnterSidenav() {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.add("g-sidenav-show");
    }
  }
  onMouseLeaveSidenav() {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-show");
    }
  }
  minimizeSidebar() {
    const sidenavuserToggler = document.getElementsByClassName(
      "sidenav-toggler"
    )[0];
    const body = document.getElementsByTagName("body")[0];
    if (body.classList.contains("g-sidenav-pinned")) {
      misc.sidebaruser_mini_active = true;
    } else {
      misc.sidebaruser_mini_active = false;
    }
    if (misc.sidebaruser_mini_active === true) {
      body.classList.remove("g-sidenav-pinned");
      body.classList.add("g-sidenav-hidden");
      sidenavuserToggler.classList.remove("active");
      misc.sidebaruser_mini_active = false;
    } else {
      body.classList.add("g-sidenav-pinned");
      body.classList.remove("g-sidenav-hidden");
      sidenavuserToggler.classList.add("active");
      misc.sidebaruser_mini_active = true;
    }
  }
}
