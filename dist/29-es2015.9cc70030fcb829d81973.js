(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{AJXe:function(e,t,a){"use strict";a.r(t);var n=a("ofXK"),o=a("j1ZV"),i=a("Lm2G"),r=a("Mfq2"),c=a("lDzL"),l=a("m1XX"),s=a("K3ix"),b=a("tyNb"),d=a("fXoL");function u(e,t){1&e&&d.Ic(0),2&e&&d.Kc(" ",t.row.jenispermohonan," ")}function m(e,t){1&e&&d.Ic(0),2&e&&d.Kc(" ",t.row.sewakuarters," ")}function p(e,t){if(1&e){const e=d.Tb();d.Sb(0,"div",36),d.Sb(1,"h6",37),d.Ic(2," Edit Permohonan "),d.Rb(),d.Sb(3,"button",38),d.ec("click",(function(t){return d.zc(e),d.hc(2).defaultModal.hide()})),d.Sb(4,"span",39),d.Ic(5," \xd7 "),d.Rb(),d.Rb(),d.Rb(),d.Sb(6,"div",40),d.Sb(7,"input",41),d.ec("focus",(function(t){return d.zc(e),d.hc(2).focus=!0}))("blur",(function(t){return d.zc(e),d.hc(2).focus=!1})),d.Rb(),d.Sb(8,"input",42),d.ec("focus",(function(t){return d.zc(e),d.hc(2).focus1=!0}))("blur",(function(t){return d.zc(e),d.hc(2).focus1=!1})),d.Rb(),d.Ob(9,"input",43),d.Sb(10,"select",44),d.Sb(11,"option"),d.Ic(12," Status "),d.Rb(),d.Sb(13,"option"),d.Ic(14," Diterima "),d.Rb(),d.Sb(15,"option"),d.Ic(16," Ditolak "),d.Rb(),d.Rb(),d.Rb(),d.Sb(17,"div",45),d.Sb(18,"button",46),d.Ic(19," Save changes "),d.Rb(),d.Sb(20,"button",47),d.ec("click",(function(t){return d.zc(e),d.hc(2).defaultModal.hide()})),d.Ic(21," Close "),d.Rb(),d.Rb()}}function h(e,t){if(1&e){const e=d.Tb();d.Sb(0,"div"),d.Sb(1,"button",34),d.ec("click",(function(t){d.zc(e);const a=d.xc(4);return d.hc().openDefaultModal(a)})),d.Ic(2," View "),d.Rb(),d.Gc(3,p,22,0,"ng-template",null,35,d.Hc),d.Rb()}}var f=function(e){return e.single="single",e.multi="multi",e.multiClick="multiClick",e.cell="cell",e.checkbox="checkbox",e}({});const S=[{path:"",children:[{path:"",component:(()=>{class e{constructor(e){this.modalService=e,this.dismissible=!0,this.default={keyboard:!0,class:"modal-dialog-centered"},this.notification={keyboard:!0,class:"modal-dialog-centered modal-danger"},this.form={keyboard:!0,class:"modal-dialog-centered modal-sm"},this.entries=5,this.selected=[],this.temp=[],this.rows=[{nama:"Syed",jenispermohonan:"Permohonan Baru",sewakuarters:"Borang Bancian",status:'<span class="badge badge-pill badge-danger text-uppercase">Ditolak</span>'},{nama:"Amir",jenispermohonan:"Permohonan Baru",sewakuarters:"TNB",status:'<span class="badge badge-pill badge-danger text-uppercase">Ditolak</span>'},{nama:"Abu",jenispermohonan:"Permohonan Pertukaran Unit",sewakuarters:"SYABAS",status:'<span class="badge badge-pill badge-success text-uppercase">Diterima</span>'},{nama:"Ain",jenispermohonan:"Permohonan Baru",sewakuarters:"Borang Bancian",status:'<span class="badge badge-pill badge-success text-uppercase">Diterima</span>'},{nama:"Amar",jenispermohonan:"Permohonan Pertukaran Unit",sewakuarters:"Sijil Akuan Masuk Kuarters",status:'<span class="badge badge-pill badge-danger text-uppercase">Ditolak</span>'},{nama:"Ahmad",jenispermohonan:"Permohonan Pertukaran Unit",sewakuarters:"Surat Setuju terima tawaran",status:'<span class="badge badge-pill badge-success text-uppercase">Diterima</span>'}],this.SelectionType=f,this.temp=this.rows.map((e,t)=>Object.assign(Object.assign({},e),{id:t}))}entriesChange(e){this.entries=e.target.value}filterTable(e){let t=e.target.value;this.temp=this.rows.filter((function(e){for(var a in e)if(-1!==e[a].toLowerCase().indexOf(t))return!0;return!1}))}onSelect({selected:e}){this.selected.splice(0,this.selected.length),this.selected.push(...e)}onActivate(e){this.activeRow=e.row}openDefaultModal(e){this.defaultModal=this.modalService.show(e,this.default)}openNotificationModal(e){this.notificationModal=this.modalService.show(e,this.notification)}openFormModal(e){this.formModal=this.modalService.show(e,this.form)}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(d.Nb(s.a))},e.\u0275cmp=d.Hb({type:e,selectors:[["app-semak"]],decls:48,vars:10,consts:[[1,"header","bg-danger","pb-6"],[1,"container-fluid"],[1,"header-body"],[1,"row","align-items-center","py-4"],[1,"col-lg-6","col-7"],[1,"h2","text-white","d-inline-block","mb-0"],["aria-label","breadcrumb",1,"d-none","d-md-inline-block","ml-md-4"],[1,"breadcrumb","breadcrumb-links","breadcrumb-dark"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"fas","fa-home"],[1,"container-fluid","mt--6"],[1,"row"],[1,"col"],[1,"card"],[1,"card-header"],[1,"mb-0"],[1,"dataTables_wrapper","py-4"],[1,"col-sm-12","col-md-6"],["id","datatable_length",1,"dataTables_length"],["name","datatable_length","aria-controls","datatable",1,"form-control","form-control-sm",3,"change"],["value","5",3,"selected"],["value","25",3,"selected"],["value","50",3,"selected"],["value","-1",3,"selected"],["id","datatable_filter",1,"dataTables_filter"],["type","search","placeholder","Search records","aria-controls","datatable",1,"form-control","form-control-sm",3,"keyup"],[1,"bootstrap","selection-cell",3,"columnMode","headerHeight","footerHeight","rowHeight","limit","rows","activate"],["name","nama"],["name","Jenis Permohonan","prop","jenispermohonan"],["ngx-datatable-cell-template",""],["name","Surat Tawaran Sewa Kuarters","prop","sewakuarters"],["name","status"],["name","Tindakan"],["data-target","#modal-default","data-toggle","modal","type","button",1,"btn","btn-sm","btn-primary",3,"click"],["modalDefault",""],[1,"modal-header"],["id","modal-title-default",1,"modal-title"],["aria-label","Close","data-dismiss","modal","type","button",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],["placeholder","Nama","type","text",1,"form-control","mb-2",3,"focus","blur"],["placeholder","Jenis Permohonan","type","text",1,"form-control","mb-2",3,"focus","blur"],["id","customFileLang","lang","en","type","file",1,"form-control","mb-2"],["id","exampleFormControlSelect3",1,"form-control","mb-2"],[1,"modal-footer"],["type","button",1,"btn","btn-primary"],["data-dismiss","modal","type","button",1,"btn","btn-link","ml-auto",3,"click"]],template:function(e,t){1&e&&(d.Sb(0,"div",0),d.Sb(1,"div",1),d.Sb(2,"div",2),d.Sb(3,"div",3),d.Sb(4,"div",4),d.Sb(5,"h6",5),d.Ic(6,"Semak Permohonan"),d.Rb(),d.Sb(7,"nav",6),d.Sb(8,"ol",7),d.Sb(9,"li",8),d.Sb(10,"a",9),d.Ob(11,"i",10),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(12,"div",11),d.Sb(13,"div",12),d.Sb(14,"div",13),d.Sb(15,"div",14),d.Sb(16,"div",15),d.Sb(17,"h3",16),d.Ic(18,"Semak Permohonan"),d.Rb(),d.Rb(),d.Sb(19,"div",17),d.Sb(20,"div",12),d.Sb(21,"div",18),d.Sb(22,"div",19),d.Sb(23,"label"),d.Ic(24," Tunjuk "),d.Sb(25,"select",20),d.ec("change",(function(e){return t.entriesChange(e)})),d.Sb(26,"option",21),d.Ic(27,"5"),d.Rb(),d.Sb(28,"option",22),d.Ic(29,"25"),d.Rb(),d.Sb(30,"option",23),d.Ic(31,"50"),d.Rb(),d.Sb(32,"option",24),d.Ic(33,"All"),d.Rb(),d.Rb(),d.Ic(34," Rekod "),d.Rb(),d.Rb(),d.Rb(),d.Sb(35,"div",18),d.Sb(36,"div",25),d.Sb(37,"label"),d.Sb(38,"input",26),d.ec("keyup",(function(e){return t.filterTable(e)})),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(39,"ngx-datatable",27),d.ec("activate",(function(e){return t.onActivate(e)})),d.Ob(40,"ngx-datatable-column",28),d.Sb(41,"ngx-datatable-column",29),d.Gc(42,u,1,1,"ng-template",30),d.Rb(),d.Sb(43,"ngx-datatable-column",31),d.Gc(44,m,1,1,"ng-template",30),d.Rb(),d.Ob(45,"ngx-datatable-column",32),d.Sb(46,"ngx-datatable-column",33),d.Gc(47,h,5,0,"ng-template",30),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb()),2&e&&(d.Ab(26),d.nc("selected",5==t.entries),d.Ab(2),d.nc("selected",25==t.entries),d.Ab(2),d.nc("selected",50==t.entries),d.Ab(2),d.nc("selected",-1==t.entries),d.Ab(7),d.nc("columnMode","force")("headerHeight",50)("footerHeight",50)("rowHeight","auto")("limit",-1!=t.entries?t.entries:void 0)("rows",t.temp))},directives:[c.c,c.b,c.a],encapsulation:2}),e})()}]}];a.d(t,"SemakModule",(function(){return g}));let g=(()=>{class e{}return e.\u0275mod=d.Lb({type:e}),e.\u0275inj=d.Kb({factory:function(t){return new(t||e)},imports:[[n.c,b.h.forChild(S),c.d,i.b.forRoot(),r.a.forRoot(),l.a,s.b.forRoot(),o.a]]}),e})()}}]);