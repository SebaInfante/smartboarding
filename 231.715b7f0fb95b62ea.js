"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[231],{8231:(Fe,U,d)=>{d.r(U),d.d(U,{EnrollModule:()=>Se});var p=d(9808),f=d(9525),A=d(1492),y=d(520),k=d(2340),l=d(2382),e=d(4893),C=d(1557),T=d(7261),F=d(2313),E=d(1319);function P(o,i){1&o&&(e.TgZ(0,"span",36),e._UZ(1,"i",37),e._uU(2," El nombre debe ser mayor a 10 caracteres. "),e.qZA())}function N(o,i){1&o&&(e.TgZ(0,"span",36),e._UZ(1,"i",37),e._uU(2," Rut no valido. "),e.qZA())}function I(o,i){1&o&&(e.TgZ(0,"span",36),e._UZ(1,"i",37),e._uU(2," Rut no valido. "),e.qZA())}function w(o,i){1&o&&(e.TgZ(0,"span",36),e._UZ(1,"i",37),e._uU(2," Rut Usado. "),e.qZA())}function J(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"button",38),e.NdJ("click",function(){return e.CHM(t),e.oxw().sendEmailRut()}),e._uU(1,"Solicitar habilitaci\xf3n de usuario"),e.qZA()}}function O(o,i){1&o&&(e.TgZ(0,"span",36),e._UZ(1,"i",37),e._uU(2," Email no valido. "),e.qZA())}function D(o,i){1&o&&(e.TgZ(0,"span",36),e._UZ(1,"i",37),e._uU(2," G\xe9nero es requerido "),e.qZA())}function Y(o,i){1&o&&(e.TgZ(0,"span",36),e._UZ(1,"i",37),e._uU(2," La Foto es requerida "),e.qZA())}function Q(o,i){if(1&o&&(e.TgZ(0,"option",41),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.s9C("value",t.name),e.xp6(1),e.Oqu(t.name)}}function R(o,i){1&o&&(e.TgZ(0,"span",36),e._UZ(1,"i",37),e._uU(2," Empresa es requerido "),e.qZA())}function B(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",9)(1,"label",39),e._uU(2,"Empresa"),e.qZA(),e.TgZ(3,"select",40),e.NdJ("change",function(){return e.CHM(t),e.oxw().changeEmpresa()}),e.YNc(4,Q,2,2,"option",27),e.qZA(),e.YNc(5,R,3,0,"span",8),e.qZA()}if(2&o){const t=e.oxw();e.xp6(4),e.Q6J("ngForOf",t.employees),e.xp6(1),e.Q6J("ngIf",t.campoEsValido("empresa"))}}function j(o,i){if(1&o&&(e.TgZ(0,"option",41),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.s9C("value",t.id),e.xp6(1),e.Oqu(t.employment)}}function z(o,i){1&o&&(e.TgZ(0,"span",36),e._UZ(1,"i",37),e._uU(2," Ocupacion es requerido "),e.qZA())}function H(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"input",46),e.NdJ("change",function(a){e.CHM(t);const r=e.oxw(),s=r.$implicit,c=r.index;return e.oxw().seleccionarDoc(a,s.id,s.name,c)})("ngModel",function(){return e.CHM(t),e.oxw().$implicit.id}),e.qZA()}if(2&o){const t=e.oxw().$implicit;e.MGl("id","",t.id,"_input")}}function L(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div")(1,"button",47),e.NdJ("click",function(){e.CHM(t);const a=e.oxw().index;return e.oxw().borrarUnDoc(a)}),e._UZ(2,"i",48),e.qZA(),e._uU(3),e.qZA()}if(2&o){const t=e.oxw().index,n=e.oxw();e.xp6(3),e.hij(" ",n.documentosCargados[t].file.name," ")}}function $(o,i){if(1&o&&(e.TgZ(0,"div",42)(1,"label",43),e._uU(2),e.qZA(),e.TgZ(3,"div",22),e.YNc(4,H,1,1,"input",44),e.qZA(),e.YNc(5,L,4,1,"div",45),e.qZA()),2&o){const t=i.$implicit,n=i.index,a=e.oxw();e.s9C("id",t.name),e.xp6(1),e.s9C("for",t.id),e.xp6(1),e.Oqu(t.name),e.xp6(2),e.Q6J("ngIf",""==a.documentosCargados[n]||!a.documentosCargados[n]),e.xp6(1),e.Q6J("ngIf",a.documentosCargados[n]&&""!=a.documentosCargados[n])}}function V(o,i){if(1&o&&e._UZ(0,"img",49),2&o){const t=e.oxw();e.Q6J("src",t.image,e.LSH)}}let G=k.N.API_URI;const X={headers:new y.WM({Authorization:sessionStorage.getItem("token")||""})};let W=(()=>{class o{constructor(t,n,a,r,s){this.mainService=t,this.fb=n,this.http=a,this.snackBar=r,this.sanitizer=s,this.documentosCargados=[],this.rutValido=!0,this.rutNoUsado=!0,this.hayArchivo=!1,this.useCamara=!1,this.isADM=!1,this.isUSM=!1,this.formEnrolamiento=this.fb.group({nombre:[,[l.kI.required,l.kI.minLength(10)]],rut:[,[l.kI.required]],email:[,[l.kI.required,l.kI.email]],genero:[,[l.kI.required]],avatar:[,[l.kI.required]],empresa:[,[l.kI.required]],ocupacion:[,[l.kI.required]],documents:this.fb.array([])}),this.seleccionarAvatar=c=>{this.avatar=c.target.files[0],console.log(this.avatar);const m=new FormData;return m.append("file",this.avatar),this.http.post(`${G}api/person/photoPreview`,m,X).subscribe(g=>{const b=new Uint8Array(g.data).reduce((x,ke)=>x+String.fromCharCode(ke),""),u=btoa(b);this.image=this.sanitizer.bypassSecurityTrustUrl("data:image/jpg;base64, "+u)})},this.seleccionarDoc=(c,m,g,_)=>{c?(this.documentosCargados[_]={file:c.target.files[0],id:m,name:g},this.hayArchivo=!0,this.mostrarSnackbar("Archivo cargado correctamente","successSnackbar"),console.log(this.documentosCargados)):(console.log("Archivo no encontrado"),this.hayArchivo=!1)}}ngOnInit(){"ADM"===sessionStorage.getItem("role")&&(this.mainService.getEmpleadosXadmin().subscribe(t=>this.employees=t),this.isADM=!0),"USM"===sessionStorage.getItem("role")&&(this.mainService.getEmpleadosXmandante().subscribe(t=>this.employees=t),this.isUSM=!0),"USC"===sessionStorage.getItem("role")&&(this.formEnrolamiento.value.empresa=0,this.mainService.getEmployement(sessionStorage.getItem("name")).subscribe(t=>this.ocupacion=t))}campoEsValido(t){return this.formEnrolamiento.controls[t].errors&&this.formEnrolamiento.controls[t].touched}changeEmpresa(){this.documentos=[],this.mainService.getEmployement(this.formEnrolamiento.value.empresa).subscribe(t=>this.ocupacion=t)}changeOcupacion(){this.documentos=[],this.mainService.getDocuments(this.formEnrolamiento.value.ocupacion).subscribe(t=>this.documentos=t)}blurRut(){this.rutNoUsado=!0,(0,A.fW)(this.formEnrolamiento.value.rut)?(this.rutValido=!0,this.mainService.validarRut((0,A.NT)(this.formEnrolamiento.value.rut)).subscribe(t=>this.rutNoUsado=!0,t=>this.rutNoUsado=!1)):this.rutValido=!1}enrolar(){if(this.formEnrolamiento.invalid)return void this.formEnrolamiento.markAllAsTouched();if(!this.rutNoUsado||!this.rutValido)return void this.formEnrolamiento.markAllAsTouched();const t=sessionStorage.getItem("name");let c,m;const g={nombre:this.formEnrolamiento.value.nombre,rut:this.formEnrolamiento.value.rut||"error Rut",genero:this.formEnrolamiento.value.genero,empresa:this.formEnrolamiento.value.empresa,ocupacion:this.formEnrolamiento.value.ocupacion,email:this.formEnrolamiento.value.email};if(""==g.nombre||""==g.rut)return this.mostrarSnackbar("Error al cargar nombre o rut","errorSnackbar"),void this.formEnrolamiento.reset();this.mostrarSnackbar("Se subieron los archivos :)","successSnackbar"),this.mainService.addPerson(g).subscribe(_=>{c=_,console.log("\u{1f680} ~ file: enroll-page.component.ts ~ line 150 ~ EnrollPageComponent ~ this.mainService.addPerson ~ idPerson",_);let b=""+c.id_table;this.mainService.upFile(this.avatar,t,this.useCamara).subscribe(u=>{m=u[0],this.mainService.addPersonPhoto(c,m,t).subscribe(x=>{},x=>this.mostrarSnackbar("Algo salio mal, comunicate con el administrador","errorSnackbar"))},u=>this.mostrarSnackbar("Error al cargar la foto","errorSnackbar")),console.log("\u{1f680} ~ file: enroll-page.component.ts ~ line 167 ~ EnrollPageComponent ~ this.mainService.addPerson ~ id_table",b),this.documentosCargados.map(u=>{""!=u&&this.mainService.upDocs(u.file,t,u.id,b,u.name).subscribe(x=>{this.documentosCargados=[],this.documentos=[]})})},_=>this.mostrarSnackbar("Error al enrolar","errorSnackbar")),this.image="",this.formEnrolamiento.reset()}borrarUnDoc(t){this.documentosCargados[t]=""}mostrarSnackbar(t,n){this.snackBar.open(t,"Cerrar",{duration:3e3,panelClass:n})}camaraNoDisponible(){this.mostrarSnackbar("El uso de la c\xe1mara aun no esta operativa","errorSnackbar"),navigator.mediaDevices.getUserMedia({audio:!1,video:!0}).then(t=>{console.log(t),document.getElementById("video").srcObject=t})}tomarFoto(){const t=document.getElementById("video"),n=document.getElementById("canvas");t.pause();let a=n.getContext("2d");n.width=t.videoWidth,n.height=t.videoHeight,a.drawImage(t,0,0,n.width,n.height);let r=n.toDataURL();this.image=r,this.avatar=new File([r],"avatar.jpeg",{type:"image/jpeg"}),this.useCamara=!0,console.log(this.avatar);let s=document.createElement("a");s.download="Foto.png",s.href=r,s.click(),t.pause()}sendEmailRut(){const t=this.formEnrolamiento.value.rut;console.log(t),this.mainService.sendEmailRut(t).subscribe(n=>{this.mostrarSnackbar("Se ha enviado un correo al administrador","successSnackbar")})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(C.J),e.Y36(l.qu),e.Y36(y.eN),e.Y36(T.ux),e.Y36(F.H7))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-enroll-page"]],decls:62,vars:14,consts:[[1,"container","my-3"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"mx-5"],[1,"row"],[1,"col-12","col-md-6"],[1,"mb-5"],["for","nombre"],["type","text","id","nombre","formControlName","nombre","placeholder","Ingrese el nombre de la persona a registrar",1,"input-text","w-100"],["class","form-text",4,"ngIf"],[1,"my-5"],["for","rut"],["type","text","id","rut","formControlName","rut","placeholder","Ejemplo... 12345678-9",1,"input-text","w-100",3,"change"],["type","button","class","btn btn-primary",3,"click",4,"ngIf"],["for","email"],["type","text","id","email","formControlName","email","placeholder","ejemplo@correo.cl",1,"input-text","w-100"],["for","genero"],["aria-label","Default select example","id","genero","formControlName","genero",1,"form-select"],["value","1"],["value","2"],["value","0"],[1,"mt-5","mb-2"],["for","avatar"],[1,"input-group"],["type","file","accept","image/*","id","avatar","aria-describedby","inputGroupFileAddon04","aria-label","Upload","formControlName","avatar",1,"form-control","file-update",3,"change"],["class","my-5",4,"ngIf"],["for","turno"],["aria-label","Default select example","id","ocupacion","formControlName","ocupacion",1,"form-select",3,"change"],[3,"value",4,"ngFor","ngForOf"],["class"," my-5",3,"id",4,"ngFor","ngForOf"],[1,"col-12","col-md-6","px-5"],["style","width:500px; height: 500px; position: absolute;","class","rounded-circle shadow mb-5",3,"src",4,"ngIf"],[1,"d-flex","align-items-center","flex-column"],[1,"btn","btn-primary","w-100","m-0","mb-3"],["routerLink","./enrolled",1,"btn","btn-cancel","w-50","m-0",3,"click"],[1,"button-fab"],[1,"fa-solid","fa-question"],[1,"form-text"],[1,"fa-solid","fa-circle-exclamation"],["type","button",1,"btn","btn-primary",3,"click"],["for","empresa"],["aria-label","Default select example","id","empresa","formControlName","empresa",1,"form-select",3,"change"],[3,"value"],[1,"my-5",3,"id"],[3,"for"],["type","file","class","form-control file-update","aria-describedby","inputGroupFileAddon04","aria-label","Upload",3,"id","change","ngModel",4,"ngIf"],[4,"ngIf"],["type","file","aria-describedby","inputGroupFileAddon04","aria-label","Upload",1,"form-control","file-update",3,"id","change","ngModel"],["type","button",1,"deleteItem",3,"click"],[1,"fa-solid","fa-xmark"],[1,"rounded-circle","shadow","mb-5",2,"width","500px","height","500px","position","absolute",3,"src"]],template:function(t,n){1&t&&(e._UZ(0,"app-navbar"),e.TgZ(1,"div",0)(2,"form",1),e.NdJ("ngSubmit",function(){return n.enrolar()}),e.TgZ(3,"h3",2),e._uU(4,"Formulario de enrolamiento"),e.qZA(),e._UZ(5,"hr"),e.TgZ(6,"div",3)(7,"div",4)(8,"div",5)(9,"label",6),e._uU(10,"Nombre"),e.qZA(),e._UZ(11,"input",7),e.YNc(12,P,3,0,"span",8),e.qZA(),e.TgZ(13,"div",9)(14,"label",10),e._uU(15,"Rut"),e.qZA(),e.TgZ(16,"input",11),e.NdJ("change",function(){return n.blurRut()}),e.qZA(),e.YNc(17,N,3,0,"span",8),e.YNc(18,I,3,0,"span",8),e.YNc(19,w,3,0,"span",8),e.YNc(20,J,2,0,"button",12),e.qZA(),e.TgZ(21,"div",9)(22,"label",13),e._uU(23,"Email"),e.qZA(),e._UZ(24,"input",14),e.YNc(25,O,3,0,"span",8),e.qZA(),e.TgZ(26,"div",9)(27,"label",15),e._uU(28,"G\xe9nero"),e.qZA(),e.TgZ(29,"select",16)(30,"option",17),e._uU(31,"Masculino"),e.qZA(),e.TgZ(32,"option",18),e._uU(33,"Femenino"),e.qZA(),e.TgZ(34,"option",19),e._uU(35,"No Especificar"),e.qZA()(),e.YNc(36,D,3,0,"span",8),e.qZA(),e.TgZ(37,"div",20)(38,"label",21),e._uU(39,"Foto"),e.qZA(),e.TgZ(40,"div",22)(41,"input",23),e.NdJ("change",function(r){return n.seleccionarAvatar(r)}),e.qZA()(),e.YNc(42,Y,3,0,"span",8),e.qZA(),e.YNc(43,B,6,2,"div",24),e.TgZ(44,"div",9)(45,"label",25),e._uU(46,"Ocupaci\xf3n"),e.qZA(),e.TgZ(47,"select",26),e.NdJ("change",function(){return n.changeOcupacion()}),e.YNc(48,j,2,2,"option",27),e.qZA(),e.YNc(49,z,3,0,"span",8),e.qZA(),e.YNc(50,$,6,5,"div",28),e.qZA(),e.TgZ(51,"div",29)(52,"div"),e.YNc(53,V,1,1,"img",30),e.qZA()()(),e.TgZ(54,"div",31)(55,"button",32),e._uU(56,"Enrolar"),e.qZA(),e.TgZ(57,"button",33),e.NdJ("click",function(){return n.formEnrolamiento.reset()}),e._uU(58,"Cancelar"),e.qZA()()()(),e.TgZ(59,"div",34)(60,"button"),e._UZ(61,"i",35),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("formGroup",n.formEnrolamiento),e.xp6(10),e.Q6J("ngIf",n.campoEsValido("nombre")),e.xp6(5),e.Q6J("ngIf",n.campoEsValido("rut")),e.xp6(1),e.Q6J("ngIf",!n.rutValido),e.xp6(1),e.Q6J("ngIf",!n.rutNoUsado),e.xp6(1),e.Q6J("ngIf",!n.rutNoUsado),e.xp6(5),e.Q6J("ngIf",n.campoEsValido("email")),e.xp6(11),e.Q6J("ngIf",n.campoEsValido("genero")),e.xp6(6),e.Q6J("ngIf",n.campoEsValido("avatar")),e.xp6(1),e.Q6J("ngIf",n.isADM||n.isUSM),e.xp6(5),e.Q6J("ngForOf",n.ocupacion),e.xp6(1),e.Q6J("ngIf",n.campoEsValido("ocupacion")),e.xp6(1),e.Q6J("ngForOf",n.documentos),e.xp6(3),e.Q6J("ngIf",n.image))},directives:[E.S,l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u,p.O5,l.EJ,l.YN,l.Kr,p.sg,l.On,f.rH],styles:["input[_ngcontent-%COMP%]{height:38px}.file-update[_ngcontent-%COMP%]{height:38px;box-shadow:0 4px 4px #00385e6e;margin-right:10px}.btn-secondary[_ngcontent-%COMP%]{box-shadow:0 4px 4px #00385e6e;margin:0 0 0 10px;height:38px}span[_ngcontent-%COMP%]{color:#d47077}[_ngcontent-%COMP%]::placeholder{color:#80808080!important}.deleteItem[_ngcontent-%COMP%]{color:#d47077;border:none;background:none}"]}),o})();var h=d(8966),q=d(7423);let K=(()=>{class o{constructor(t,n){this.dialogRef=t,this.data=n}ngOnInit(){console.log(this.data)}borrar(){this.dialogRef.close(!0)}cerrar(){this.dialogRef.close()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h.so),e.Y36(h.WI))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-confirm-delete"]],decls:14,vars:1,consts:[["mat-button","","color","warn",3,"click"],["mat-button","",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"h1"),e._uU(1,"\xbfEst\xe1 seguro?"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"p"),e._uU(4," Est\xe1 a punto de borrar a "),e.TgZ(5,"b"),e._uU(6),e.qZA(),e._UZ(7,"br"),e._uU(8," \xbfDesea continuar?\n"),e.qZA(),e.TgZ(9,"div")(10,"button",0),e.NdJ("click",function(){return n.borrar()}),e._uU(11,"Si, Borrar!"),e.qZA(),e.TgZ(12,"button",1),e.NdJ("click",function(){return n.cerrar()}),e._uU(13,"Cancelar"),e.qZA()()),2&t&&(e.xp6(6),e.Oqu(n.data.name))},directives:[q.lW],encapsulation:2}),o})();var ee=d(3745),Z=d(7322),v=d(6856),te=d(773);function oe(o,i){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Invalid start date"),e.qZA())}function ne(o,i){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Invalid end date"),e.qZA())}function ae(o,i){if(1&o&&(e.TgZ(0,"option",29),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.s9C("value",t.id),e.xp6(1),e.Oqu(t.employment)}}function re(o,i){if(1&o&&(e.TgZ(0,"option",29),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.s9C("value",t.name),e.xp6(1),e.Oqu(t.name)}}function ie(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",30),e._UZ(1,"hr"),e.TgZ(2,"label",31),e._uU(3,"Empresas"),e.qZA(),e.TgZ(4,"select",32),e.NdJ("ngModelChange",function(a){return e.CHM(t),e.oxw().contratista=a}),e.TgZ(5,"option",33),e._uU(6,"Todas"),e.qZA(),e.YNc(7,re,2,2,"option",23),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(4),e.Q6J("ngModel",t.contratista),e.xp6(3),e.Q6J("ngForOf",t.contratistas)}}function le(o,i){1&o&&(e.TgZ(0,"div",34),e._UZ(1,"mat-spinner"),e.TgZ(2,"h4"),e._uU(3,"Cargando ..."),e.qZA()())}let se=(()=>{class o{constructor(t){this.mainService=t,this.registrosFiltrados=new e.vpe,this.termino="",this.contratistas=[{id:"",name:""}],this.ocupaciones=[],this.loading=!1,this.isAdmin=!1,this.isMandante=!1,this.rangeModal=new l.cw({start:new l.NI,end:new l.NI}),this.filtrar=()=>{let n;this.loading=!0,n=this.rangeModal.value.end?new Date(this.rangeModal.value.end).toISOString().split("T",1).toString():"";const s={fecha:n,intervalo:Math.abs(this.rangeModal.value.start-this.rangeModal.value.end)/864e5,name:this.isName(),rut:this.isRut(),turno:this.turno,contratista:this.contratista,ocupacion:this.ocupacion};this.mainService.getPersons(s).subscribe(c=>{this.loading=!1,this.registrosFiltrados.emit(c)})}}ngOnInit(){"ADM"===sessionStorage.getItem("role")&&(this.isAdmin=!0,this.mainService.allEmployement().subscribe(t=>this.ocupaciones=t)),"USM"===sessionStorage.getItem("role")&&(this.isMandante=!0),(this.isAdmin||this.isMandante)&&this.mainService.getEmpleadosXmandante().subscribe(t=>this.contratistas=t),"USC"===sessionStorage.getItem("role")&&this.mainService.getEmployement(sessionStorage.getItem("name")).subscribe(t=>this.ocupaciones=t)}isName(){if(""!==this.termino.trim()){const t=this.termino.trim().substring(0,this.termino.length-1);return isNaN(t.trim())?this.termino:""}return""}isRut(){if(""!==this.termino.trim()){const t=this.termino.trim().substring(0,this.termino.length-1);return isNaN(t.trim())?"":this.termino}return""}descargarReporte(){const t={name:this.isName(),rut:this.isRut(),turno:this.turno,contratista:this.contratista,role:sessionStorage.getItem("role")};this.mainService.descargarReporteTrabajador(t).subscribe(n=>{this.mainService.descargarRepTrab(n.Filename).subscribe(a=>{const r=document.createElement("a");r.href=a.url,r.setAttribute("download",a.Filename),document.body.appendChild(r),r.click()},a=>{const r=document.createElement("a");r.href=a.url,r.setAttribute("download",a.Filename),document.body.appendChild(r),r.click()})},n=>{this.mainService.descargarRepTrab(n.Filename).subscribe(a=>{const r=document.createElement("a");r.href=a.url,r.setAttribute("download",a.Filename),document.body.appendChild(r),r.click()},a=>{const r=document.createElement("a");r.href=a.url,r.setAttribute("download",a.Filename),document.body.appendChild(r),r.click()})})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(C.J))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-filter-modal"]],outputs:{registrosFiltrados:"registrosFiltrados"},decls:46,vars:10,consts:[["id","exampleModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"filter"],[1,"d-flex","flex-column","mb-2"],["for","busqueda"],[1,"d-flex"],["name","termino","id","busqueda","type","text","placeholder","Ingresa el termino de busqueda",1,"input-text","w-100","mr-2",3,"ngModel","ngModelChange"],["for",""],["appearance","fill",1,"w-100"],[3,"formGroup","rangePicker"],["matStartDate","","formControlName","start","placeholder","Start date"],["matEndDate","","formControlName","end","placeholder","End date"],["matSuffix","",3,"for"],["picker",""],[4,"ngIf"],["for","turno"],["aria-label","Default select example","id","turno","name","ocupacion",1,"form-select",3,"ngModel","ngModelChange"],["value","","selected",""],[3,"value",4,"ngFor","ngForOf"],["class","",4,"ngIf"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["type","button","data-bs-dismiss","modal",1,"btn","btn-primary",3,"click"],["class","alert mt-5 pt-5 text-center d-flex align-items-center flex-column","role","alert",4,"ngIf"],[3,"value"],[1,""],["for","empresa"],["aria-label","Default select example","id","empresa","name","contratista",1,"form-select",3,"ngModel","ngModelChange"],["value","all","selected",""],["role","alert",1,"alert","mt-5","pt-5","text-center","d-flex","align-items-center","flex-column"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),e._uU(5,"Filtros"),e.qZA(),e._UZ(6,"button",5),e.qZA(),e.TgZ(7,"div",6)(8,"form",7)(9,"div",8)(10,"label",9),e._uU(11,"Busca por nombre o por rut"),e.qZA(),e.TgZ(12,"div",10)(13,"input",11),e.NdJ("ngModelChange",function(r){return n.termino=r}),e.qZA()()(),e._UZ(14,"hr"),e.TgZ(15,"label",12),e._uU(16,"Registros por fecha"),e.qZA(),e.TgZ(17,"mat-form-field",13)(18,"mat-label"),e._uU(19,"Ingresa el rango de fecha"),e.qZA(),e.TgZ(20,"mat-date-range-input",14),e._UZ(21,"input",15)(22,"input",16),e.qZA(),e.TgZ(23,"mat-hint"),e._uU(24,"MM/DD/YYYY \u2013 MM/DD/YYYY"),e.qZA(),e._UZ(25,"mat-datepicker-toggle",17)(26,"mat-date-range-picker",null,18),e.YNc(28,oe,2,0,"mat-error",19),e.YNc(29,ne,2,0,"mat-error",19),e.qZA(),e._UZ(30,"hr"),e.TgZ(31,"label",20),e._uU(32,"Ocupaci\xf3n"),e.qZA(),e.TgZ(33,"select",21),e.NdJ("ngModelChange",function(r){return n.ocupacion=r}),e.TgZ(34,"option",22),e._uU(35,"Todos"),e.qZA(),e.YNc(36,ae,2,2,"option",23),e.qZA(),e.YNc(37,ie,8,2,"div",24),e.qZA()(),e.TgZ(38,"div",25)(39,"button",26),e._uU(40,"Cerrar"),e.qZA(),e.TgZ(41,"button",27),e.NdJ("click",function(){return n.filtrar()}),e._uU(42,"Filtrar"),e.qZA(),e.TgZ(43,"button",27),e.NdJ("click",function(){return n.descargarReporte()}),e._uU(44,"Descargar Reporte"),e.qZA()()()()(),e.YNc(45,le,4,0,"div",28)),2&t){const a=e.MAs(27);e.xp6(13),e.Q6J("ngModel",n.termino),e.xp6(7),e.Q6J("formGroup",n.rangeModal)("rangePicker",a),e.xp6(5),e.Q6J("for",a),e.xp6(3),e.Q6J("ngIf",n.rangeModal.controls.start.hasError("matStartDateInvalid")),e.xp6(1),e.Q6J("ngIf",n.rangeModal.controls.end.hasError("matEndDateInvalid")),e.xp6(4),e.Q6J("ngModel",n.ocupacion),e.xp6(3),e.Q6J("ngForOf",n.ocupaciones),e.xp6(1),e.Q6J("ngIf",n.isAdmin||n.isMandante),e.xp6(8),e.Q6J("ngIf",n.loading)}},directives:[l._Y,l.JL,l.F,l.Fj,l.JJ,l.On,Z.KE,Z.hX,v.wx,l.sg,v.zY,l.u,v.By,Z.bx,v.nW,Z.R9,v._g,p.O5,Z.TO,l.EJ,l.YN,l.Kr,p.sg,te.Ou],styles:[".modal-backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;z-index:-1!important;width:100vw;height:100vh;background-color:#f10404}.cdk-overlay-container[_ngcontent-%COMP%]{position:fixed;z-index:99999999999!important}.modal-dialog[_ngcontent-%COMP%], #exampleModal[_ngcontent-%COMP%]{z-index:900}[_ngcontent-%COMP%]::placeholder{color:gray!important;font-weight:300;font-size:.8rem}"]}),o})(),M=(()=>{class o{transform(t,...n){switch(t){case 0:return"Pendiente";case 1:return"Enrolar";case 2:return"Enrolado";case 3:return"Modificar";case 4:return"Modificado";case 5:return"Eliminar";case 6:return"Eliminado"}return null}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275pipe=e.Yjl({name:"estadoEnroll",type:o,pure:!0}),o})();const ce=function(o){return{color:o}},me=function(o){return["../enrolled",o]};function de(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2,"12.345.678-9"),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"img",9),e.qZA(),e.TgZ(5,"td"),e._uU(6,"Nombre Trabajador"),e.qZA(),e.TgZ(7,"td",10)(8,"b"),e._uU(9),e.ALo(10,"estadoEnroll"),e.qZA()(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16,"Nombre Empresa"),e.qZA(),e.TgZ(17,"td"),e._uU(18),e.ALo(19,"date"),e.qZA(),e.TgZ(20,"td")(21,"div",11),e._UZ(22,"i",12),e.TgZ(23,"i",13),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.oxw().delete(r.id,r.name)}),e.qZA()()()()}if(2&o){const t=i.$implicit,n=e.oxw();e.xp6(4),e.MGl("src","http://173.249.58.215:9000",t.resource_url,"",e.LSH),e.xp6(3),e.Q6J("ngStyle",e.VKq(12,ce,n.estado%2==0?"#127cc1":"#d47077")),e.xp6(2),e.Oqu(e.lcZ(10,7,n.estado)),e.xp6(3),e.Oqu(t.email),e.xp6(2),e.Oqu(t.ocupacion),e.xp6(4),e.Oqu(e.xi3(19,9,t.create_time,"medium")),e.xp6(4),e.Q6J("routerLink",e.VKq(14,me,t.id_card))}}const ue=function(){return[5,10,25,100]};let pe=(()=>{class o{constructor(t,n,a){this.mainService=t,this.dialog=n,this.snackBar=a,this.pageSize=10,this.estado=1,this.start=0,this.end=10,this.items=[],this.parametres={},this.mainService.getPersons(this.parametres).subscribe(r=>{this.items=r})}ngOnInit(){}cambiarPagina(t){this.start=t.pageIndex*t.pageSize,this.end=this.start+t.pageSize}delete(t,n){this.dialog.open(K,{width:"400px",data:{name:n}}).afterClosed().subscribe(r=>{r&&this.mainService.deletePerson(t).subscribe(s=>{window.location.reload(),this.mostrarSnackbar("Trabajador eliminado","successSnackbar")})})}mostrarSnackbar(t,n){this.snackBar.open(t,"Cerrar",{duration:3e3,panelClass:n})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(C.J),e.Y36(h.uw),e.Y36(T.ux))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-enrolled-page"]],decls:34,vars:9,consts:[[1,"container","my-3"],[1,"d-flex","align-items-end","justify-content-between"],["data-bs-toggle","modal","data-bs-target","#exampleModal",1,"btn","btn-primary"],[1,"table","table-hover","p-3"],[1,""],["scope","col"],[4,"ngFor","ngForOf"],[3,"length","pageSize","pageSizeOptions","page"],[3,"registrosFiltrados"],["alt","",1,"table-avatar",3,"src"],[3,"ngStyle"],[1,"d-flex","justify-content-evenly"],[1,"fa-regular","fa-address-card","iButton",3,"routerLink"],[1,"fa-regular","fa-trash-can","iButton",3,"click"]],template:function(t,n){1&t&&(e._UZ(0,"app-navbar"),e.TgZ(1,"div",0)(2,"div",1)(3,"h2"),e._uU(4,"Lista de enrolados"),e.qZA(),e.TgZ(5,"button",2),e._uU(6,"Filtrar"),e.qZA()(),e._UZ(7,"hr"),e.TgZ(8,"table",3)(9,"thead",4)(10,"tr")(11,"th",5),e._uU(12,"Rut"),e.qZA(),e.TgZ(13,"th",5),e._uU(14,"Avatar"),e.qZA(),e.TgZ(15,"th",5),e._uU(16,"Nombre"),e.qZA(),e.TgZ(17,"th",5),e._uU(18,"Estado"),e.qZA(),e.TgZ(19,"th",5),e._uU(20,"Email"),e.qZA(),e.TgZ(21,"th",5),e._uU(22,"Ocupaci\xf3n"),e.qZA(),e.TgZ(23,"th",5),e._uU(24,"Empresa"),e.qZA(),e.TgZ(25,"th",5),e._uU(26,"Creaci\xf3n"),e.qZA(),e.TgZ(27,"th",5),e._uU(28,"Opciones"),e.qZA()()(),e.TgZ(29,"tbody"),e.YNc(30,de,24,16,"tr",6),e.ALo(31,"slice"),e.qZA()(),e.TgZ(32,"mat-paginator",7),e.NdJ("page",function(r){return n.cambiarPagina(r)}),e.qZA()(),e.TgZ(33,"app-filter-modal",8),e.NdJ("registrosFiltrados",function(r){return n.items=r}),e.qZA()),2&t&&(e.xp6(30),e.Q6J("ngForOf",e.Dn7(31,4,n.items,n.start,n.end)),e.xp6(2),e.Q6J("length",n.items.length)("pageSize",n.pageSize)("pageSizeOptions",e.DdM(8,ue)))},directives:[E.S,p.sg,p.PC,f.rH,ee.NW,se],pipes:[p.OU,M,p.uU],styles:[".container[_ngcontent-%COMP%]{overflow-x:auto}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{text-align:left}.modal-backdrop[_ngcontent-%COMP%]{z-index:0!important}.cdk-overlay-container[_ngcontent-%COMP%]{position:fixed;z-index:99999999999!important}"]}),o})(),ge=(()=>{class o{constructor(t,n){this.dialogRef=t,this.data=n}ngOnInit(){console.log(this.data)}borrar(){this.dialogRef.close(!0)}cerrar(){this.dialogRef.close()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h.so),e.Y36(h.WI))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-confirm-delete"]],decls:17,vars:2,consts:[["mat-button","","color","warn",3,"click"],["mat-button","",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"h3"),e._uU(1,"\xbfEst\xe1 seguro?"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"p"),e._uU(4," Est\xe1 a punto de borrar el documento "),e.TgZ(5,"b"),e._uU(6),e.qZA(),e._UZ(7,"br"),e.TgZ(8,"small"),e._uU(9),e.qZA(),e._UZ(10,"br"),e._uU(11," \xbfDesea continuar?\n"),e.qZA(),e.TgZ(12,"div")(13,"button",0),e.NdJ("click",function(){return n.borrar()}),e._uU(14,"Si, Borrar!"),e.qZA(),e.TgZ(15,"button",1),e.NdJ("click",function(){return n.cerrar()}),e._uU(16,"Cancelar"),e.qZA()()),2&t&&(e.xp6(6),e.hij("",n.data.file.name,":"),e.xp6(3),e.Oqu(n.data.file.resource_alias))},directives:[q.lW],encapsulation:2}),o})(),_e=(()=>{class o{transform(t,...n){const a=t.substring(t.length-1,0),r=t.slice(t.length-1);let s,c,m;return 8==a.length?(s=a.slice(a.length-3),c=a.substring(2,5),m=a.slice(0,2)):(s=a.slice(a.length-3),c=a.substring(1,4),m=a[0]),`${m}.${c}.${s}-${r}`}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275pipe=e.Yjl({name:"rut",type:o,pure:!0}),o})();function fe(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"input",20),e.NdJ("change",function(a){e.CHM(t);const r=e.oxw(),s=r.$implicit,c=r.index;return e.oxw(2).seleccionarDoc(a,s.id,s.name,c)})("ngModel",function(){return e.CHM(t),e.oxw().$implicit.id}),e.qZA()}if(2&o){const t=e.oxw().$implicit;e.MGl("id","",t.id,"_input")}}function he(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",21)(1,"button",22),e.NdJ("click",function(){e.CHM(t);const a=e.oxw().index,r=e.oxw(2);return r.borrarUnDoc(a,r.documentosCargados[a])}),e._UZ(2,"i",23),e.qZA(),e.TgZ(3,"div"),e._uU(4),e.qZA(),e.TgZ(5,"button",24),e.NdJ("click",function(){e.CHM(t);const a=e.oxw().index,r=e.oxw(2);return r.descargarArchivo(r.documentosCargados[a])}),e._UZ(6,"i",25),e._uU(7,"Descargar "),e.qZA()()}if(2&o){const t=e.oxw().index,n=e.oxw(2);e.xp6(4),e.hij(" ",n.documentosCargados[t].resource_alias||n.documentosCargados[t].file.name," ")}}function be(o,i){if(1&o&&(e.TgZ(0,"div",15)(1,"label",16),e._uU(2),e.qZA(),e.TgZ(3,"div",17),e.YNc(4,fe,1,1,"input",18),e.qZA(),e.YNc(5,he,8,1,"div",19),e.qZA()),2&o){const t=i.$implicit,n=i.index,a=e.oxw(2);e.s9C("id",t.name),e.xp6(1),e.s9C("for",t.id),e.xp6(1),e.Oqu(t.name),e.xp6(2),e.Q6J("ngIf",""==a.documentosCargados[n]||!a.documentosCargados[n]),e.xp6(1),e.Q6J("ngIf",a.documentosCargados[n]&&""!=a.documentosCargados[n])}}function Ze(o,i){1&o&&(e.TgZ(0,"button",26),e._uU(1," Guardar documentos "),e.qZA())}const S=function(o){return{color:o}};function ve(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"form",2),e.NdJ("ngSubmit",function(){return e.CHM(t),e.oxw().actualizar()}),e.TgZ(1,"button",3),e._uU(2,"Volver"),e.qZA(),e.TgZ(3,"div",4)(4,"h1"),e._uU(5,"Ficha del trabajador"),e.qZA(),e._UZ(6,"br")(7,"img",5),e.qZA(),e.TgZ(8,"div",6)(9,"h2"),e._uU(10),e.qZA(),e.TgZ(11,"h2"),e._uU(12),e.ALo(13,"rut"),e.qZA(),e.TgZ(14,"h5"),e._uU(15),e.qZA(),e.TgZ(16,"p"),e._uU(17),e.qZA(),e.TgZ(18,"div",7)(19,"p",8),e._uU(20,"Documentos: "),e.TgZ(21,"b",9),e._uU(22),e.ALo(23,"estadoEnroll"),e.qZA()(),e.TgZ(24,"p"),e._uU(25," Enrolamiento: "),e.TgZ(26,"b",9),e._uU(27),e.ALo(28,"estadoEnroll"),e.qZA()(),e.TgZ(29,"i",10),e.NdJ("click",function(){return e.CHM(t),e.oxw().editarDatos()}),e.qZA()()(),e._UZ(30,"hr"),e.YNc(31,be,6,5,"div",11),e.YNc(32,Ze,2,0,"button",12),e.TgZ(33,"div",13)(34,"button",14),e.NdJ("click",function(){return e.CHM(t),e.oxw().descargarFicha()}),e._uU(35,"Descargar Ficha"),e.qZA()()()}if(2&o){const t=e.oxw();e.Q6J("formGroup",t.formEnrolamiento),e.xp6(7),e.s9C("src",t.person.resource_url,e.LSH),e.xp6(3),e.Oqu(t.person.name),e.xp6(2),e.Oqu(e.lcZ(13,13,t.person.id_card)),e.xp6(3),e.Oqu(t.employee.email),e.xp6(2),e.AsE("",t.employee.employment," de ",t.employee.name,""),e.xp6(4),e.Q6J("ngStyle",e.VKq(19,S,t.estado%2==0?"#127cc1":"#d47077")),e.xp6(1),e.Oqu(e.lcZ(23,15,t.estado)),e.xp6(4),e.Q6J("ngStyle",e.VKq(21,S,t.estado%2==0?"#127cc1":"#d47077")),e.xp6(1),e.Oqu(e.lcZ(28,17,t.estado)),e.xp6(4),e.Q6J("ngForOf",t.listDocuments),e.xp6(1),e.Q6J("ngIf",!t.notChange)}}function Ce(o,i){1&o&&(e.TgZ(0,"span",46),e._UZ(1,"i",47),e._uU(2," El nombre debe ser mayor a 10 caracteres. "),e.qZA())}function xe(o,i){1&o&&(e.TgZ(0,"span",46),e._UZ(1,"i",47),e._uU(2," El correo es obligatorio. "),e.qZA())}function Te(o,i){if(1&o&&(e.TgZ(0,"option",48),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.s9C("value",t.id),e.xp6(1),e.Oqu(t.employment)}}function Ee(o,i){1&o&&(e.TgZ(0,"span",46),e._UZ(1,"i",47),e._uU(2," Debe selecionar una ocupaci\xf3n. "),e.qZA())}function Ue(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",27)(1,"div",28)(2,"div",29)(3,"div",30)(4,"h5",31),e._uU(5),e.qZA(),e._UZ(6,"button",32),e.qZA(),e.TgZ(7,"form",33),e.NdJ("ngSubmit",function(){return e.CHM(t),e.oxw().actualizarDatos()}),e.TgZ(8,"div",34)(9,"label",35),e._uU(10,"Nombre"),e.qZA(),e.TgZ(11,"input",36),e.NdJ("ngModelChange",function(a){return e.CHM(t),e.oxw().person.name=a}),e.qZA(),e.YNc(12,Ce,3,0,"span",37),e._UZ(13,"br")(14,"br"),e.TgZ(15,"label",38),e._uU(16,"Correo"),e.qZA(),e.TgZ(17,"input",39),e.NdJ("ngModelChange",function(a){return e.CHM(t),e.oxw().employee.email=a}),e.qZA(),e.YNc(18,xe,3,0,"span",37),e._UZ(19,"br")(20,"br"),e.TgZ(21,"label",40),e._uU(22,"Ocupaci\xf3n: "),e.qZA(),e.TgZ(23,"select",41),e.YNc(24,Te,2,2,"option",42),e.qZA(),e.YNc(25,Ee,3,0,"span",37),e.qZA(),e.TgZ(26,"div",43)(27,"button",44),e._uU(28," Cancelar "),e.qZA(),e.TgZ(29,"button",45),e._uU(30,"Guardar Cambios"),e.qZA()()()()()()}if(2&o){const t=e.oxw();e.xp6(5),e.Oqu(t.person.name),e.xp6(6),e.Q6J("ngModel",t.person.name),e.xp6(1),e.Q6J("ngIf",t.campoEsValido("nombre")),e.xp6(5),e.Q6J("ngModel",t.employee.email),e.xp6(1),e.Q6J("ngIf",t.campoEsValido("email")),e.xp6(6),e.Q6J("ngForOf",t.ocupacion),e.xp6(1),e.Q6J("ngIf",t.campoEsValido("ocupacion"))}}const Ae=[{path:"",component:W},{path:"enrolled",component:pe},{path:"enrolled/:id",component:(()=>{class o{constructor(t,n,a,r,s){this.fb=t,this.mainService=n,this.activatedRoute=a,this.dialog=r,this.snackBar=s,this.notChange=!0,this.estado=0,this.hayArchivo=!1,this.cambioEmployment=!1,this.documentosCargados=[],this.formEnrolamiento=this.fb.group({nombre:[,[l.kI.required,l.kI.minLength(10)]],email:[,[l.kI.required,l.kI.email]],ocupacion:["Seleccionar una opcion",[l.kI.required]],documents:this.fb.array([])}),this.seleccionarDoc=(c,m,g,_)=>{c?(this.documentosCargados[_]={file:c.target.files[0],id:m,name:g},this.hayArchivo=!0,this.mostrarSnackbar("Archivo cargado correctamente","successSnackbar"),this.notChange=!1):(console.log("Archivo no encontrado"),this.hayArchivo=!1)},this.rut=this.activatedRoute.snapshot.paramMap.get("id")}ngOnInit(){this.mainService.getPerson(this.rut).subscribe(t=>{const n=t.Person[0];n.resource_url=n.resource_url.includes("/u/cms/www")?`http://173.249.58.215:9000${n.resource_url}`:`https://rpafactory.cl/sb_webapp/avatar/${n.resource_url}`,this.person=n,this.employee=t.Employee[0],this.formEnrolamiento.value.email=this.employee.email,this.mainService.getEmployement(this.employee.name).subscribe(a=>this.ocupacion=a),this.mainService.getDocuments(this.employee.id).subscribe(a=>{this.listDocuments=a,this.listDocuments.forEach(r=>{this.mainService.getDocumentsPerson(r.id,this.person.id).subscribe(s=>{console.log(s),this.documentosCargados.push(...s)})})})})}editarDatos(){console.log("Editando dato",this.employee.employment),setTimeout(()=>{},1e3),this.formEnrolamiento.value.email=this.employee.email,this.formEnrolamiento.value.nombre=this.person.name,this.mainService.getEmployement(this.employee.name).subscribe(t=>this.ocupacion=t),console.log(this.ocupacion)}changeOcupacion(){this.documentos=[],this.mainService.getDocuments(this.ocupacion).subscribe(t=>this.listDocuments=t)}borrarUnDoc(t,n){this.dialog.open(ge,{width:"400px",data:{file:n}}).afterClosed().subscribe(r=>{r&&this.mainService.deleteFile(n.id).subscribe(s=>{console.log(s),this.documentosCargados[t]="",this.mostrarSnackbar("Documento eliminado","successSnackbar")})})}mostrarSnackbar(t,n){this.snackBar.open(t,"Cerrar",{duration:3e3,panelClass:n})}descargarArchivo(t){let n=t.resource_url.indexOf("/"),a=t.resource_url.substring(n+1,t.resource_url.length);this.mainService.descargarArchivo(a).subscribe(r=>{let s=r.url;console.log("\u{1f680} ~ file: user-enrolled-page.component.ts ~ line 151 ~ UserEnrolledPageComponent ~ descargarArchivo ~ urlFile",s);const m=document.createElement("a");m.href=s,document.body.appendChild(m),m.click()},r=>{let s=r.url;const m=document.createElement("a");m.href=s,document.body.appendChild(m),m.click()})}actualizar(){const t=sessionStorage.getItem("name");let n=""+this.person.id;this.documentosCargados.map(a=>{a&&this.mainService.upDocs(a.file,t,a.id,n,a.name).subscribe(r=>{this.mostrarSnackbar("Archivos cargado correctamente","successSnackbar"),this.notChange=!0})})}campoEsValido(t){return this.formEnrolamiento.controls[t].errors&&this.formEnrolamiento.controls[t].touched}actualizarDatos(){let t=""+this.person.id,a={ocupacion:document.getElementById("ocupacion").value,email:this.employee.email,name:this.person.name};this.mainService.updateDatos(a,t).subscribe(r=>console.log("cambios realizados"))}descargarFicha(){this.mainService.descargarFicha(this.rut).subscribe(t=>{this.mainService.downloadFicha(t).subscribe(n=>{console.log("res",n)},n=>{let a=document.createElement("a");a.download=`${this.person.name}.pdf`,a.href=n.url,a.click(),console.log("err",n)})})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l.qu),e.Y36(C.J),e.Y36(f.gz),e.Y36(h.uw),e.Y36(T.ux))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-user-enrolled-page"]],decls:3,vars:2,consts:[["class","container my-5","style","padding-bottom: 50px;","autocomplete","off",3,"formGroup","ngSubmit",4,"ngIf"],["class","modal fade","id","staticBackdrop","data-bs-backdrop","static","data-bs-keyboard","false","tabindex","-1","aria-labelledby","staticBackdropLabel","aria-hidden","true",4,"ngIf"],["autocomplete","off",1,"container","my-5",2,"padding-bottom","50px",3,"formGroup","ngSubmit"],["routerLink","../",1,"btn","btn-primary"],[1,"justify-content-center","d-flex","flex-column","align-items-center"],["alt","",2,"max-width","300px",3,"src"],[1,"text-center"],[1,"d-flex","flex-row","justify-content-center"],[1,"mx-4"],[3,"ngStyle"],["type","button","data-bs-toggle","modal","data-bs-target","#staticBackdrop",1,"fa-solid","fa-pen-to-square","iButton","mx-3",3,"click"],["class","my-5",3,"id",4,"ngFor","ngForOf"],["type","submit","class","btn btn-primary w-100 m-0 px-0",4,"ngIf"],[1,"w-100"],["type","button",1,"btn","btn-primary",3,"click"],[1,"my-5",3,"id"],[3,"for"],[1,"input-group"],["type","file","class","form-control file-update","aria-describedby","inputGroupFileAddon04","aria-label","Upload",3,"id","change","ngModel",4,"ngIf"],["class","d-flex",4,"ngIf"],["type","file","aria-describedby","inputGroupFileAddon04","aria-label","Upload",1,"form-control","file-update",3,"id","change","ngModel"],[1,"d-flex"],["type","button",1,"deleteItem",3,"click"],[1,"fa-solid","fa-xmark"],["type","button",1,"downItem",3,"click"],[1,"fa-solid","fa-download"],["type","submit",1,"btn","btn-primary","w-100","m-0","px-0"],["id","staticBackdrop","data-bs-backdrop","static","data-bs-keyboard","false","tabindex","-1","aria-labelledby","staticBackdropLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],["id","staticBackdropLabel",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],["autocomplete","off",3,"ngSubmit"],[1,"modal-body"],["for","name"],["id","name","type","text","name","name",1,"form-control","my-2",3,"ngModel","ngModelChange"],["class","form-text",4,"ngIf"],["for","email"],["id","email","type","text","name","email",1,"form-control","my-2",3,"ngModel","ngModelChange"],["for","ocupacion"],["aria-label","Default select example","id","ocupacion",1,"form-select","my-2"],[3,"value",4,"ngFor","ngForOf"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-cancel"],["type","submit","data-bs-dismiss","modal",1,"btn","btn-primary"],[1,"form-text"],[1,"fa-solid","fa-circle-exclamation"],[3,"value"]],template:function(t,n){1&t&&(e._UZ(0,"app-navbar"),e.YNc(1,ve,36,23,"form",0),e.YNc(2,Ue,31,7,"div",1)),2&t&&(e.xp6(1),e.Q6J("ngIf",n.person),e.xp6(1),e.Q6J("ngIf",n.person))},directives:[E.S,p.O5,l._Y,l.JL,l.sg,f.rH,p.PC,p.sg,l.Fj,l.JJ,l.On,l.F,l.YN,l.Kr],pipes:[_e,M],styles:[".deleteItem[_ngcontent-%COMP%]{color:#d47077;border:none;background:none}.downItem[_ngcontent-%COMP%]{color:green;border:none;background:none;text-decoration:underline}"]}),o})()},{path:"**",redirectTo:"enroll"}];let ye=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[f.Bz.forChild(Ae)],f.Bz]}),o})();var qe=d(4466),Me=d(7939);let Se=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[p.ez,ye,qe.m,Me.s,l.u5,l.UX]]}),o})()}}]);