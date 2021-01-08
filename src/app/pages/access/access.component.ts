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
  selector: "app-access",
  templateUrl: "access.component.html"
})
export class AccessComponent implements OnInit {
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
      username: "Ali",
      fullname: "Ali Imran",
      roles : "Staff",
      permission: 'Create<span class="badge badge-pill badge-success text-uppercase"><i class="ni ni-check-bold"></i></span><br/>Delete<span class="badge badge-pill badge-danger text-uppercase"><i class="ni ni-fat-remove"></i></span>'
    },
    {
      username: "Abu",
      fullname: "Abu Sufian",
      roles : "Staff",
      permission: 'Create<span class="badge badge-pill badge-success text-uppercase"><i class="ni ni-check-bold"></i></span><br/>Update<span class="badge badge-pill badge-danger text-uppercase"><i class="ni ni-fat-remove"></i></span>'
    },
    {
      username: "Amir",
      fullname: "Khairil Amir",
      roles : "Staff",
      permission: 'Create<span class="badge badge-pill badge-success text-uppercase"><i class="ni ni-check-bold"></i></span><br/>Read<span class="badge badge-pill badge-danger text-uppercase"><i class="ni ni-fat-remove"></i></span>'
    },
    {
      username: "Saufi",
      fullname: "Saufi Hashim",
      roles : "Staff",
      permission: 'Create<span class="badge badge-pill badge-success text-uppercase"><i class="ni ni-check-bold"></i></span><br/>Read<span class="badge badge-pill badge-danger text-uppercase"><i class="ni ni-fat-remove"></i></span><br/>Delete<span class="badge badge-pill badge-danger text-uppercase"><i class="ni ni-fat-remove"></i></span>'
    },
    {
      username: "Fazrul",
      fullname: "Fazrul Fauzi",
      roles : "Staff",
      permission: 'Create<span class="badge badge-pill badge-success text-uppercase"><i class="ni ni-check-bold"></i></span><br/>Read<span class="badge badge-pill badge-danger text-uppercase"><i class="ni ni-fat-remove"></i></span><br/>Delete<span class="badge badge-pill badge-danger text-uppercase"><i class="ni ni-fat-remove"></i></span>'
    },
    {
      username: "Fazrul",
      fullname: "Fazrul Aini",
      roles : "Staff",
      permission: 'Create<span class="badge badge-pill badge-success text-uppercase"><i class="ni ni-check-bold"></i></span><br/>Update<span class="badge badge-pill badge-danger text-uppercase"><i class="ni ni-fat-remove"></i></span>'
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

