(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{T887:function(t,e,a){"use strict";a.r(e);var i=a("ofXK"),o=a("j1ZV"),n=a("Lm2G"),c=a("Mfq2"),b=a("lDzL"),l=a("m1XX"),r=a("K3ix"),s=a("tyNb"),d=a("fXoL");function u(t,e){if(1&t){const t=d.Tb();d.Sb(0,"div",39),d.Sb(1,"h6",40),d.Ic(2," Edit Permohonan "),d.Rb(),d.Sb(3,"button",41),d.ec("click",(function(e){return d.zc(t),d.hc(2).defaultModal.hide()})),d.Sb(4,"span",42),d.Ic(5," \xd7 "),d.Rb(),d.Rb(),d.Rb(),d.Sb(6,"div",43),d.Sb(7,"input",44),d.ec("focus",(function(e){return d.zc(t),d.hc(2).focus=!0}))("blur",(function(e){return d.zc(t),d.hc(2).focus=!1})),d.Rb(),d.Sb(8,"input",45),d.ec("focus",(function(e){return d.zc(t),d.hc(2).focus=!0}))("blur",(function(e){return d.zc(t),d.hc(2).focus=!1})),d.Rb(),d.Sb(9,"input",46),d.ec("focus",(function(e){return d.zc(t),d.hc(2).focus=!0}))("blur",(function(e){return d.zc(t),d.hc(2).focus=!1})),d.Rb(),d.Sb(10,"select",47),d.Sb(11,"option"),d.Ic(12," Jenis "),d.Rb(),d.Sb(13,"option"),d.Ic(14," Seminar "),d.Rb(),d.Sb(15,"option"),d.Ic(16," Mesyuarat "),d.Rb(),d.Sb(17,"option"),d.Ic(18," Latihan "),d.Rb(),d.Sb(19,"option"),d.Ic(20," Taklimat "),d.Rb(),d.Rb(),d.Sb(21,"select",47),d.Sb(22,"option"),d.Ic(23," Jabatan "),d.Rb(),d.Sb(24,"option"),d.Ic(25," JKM "),d.Rb(),d.Sb(26,"option"),d.Ic(27," KKM "),d.Rb(),d.Sb(28,"option"),d.Ic(29," ILP "),d.Rb(),d.Sb(30,"option"),d.Ic(31," MPPG "),d.Rb(),d.Rb(),d.Rb(),d.Sb(32,"div",48),d.Sb(33,"button",49),d.Ic(34," SAVE "),d.Rb(),d.Sb(35,"button",50),d.ec("click",(function(e){return d.zc(t),d.hc(2).defaultModal.hide()})),d.Ic(36," Close "),d.Rb(),d.Rb()}}function m(t,e){if(1&t){const t=d.Tb();d.Sb(0,"div"),d.Sb(1,"button",37),d.ec("click",(function(e){d.zc(t);const a=d.xc(4);return d.hc().openDefaultModal(a)})),d.Ic(2," View "),d.Rb(),d.Gc(3,u,37,0,"ng-template",null,38,d.Hc),d.Rb()}}var h=function(t){return t.single="single",t.multi="multi",t.multiClick="multiClick",t.cell="cell",t.checkbox="checkbox",t}({});const f=[{path:"",children:[{path:"",component:(()=>{class t{constructor(t){this.modalService=t,this.dismissible=!0,this.default={keyboard:!0,class:"modal-dialog-centered"},this.notification={keyboard:!0,class:"modal-dialog-centered modal-danger"},this.form={keyboard:!0,class:"modal-dialog-centered modal-sm"},this.entries=5,this.selected=[],this.temp=[],this.rows=[{fasiliti:"Kanopi",tarikh:"26/2/2020",masa:"10:00 AM",jenis:"Mesyuarat",jabatan:"JKM"},{fasiliti:"Bilik Mesyuarat",tarikh:"26/3/2020",masa:"11:00 AM",jenis:"Taklimat",jabatan:"JPN"},{fasiliti:"Bilik Mesyuarat",tarikh:"20/10/2020",masa:"12:00 AM",jenis:"Seminar",jabatan:"RELA"},{fasiliti:"Kanopi",tarikh:"26/2/2020",masa:"10:00 AM",jenis:"Latihan",jabatan:"KKM"},{fasiliti:"Kanopi",tarikh:"20/3/2020",masa:"11:00 AM",jenis:"Taklimat",jabatan:"JMM"},{fasiliti:"Bilik Mesyuarat",tarikh:"26/3/2020",masa:"11:00 AM",jenis:"Latihan",jabatan:"ILP"}],this.SelectionType=h,this.temp=this.rows.map((t,e)=>Object.assign(Object.assign({},t),{id:e}))}entriesChange(t){this.entries=t.target.value}filterTable(t){let e=t.target.value;this.temp=this.rows.filter((function(t){for(var a in t)if(-1!==t[a].toLowerCase().indexOf(e))return!0;return!1}))}onSelect({selected:t}){this.selected.splice(0,this.selected.length),this.selected.push(...t)}onActivate(t){this.activeRow=t.row}openDefaultModal(t){this.defaultModal=this.modalService.show(t,this.default)}openNotificationModal(t){this.notificationModal=this.modalService.show(t,this.notification)}openFormModal(t){this.formModal=this.modalService.show(t,this.form)}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(d.Nb(r.a))},t.\u0275cmp=d.Hb({type:t,selectors:[["app-arkib"]],decls:52,vars:10,consts:[[1,"header","bg-danger","pb-6"],[1,"container-fluid"],[1,"header-body"],[1,"row","align-items-center","py-4"],[1,"col-lg-6","col-7"],[1,"h2","text-white","d-inline-block","mb-0"],["aria-label","breadcrumb",1,"d-none","d-md-inline-block","ml-md-4"],[1,"breadcrumb","breadcrumb-links","breadcrumb-dark"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"fas","fa-home"],[1,"col-lg-6","col-5","text-right"],["href","javascript:void(0)",1,"btn","btn-sm","btn-neutral"],[1,"container-fluid","mt--6"],[1,"row"],[1,"col"],[1,"card"],[1,"card-header"],[1,"mb-0"],[1,"dataTables_wrapper","py-4"],[1,"col-sm-12","col-md-6"],["id","datatable_length",1,"dataTables_length"],["name","datatable_length","aria-controls","datatable",1,"form-control","form-control-sm",3,"change"],["value","5",3,"selected"],["value","25",3,"selected"],["value","50",3,"selected"],["value","-1",3,"selected"],["id","datatable_filter",1,"dataTables_filter"],["type","search","placeholder","Search records","aria-controls","datatable",1,"form-control","form-control-sm",3,"keyup"],[1,"bootstrap","selection-cell",3,"columnMode","headerHeight","footerHeight","rowHeight","limit","rows","activate"],["name","fasiliti"],["name","tarikh"],["name","masa"],["name","jenis"],["name","jabatan"],["name","Tindakan"],["ngx-datatable-cell-template",""],["data-target","#modal-default","data-toggle","modal","type","button",1,"btn","btn-sm","btn-primary",3,"click"],["modalDefault",""],[1,"modal-header"],["id","modal-title-default",1,"modal-title"],["aria-label","Close","data-dismiss","modal","type","button",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],["placeholder","Fasiliti","type","text",1,"form-control","mb-2",3,"focus","blur"],["placeholder","12/02/2020","type","text",1,"form-control","mb-2",3,"focus","blur"],["placeholder","10:00 AM","type","text",1,"form-control","mb-2",3,"focus","blur"],["id","exampleFormControlSelect3",1,"form-control","mb-2"],[1,"modal-footer"],["type","button",1,"btn","btn-primary"],["data-dismiss","modal","type","button",1,"btn","btn-link",3,"click"]],template:function(t,e){1&t&&(d.Sb(0,"div",0),d.Sb(1,"div",1),d.Sb(2,"div",2),d.Sb(3,"div",3),d.Sb(4,"div",4),d.Sb(5,"h6",5),d.Ic(6,"Permohonan Penggunaan Bilik Mesyuarat"),d.Rb(),d.Sb(7,"nav",6),d.Sb(8,"ol",7),d.Sb(9,"li",8),d.Sb(10,"a",9),d.Ob(11,"i",10),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(12,"div",11),d.Sb(13,"a",12),d.Ic(14," New "),d.Rb(),d.Sb(15,"a",12),d.Ic(16," Filters "),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(17,"div",13),d.Sb(18,"div",14),d.Sb(19,"div",15),d.Sb(20,"div",16),d.Sb(21,"div",17),d.Sb(22,"h3",18),d.Ic(23,"Senarai Semakan Permohonan"),d.Rb(),d.Rb(),d.Sb(24,"div",19),d.Sb(25,"div",14),d.Sb(26,"div",20),d.Sb(27,"div",21),d.Sb(28,"label"),d.Ic(29," Tunjuk "),d.Sb(30,"select",22),d.ec("change",(function(t){return e.entriesChange(t)})),d.Sb(31,"option",23),d.Ic(32,"5"),d.Rb(),d.Sb(33,"option",24),d.Ic(34,"25"),d.Rb(),d.Sb(35,"option",25),d.Ic(36,"50"),d.Rb(),d.Sb(37,"option",26),d.Ic(38,"All"),d.Rb(),d.Rb(),d.Ic(39," Rekod "),d.Rb(),d.Rb(),d.Rb(),d.Sb(40,"div",20),d.Sb(41,"div",27),d.Sb(42,"label"),d.Sb(43,"input",28),d.ec("keyup",(function(t){return e.filterTable(t)})),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(44,"ngx-datatable",29),d.ec("activate",(function(t){return e.onActivate(t)})),d.Ob(45,"ngx-datatable-column",30),d.Ob(46,"ngx-datatable-column",31),d.Ob(47,"ngx-datatable-column",32),d.Ob(48,"ngx-datatable-column",33),d.Ob(49,"ngx-datatable-column",34),d.Sb(50,"ngx-datatable-column",35),d.Gc(51,m,5,0,"ng-template",36),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb()),2&t&&(d.Ab(31),d.nc("selected",5==e.entries),d.Ab(2),d.nc("selected",25==e.entries),d.Ab(2),d.nc("selected",50==e.entries),d.Ab(2),d.nc("selected",-1==e.entries),d.Ab(7),d.nc("columnMode","force")("headerHeight",50)("footerHeight",50)("rowHeight","auto")("limit",-1!=e.entries?e.entries:void 0)("rows",e.temp))},directives:[b.c,b.b,b.a],encapsulation:2}),t})()}]}];a.d(e,"ArkibModule",(function(){return p}));let p=(()=>{class t{}return t.\u0275mod=d.Lb({type:t}),t.\u0275inj=d.Kb({factory:function(e){return new(e||t)},imports:[[i.c,s.h.forChild(f),b.d,n.b.forRoot(),c.a.forRoot(),l.a,r.b.forRoot(),o.a]]}),t})()}}]);