"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[592],{1557:(m,d,r)=>{r.d(d,{J:()=>u});var t=r(520),l=r(2340),p=r(4893);const n={headers:new t.WM({Authorization:sessionStorage.getItem("token")||""})};let u=(()=>{class s{constructor(e){this.http=e,this.API_URI=l.N.API_URI}getUsers(){return this.http.get(`${this.API_URI}api/users/`,n)}addUser(e){return this.http.post(`${this.API_URI}api/users/`,e,n)}getMandantes(){return this.http.get(`${this.API_URI}api/users/mandantes`,n)}getContratistas(){return this.http.get(`${this.API_URI}api/users/contratistas`,n)}getEmpleadosXadmin(){return this.http.get(`${this.API_URI}api/users/empleadosXadmin`,n)}getEmpleadosXmandante(){return this.http.get(`${this.API_URI}api/users/empleadosXmandante`,n)}getEmploxmandanteAdmin(e){return this.http.post(`${this.API_URI}api/users/emploxmandanteAdmin`,e={mandante:e},n)}addEmployment(e){return this.http.post(`${this.API_URI}api/users/employment`,e,n)}addDocument(e){return this.http.post(`${this.API_URI}api/users/document`,e,n)}getEmployee(){return this.http.get(`${this.API_URI}api/person/employee`,n)}getEmployement(e){return this.http.post(`${this.API_URI}api/person/employement`,{empresa:e},n)}getDocuments(e){return this.http.post(`${this.API_URI}api/person/documents`,{ocupacion:e},n)}validarRut(e){return this.http.post(`${this.API_URI}api/person/validarRut`,{rut:e},n)}addPerson(e){return this.http.post(`${this.API_URI}api/person/addPerson`,e,n)}addPersonPhoto(e,o,i){return this.http.post(`${this.API_URI}api/person/addPersonPhoto`,{id_person:e,id_resource_data:o,username:i},n)}addEmplyee(e,o,i,g){return this.http.post(`${this.API_URI}api/person/addEmplyee`,{username:o,genero:i,id_person:e,empresa:g},n)}getPersons(e){return this.http.post(`${this.API_URI}api/person/persons`,e,n)}getPass(e){return this.http.post(`${this.API_URI}api/records/`,e,n)}upFile(e,o){const i=new FormData;return i.append("file",e),i.append("username",o),this.http.post(`${this.API_URI}api/person/photoFile`,i,n)}upDocs(e,o,i,g,_){const c=new FormData;return c.append("file",e),c.append("person",g),c.append("username",o),c.append("id_document",i),c.append("name_document",_),this.http.post(`${this.API_URI}api/person/docsFile`,c,n)}}return s.\u0275fac=function(e){return new(e||s)(p.LFG(t.eN))},s.\u0275prov=p.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},1319:(m,d,r)=>{r.d(d,{S:()=>s});var t=r(4893),l=r(9525),p=r(9808);function n(a,e){1&a&&(t.TgZ(0,"button",12),t._uU(1,"Admin"),t.qZA())}let u=(()=>{class a{constructor(o){this.router=o,this.isAdminRole=!1}ngOnInit(){"ADM"===sessionStorage.getItem("role")&&(this.isAdminRole=!0)}logout(){sessionStorage.clear(),this.router.navigateByUrl("login")}}return a.\u0275fac=function(o){return new(o||a)(t.Y36(l.F0))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-menu"]],decls:17,vars:1,consts:[["tabindex","-1","id","offcanvasExample","aria-labelledby","offcanvasExampleLabel",1,"offcanvas","offcanvas-start","bg"],[1,"offcanvas-header"],["id","offcanvasExampleLabel",1,"offcanvas-title"],["type","button","data-bs-diskmiss","offcanvas","aria-label","Close",1,"btn-close","text-reset"],[1,"fa-solid","fa-xmark"],[1,"offcanvas-body","d-flex","flex-column","justify-content-between"],[1,"list-group"],["routerLink","/view","routerLinkActive","active","data-bs-dismiss","offcanvas","aria-label","Close",1,"list-group-item","list-group-item-action","mb-2"],["routerLink","/enroll/enrolled","data-bs-dismiss","offcanvas","aria-label","Close",1,"list-group-item","list-group-item-action","w-100"],["routerLink","/enroll","data-bs-dismiss","offcanvas","aria-label","Close",1,"list-group-item","list-group-item-action","w-100"],["class","list-group-item list-group-item-action mb-2","routerLink","/admin","routerLinkActive","active","data-bs-dismiss","offcanvas","aria-label","Close",4,"ngIf"],[1,"list-group-item","list-group-item-action",3,"click"],["routerLink","/admin","routerLinkActive","active","data-bs-dismiss","offcanvas","aria-label","Close",1,"list-group-item","list-group-item-action","mb-2"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),t._uU(3,"Menu"),t.qZA(),t.TgZ(4,"button",3),t._UZ(5,"i",4),t.qZA()(),t.TgZ(6,"div",5)(7,"div",6)(8,"button",7),t._uU(9,"Registros"),t.qZA(),t.TgZ(10,"button",8),t._uU(11,"Trabajadores"),t.qZA(),t.TgZ(12,"button",9),t._uU(13,"Enrolar"),t.qZA(),t.YNc(14,n,2,0,"button",10),t.qZA(),t.TgZ(15,"a",11),t.NdJ("click",function(){return i.logout()}),t._uU(16,"Cerrar Seci\xf3n"),t.qZA()()()),2&o&&(t.xp6(14),t.Q6J("ngIf",i.isAdminRole))},directives:[l.rH,l.Od,p.O5],styles:[".offcanvas-header[_ngcontent-%COMP%], .offcanvas[_ngcontent-%COMP%]{width:300px}.offcanvas-title[_ngcontent-%COMP%]{width:250px}.btn-close[_ngcontent-%COMP%]{background:none}i[_ngcontent-%COMP%]{font-size:1.2rem}.list-group[_ngcontent-%COMP%]{width:275px}i[_ngcontent-%COMP%], .btn-close[_ngcontent-%COMP%], .offcanvas-title[_ngcontent-%COMP%]{color:#fff}.list-group-item[_ngcontent-%COMP%], .accordion-item[_ngcontent-%COMP%], .accordion-header[_ngcontent-%COMP%]{background:transparent;color:#fff;border:none}.list-group-item[_ngcontent-%COMP%]:hover, .accordion-item[_ngcontent-%COMP%]:hover, .accordion-header[_ngcontent-%COMP%]:hover{background:rgba(255,255,255,.2);box-shadow:0 4px 30px #0000001a;backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);border:1px solid rgba(255,255,255,.3);border-radius:5px;background-position:right center;color:#fff;text-decoration:none;transition:cubic-bezier(.39,.575,.565,1)}.accordion-item[_ngcontent-%COMP%]:hover, .accordion-header[_ngcontent-%COMP%]:hover, .active[_ngcontent-%COMP%]{background:rgba(255,255,255,.2);border-radius:5px;box-shadow:0 4px 30px #0000001a;backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);border:1px solid rgba(255,255,255,.3)}.accordion-button[_ngcontent-%COMP%]:after{background-image:url(angle-down-solid.694d41d66f8a7486.svg);filter:invert(1);transform:scale(.7)}.accordion-button[_ngcontent-%COMP%]:not(.collapsed):after{transform:rotate(-180deg) scale(.7);filter:invert(1)}"]}),a})(),s=(()=>{class a{constructor(o){this.router=o}ngOnInit(){this.nombreEmpresa=sessionStorage.getItem("name")||""}logout(){sessionStorage.clear(),this.router.navigateByUrl("login")}}return a.\u0275fac=function(o){return new(o||a)(t.Y36(l.F0))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-navbar"]],decls:16,vars:1,consts:[[1,"navbar","navbar-expand-lg","navbar-light","bg","shadow",2,"height","50px"],[1,"container-fluid"],[1,"navbar-brand"],["data-bs-toggle","offcanvas","href","#offcanvasExample","role","button","aria-controls","offcanvasExample",1,"mx-5"],[1,"fa-solid","fa-bars"],["src","../../../assets/smartboarding-logo.png",1,"smartboarding-logo"],[1,"d-none","d-sm-flex","d-md-flex","empresa-logo"],[1,"mx-3","pipe-logo"],["src","../../../assets/cencosud-logo.png",1,"smartboarding-logo"],[1,"option-navbar"],["aria-current","page",1,"nav-link","empresa"],["aria-current","page",1,"nav-link","logout",3,"click"]],template:function(o,i){1&o&&(t.TgZ(0,"nav",0)(1,"div",1)(2,"div",2)(3,"a",3),t._UZ(4,"i",4),t.qZA(),t._UZ(5,"img",5),t.TgZ(6,"div",6)(7,"span",7),t._uU(8,"|"),t.qZA(),t._UZ(9,"img",8),t.qZA()(),t.TgZ(10,"div",9)(11,"a",10),t._uU(12),t.qZA(),t.TgZ(13,"a",11),t.NdJ("click",function(){return i.logout()}),t._uU(14,"Cerrar Seci\xf3n"),t.qZA()()()(),t._UZ(15,"app-menu")),2&o&&(t.xp6(12),t.Oqu(i.nombreEmpresa))},directives:[u],styles:["i[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%], .pipe-logo[_ngcontent-%COMP%]{color:#fff}i[_ngcontent-%COMP%]:hover{transition:.3s;transform:scale(1.1)}.smartboarding-logo[_ngcontent-%COMP%]{height:30px}.logout[_ngcontent-%COMP%]{cursor:pointer}.logout[_ngcontent-%COMP%]:hover{font-weight:600;transition:.4s}.navbar-brand[_ngcontent-%COMP%], .option-navbar[_ngcontent-%COMP%]{display:flex;align-items:flex-start}@media only screen and (max-width: 670px){.option-navbar[_ngcontent-%COMP%]{display:none}}"]}),a})()},4466:(m,d,r)=>{r.d(d,{m:()=>u});var t=r(9808),l=r(7939),p=r(9525),n=r(4893);let u=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=n.oAB({type:s}),s.\u0275inj=n.cJS({imports:[[t.ez,l.s,p.Bz]]}),s})()}}]);