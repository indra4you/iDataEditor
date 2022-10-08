"use strict";(self.webpackChunkidataeditor=self.webpackChunkidataeditor||[]).push([[250],{4250:(At,g,d)=>{d.r(g),d.d(g,{TermDepositsModule:()=>xt});var l=d(6895),s=d(433),v=d(4736),m=d(5861),_=d(8693),c=d(7885);class f{static getAll(){return(0,m.Z)(function*(){return(yield c.Do.getRoot()).termDeposits??[]})()}static getById(o){var e=this;return(0,m.Z)(function*(){const i=yield e.getAll(),[r]=i.filter(u=>u.id===o);return r})()}static create(o){return(0,m.Z)(function*(){const e=yield c.Do.getRoot();if(e.termDeposits=e.termDeposits??[],e.termDeposits.filter(r=>r.accountNumber===o.accountNumber).length>0)throw new _.be;e.termDeposits.push(o),yield c.Do.saveRoot(e)})()}static update(o,e){return(0,m.Z)(function*(){const i=yield c.Do.getRoot();i.termDeposits=i.termDeposits??[];const r=i.termDeposits.findIndex(p=>p.id===o);if(-1===r)throw new _.Xs;if(i.termDeposits.filter(p=>p.id!==o&&p.accountNumber===e.accountNumber).length>0)throw new _.be;i.termDeposits[r]=e,yield c.Do.saveRoot(i)})()}static delete(o){return(0,m.Z)(function*(){const e=yield c.Do.getRoot();e.termDeposits=e.termDeposits??[];const i=e.termDeposits.findIndex(r=>r.id===o);if(-1===i)throw new _.Xs;e.termDeposits.splice(i,1),yield c.Do.saveRoot(e)})()}}var t=d(8256);const Z=["focusOn"];function T(n,o){if(1&n&&(t.TgZ(0,"div",8)(1,"div",9)(2,"div",10),t._UZ(3,"i",11),t.qZA(),t.TgZ(4,"div",12),t._uU(5),t.qZA()()()),2&n){const e=t.oxw();t.xp6(5),t.hij(" ",e.errorMessage," ")}}function x(n,o){1&n&&(t.TgZ(0,"div",17),t._UZ(1,"label",18)(2,"span",19),t.qZA())}function A(n,o){if(1&n&&(t.TgZ(0,"div",13),t.YNc(1,x,3,0,"div",14),t._UZ(2,"button",15)(3,"button",16),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e._noOfFields)}}function b(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"Account Number is required"),t.qZA())}function D(n,o){if(1&n&&(t.TgZ(0,"div",61),t.YNc(1,b,2,0,"div",62),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.fc.accountNumber.errors.required)}}function h(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"Institution Name is required"),t.qZA())}function y(n,o){if(1&n&&(t.TgZ(0,"div",61),t.YNc(1,h,2,0,"div",62),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.fc.institutionName.errors.required)}}function q(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"Institution Branch is required"),t.qZA())}function C(n,o){if(1&n&&(t.TgZ(0,"div",61),t.YNc(1,q,2,0,"div",62),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.fc.institutionBranch.errors.required)}}function N(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"First Name is required"),t.qZA())}function U(n,o){if(1&n&&(t.TgZ(0,"div",61),t.YNc(1,N,2,0,"div",62),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.fc.firstName.errors.required)}}function I(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"Last Name is required"),t.qZA())}function w(n,o){if(1&n&&(t.TgZ(0,"div",61),t.YNc(1,I,2,0,"div",62),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.fc.lastName.errors.required)}}function F(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"Start Date is required"),t.qZA())}function J(n,o){if(1&n&&(t.TgZ(0,"div",61),t.YNc(1,F,2,0,"div",62),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.fc.startDate.errors.required)}}function Q(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"Principal Amount is required"),t.qZA())}function k(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"Principal Amount cannot be less than 1"),t.qZA())}function M(n,o){if(1&n&&(t.TgZ(0,"div",61),t.YNc(1,Q,2,0,"div",62),t.YNc(2,k,2,0,"div",62),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.fc.principalAmount.errors.required),t.xp6(1),t.Q6J("ngIf",e.fc.principalAmount.errors.min)}}function L(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"Tenure Days is required"),t.qZA())}function Y(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"Tenure Days cannot be nagative"),t.qZA())}function B(n,o){if(1&n&&(t.TgZ(0,"div",61),t.YNc(1,L,2,0,"div",62),t.YNc(2,Y,2,0,"div",62),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.fc.tenureDays.errors.required),t.xp6(1),t.Q6J("ngIf",e.fc.tenureDays.errors.min)}}function O(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"Tenure Months is required"),t.qZA())}function R(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"Tenure Months cannot be nagative"),t.qZA())}function P(n,o){if(1&n&&(t.TgZ(0,"div",61),t.YNc(1,O,2,0,"div",62),t.YNc(2,R,2,0,"div",62),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.fc.tenureMonths.errors.required),t.xp6(1),t.Q6J("ngIf",e.fc.tenureMonths.errors.min)}}function S(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"Interest Rate is required"),t.qZA())}function E(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"Interest Rate cannot be less than 0.01"),t.qZA())}function G(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"Interest Rate cannot be greater than 100"),t.qZA())}function W(n,o){if(1&n&&(t.TgZ(0,"div",61),t.YNc(1,S,2,0,"div",62),t.YNc(2,E,2,0,"div",62),t.YNc(3,G,2,0,"div",62),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.fc.interestRate.errors.required),t.xp6(1),t.Q6J("ngIf",e.fc.interestRate.errors.min),t.xp6(1),t.Q6J("ngIf",e.fc.interestRate.errors.max)}}function H(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"Interest Amount is required"),t.qZA())}function K(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"Interest Amount cannot be less than 0.01"),t.qZA())}function V(n,o){if(1&n&&(t.TgZ(0,"div",61),t.YNc(1,H,2,0,"div",62),t.YNc(2,K,2,0,"div",62),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.fc.interestAmount.errors.required),t.xp6(1),t.Q6J("ngIf",e.fc.interestAmount.errors.min)}}function X(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"Maturity Date is required"),t.qZA())}function j(n,o){if(1&n&&(t.TgZ(0,"div",61),t.YNc(1,X,2,0,"div",62),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.fc.maturityDate.errors.required)}}function $(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"Maturity Amount is required"),t.qZA())}function z(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"Maturity Amount cannot be less than 0.01"),t.qZA())}function tt(n,o){if(1&n&&(t.TgZ(0,"div",61),t.YNc(1,$,2,0,"div",62),t.YNc(2,z,2,0,"div",62),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.fc.maturityAmount.errors.required),t.xp6(1),t.Q6J("ngIf",e.fc.maturityAmount.errors.min)}}function et(n,o){1&n&&(t.TgZ(0,"div",63)(1,"span",64),t._uU(2,"Loading..."),t.qZA()())}const a=function(n,o){return{"is-invalid":n,"is-valid":o}};function nt(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"form",20),t.NdJ("ngSubmit",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.onSubmitClicked())}),t.TgZ(1,"fieldset",21)(2,"div",17)(3,"label",22),t._uU(4,"Account Number"),t.qZA(),t._UZ(5,"input",23,24),t.YNc(7,D,2,1,"div",25),t.qZA(),t.TgZ(8,"div",17)(9,"label",26),t._uU(10,"Institution Name"),t.qZA(),t._UZ(11,"input",27),t.YNc(12,y,2,1,"div",25),t.qZA(),t.TgZ(13,"div",17)(14,"label",28),t._uU(15,"Institution Branch"),t.qZA(),t._UZ(16,"input",29),t.YNc(17,C,2,1,"div",25),t.qZA(),t.TgZ(18,"div",17)(19,"label",30),t._uU(20,"First Name"),t.qZA(),t._UZ(21,"input",31),t.YNc(22,U,2,1,"div",25),t.qZA(),t.TgZ(23,"div",17)(24,"label",32),t._uU(25,"Middle Name"),t.qZA(),t._UZ(26,"input",33),t.qZA(),t.TgZ(27,"div",17)(28,"label",34),t._uU(29,"Last Name"),t.qZA(),t._UZ(30,"input",35),t.YNc(31,w,2,1,"div",25),t.qZA(),t.TgZ(32,"div",17)(33,"label",36),t._uU(34,"Start Date"),t.qZA(),t._UZ(35,"input",37),t.YNc(36,J,2,1,"div",25),t.qZA(),t.TgZ(37,"div",17)(38,"label",38),t._uU(39,"Principal Amount"),t.qZA(),t._UZ(40,"input",39),t.YNc(41,M,3,2,"div",25),t.qZA(),t.TgZ(42,"div",17)(43,"label",40),t._uU(44,"Tenure"),t.qZA(),t.TgZ(45,"div",41),t._UZ(46,"input",42),t.TgZ(47,"span",43),t._uU(48,"Days"),t.qZA(),t._UZ(49,"input",44),t.TgZ(50,"span",43),t._uU(51,"Months"),t.qZA()(),t.YNc(52,B,3,2,"div",25),t.YNc(53,P,3,2,"div",25),t.qZA(),t.TgZ(54,"div",17)(55,"label",45),t._uU(56,"Interest Rate"),t.qZA(),t.TgZ(57,"div",41),t._UZ(58,"input",46),t.TgZ(59,"span",43),t._uU(60,"%"),t.qZA()(),t.YNc(61,W,4,3,"div",25),t.qZA(),t.TgZ(62,"div",17)(63,"label",47),t._uU(64,"Interest Amount"),t.qZA(),t._UZ(65,"input",48),t.YNc(66,V,3,2,"div",25),t.qZA(),t.TgZ(67,"div",17)(68,"label",49),t._uU(69,"Maturity Date"),t.qZA(),t._UZ(70,"input",50),t.YNc(71,j,2,1,"div",25),t.qZA(),t.TgZ(72,"div",17)(73,"label",51),t._uU(74,"Maturity Amount"),t.qZA(),t._UZ(75,"input",52),t.YNc(76,tt,3,2,"div",25),t.qZA(),t.TgZ(77,"div",17)(78,"label",53),t._uU(79,"Features"),t.qZA(),t.TgZ(80,"textarea",54),t._uU(81,"                        "),t.qZA()(),t.TgZ(82,"button",55),t._UZ(83,"i",56),t.TgZ(84,"span",57),t._uU(85,"Save"),t.qZA()(),t.TgZ(86,"button",58),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.onCancelClicked())}),t._UZ(87,"i",59),t.TgZ(88,"span",57),t._uU(89,"Cancel"),t.qZA()(),t.YNc(90,et,3,0,"div",60),t.qZA()()}if(2&n){const e=t.oxw();t.Q6J("formGroup",e.formGroup),t.xp6(1),t.Q6J("disabled",e.isSaving),t.xp6(4),t.Q6J("ngClass",t.WLB(32,a,e.fc.accountNumber.errors,e.fc.accountNumber.valid)),t.xp6(2),t.Q6J("ngIf",e.fc.accountNumber.errors),t.xp6(4),t.Q6J("ngClass",t.WLB(35,a,e.fc.institutionName.errors,e.fc.institutionName.valid)),t.xp6(1),t.Q6J("ngIf",e.fc.institutionName.errors),t.xp6(4),t.Q6J("ngClass",t.WLB(38,a,e.fc.institutionBranch.errors,e.fc.institutionBranch.valid)),t.xp6(1),t.Q6J("ngIf",e.fc.institutionBranch.errors),t.xp6(4),t.Q6J("ngClass",t.WLB(41,a,e.fc.firstName.errors,e.fc.firstName.valid)),t.xp6(1),t.Q6J("ngIf",e.fc.firstName.errors),t.xp6(8),t.Q6J("ngClass",t.WLB(44,a,e.fc.lastName.errors,e.fc.lastName.valid)),t.xp6(1),t.Q6J("ngIf",e.fc.lastName.errors),t.xp6(4),t.Q6J("ngClass",t.WLB(47,a,e.fc.startDate.errors,e.fc.startDate.valid))("max",e._today),t.xp6(1),t.Q6J("ngIf",e.fc.startDate.errors),t.xp6(4),t.Q6J("ngClass",t.WLB(50,a,e.fc.principalAmount.errors,e.fc.principalAmount.valid)),t.xp6(1),t.Q6J("ngIf",e.fc.principalAmount.errors),t.xp6(5),t.Q6J("ngClass",t.WLB(53,a,e.fc.tenureDays.errors,e.fc.tenureDays.valid)),t.xp6(3),t.Q6J("ngClass",t.WLB(56,a,e.fc.tenureMonths.errors,e.fc.tenureMonths.valid)),t.xp6(3),t.Q6J("ngIf",e.fc.tenureDays.errors),t.xp6(1),t.Q6J("ngIf",e.fc.tenureMonths.errors),t.xp6(5),t.Q6J("ngClass",t.WLB(59,a,e.fc.interestRate.errors,e.fc.interestRate.valid)),t.xp6(3),t.Q6J("ngIf",e.fc.interestRate.errors),t.xp6(4),t.Q6J("ngClass",t.WLB(62,a,e.fc.interestAmount.errors,e.fc.interestAmount.valid)),t.xp6(1),t.Q6J("ngIf",e.fc.interestAmount.errors),t.xp6(4),t.Q6J("ngClass",t.WLB(65,a,e.fc.maturityDate.errors,e.fc.maturityDate.valid))("min",e.fc.startDate),t.xp6(1),t.Q6J("ngIf",e.fc.maturityDate.errors),t.xp6(4),t.Q6J("ngClass",t.WLB(68,a,e.fc.maturityAmount.errors,e.fc.maturityAmount.valid)),t.xp6(1),t.Q6J("ngIf",e.fc.maturityAmount.errors),t.xp6(6),t.Q6J("disabled",e.formGroup.invalid),t.xp6(8),t.Q6J("ngIf",e.isSaving)}}let ot=(()=>{class n{constructor(e){this._formBuilder=e,this._today=new Date,this._noOfFields=[...Array(3).keys()],this.onClose=new t.vpe(!0),this.isLoading=!0,this.isSaving=!1,this.errorMessage=""}ngOnInit(){this.formGroup=this._formBuilder.group({accountNumber:[null,[s.kI.required]],currencyCode:["INR",[s.kI.required]],institutionName:[null,[s.kI.required]],institutionBranch:[null,[s.kI.required]],firstName:[null,[s.kI.required]],middleName:[null,[]],lastName:[null,[s.kI.required]],startDate:[null,[s.kI.required]],principalAmount:[null,[s.kI.required,s.kI.min(1)]],tenureDays:[null,[s.kI.required,s.kI.min(0)]],tenureMonths:[null,[s.kI.required,s.kI.min(0)]],interestRate:[null,[s.kI.required,s.kI.min(.01),s.kI.max(100)]],interestAmount:[null,[s.kI.required,s.kI.min(.01)]],maturityDate:[null,[s.kI.required]],maturityAmount:[null,[s.kI.required,s.kI.min(0)]],features:[null,[]]})}ngAfterViewInit(){setTimeout(()=>{this.load()},500)}get haveValidId(){return null!==this.id}load(){var e=this;return(0,m.Z)(function*(){e.haveValidId&&(e.model=yield f.getById(e.id),e.formGroup.patchValue({accountNumber:e.model.accountNumber,institutionName:e.model.institutionName,institutionBranch:e.model.institutionBranch,firstName:e.model.name.first,middleName:e.model.name.middle,lastName:e.model.name.last,startDate:e.model.startDate,principalAmount:e.model.principalAmount,tenureDays:e.model.tenureDays,tenureMonths:e.model.tenureMonths,interestRate:e.model.interestRate,interestAmount:e.model.interestAmount,maturityDate:e.model.maturityDate,maturityAmount:e.model.maturityAmount,features:e.model.features})),e.isLoading=!1,setTimeout(()=>{e.focusOn.nativeElement.focus()},500)})()}get toName(){return{first:this.fc.firstName.value,middle:this.fc.middleName.value,last:this.fc.lastName.value}}get haveError(){return this.errorMessage.length>0}get fc(){return this.formGroup.controls}onCancelClicked(){this.onClose.emit(!1)}onSubmitClicked(){var e=this;return(0,m.Z)(function*(){e.isSaving=!0;try{e.haveValidId?yield f.update(e.model.id,{id:e.model.id,status:e.model.status,accountNumber:e.fc.accountNumber.value,currencyCode:e.fc.currencyCode.value,institutionName:e.fc.institutionName.value,institutionBranch:e.fc.institutionBranch.value,name:e.toName,startDate:e.fc.startDate.value,principalAmount:e.fc.principalAmount.value,tenureDays:e.fc.tenureDays.value,tenureMonths:e.fc.tenureMonths.value,interestRate:e.fc.interestRate.value,interestAmount:e.fc.interestAmount.value,maturityDate:e.fc.maturityDate.value,maturityAmount:e.fc.maturityAmount.value,features:e.fc.features.value}):yield f.create({id:c.W_.newGuid,status:"Active",accountNumber:e.fc.accountNumber.value,currencyCode:e.fc.currencyCode.value,institutionName:e.fc.institutionName.value,institutionBranch:e.fc.institutionBranch.value,name:e.toName,startDate:e.fc.startDate.value,principalAmount:e.fc.principalAmount.value,tenureDays:e.fc.tenureDays.value,tenureMonths:e.fc.tenureMonths.value,interestRate:e.fc.interestRate.value,interestAmount:e.fc.interestAmount.value,maturityDate:e.fc.maturityDate.value,maturityAmount:e.fc.maturityAmount.value,features:e.fc.features.value}),e.onClose.emit(!0)}catch(i){i instanceof _.Xs?e.errorMessage=`Term Deposit with Account Number '${e.fc.accountNumber.value}' not found`:i instanceof _.be&&(e.errorMessage=`Term Deposit with Account Number '${e.fc.accountNumber.value}' already exists`)}finally{e.isSaving=!1}})()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(s.qu))},n.\u0275cmp=t.Xpm({type:n,selectors:[["term-deposit-form"]],viewQuery:function(e,i){if(1&e&&t.Gf(Z,5),2&e){let r;t.iGM(r=t.CRH())&&(i.focusOn=r.first)}},inputs:{id:"id"},outputs:{onClose:"onClose"},decls:10,vars:3,consts:[["tabindex","-1","aria-modal","true","role","dialog",1,"offcanvas","offcanvas-end","show"],[1,"offcanvas-header","text-bg-primary"],[1,"offcanvas-title"],[1,"offcanvas-body"],["class","alert alert-danger","role","alert",4,"ngIf"],["class","placeholder-glow",4,"ngIf","ngIfElse"],["showForm",""],[1,"offcanvas-backdrop","fade","show"],["role","alert",1,"alert","alert-danger"],[1,"row"],[1,"col-1"],[1,"bi","bi-patch-exclamation"],[1,"col-11"],[1,"placeholder-glow"],["class","mb-3",4,"ngFor","ngForOf"],["type","button","disabled","",1,"btn","btn-primary","col-4","placeholder"],["type","button","disabled","",1,"btn","btn-secondary","ms-2","col-4","placeholder"],[1,"mb-3"],[1,"form-label","col-5","placeholder"],[1,"form-control","col-12","placeholder"],[3,"formGroup","ngSubmit"],[3,"disabled"],["for","accountNumber",1,"form-label"],["type","text","formControlName","accountNumber","id","accountNumber",1,"form-control",3,"ngClass"],["focusOn",""],["class","invalid-feedback",4,"ngIf"],["for","institutionName",1,"form-label"],["type","text","formControlName","institutionName","id","institutionName",1,"form-control",3,"ngClass"],["for","institutionBranch",1,"form-label"],["type","text","formControlName","institutionBranch","id","institutionBranch",1,"form-control",3,"ngClass"],["for","firstName",1,"form-label"],["type","text","formControlName","firstName","id","firstName",1,"form-control",3,"ngClass"],["for","middleName",1,"form-label"],["type","text","formControlName","middleName","id","middleName",1,"form-control"],["for","lastName",1,"form-label"],["type","text","formControlName","lastName","id","lastName",1,"form-control",3,"ngClass"],["for","startDate",1,"form-label"],["type","date","formControlName","startDate","id","startDate",1,"form-control",3,"ngClass","max"],["for","principalAmount",1,"form-label"],["type","number","formControlName","principalAmount","id","principalAmount","inputmode","numeric",1,"form-control",3,"ngClass"],["for","tenureDays",1,"form-label"],[1,"input-group"],["type","number","formControlName","tenureDays","id","tenureDays","inputmode","numeric",1,"form-control",3,"ngClass"],[1,"input-group-text"],["type","number","formControlName","tenureMonths","id","tenureMonths","inputmode","numeric",1,"form-control",3,"ngClass"],["for","interestRate",1,"form-label"],["type","number","formControlName","interestRate","id","interestRate","inputmode","numeric",1,"form-control",3,"ngClass"],["for","interestAmount",1,"form-label"],["type","number","formControlName","interestAmount","id","interestAmount","inputmode","numeric",1,"form-control",3,"ngClass"],["for","maturityDate",1,"form-label"],["type","date","formControlName","maturityDate","id","maturityDate",1,"form-control",3,"ngClass","min"],["for","maturityAmount",1,"form-label"],["type","number","formControlName","maturityAmount","id","maturityAmount","inputmode","numeric",1,"form-control",3,"ngClass"],["for","features",1,"form-label"],["formControlName","features","id","features","rows","3",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"bi","bi-hdd"],[1,"ms-2"],["type","button",1,"btn","btn-outline-secondary","ms-2",3,"click"],[1,"bi","bi-x-lg"],["class","spinner-grow spinner-grow-sm ms-2","role","status",4,"ngIf"],[1,"invalid-feedback"],[4,"ngIf"],["role","status",1,"spinner-grow","spinner-grow-sm","ms-2"],[1,"visually-hidden"]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),t._uU(3,"Add Term Deposit"),t.qZA()(),t.TgZ(4,"div",3),t.YNc(5,T,6,1,"div",4),t.YNc(6,A,4,1,"div",5),t.YNc(7,nt,91,71,"ng-template",null,6,t.W1O),t.qZA()(),t._UZ(9,"div",7)),2&e){const r=t.MAs(8);t.xp6(5),t.Q6J("ngIf",i.haveError),t.xp6(1),t.Q6J("ngIf",i.isLoading)("ngIfElse",r)}},dependencies:[l.mk,l.sg,l.O5,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.sg,s.u],encapsulation:2}),n})();function it(n,o){1&n&&(t.TgZ(0,"div",16),t._UZ(1,"label",17)(2,"span",18),t.qZA())}function rt(n,o){if(1&n&&(t.TgZ(0,"div",7)(1,"div",8)(2,"div",9)(3,"div",10),t._UZ(4,"span",11),t.qZA(),t.TgZ(5,"div",12),t._UZ(6,"span",11),t.qZA()()(),t.YNc(7,it,3,0,"div",13),t._UZ(8,"button",14)(9,"button",15),t.qZA()),2&n){const e=t.oxw();t.xp6(7),t.Q6J("ngForOf",e._noOfFields)}}function st(n,o){if(1&n&&(t.TgZ(0,"div",8)(1,"div",9)(2,"div",10),t._UZ(3,"i",28),t.qZA(),t.TgZ(4,"div",12),t._uU(5),t.qZA()()()),2&n){const e=t.oxw(2);t.xp6(5),t.hij(" ",e.errorMessage," ")}}function at(n,o){1&n&&(t.TgZ(0,"div",29)(1,"span",30),t._uU(2,"Loading..."),t.qZA()())}function lt(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",8)(1,"div",9)(2,"div",10),t._UZ(3,"i",19),t.qZA(),t.TgZ(4,"div",12),t._uU(5," Are you sure you want to delete Term Deposit? "),t.qZA()()(),t.YNc(6,st,6,1,"div",20),t.TgZ(7,"div",16)(8,"label"),t._uU(9,"Account Number"),t.qZA(),t.TgZ(10,"span",21),t._uU(11),t.qZA()(),t.TgZ(12,"div",16)(13,"label"),t._uU(14,"Name"),t.qZA(),t.TgZ(15,"span",21),t._uU(16),t.qZA()(),t.TgZ(17,"div",16)(18,"label"),t._uU(19,"Institution"),t.qZA(),t.TgZ(20,"span",21),t._uU(21),t.qZA()(),t.TgZ(22,"div",16)(23,"label"),t._uU(24,"Start Date"),t.qZA(),t.TgZ(25,"span",21),t._uU(26),t.ALo(27,"date"),t.qZA()(),t.TgZ(28,"div",16)(29,"label"),t._uU(30,"Principal Amount"),t.qZA(),t.TgZ(31,"span",21),t._uU(32),t.ALo(33,"currency"),t.qZA()(),t.TgZ(34,"div",16)(35,"label"),t._uU(36,"Maturity Date"),t.qZA(),t.TgZ(37,"span",21),t._uU(38),t.ALo(39,"date"),t.qZA()(),t.TgZ(40,"div",16)(41,"label"),t._uU(42,"Maturity Amount"),t.qZA(),t.TgZ(43,"span",21),t._uU(44),t.ALo(45,"currency"),t.qZA()(),t.TgZ(46,"button",22),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.onDeleteClicked())}),t._UZ(47,"i",23),t.TgZ(48,"span",24),t._uU(49,"Delete"),t.qZA()(),t.TgZ(50,"button",25),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.onCancelClicked())}),t._UZ(51,"i",26),t.TgZ(52,"span",24),t._uU(53,"Cancel"),t.qZA()(),t.YNc(54,at,3,0,"div",27)}if(2&n){const e=t.oxw();t.xp6(6),t.Q6J("ngIf",e.haveError),t.xp6(5),t.Oqu(e.model.accountNumber),t.xp6(5),t.Oqu(e.toFullName(e.model.name)),t.xp6(5),t.Oqu(e.model.institutionName),t.xp6(5),t.Oqu(t.lcZ(27,11,e.model.startDate)),t.xp6(6),t.Oqu(t.xi3(33,13,e.model.principalAmount,e.model.currencyCode)),t.xp6(6),t.Oqu(t.lcZ(39,16,e.model.maturityDate)),t.xp6(6),t.Oqu(t.xi3(45,18,e.model.maturityAmount,e.model.currencyCode)),t.xp6(2),t.Q6J("disabled",e.isSaving),t.xp6(4),t.Q6J("disabled",e.isSaving),t.xp6(4),t.Q6J("ngIf",e.isSaving)}}let mt=(()=>{class n{constructor(){this._noOfFields=[...Array(3).keys()],this.onClose=new t.vpe(!0),this.model=null,this.isLoading=!1,this.isSaving=!1,this.errorMessage=""}ngAfterViewInit(){setTimeout(()=>{this.load()},500)}load(){var e=this;return(0,m.Z)(function*(){e.isLoading=!0;try{e.model=yield f.getById(e.id)}finally{e.isLoading=!1}})()}get haveData(){return!this.isLoading&&null!==this.model}toFullName(e){return c.W_.toFullName(e)}get haveError(){return this.errorMessage.length>0}onCancelClicked(){this.onClose.emit(!1)}onDeleteClicked(){var e=this;return(0,m.Z)(function*(){e.isSaving=!0;try{yield f.delete(e.id),e.onClose.emit(!0)}catch(i){i instanceof _.Xs&&(e.errorMessage=`Term Deposit with ID '${e.id}' not found`)}finally{e.isSaving=!1}})()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["term-deposit-delete"]],inputs:{id:"id"},outputs:{onClose:"onClose"},decls:9,vars:2,consts:[["tabindex","-1","aria-modal","true","role","dialog",1,"offcanvas","offcanvas-end","show"],[1,"offcanvas-header","text-bg-primary"],[1,"offcanvas-title"],[1,"offcanvas-body"],["class","placeholder-glow",4,"ngIf","ngIfElse"],["showData",""],[1,"offcanvas-backdrop","fade","show"],[1,"placeholder-glow"],["role","alert",1,"alert","alert-danger"],[1,"row"],[1,"col-1"],[1,"col-12","placeholder"],[1,"col-11"],["class","mb-3",4,"ngFor","ngForOf"],["type","button","disabled","",1,"btn","btn-danger","col-4","placeholder"],["type","button","disabled","",1,"btn","btn-secondary","ms-2","col-4","placeholder"],[1,"mb-3"],[1,"col-5","placeholder"],[1,"form-control","col-12","placeholder"],[1,"bi","bi-patch-question"],["class","alert alert-danger","role","alert",4,"ngIf"],[1,"form-control-plaintext"],["type","submit",1,"btn","btn-danger",3,"disabled","click"],[1,"bi","bi-trash3"],[1,"ms-2"],["type","button",1,"btn","btn-outline-secondary","ms-2",3,"disabled","click"],[1,"bi","bi-x-lg"],["class","spinner-grow spinner-grow-sm ms-2","role","status",4,"ngIf"],[1,"bi","bi-patch-exclamation"],["role","status",1,"spinner-grow","spinner-grow-sm","ms-2"],[1,"visually-hidden"]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),t._uU(3,"Delete Term Deposit"),t.qZA()(),t.TgZ(4,"div",3),t.YNc(5,rt,10,1,"div",4),t.YNc(6,lt,55,21,"ng-template",null,5,t.W1O),t.qZA()(),t._UZ(8,"div",6)),2&e){const r=t.MAs(7);t.xp6(5),t.Q6J("ngIf",!i.haveData)("ngIfElse",r)}},dependencies:[l.sg,l.O5,l.H9,l.uU],encapsulation:2}),n})();function ct(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.onAddClicked())}),t._UZ(1,"i",14),t.qZA()}}function ut(n,o){1&n&&(t.TgZ(0,"tbody",15)(1,"tr")(2,"td",16),t._UZ(3,"span",17),t.qZA()()())}function dt(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"th",22),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td",23),t._uU(10),t.ALo(11,"date"),t.qZA(),t.TgZ(12,"td",23),t._uU(13),t.ALo(14,"currency"),t.qZA(),t.TgZ(15,"td",23),t._uU(16),t.ALo(17,"date"),t.qZA(),t.TgZ(18,"td",23),t._uU(19),t.ALo(20,"currency"),t.qZA(),t.TgZ(21,"td",23)(22,"div",24)(23,"button",25),t.NdJ("click",function(){const u=t.CHM(e).$implicit,p=t.oxw(3);return t.KtG(p.onEditClicked(u.id))}),t._UZ(24,"i",26),t.qZA(),t.TgZ(25,"button",27),t.NdJ("click",function(){const u=t.CHM(e).$implicit,p=t.oxw(3);return t.KtG(p.onDeleteClicked(u.id))}),t._UZ(26,"i",28),t.qZA()()()()}if(2&n){const e=o.$implicit,i=o.index,r=t.oxw(3);t.xp6(2),t.hij("",i+1,"."),t.xp6(2),t.Oqu(e.accountNumber),t.xp6(2),t.Oqu(r.toFullName(e.name)),t.xp6(2),t.AsE("",e.institutionName,", ",e.institutionBranch,""),t.xp6(2),t.Oqu(t.lcZ(11,9,e.startDate)),t.xp6(3),t.Oqu(t.xi3(14,11,e.principalAmount,e.currencyCode)),t.xp6(3),t.Oqu(t.lcZ(17,14,e.maturityDate)),t.xp6(3),t.Oqu(t.xi3(20,16,e.maturityAmount,e.currencyCode))}}function pt(n,o){if(1&n&&(t.TgZ(0,"tbody",20),t.YNc(1,dt,27,19,"tr",21),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.list)}}function _t(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"tbody",20)(1,"tr")(2,"td",29),t._uU(3," Click "),t.TgZ(4,"button",30),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.onAddClicked())}),t._UZ(5,"i",31),t.qZA(),t._uU(6," to add a term deposit "),t.qZA()()()}}function ft(n,o){if(1&n&&(t.YNc(0,pt,2,1,"tbody",18),t.YNc(1,_t,7,0,"ng-template",null,19,t.W1O)),2&n){const e=t.MAs(2),i=t.oxw();t.Q6J("ngIf",i.haveData)("ngIfElse",e)}}function gt(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"term-deposit-form",32),t.NdJ("onClose",function(r){t.CHM(e);const u=t.oxw();return t.KtG(u.onFormClosed(r))}),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("id",e.selectedId)}}function vt(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"term-deposit-delete",32),t.NdJ("onClose",function(r){t.CHM(e);const u=t.oxw();return t.KtG(u.onDeleteClosed(r))}),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("id",e.selectedId)}}const Zt=[{path:"",component:(()=>{class n{constructor(){this.list=[],this.isLoading=!1,this.showForm=!1,this.showDelete=!1,this.selectedId=null}ngAfterViewInit(){setTimeout(()=>{this.load()},500)}load(){var e=this;return(0,m.Z)(function*(){e.isLoading=!0;try{e.list=yield f.getAll()}catch(i){console.error(i)}finally{e.isLoading=!1}})()}get haveData(){return this.list.length>0}toFullName(e){return c.W_.toFullName(e)}onAddClicked(){this.selectedId=null,this.showForm=!0}onEditClicked(e){this.selectedId=e,this.showForm=!0}onFormClosed(e){e&&this.load(),this.selectedId=null,this.showForm=!1}onDeleteClicked(e){this.selectedId=e,this.showDelete=!0}onDeleteClosed(e){e&&this.load(),this.selectedId=null,this.showDelete=!1}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:40,vars:5,consts:[[1,"container-fluid"],[1,"my-3"],["type","button","class","border-0 bg-transparent text-primary ms-2",3,"click",4,"ngIf"],[1,"card","shadow-sm"],[1,"table","table-hover","table-responsive","align-middle","mb-0"],["width","50"],["width","5"],[1,"text-bg-light"],["scope","col",1,"text-end"],["scope","col"],["class","table-group-divider placeholder-glow",4,"ngIf","ngIfElse"],["showData",""],[3,"id","onClose",4,"ngIf"],["type","button",1,"border-0","bg-transparent","text-primary","ms-2",3,"click"],[1,"bi","bi-plus-circle-dotted"],[1,"table-group-divider","placeholder-glow"],["colspan","9"],[1,"col-12","placeholder"],["class","table-group-divider",4,"ngIf","ngIfElse"],["noData",""],[1,"table-group-divider"],[4,"ngFor","ngForOf"],["scope","row",1,"text-end"],[1,"text-end"],[1,"btn-group"],["type","button",1,"btn","btn-outline-primary","shadow-none","border-0",3,"click"],[1,"bi","bi-pencil"],["type","button",1,"btn","btn-outline-danger","shadow-none","border-0",3,"click"],[1,"bi","bi-trash3"],["colspan","9",1,"lead","text-center","text-muted","py-4"],["type","button",1,"border-0","bg-transparent","text-primary",3,"click"],[1,"bi","bi-plus-circle-dotted","text-primary"],[3,"id","onClose"]],template:function(e,i){if(1&e&&(t.TgZ(0,"section",0)(1,"h1",1),t._uU(2," Term Deposits "),t.YNc(3,ct,2,0,"button",2),t.qZA(),t.TgZ(4,"div",3)(5,"table",4)(6,"colgroup"),t._UZ(7,"col",5)(8,"col")(9,"col")(10,"col")(11,"col")(12,"col")(13,"col")(14,"col")(15,"col",6),t.qZA(),t.TgZ(16,"thead")(17,"tr",7)(18,"th",8),t._uU(19,"#"),t.qZA(),t.TgZ(20,"th",9),t._uU(21,"Account Number"),t.qZA(),t.TgZ(22,"th",9),t._uU(23,"Name"),t.qZA(),t.TgZ(24,"th",9),t._uU(25,"Institution"),t.qZA(),t.TgZ(26,"th",8),t._uU(27,"Start Date"),t.qZA(),t.TgZ(28,"th",8),t._uU(29,"Principal"),t.qZA(),t.TgZ(30,"th",8),t._uU(31,"Maturity Date"),t.qZA(),t.TgZ(32,"th",8),t._uU(33,"Maturity Amount"),t.qZA(),t._UZ(34,"th",9),t.qZA()(),t.YNc(35,ut,4,0,"tbody",10),t.YNc(36,ft,3,2,"ng-template",null,11,t.W1O),t.qZA()()(),t.YNc(38,gt,1,1,"term-deposit-form",12),t.YNc(39,vt,1,1,"term-deposit-delete",12)),2&e){const r=t.MAs(37);t.xp6(3),t.Q6J("ngIf",!i.isLoading),t.xp6(32),t.Q6J("ngIf",i.isLoading)("ngIfElse",r),t.xp6(3),t.Q6J("ngIf",i.showForm),t.xp6(1),t.Q6J("ngIf",i.showDelete)}},dependencies:[l.sg,l.O5,ot,mt,l.H9,l.uU],encapsulation:2}),n})()}];let Tt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[v.Bz.forChild(Zt),v.Bz]}),n})(),xt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,s.UX,s.u5,Tt]}),n})()}}]);