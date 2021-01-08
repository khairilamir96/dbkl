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
    path: "/dashboards",
    title: "Dashboards",
    type: "link",
    icontype: "fas fa-home"
  },
  {
    path: "/tempahan",
    title: "Tempahan",
    type: "link",
    icontype: "ni-ungroup"
  },
  {
    path: "/fasiliti",
    title: "Pengurusan Rekod Fasiliti",
    type: "link",
    icontype: "ni-briefcase-24"
  },
  {
    path: "/maklum",
    title: "Maklumbalas Pelanggan",
    type: "link",
    icontype: "ni-chat-round"
  },
  {
    path: "/laporan",
    title: "Laporan",
    type: "link",
    icontype: "ni-folder-17"
  },
  {
    path: "/map",
    title: "Permohonan(online/walk in/lanjutan tempoh)",
    type: "link",
    icontype: "ni-square-pin"
  },
  {
    path: "/inventori",
    title: "Inventori Aset & Penyelenggaraan",
    type: "link",
    icontype: "ni-archive-2"
  },
  {
    path: "/semak",
    title: "Semak Permohonan",
    type: "link",
    icontype: "fas fa-search"
  },
  {
    path: "/users",
    title: "Users",
    type: "link",
    icontype: "ni-circle-08"
  },
  {
    path: "/access",
    title: "Access Control",
    type: "link",
    icontype: "ni-lock-circle-open"
  },
  {
    path: "/audit",
    title: "Audit Trails",
    type: "link",
    icontype: "ni-sound-wave"
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
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
    const sidenavToggler = document.getElementsByClassName(
      "sidenav-toggler"
    )[0];
    const body = document.getElementsByTagName("body")[0];
    if (body.classList.contains("g-sidenav-pinned")) {
      misc.sidebar_mini_active = true;
    } else {
      misc.sidebar_mini_active = false;
    }
    if (misc.sidebar_mini_active === true) {
      body.classList.remove("g-sidenav-pinned");
      body.classList.add("g-sidenav-hidden");
      sidenavToggler.classList.remove("active");
      misc.sidebar_mini_active = false;
    } else {
      body.classList.add("g-sidenav-pinned");
      body.classList.remove("g-sidenav-hidden");
      sidenavToggler.classList.add("active");
      misc.sidebar_mini_active = true;
    }
  }
}
