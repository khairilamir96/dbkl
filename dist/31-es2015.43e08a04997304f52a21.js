(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"+P1L":function(e,t,c){"use strict";c.r(t);var o=c("ofXK"),n=c("yyhP"),a=c("j1ZV"),i=c("oW1M"),r=c("Lm2G"),l=c("Mfq2"),b=c("lDzL"),u=c("m1XX"),s=c("K3ix"),d=c("tyNb"),f=c("fXoL");function m(e,t){if(1&e){const e=f.Tb();f.Sb(0,"div",39),f.Sb(1,"h6",40),f.Ic(2," New User "),f.Rb(),f.Sb(3,"button",41),f.ec("click",(function(t){return f.zc(e),f.hc().defaultModal.hide()})),f.Sb(4,"span",42),f.Ic(5," \xd7 "),f.Rb(),f.Rb(),f.Rb(),f.Sb(6,"div",43),f.Sb(7,"input",44),f.ec("focus",(function(t){return f.zc(e),f.hc().focus=!0}))("blur",(function(t){return f.zc(e),f.hc().focus=!1})),f.Rb(),f.Sb(8,"input",45),f.ec("focus",(function(t){return f.zc(e),f.hc().focus=!0}))("blur",(function(t){return f.zc(e),f.hc().focus=!1})),f.Rb(),f.Sb(9,"input",46),f.ec("focus",(function(t){return f.zc(e),f.hc().focus=!0}))("blur",(function(t){return f.zc(e),f.hc().focus=!1})),f.Rb(),f.Sb(10,"input",47),f.ec("focus",(function(t){return f.zc(e),f.hc().focus=!0}))("blur",(function(t){return f.zc(e),f.hc().focus=!1})),f.Rb(),f.Sb(11,"input",48),f.ec("focus",(function(t){return f.zc(e),f.hc().focus=!0}))("blur",(function(t){return f.zc(e),f.hc().focus=!1})),f.Rb(),f.Sb(12,"input",49),f.ec("focus",(function(t){return f.zc(e),f.hc().focus=!0}))("blur",(function(t){return f.zc(e),f.hc().focus=!1})),f.Rb(),f.Rb(),f.Sb(13,"div",50),f.Sb(14,"button",51),f.Ic(15," Create "),f.Rb(),f.Sb(16,"button",52),f.ec("click",(function(t){return f.zc(e),f.hc().defaultModal.hide()})),f.Ic(17," Close "),f.Rb(),f.Rb()}}function h(e,t){if(1&e){const e=f.Tb();f.Sb(0,"div",39),f.Sb(1,"h6",40),f.Ic(2," Edit User "),f.Rb(),f.Sb(3,"button",41),f.ec("click",(function(t){return f.zc(e),f.hc(2).defaultModal.hide()})),f.Sb(4,"span",42),f.Ic(5," \xd7 "),f.Rb(),f.Rb(),f.Rb(),f.Sb(6,"div",43),f.Sb(7,"input",44),f.ec("focus",(function(t){return f.zc(e),f.hc(2).focus=!0}))("blur",(function(t){return f.zc(e),f.hc(2).focus=!1})),f.Rb(),f.Sb(8,"input",45),f.ec("focus",(function(t){return f.zc(e),f.hc(2).focus=!0}))("blur",(function(t){return f.zc(e),f.hc(2).focus=!1})),f.Rb(),f.Sb(9,"input",46),f.ec("focus",(function(t){return f.zc(e),f.hc(2).focus=!0}))("blur",(function(t){return f.zc(e),f.hc(2).focus=!1})),f.Rb(),f.Sb(10,"input",47),f.ec("focus",(function(t){return f.zc(e),f.hc(2).focus=!0}))("blur",(function(t){return f.zc(e),f.hc(2).focus=!1})),f.Rb(),f.Sb(11,"input",54),f.ec("focus",(function(t){return f.zc(e),f.hc(2).focus=!0}))("blur",(function(t){return f.zc(e),f.hc(2).focus=!1})),f.Rb(),f.Rb(),f.Sb(12,"div",50),f.Sb(13,"button",51),f.Ic(14," Save changes "),f.Rb(),f.Sb(15,"button",52),f.ec("click",(function(t){return f.zc(e),f.hc(2).defaultModal.hide()})),f.Ic(16," Close "),f.Rb(),f.Rb()}}function p(e,t){if(1&e){const e=f.Tb();f.Sb(0,"div"),f.Sb(1,"button",19),f.ec("click",(function(t){f.zc(e);const c=f.xc(4);return f.hc().openDefaultModal(c)})),f.Ic(2," View "),f.Rb(),f.Gc(3,h,17,0,"ng-template",null,53,f.Hc),f.Rb()}}var S=function(e){return e.single="single",e.multi="multi",e.multiClick="multiClick",e.cell="cell",e.checkbox="checkbox",e}({});const R=[{path:"",children:[{path:"",component:(()=>{class e{constructor(e){this.modalService=e,this.dismissible=!0,this.default={keyboard:!0,class:"modal-dialog-centered"},this.notification={keyboard:!0,class:"modal-dialog-centered modal-danger"},this.form={keyboard:!0,class:"modal-dialog-centered modal-sm"},this.entries=5,this.selected=[],this.temp=[],this.rows=[{username:"Ali",firstname:"Ali",lastname:"Imran",email:"Ali@gmail.com",group:"#"},{username:"Abu",firstname:"Abu",lastname:"Bakar",email:"Abu@gmail.com",group:"#"},{username:"Khalid",firstname:"Khalid",lastname:"Walid",email:"Khalid@gmail.com",group:"#"},{username:"Siti",firstname:"Siti",lastname:"Fatimah",email:"Siti@gmail.com",group:"#"},{username:"Rabiatul",firstname:"Rabiatul",lastname:"Adawiah",email:"Roby@gmail.com",group:"#"},{username:"Hasan",firstname:"Hasan",lastname:"Kahtan",email:"Hasan@gmail.com",group:"#"}],this.SelectionType=S,this.temp=this.rows.map((e,t)=>Object.assign(Object.assign({},e),{id:t}))}entriesChange(e){this.entries=e.target.value}filterTable(e){let t=e.target.value;this.temp=this.rows.filter((function(e){for(var c in e)if(-1!==e[c].toLowerCase().indexOf(t))return!0;return!1}))}onSelect({selected:e}){this.selected.splice(0,this.selected.length),this.selected.push(...e)}onActivate(e){this.activeRow=e.row}openDefaultModal(e){this.defaultModal=this.modalService.show(e,this.default)}openNotificationModal(e){this.notificationModal=this.modalService.show(e,this.notification)}openFormModal(e){this.formModal=this.modalService.show(e,this.form)}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(f.Nb(s.a))},e.\u0275cmp=f.Hb({type:e,selectors:[["app-users"]],decls:54,vars:10,consts:[[1,"header","bg-danger","pb-6"],[1,"container-fluid"],[1,"header-body"],[1,"row","align-items-center","py-4"],[1,"col-lg-6","col-7"],[1,"h2","text-white","d-inline-block","mb-0"],["aria-label","breadcrumb",1,"d-none","d-md-inline-block","ml-md-4"],[1,"breadcrumb","breadcrumb-links","breadcrumb-dark"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"fas","fa-home"],[1,"container-fluid","mt--6"],[1,"row"],[1,"col"],[1,"card"],[1,"card-header"],[1,"col-sm-6"],[1,"mb-0"],[1,"col-sm-6","text-right"],["data-target","#modal-default","data-toggle","modal","type","button",1,"btn","btn-sm","btn-primary",3,"click"],["modalDefault2",""],[1,"dataTables_wrapper","py-4"],[1,"col-sm-12","col-md-6"],["id","datatable_length",1,"dataTables_length"],["name","datatable_length","aria-controls","datatable",1,"form-control","form-control-sm",3,"change"],["value","5",3,"selected"],["value","25",3,"selected"],["value","50",3,"selected"],["value","-1",3,"selected"],["id","datatable_filter",1,"dataTables_filter"],["type","search","placeholder","Search records","aria-controls","datatable",1,"form-control","form-control-sm",3,"keyup"],[1,"bootstrap","selection-cell",3,"columnMode","headerHeight","footerHeight","rowHeight","limit","rows","activate"],["name","username"],["name","firstname"],["name","lastname"],["name","email"],["name","group"],["name","Tindakan"],["ngx-datatable-cell-template",""],[1,"modal-header"],["id","modal-title-default",1,"modal-title"],["aria-label","Close","data-dismiss","modal","type","button",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],["placeholder","Username","type","text",1,"form-control","mb-2",3,"focus","blur"],["placeholder","First Name","type","text",1,"form-control","mb-2",3,"focus","blur"],["placeholder","Last Name","type","text",1,"form-control","mb-2",3,"focus","blur"],["placeholder","Email","type","email",1,"form-control","mb-2",3,"focus","blur"],["placeholder","Password","type","password",1,"form-control","mb-2",3,"focus","blur"],["placeholder","Confirmation Password","type","password",1,"form-control","mb-2",3,"focus","blur"],[1,"modal-footer"],["type","button",1,"btn","btn-primary"],["data-dismiss","modal","type","button",1,"btn","btn-link","ml-auto",3,"click"],["modalDefault",""],["placeholder","Group","type","text",1,"form-control","mb-2",3,"focus","blur"]],template:function(e,t){if(1&e){const e=f.Tb();f.Sb(0,"div",0),f.Sb(1,"div",1),f.Sb(2,"div",2),f.Sb(3,"div",3),f.Sb(4,"div",4),f.Sb(5,"h6",5),f.Ic(6,"List of Users"),f.Rb(),f.Sb(7,"nav",6),f.Sb(8,"ol",7),f.Sb(9,"li",8),f.Sb(10,"a",9),f.Ob(11,"i",10),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Sb(12,"div",11),f.Sb(13,"div",12),f.Sb(14,"div",13),f.Sb(15,"div",14),f.Sb(16,"div",15),f.Sb(17,"div",12),f.Sb(18,"div",16),f.Sb(19,"h3",17),f.Ic(20,"List Of Users"),f.Rb(),f.Rb(),f.Sb(21,"div",18),f.Sb(22,"button",19),f.ec("click",(function(c){f.zc(e);const o=f.xc(25);return t.openDefaultModal(o)})),f.Ic(23," New "),f.Rb(),f.Gc(24,m,18,0,"ng-template",null,20,f.Hc),f.Rb(),f.Rb(),f.Rb(),f.Sb(26,"div",21),f.Sb(27,"div",12),f.Sb(28,"div",22),f.Sb(29,"div",23),f.Sb(30,"label"),f.Ic(31," Tunjuk "),f.Sb(32,"select",24),f.ec("change",(function(e){return t.entriesChange(e)})),f.Sb(33,"option",25),f.Ic(34,"5"),f.Rb(),f.Sb(35,"option",26),f.Ic(36,"25"),f.Rb(),f.Sb(37,"option",27),f.Ic(38,"50"),f.Rb(),f.Sb(39,"option",28),f.Ic(40,"All"),f.Rb(),f.Rb(),f.Ic(41," Rekod "),f.Rb(),f.Rb(),f.Rb(),f.Sb(42,"div",22),f.Sb(43,"div",29),f.Sb(44,"label"),f.Sb(45,"input",30),f.ec("keyup",(function(e){return t.filterTable(e)})),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Sb(46,"ngx-datatable",31),f.ec("activate",(function(e){return t.onActivate(e)})),f.Ob(47,"ngx-datatable-column",32),f.Ob(48,"ngx-datatable-column",33),f.Ob(49,"ngx-datatable-column",34),f.Ob(50,"ngx-datatable-column",35),f.Ob(51,"ngx-datatable-column",36),f.Sb(52,"ngx-datatable-column",37),f.Gc(53,p,5,0,"ng-template",38),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb()}2&e&&(f.Ab(33),f.nc("selected",5==t.entries),f.Ab(2),f.nc("selected",25==t.entries),f.Ab(2),f.nc("selected",50==t.entries),f.Ab(2),f.nc("selected",-1==t.entries),f.Ab(7),f.nc("columnMode","force")("headerHeight",50)("footerHeight",50)("rowHeight","auto")("limit",-1!=t.entries?t.entries:void 0)("rows",t.temp))},directives:[b.c,b.b,b.a],encapsulation:2}),e})()}]}];c.d(t,"UsersModule",(function(){return g}));let g=(()=>{class e{}return e.\u0275mod=f.Lb({type:e}),e.\u0275inj=f.Kb({factory:function(t){return new(t||e)},imports:[[o.c,d.h.forChild(R),b.d,n.a.forRoot(),i.c.forRoot(),r.b.forRoot(),l.a.forRoot(),s.b.forRoot(),u.a,a.a]]}),e})()}}]);