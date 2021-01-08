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
  selector: "app-carian",
  templateUrl: "carian.component.html"
})
export class CarianComponent implements OnInit {
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
  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      fasiliti: "Kanopi",
      tarikh: "26/2/2020",
      masa: "10:00 AM",
      status : '<span class="badge badge-pill badge-success text-uppercase">Lulus</span>',
      jenis: "Mesyuarat"
      
    },
    {
      fasiliti: "Bilik Mesyuarat",
      tarikh: "26/3/2020",
      masa: "11:00 AM",
      status : '<span class="badge badge-pill badge-danger text-uppercase">GAGAL</span>',
      jenis: "Taklimat"
      
    },
    {
      fasiliti: "Bilik Mesyuarat",
      tarikh: "20/10/2020",
      masa: "12:00 AM",
      status : '<span class="badge badge-pill badge-success text-uppercase">Lulus</span>',
      jenis: "Seminar"
      
    },
    {
      fasiliti: "Kanopi",
      tarikh: "26/2/2020",
      masa: "10:00 AM",
      status : '<span class="badge badge-pill badge-success text-uppercase">Lulus</span>',
      jenis: "Latihan"
      
    },
    {
      fasiliti: "Kanopi",
      tarikh: "20/3/2020",
      masa: "11:00 AM",
      status : '<span class="badge badge-pill badge-danger text-uppercase">GAGAL</span>',
      jenis: "Taklimat"
      
    },
    {
      fasiliti: "Bilik Mesyuarat",
      tarikh: "26/3/2020",
      masa: "11:00 AM",
      status : '<span class="badge badge-pill badge-danger text-uppercase">GAGAL</span>',
      jenis: "Latihan"
      
    }
  ];
  SelectionType = SelectionType;

  constructor(private modalService: BsModalService) {
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
  ngOnInit() {}
}

