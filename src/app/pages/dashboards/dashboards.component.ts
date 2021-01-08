import { Component, OnInit } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import Chart from "chart.js";
import {
  chartOptions,
  parseOptions,
  chartBarStackedData,
  chartDoughnutData,
  chartPieData,
  chartPointsData,
  chartSalesData,
  chartBarsData
} from "../../variables/charts";

@Component({
  selector: "app-dashboards",
  templateUrl: "dashboards.component.html"
})
export class DashboardsComponent implements OnInit {
  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  constructor() {}

  ngOnInit() {
    parseOptions(Chart, chartOptions());

    // chart sales
    // Variables
    var chartSales = document.getElementById("chart-sales");

    // Init chart
    var salesChart = new Chart(chartSales, {
      type: "line",
      data: chartSalesData.data,
      options: chartSalesData.options
    });
    am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
let chart = am4core.create("chartdiv", am4charts.XYChart);


// Add data
chart.data = [{
  "year": "Mon",
  "applications": 2.5,
  "shortlisted": 1.3,
  "rejected": 0.5,
  "onhold": 2.1
}, {
  "year": "Tue",
  "applications": 2.6,
  "shortlisted": 2.7,
  "rejected": 2.2,
  "onhold": 0.3
}, {
  "year": "Wed",
  "applications": 1.4,
  "shortlisted": 0.9,
  "rejected": 1.2,
  "onhold": 0.5
}
, {
  "year": "Thu",
  "applications": 2.3,
  "shortlisted": 2.7,
  "rejected": 1.0,
  "onhold": 0.3
},{
  "year": "Fri",
  "applications": 2.6,
  "shortlisted": 0.8,
  "rejected": 2.2,
  "onhold": 1.3
}
,{
  "year": "Sat",
  "applications": 2.6,
  "shortlisted": 2.0,
  "rejected": 2.2,
  "onhold": 1.5
},{
  "year": "Sun",
  "applications": 1.0,
  "shortlisted": 2.7,
  "rejected": 1.0,
  "onhold": 0.3
}
];

// Create axes
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.grid.template.location = 0;


let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.inside = true;
valueAxis.renderer.labels.template.disabled = true;
valueAxis.min = 0;

// Create series
function createSeries(field, name) {
  
  // Set up series
  let series = chart.series.push(new am4charts.ColumnSeries());
  series.name = name;
  series.dataFields.valueY = field;
  series.dataFields.categoryX = "year";
  series.sequencedInterpolation = true;
  
  // Make it stacked
  series.stacked = true;
  
  // Configure columns
  series.columns.template.width = am4core.percent(60);
  series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";
  
  // Add label
  let labelBullet = series.bullets.push(new am4charts.LabelBullet());
  labelBullet.label.text = "{valueY}";
  labelBullet.locationY = 0.5;
  labelBullet.label.hideOversized = true;
  
  return series;
}

createSeries("applications", "Permohonan");
createSeries("shortlisted", "Disenarai ");
createSeries("rejected", "Ditolak");
createSeries("onhold", "Ditahan");

// Legend
chart.legend = new am4charts.Legend();
  }
}
