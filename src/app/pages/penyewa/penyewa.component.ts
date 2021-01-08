import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox"
}

@Component({
  selector: "app-penyewa",
  templateUrl: "penyewa.component.html"
})
export class PenyewaComponent implements OnInit {
  //map
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom:number;

  //modal
  dismissible = true;

  defaultModal: BsModalRef;
  default = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

  notificationModal: BsModalRef;
  notification = {
    keyboard: true,
    class: "modal-dialog-centered modal-danger"
  };

  formModal: BsModalRef;
  form = {
    keyboard: true,
    class: "modal-dialog-centered modal-sm"
  };
  //end modal
  //ngx datatable
  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      lokasi: "Pahang",
      kategori: "Aduan",
      hargasewa: "RM300",
      maklumatunit: "30",
      kemudahan: "#",
      hadtempoh: "5 Bulan",
      jumlahkekosongan: "2",
    },
    {
      lokasi: "Perak",
      kategori: "Cadangan",
      hargasewa: "RM500",
      maklumatunit: "50",
      kemudahan: "#",
      hadtempoh: "1 Bulan",
      jumlahkekosongan: "2",
    },
    {
      lokasi: "Sabah",
      kategori: "Penghargaan",
      hargasewa: "RM500",
      maklumatunit: "10",
      kemudahan: "#",
      hadtempoh: "1 Minggu",
      jumlahkekosongan: "2",
    },
    {
      lokasi: "Kedah",
      kategori: "Cadangan",
      hargasewa: "RM700",
      maklumatunit: "80",
      kemudahan: "#",
      hadtempoh: "4 Bulan",
      jumlahkekosongan: "2",
    },
    {
      lokasi: "Melaka",
      kategori: "Aduan",
      hargasewa: "RM1000",
      maklumatunit: "40",
      kemudahan: "#",
      hadtempoh: "6 Bulan",
      jumlahkekosongan: "2",
    },
    {
      lokasi: "Terengganu",
      kategori: "Cadangan",
      hargasewa: "RM500",
      maklumatunit: "50",
      kemudahan: "#",
      hadtempoh: "1 Bulan",
      jumlahkekosongan: "2",
    }
  ];
  SelectionType = SelectionType;

  constructor(private modalService: BsModalService) {
    //begin ngx datatable
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key
      };
    });
  }
  entriesChange($event) {
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function(d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }
  onActivate(event) {
    this.activeRow = event.row;
  }
  //end ngx datatable
  //modal
  openDefaultModal(modalDefault: TemplateRef<any>) {
    this.defaultModal = this.modalService.show(modalDefault, this.default);
  }
  openNotificationModal(modalNotification: TemplateRef<any>) {
    this.notificationModal = this.modalService.show(
      modalNotification,
      this.notification
    );
  }
  openFormModal(modalForm: TemplateRef<any>) {
    this.formModal = this.modalService.show(modalForm, this.form);
  }
  ngOnInit() {
    //map
    this.setCurrentLocation();
    //end

  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }
}
