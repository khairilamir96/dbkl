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
  selector: "app-tempahan",
  templateUrl: "tempahan.component.html"
})
export class TempahanComponent implements OnInit {
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
      tarikh: "26/2/2020",
      lokasi: "Petaling Jaya",
      fasiliti: "Kanopi",
      status : '<span class="badge badge-pill badge-success text-uppercase">Diterima</span>',
    },
    {
      tarikh: "20/3/2019",
      lokasi: "Kuala Lumpur",
      fasiliti: "Bilik Workshop",
      status: '<span class="badge badge-pill badge-danger text-uppercase">Ditolak</span>'
    },
    {
      tarikh: "24/5/2019",
      lokasi: "Cheras",
      fasiliti: "Bilik Workshop",
      status : '<span class="badge badge-pill badge-success text-uppercase">Diterima</span>'
    },
    {
      tarikh: "26/4/2020",
      lokasi: "Shah Alam",
      fasiliti: "Kanopi",
      status : '<span class="badge badge-pill badge-success text-uppercase">Diterima</span>'
    },
    {
      tarikh: "30/10/2020",
      lokasi: "Ayer Keroh",
      fasiliti: "Kanopi",
      status : '<span class="badge badge-pill badge-success text-uppercase">Diterima</span>'
    },
    {
      tarikh: "26/4/2020",
      lokasi: "Taiping",
      fasiliti: "Kanopi",
      status: '<span class="badge badge-pill badge-danger text-uppercase">Ditolak</span>'
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

