"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[713],{4713:(N,h,d)=>{d.r(h),d.d(h,{EnrollModule:()=>D});var c,p=d(9808),g=d(9525),b=new Uint8Array(16);function v(){if(!c&&!(c="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(b)}const T=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,A=function _(t){return"string"==typeof t&&T.test(t)};for(var r=[],Z=0;Z<256;++Z)r.push((Z+256).toString(16).substr(1));const q=function x(t,a,o){var n=(t=t||{}).random||(t.rng||v)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,a){o=o||0;for(var i=0;i<16;++i)a[o+i]=n[i];return a}return function C(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=(r[t[a+0]]+r[t[a+1]]+r[t[a+2]]+r[t[a+3]]+"-"+r[t[a+4]]+r[t[a+5]]+"-"+r[t[a+6]]+r[t[a+7]]+"-"+r[t[a+8]]+r[t[a+9]]+"-"+r[t[a+10]]+r[t[a+11]]+r[t[a+12]]+r[t[a+13]]+r[t[a+14]]+r[t[a+15]]).toLowerCase();if(!A(o))throw TypeError("Stringified UUID is invalid");return o}(n)};var e=d(4893),M=d(1557),f=d(1319),u=d(2382);function y(t,a){1&t&&(e.TgZ(0,"div"),e._uU(1," cargar docs "),e.qZA())}let E=(()=>{class t{constructor(o){this.mainService=o,this.trabajador={id:q(),nombre:"",rut:"",avatar:"",turno:"",ocupacion:"",empresa:"",documentos:{doc1:"url"}},this.seleccionarAvatar=n=>{n?this.avatar=n.target.files[0]:console.log("Archivo no encontrado")}}ngOnInit(){}subirArchivo(){this.avatar?this.mainService.upFile(this.avatar,this.trabajador.id):console.log("Archivo no encontrado")}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(M.J))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-enroll-page"]],decls:70,vars:7,consts:[[1,"container","my-3"],[1,"mx-5"],[1,"row"],[1,"col-12","col-md-6"],[1,"mb-5"],["for","nombre"],["type","text","id","nombre","name","nombre",1,"input-text","w-100",3,"ngModel","ngModelChange"],[1,"my-5"],["for","rut"],["type","text","id","rut","name","rut",1,"input-text","w-100",3,"ngModel","ngModelChange"],["for","avatar"],[1,"input-group"],["type","file","id","avatar","aria-describedby","inputGroupFileAddon04","aria-label","Upload","name","avatar",1,"form-control","file-update",3,"ngModel","change","ngModelChange"],["type","button","id","inputGroupFileAddon04",1,"btn","btn-secondary",3,"click"],["for","turno"],["aria-label","Default select example","id","turno","name","turno",1,"form-select",3,"ngModel","ngModelChange"],["selected",""],["value","1"],["value","2"],["value","3"],["aria-label","Default select example","id","ocupacion","name","ocupacion",1,"form-select",3,"ngModel","ngModelChange"],[4,"ngIf"],["for","empresa"],["aria-label","Default select example","id","empresa","name","empresa",1,"form-select",3,"ngModel","ngModelChange"],[1,"col-12","col-md-6","px-5"],["src","https://thiscatdoesnotexist.com/",1,"rounded-circle","shadow","w-100","mb-5"],[1,"d-flex","align-items-center","flex-column"],[1,"btn","btn-primary","w-100","m-0","mb-3"],[1,"btn","btn-cancel","w-50","m-0"],[1,"button-fab"],[1,"fa-solid","fa-question"]],template:function(o,n){1&o&&(e._UZ(0,"app-navbar"),e.TgZ(1,"div",0)(2,"form")(3,"h3",1),e._uU(4,"Formulario de enrolamiento"),e.qZA(),e._UZ(5,"hr"),e.TgZ(6,"div",2)(7,"div",3)(8,"div",4)(9,"label",5),e._uU(10,"Nombre"),e.qZA(),e.TgZ(11,"input",6),e.NdJ("ngModelChange",function(l){return n.trabajador.nombre=l}),e.qZA()(),e.TgZ(12,"div",7)(13,"label",8),e._uU(14,"Rut"),e.qZA(),e.TgZ(15,"input",9),e.NdJ("ngModelChange",function(l){return n.trabajador.rut=l}),e.qZA()(),e.TgZ(16,"div",7)(17,"label",10),e._uU(18,"Foto"),e.qZA(),e.TgZ(19,"div",11)(20,"input",12),e.NdJ("change",function(l){return n.seleccionarAvatar(l)})("ngModelChange",function(l){return n.trabajador.avatar=l}),e.qZA(),e.TgZ(21,"button",13),e.NdJ("click",function(){return n.subirArchivo()}),e._uU(22,"Subir"),e.qZA()()(),e.TgZ(23,"div",7)(24,"label",14),e._uU(25,"Turno"),e.qZA(),e.TgZ(26,"select",15),e.NdJ("ngModelChange",function(l){return n.trabajador.turno=l}),e.TgZ(27,"option",16),e._uU(28,"Todos"),e.qZA(),e.TgZ(29,"option",17),e._uU(30,"One"),e.qZA(),e.TgZ(31,"option",18),e._uU(32,"Two"),e.qZA(),e.TgZ(33,"option",19),e._uU(34,"Three"),e.qZA()()(),e.TgZ(35,"div",7)(36,"label",14),e._uU(37,"Ocupaci\xf3n"),e.qZA(),e.TgZ(38,"select",20),e.NdJ("ngModelChange",function(l){return n.trabajador.ocupacion=l}),e.TgZ(39,"option",16),e._uU(40,"Todos"),e.qZA(),e.TgZ(41,"option",17),e._uU(42,"One"),e.qZA(),e.TgZ(43,"option",18),e._uU(44,"Two"),e.qZA(),e.TgZ(45,"option",19),e._uU(46,"Three"),e.qZA()()(),e.YNc(47,y,2,0,"div",21),e.TgZ(48,"div",7)(49,"label",22),e._uU(50,"Empresa"),e.qZA(),e.TgZ(51,"select",23),e.NdJ("ngModelChange",function(l){return n.trabajador.empresa=l}),e.TgZ(52,"option",16),e._uU(53,"Todos"),e.qZA(),e.TgZ(54,"option",17),e._uU(55,"One"),e.qZA(),e.TgZ(56,"option",18),e._uU(57,"Two"),e.qZA(),e.TgZ(58,"option",19),e._uU(59,"Three"),e.qZA()()()(),e.TgZ(60,"div",24),e._UZ(61,"img",25),e.qZA()(),e.TgZ(62,"div",26)(63,"button",27),e._uU(64,"Enrolar"),e.qZA(),e.TgZ(65,"button",28),e._uU(66,"Cancelar"),e.qZA()()()(),e.TgZ(67,"div",29)(68,"button"),e._UZ(69,"i",30),e.qZA()()),2&o&&(e.xp6(11),e.Q6J("ngModel",n.trabajador.nombre),e.xp6(4),e.Q6J("ngModel",n.trabajador.rut),e.xp6(5),e.Q6J("ngModel",n.trabajador.avatar),e.xp6(6),e.Q6J("ngModel",n.trabajador.turno),e.xp6(12),e.Q6J("ngModel",n.trabajador.ocupacion),e.xp6(9),e.Q6J("ngIf","1"==n.trabajador.ocupacion),e.xp6(4),e.Q6J("ngModel",n.trabajador.empresa))},directives:[f.S,u._Y,u.JL,u.F,u.Fj,u.JJ,u.On,u.EJ,u.YN,u.Kr,p.O5],styles:["input[_ngcontent-%COMP%]{height:38px}.file-update[_ngcontent-%COMP%]{height:38px;box-shadow:0 4px 4px #00385e6e;margin-right:10px}.btn-secondary[_ngcontent-%COMP%]{box-shadow:0 4px 4px #00385e6e;margin:0 0 0 10px;height:38px}"]}),t})();var P=d(3745),m=d(7322),s=d(6856);let O=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-filter-modal"]],decls:59,vars:2,consts:[["id","exampleModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"d-flex","flex-column","mb-2"],["for","busqueda"],[1,"d-flex"],["id","busqueda","type","text","placeholder","Ingresa el termino de busqueda",1,"input-text","w-100","mr-2"],[2,"width","10px"],[1,"btn","btn-secondary","py-0","m-0","px-2","ml-3"],["for","turno"],["aria-label","Default select example","id","turno",1,"form-select"],["selected",""],["value","1"],["value","2"],["value","3"],["for","empresa"],["aria-label","Default select example","id","empresa",1,"form-select"],["for",""],["appearance","fill",1,"w-100"],[3,"rangePicker"],["matStartDate","","placeholder","Start date"],["matEndDate","","placeholder","End date"],["matSuffix","",3,"for"],["picker",""],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["type","button","data-bs-dismiss","modal",1,"btn","btn-primary"]],template:function(o,n){if(1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),e._uU(5,"Filtros"),e.qZA(),e._UZ(6,"button",5),e.qZA(),e.TgZ(7,"div",6)(8,"div",7)(9,"label",8),e._uU(10,"Busca por nombre o por rut"),e.qZA(),e.TgZ(11,"div",9),e._UZ(12,"input",10)(13,"span",11),e.TgZ(14,"button",12),e._uU(15,"Buscar"),e.qZA()()(),e._UZ(16,"hr"),e.TgZ(17,"label",13),e._uU(18,"Turno"),e.qZA(),e.TgZ(19,"select",14)(20,"option",15),e._uU(21,"Todos"),e.qZA(),e.TgZ(22,"option",16),e._uU(23,"One"),e.qZA(),e.TgZ(24,"option",17),e._uU(25,"Two"),e.qZA(),e.TgZ(26,"option",18),e._uU(27,"Three"),e.qZA()(),e._UZ(28,"hr"),e.TgZ(29,"label",19),e._uU(30,"Empresas"),e.qZA(),e.TgZ(31,"select",20)(32,"option",15),e._uU(33,"Todas"),e.qZA(),e.TgZ(34,"option",16),e._uU(35,"One"),e.qZA(),e.TgZ(36,"option",17),e._uU(37,"Two"),e.qZA(),e.TgZ(38,"option",18),e._uU(39,"Three"),e.qZA()(),e._UZ(40,"hr"),e.TgZ(41,"label",21),e._uU(42,"Registros por fecha"),e.qZA(),e.TgZ(43,"mat-form-field",22)(44,"mat-label"),e._uU(45,"Ingresa el rango de fecha"),e.qZA(),e.TgZ(46,"mat-date-range-input",23),e._UZ(47,"input",24)(48,"input",25),e.qZA(),e.TgZ(49,"mat-hint"),e._uU(50,"DD/MM/YYYY \u2013 DD/MM/YYYY"),e.qZA(),e._UZ(51,"mat-datepicker-toggle",26)(52,"mat-date-range-picker",null,27),e.qZA()(),e.TgZ(54,"div",28)(55,"button",29),e._uU(56,"Cerrar"),e.qZA(),e.TgZ(57,"button",30),e._uU(58,"Filtrar"),e.qZA()()()()()),2&o){const i=e.MAs(53);e.xp6(46),e.Q6J("rangePicker",i),e.xp6(5),e.Q6J("for",i)}},directives:[u.YN,u.Kr,m.KE,m.hX,s.wx,s.zY,s.By,m.bx,s.nW,m.R9,s._g],styles:[".modal-backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;z-index:-1!important;width:100vw;height:100vh;background-color:#f10404}.cdk-overlay-container[_ngcontent-%COMP%]{position:fixed;z-index:99999999999!important}.modal-dialog[_ngcontent-%COMP%], #exampleModal[_ngcontent-%COMP%]{z-index:900}[_ngcontent-%COMP%]::placeholder{color:gray!important;font-weight:300;font-size:.8rem}"]}),t})();const w=function(t){return["../enrolled",t]};function J(t,a){if(1&t&&(e.TgZ(0,"tr")(1,"th",8),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"img",9),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.TgZ(17,"td")(18,"div",10),e._UZ(19,"i",11)(20,"i",12)(21,"i",13),e.qZA()()()),2&t){const o=a.$implicit;e.xp6(2),e.Oqu(o.id),e.xp6(2),e.s9C("src",o.avatar,e.LSH),e.xp6(2),e.Oqu(o.nombre),e.xp6(2),e.Oqu(o.apellido),e.xp6(2),e.Oqu(o.rut),e.xp6(2),e.Oqu(o.turno),e.xp6(2),e.Oqu(o.ocupacion),e.xp6(2),e.Oqu(o.empresa),e.xp6(4),e.Q6J("routerLink",e.VKq(9,w,o.id))}}const F=function(){return[5,10,25,100]},z=[{path:"",component:E},{path:"enrolled",component:(()=>{class t{constructor(){this.pageSize=10,this.start=0,this.end=10,this.items=[{id:1,avatar:"https://thiscatdoesnotexist.com/",nombre:"Diego",apellido:"Moncada",rut:"12.345.678-9",turno:"Apertura",ocupacion:"Guardia",empresa:"Cencosud"},{id:2,avatar:"https://thiscatdoesnotexist.com/",nombre:"Juan",apellido:"Boliche",rut:"12.345.678-9",turno:"Apertura",ocupacion:"Guardia",empresa:"Cencosud"},{id:3,avatar:"https://thiscatdoesnotexist.com/",nombre:"Kevin",apellido:"Boliche",rut:"12.345.678-9",turno:"Apertura",ocupacion:"Guardia",empresa:"Cencosud"},{id:4,avatar:"https://thiscatdoesnotexist.com/",nombre:"pacho",apellido:"Figueroa",rut:"12.345.678-9",turno:"Apertura",ocupacion:"Guardia",empresa:"Cencosud"},{id:5,avatar:"https://thiscatdoesnotexist.com/",nombre:"Alejandra",apellido:"Garcia",rut:"12.345.678-9",turno:"Apertura",ocupacion:"Guardia",empresa:"Cencosud"},{id:6,avatar:"https://thiscatdoesnotexist.com/",nombre:"Sebasthian",apellido:"funez",rut:"12.345.678-9",turno:"Apertura",ocupacion:"Guardia",empresa:"Cencosud"},{id:7,avatar:"https://thiscatdoesnotexist.com/",nombre:"Axel",apellido:"Diaz",rut:"12.345.678-9",turno:"Apertura",ocupacion:"Guardia",empresa:"Cencosud"},{id:8,avatar:"https://thiscatdoesnotexist.com/",nombre:"Carolina",apellido:"Bermudez",rut:"12.345.678-9",turno:"Apertura",ocupacion:"Guardia",empresa:"Cencosud"},{id:9,avatar:"https://thiscatdoesnotexist.com/",nombre:"Diego",apellido:"Moncada",rut:"12.345.678-9",turno:"Apertura",ocupacion:"Guardia",empresa:"Cencosud"},{id:10,avatar:"https://thiscatdoesnotexist.com/",nombre:"Juan",apellido:"Boliche",rut:"12.345.678-9",turno:"Apertura",ocupacion:"Guardia",empresa:"Cencosud"},{id:11,avatar:"https://thiscatdoesnotexist.com/",nombre:"Kevin",apellido:"Boliche",rut:"12.345.678-9",turno:"Apertura",ocupacion:"Guardia",empresa:"Cencosud"},{id:12,avatar:"https://thiscatdoesnotexist.com/",nombre:"pacho",apellido:"Figueroa",rut:"12.345.678-9",turno:"Apertura",ocupacion:"Guardia",empresa:"Cencosud"},{id:13,avatar:"https://thiscatdoesnotexist.com/",nombre:"Alejandra",apellido:"Garcia",rut:"12.345.678-9",turno:"Apertura",ocupacion:"Guardia",empresa:"Cencosud"},{id:14,avatar:"https://thiscatdoesnotexist.com/",nombre:"Sebasthian",apellido:"funez",rut:"12.345.678-9",turno:"Apertura",ocupacion:"Guardia",empresa:"Cencosud"},{id:15,avatar:"https://thiscatdoesnotexist.com/",nombre:"Axel",apellido:"Diaz",rut:"12.345.678-9",turno:"Apertura",ocupacion:"Guardia",empresa:"Cencosud"},{id:16,avatar:"https://thiscatdoesnotexist.com/",nombre:"Carolina",apellido:"Bermudez",rut:"12.345.678-9",turno:"Apertura",ocupacion:"Guardia",empresa:"Cencosud"}]}ngOnInit(){}cambiarPagina(o){this.start=o.pageIndex*o.pageSize,this.end=this.start+o.pageSize}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-enrolled-page"]],decls:34,vars:9,consts:[[1,"container","my-3"],[1,"d-flex","align-items-end","justify-content-between"],["data-bs-toggle","modal","data-bs-target","#exampleModal",1,"btn","btn-primary"],[1,"table","table-hover","p-3"],[1,""],["scope","col"],[4,"ngFor","ngForOf"],[3,"length","pageSize","pageSizeOptions","page"],["scope","row"],["alt","",1,"table-avatar",3,"src"],[1,"d-flex","justify-content-evenly"],[1,"fa-regular","fa-pen-to-square"],[1,"fa-regular","fa-address-card",3,"routerLink"],[1,"fa-regular","fa-trash-can"]],template:function(o,n){1&o&&(e._UZ(0,"app-navbar"),e.TgZ(1,"div",0)(2,"div",1)(3,"h2"),e._uU(4,"Lista de enrolados"),e.qZA(),e.TgZ(5,"button",2),e._uU(6,"Filtrar"),e.qZA()(),e._UZ(7,"hr"),e.TgZ(8,"table",3)(9,"thead",4)(10,"tr")(11,"th",5),e._uU(12,"#"),e.qZA(),e.TgZ(13,"th",5),e._uU(14,"Avatar"),e.qZA(),e.TgZ(15,"th",5),e._uU(16,"Nombre"),e.qZA(),e.TgZ(17,"th",5),e._uU(18,"Apellido"),e.qZA(),e.TgZ(19,"th",5),e._uU(20,"Rut"),e.qZA(),e.TgZ(21,"th",5),e._uU(22,"Turno"),e.qZA(),e.TgZ(23,"th",5),e._uU(24,"Ocupaci\xf3n"),e.qZA(),e.TgZ(25,"th",5),e._uU(26,"Empresa"),e.qZA(),e.TgZ(27,"th",5),e._uU(28,"Opciones"),e.qZA()()(),e.TgZ(29,"tbody"),e.YNc(30,J,22,11,"tr",6),e.ALo(31,"slice"),e.qZA()(),e.TgZ(32,"mat-paginator",7),e.NdJ("page",function(l){return n.cambiarPagina(l)}),e.qZA()(),e._UZ(33,"app-filter-modal")),2&o&&(e.xp6(30),e.Q6J("ngForOf",e.Dn7(31,4,n.items,n.start,n.end)),e.xp6(2),e.Q6J("length",n.items.length)("pageSize",n.pageSize)("pageSizeOptions",e.DdM(8,F)))},directives:[f.S,p.sg,g.rH,P.NW,O],pipes:[p.OU],styles:[".container[_ngcontent-%COMP%]{overflow-x:auto}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{text-align:center}.modal-backdrop[_ngcontent-%COMP%]{z-index:0!important}.cdk-overlay-container[_ngcontent-%COMP%]{position:fixed;z-index:99999999999!important}"]}),t})()},{path:"enrolled/:id",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-user-enrolled-page"]],decls:2,vars:0,template:function(o,n){1&o&&(e.TgZ(0,"p"),e._uU(1,"user-enrolled-page works!"),e.qZA())},styles:[""]}),t})()},{path:"**",redirectTo:"enroll"}];let S=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[g.Bz.forChild(z)],g.Bz]}),t})();var j=d(4466),G=d(7939);let D=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[p.ez,S,j.m,G.s,u.u5]]}),t})()}}]);