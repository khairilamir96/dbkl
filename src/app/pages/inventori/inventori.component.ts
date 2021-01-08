import { Component, OnInit,TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import List from "list.js";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox"
}
@Component({
  selector: "app-inventori",
  templateUrl: "inventori.component.html"
})
export class InventoriComponent implements OnInit {
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
      panduanpenggunaan: "#",
      rumahrehatterbaru: "#",
      larangan: "#",
      hargagantirugi: "RM800"
    },
    {
      panduanpenggunaan: "#",
      rumahrehatterbaru: "#",
      larangan: "#",
      hargagantirugi: "RM700"
    },
    {
      panduanpenggunaan: "#",
      rumahrehatterbaru: "#",
      larangan: "#",
      hargagantirugi: "RM500"
    },
    {
      panduanpenggunaan: "#",
      rumahrehatterbaru: "#",
      larangan: "#",
      hargagantirugi: "RM1000"
    },
    {
      panduanpenggunaan: "#",
      rumahrehatterbaru: "#",
      larangan: "#",
      hargagantirugi: "RM200"
    },
    {
      panduanpenggunaan: "#",
      rumahrehatterbaru: "#",
      larangan: "#",
      hargagantirugi: "RM0"
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
  ngOnInit() {
    /* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
let chart = am4core.create("chartdiv", am4charts.PieChart);

// Add data
chart.data = [ 
{
  "country": "Aset#1",
  "litres": 139.9
}, {
  "country": "Aset#2",
  "litres": 128.3
}, {
  "country": "Aset#3",
  "litres": 99
}, {
  "country": "Aset#4",
  "litres": 60
}, {
  "country": "Aset#5",
  "litres": 50
} ];

// Set inner radius
chart.innerRadius = am4core.percent(50);

// Add and configure Series
let pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;

// This creates initial animation
pieSeries.hiddenState.properties.opacity = 1;
pieSeries.hiddenState.properties.endAngle = -90;
pieSeries.hiddenState.properties.startAngle = -90;

//table sortable
new List(document.getElementById("first-list"), {
  valueNames: ["name", "budget", "status"],
  listClass: "list"
});
  }
}

