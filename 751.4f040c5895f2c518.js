"use strict";(self.webpackChunkCartProject=self.webpackChunkCartProject||[]).push([[751],{1751:(_,c,i)=>{i.r(c),i.d(c,{SettingsModule:()=>v});var m=i(6814),l=i(7163),r=i(95),t=i(4769),p=i(9862);let u=(()=>{class e{constructor(s){this._HttpClient=s,this.baseUrl="https://ecommerce.routemisr.com"}forgotPassord(s){return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/forgotPasswords`,s)}resetCode(s){return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/verifyResetCode`,s)}static#t=this.\u0275fac=function(o){return new(o||e)(t.LFG(p.eN))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function g(e,d){1&e&&(t.TgZ(0,"p"),t._uU(1,"email is required"),t.qZA())}function f(e,d){1&e&&(t.TgZ(0,"p"),t._uU(1,"Enter valid Email"),t.qZA())}function h(e,d){if(1&e&&(t.TgZ(0,"div",8),t.YNc(1,g,2,0,"p",9),t.YNc(2,f,2,0,"p",9),t.qZA()),2&e){const s=t.oxw();let o,n;t.xp6(1),t.Q6J("ngIf",null==(o=s.PasswordForm.get("email"))||null==o.errors?null:o.errors.required),t.xp6(1),t.Q6J("ngIf",null==(n=s.PasswordForm.get("email"))||null==n.errors?null:n.errors.email)}}const w=[{path:" ",redirectTo:"ForgetPasswordComponent",pathMatch:"full"},{path:"forgetpassword",component:(()=>{class e{constructor(s,o){this._SettingService=s,this._Router=o,this.PasswordForm=new r.cw({email:new r.NI(null,[r.kI.required,r.kI.email])})}SendCode(s){console.log(s.value),this._SettingService.forgotPassord(s.value).subscribe({next:o=>{console.log(o),this._Router.navigate(["/settings/resetCode"])},error:o=>{console.log(o)}})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(u),t.Y36(l.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-forget-password"]],decls:12,vars:3,consts:[[1,"container"],[1,"mt-4","w-50","mx-auto","shadow-sm","p-4","bg-light"],[3,"formGroup","ngSubmit"],[1,"my-4"],["for","email"],["formControlName","email","type","email","id","email",1,"form-control"],["class","alert alert-danger p-1 mt-2",4,"ngIf"],[1,"btn","rounded-pill","bg-main","text-white","d-block","ms-auto","mt-4",3,"disabled"],[1,"alert","alert-danger","p-1","mt-2"],[4,"ngIf"]],template:function(o,n){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1"),t._uU(3,"Forgot Password"),t.qZA(),t.TgZ(4,"form",2),t.NdJ("ngSubmit",function(){return n.SendCode(n.PasswordForm)}),t.TgZ(5,"div",3)(6,"label",4),t._uU(7,"Email:"),t.qZA(),t._UZ(8,"input",5),t.YNc(9,h,3,2,"div",6),t.qZA(),t.TgZ(10,"button",7),t._uU(11," Verify "),t.qZA()()()()),2&o){let a;t.xp6(4),t.Q6J("formGroup",n.PasswordForm),t.xp6(5),t.Q6J("ngIf",(null==(a=n.PasswordForm.get("email"))?null:a.errors)&&(null==(a=n.PasswordForm.get("email"))?null:a.touched)),t.xp6(1),t.Q6J("disabled",n.PasswordForm.invalid)}},dependencies:[m.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u]})}return e})()},{path:"resetCode",component:(()=>{class e{constructor(s,o){this._SettingService=s,this._Router=o,this.resetForm=new r.cw({code:new r.NI(null,[r.kI.required])})}changePasssword(s){console.log(s.value),this._SettingService.resetCode(s.value).subscribe({next:o=>{console.log(o)},error:o=>{console.log(o)}})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(u),t.Y36(l.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-reset-code"]],decls:9,vars:1,consts:[[1,"container"],[1,"mt-4","w-50","mx-auto","shadow-sm","p-4","bg-light"],[3,"formGroup","ngSubmit"],[1,"my-4"],["for","code"],["formControlName","code","type","text","id","code",1,"form-control"],[1,"btn","rounded-pill","bg-main","text-white","d-block","ms-auto","mt-4"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form",2),t.NdJ("ngSubmit",function(){return n.changePasssword(n.resetForm)}),t.TgZ(3,"div",3)(4,"label",4),t._uU(5,"code:"),t.qZA(),t._UZ(6,"input",5),t.qZA(),t.TgZ(7,"button",6),t._uU(8," Verify "),t.qZA()()()()),2&o&&(t.xp6(2),t.Q6J("formGroup",n.resetForm))},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u]})}return e})()},{path:"resetpassword",component:(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-reset-password"]],decls:2,vars:0,template:function(o,n){1&o&&(t.TgZ(0,"p"),t._uU(1,"reset-password works!"),t.qZA())}})}return e})()}];let C=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(w),l.Bz]})}return e})(),v=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[m.ez,C,r.u5,r.UX]})}return e})()}}]);