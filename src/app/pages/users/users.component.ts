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
  selector: "app-users",
  templateUrl: "users.component.html"
})
export class UsersComponent implements OnInit {
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
      firstname: "Ali",
      lastname: "Imran",
	  email: "Ali@gmail.com",
	  group: "#"
    },
    {
      username: "Abu",
      firstname: "Abu",
      lastname: "Bakar",
	  email: "Abu@gmail.com",
	  group: "#"
    },
    {
      username: "Khalid",
      firstname: "Khalid",
      lastname: "Walid",
	  email: "Khalid@gmail.com",
	  group: "#"
    },
    {
      username: "Siti",
      firstname: "Siti",
      lastname: "Fatimah",
	  email: "Siti@gmail.com",
	  group: "#"
    },
    {
      username: "Rabiatul",
      firstname: "Rabiatul",
      lastname: "Adawiah",
	  email: "Roby@gmail.com",
	  group: "#"
    },
    {
      username: "Hasan",
      firstname: "Hasan",
      lastname: "Kahtan",
	  email: "Hasan@gmail.com",
	  group: "#"
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

