"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[592],{1557:(p,u,a)=>{a.d(u,{J:()=>d});var t=a(520),l=a(2340),c=a(4893);const o={headers:new t.WM({Authorization:sessionStorage.getItem("token")||""})};let d=(()=>{class r{constructor(n){this.http=n,this.API_URI=l.N.API_URI}getUsers(){return this.http.get(`${this.API_URI}api/users/`,o)}addUser(n){return this.http.post(`${this.API_URI}api/users/`,n,o)}getPass(){return this.http.get(`${this.API_URI}api/person/`,o)}getEmployee(){return this.http.get(`${this.API_URI}api/person/employee`,o)}getMandantes(){return this.http.get(`${this.API_URI}api/users/mandantes`,o)}getContratistas(){return this.http.get(`${this.API_URI}api/users/contratistas`,o)}getEmpleadosXadmin(){return this.http.get(`${this.API_URI}api/users/empleadosXadmin`,o)}getEmpleadosXmandante(){return this.http.get(`${this.API_URI}api/users/empleadosXmandante`,o)}getEmploxmandanteAdmin(n){return console.log(),this.http.post(`${this.API_URI}api/users/emploxmandanteAdmin`,n={mandante:n},o)}addEmployment(n){return this.http.post(`${this.API_URI}api/users/employment`,n,o)}addDocument(n){return this.http.post(`${this.API_URI}api/users/document`,n,o)}upFile(n,i){const s=new FormData;console.log(s),s.append("file",n),s.append("id",i),console.log("DatosDelArchivo",[s]),this.upFileAvatar(s)}upFileAvatar(n){}}return r.\u0275fac=function(n){return new(n||r)(c.LFG(t.eN))},r.\u0275prov=c.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},1319:(p,u,a)=>{a.d(u,{S:()=>r});var t=a(4893),l=a(9525),c=a(9808);function o(e,n){1&e&&(t.TgZ(0,"button",12),t._uU(1,"Admin"),t.qZA())}let d=(()=>{class e{constructor(i){this.router=i,this.isAdminRole=!1}ngOnInit(){"ADM"===sessionStorage.getItem("role")&&(this.isAdminRole=!0)}logout(){sessionStorage.clear(),this.router.navigateByUrl("login")}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(l.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-menu"]],decls:17,vars:1,consts:[["tabindex","-1","id","offcanvasExample","aria-labelledby","offcanvasExampleLabel",1,"offcanvas","offcanvas-start","bg"],[1,"offcanvas-header"],["id","offcanvasExampleLabel",1,"offcanvas-title"],["type","button","data-bs-diskmiss","offcanvas","aria-label","Close",1,"btn-close","text-reset"],[1,"fa-solid","fa-xmark"],[1,"offcanvas-body","d-flex","flex-column","justify-content-between"],[1,"list-group"],["routerLink","/view","routerLinkActive","active","data-bs-dismiss","offcanvas","aria-label","Close",1,"list-group-item","list-group-item-action","mb-2"],["routerLink","/enroll/enrolled","data-bs-dismiss","offcanvas","aria-label","Close",1,"list-group-item","list-group-item-action","w-100"],["routerLink","/enroll","data-bs-dismiss","offcanvas","aria-label","Close",1,"list-group-item","list-group-item-action","w-100"],["class","list-group-item list-group-item-action mb-2","routerLink","/admin","routerLinkActive","active","data-bs-dismiss","offcanvas","aria-label","Close",4,"ngIf"],[1,"list-group-item","list-group-item-action",3,"click"],["routerLink","/admin","routerLinkActive","active","data-bs-dismiss","offcanvas","aria-label","Close",1,"list-group-item","list-group-item-action","mb-2"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),t._uU(3,"Menu"),t.qZA(),t.TgZ(4,"button",3),t._UZ(5,"i",4),t.qZA()(),t.TgZ(6,"div",5)(7,"div",6)(8,"button",7),t._uU(9,"Registros"),t.qZA(),t.TgZ(10,"button",8),t._uU(11,"Trabajadores"),t.qZA(),t.TgZ(12,"button",9),t._uU(13,"Enrolar"),t.qZA(),t.YNc(14,o,2,0,"button",10),t.qZA(),t.TgZ(15,"a",11),t.NdJ("click",function(){return s.logout()}),t._uU(16,"Cerrar Seci\xf3n"),t.qZA()()()),2&i&&(t.xp6(14),t.Q6J("ngIf",s.isAdminRole))},directives:[l.rH,l.Od,c.O5],styles:[".offcanvas-header[_ngcontent-%COMP%], .offcanvas[_ngcontent-%COMP%]{width:300px}.offcanvas-title[_ngcontent-%COMP%]{width:250px}.btn-close[_ngcontent-%COMP%]{background:none}i[_ngcontent-%COMP%]{font-size:1.2rem}.list-group[_ngcontent-%COMP%]{width:275px}i[_ngcontent-%COMP%], .btn-close[_ngcontent-%COMP%], .offcanvas-title[_ngcontent-%COMP%]{color:#fff}.list-group-item[_ngcontent-%COMP%], .accordion-item[_ngcontent-%COMP%], .accordion-header[_ngcontent-%COMP%]{background:transparent;color:#fff;border:none}.list-group-item[_ngcontent-%COMP%]:hover, .accordion-item[_ngcontent-%COMP%]:hover, .accordion-header[_ngcontent-%COMP%]:hover{background:rgba(255,255,255,.2);box-shadow:0 4px 30px #0000001a;backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);border:1px solid rgba(255,255,255,.3);border-radius:5px;background-position:right center;color:#fff;text-decoration:none;transition:cubic-bezier(.39,.575,.565,1)}.accordion-item[_ngcontent-%COMP%]:hover, .accordion-header[_ngcontent-%COMP%]:hover, .active[_ngcontent-%COMP%]{background:rgba(255,255,255,.2);border-radius:5px;box-shadow:0 4px 30px #0000001a;backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);border:1px solid rgba(255,255,255,.3)}.accordion-button[_ngcontent-%COMP%]:after{background-image:url(angle-down-solid.694d41d66f8a7486.svg);filter:invert(1);transform:scale(.7)}.accordion-button[_ngcontent-%COMP%]:not(.collapsed):after{transform:rotate(-180deg) scale(.7);filter:invert(1)}"]}),e})(),r=(()=>{class e{constructor(i){this.router=i}ngOnInit(){this.nombreEmpresa=sessionStorage.getItem("name")||""}logout(){sessionStorage.clear(),this.router.navigateByUrl("login")}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(l.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-navbar"]],decls:16,vars:1,consts:[[1,"navbar","navbar-expand-lg","navbar-light","bg","shadow",2,"height","50px"],[1,"container-fluid"],[1,"navbar-brand"],["data-bs-toggle","offcanvas","href","#offcanvasExample","role","button","aria-controls","offcanvasExample",1,"mx-5"],[1,"fa-solid","fa-bars"],["src","../../../assets/smartboarding-logo.png",1,"smartboarding-logo"],[1,"d-none","d-sm-flex","d-md-flex","empresa-logo"],[1,"mx-3","pipe-logo"],["src","../../../assets/cencosud-logo.png",1,"smartboarding-logo"],[1,"option-navbar"],["aria-current","page",1,"nav-link","empresa"],["aria-current","page",1,"nav-link","logout",3,"click"]],template:function(i,s){1&i&&(t.TgZ(0,"nav",0)(1,"div",1)(2,"div",2)(3,"a",3),t._UZ(4,"i",4),t.qZA(),t._UZ(5,"img",5),t.TgZ(6,"div",6)(7,"span",7),t._uU(8,"|"),t.qZA(),t._UZ(9,"img",8),t.qZA()(),t.TgZ(10,"div",9)(11,"a",10),t._uU(12),t.qZA(),t.TgZ(13,"a",11),t.NdJ("click",function(){return s.logout()}),t._uU(14,"Cerrar Seci\xf3n"),t.qZA()()()(),t._UZ(15,"app-menu")),2&i&&(t.xp6(12),t.Oqu(s.nombreEmpresa))},directives:[d],styles:["i[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%], .pipe-logo[_ngcontent-%COMP%]{color:#fff}i[_ngcontent-%COMP%]:hover{transition:.3s;transform:scale(1.1)}.smartboarding-logo[_ngcontent-%COMP%]{height:30px}.logout[_ngcontent-%COMP%]{cursor:pointer}.logout[_ngcontent-%COMP%]:hover{font-weight:600;transition:.4s}.navbar-brand[_ngcontent-%COMP%], .option-navbar[_ngcontent-%COMP%]{display:flex;align-items:flex-start}@media only screen and (max-width: 670px){.option-navbar[_ngcontent-%COMP%]{display:none}}"]}),e})()},4466:(p,u,a)=>{a.d(u,{m:()=>d});var t=a(9808),l=a(7939),c=a(9525),o=a(4893);let d=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[[t.ez,l.s,c.Bz]]}),r})()}}]);