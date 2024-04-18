"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1321],{1321:(j,m,s)=>{s.r(m),s.d(m,{SplashPageModule:()=>T});var v=s(6814),P=s(6223),u=s(1929),d=s(2724),p=s(5861),M=s(4004),C=s(646),e=s(9212),O=s(1168),S=s(2397),r=s(6215),y=s(1925),x=s(8698);const Z=[{path:"",component:(()=>{var n;class a{constructor(t,l,f,i,g,h,o,Y,E,A,N){this.appinitialise=t,this.storage=l,this.router=f,this.headerService=i,this.telemetryGeneratorService=g,this.utilService=h,this.cachingService=o,this.configService=Y,this.translate=E,this.apiService=A,this.lcoalNotifService=N,this.cachingService.initStorage()}ngOnInit(){var t=this;return(0,p.Z)(function*(){var l;t.headerService.showStatusBar(!0),t.headerService.hideHeader(),C.a.getInstance().init(yield t.utilService.getDeviceId()),t.apiService.onInit().subscribe();let f=(0,M.Z)();t.storage.setData("sid",f),t.appinitialise.initialize(),setTimeout((0,p.Z)(function*(){console.log("route"),t.startTelemetry(),t.router.navigate(["/tabs/home"])}),2e3);let i=yield t.configService.getConfigMeta(),g=null==i||null===(l=i.notification)||void 0===l?void 0:l.android;g&&(yield t.lcoalNotifService.cancelNotification(g.id),yield t.lcoalNotifService.initializeLocalNotif(g)),t.storage.setData("configMeta",JSON.stringify(i));let h=yield t.storage.getData("lang");h?t.translate.use(h):null==i||i.languages.forEach(o=>{null!=o&&o.default&&(t.storage.setData("lang",o.id),t.translate.use(o.id),t.translate.setDefaultLang(o.id))})})()}startTelemetry(){var t=this;return(0,p.Z)(function*(){t.telemetryGeneratorService.genererateAppStartTelemetry(yield t.utilService.getDeviceSpec())})()}}return(n=a).\u0275fac=function(t){return new(t||n)(e.Y36(O.I),e.Y36(S.V),e.Y36(d.F0),e.Y36(r.uj),e.Y36(y.E),e.Y36(r.fK),e.Y36(r.$P),e.Y36(r.E4),e.Y36(x.sK),e.Y36(r.sM),e.Y36(r.sx))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-splash"]],decls:13,vars:1,consts:[[1,"splash-screen",3,"fullscreen"],[1,"splash-screen-header"],[1,"MOE-logos"],["src","assets/images/Ministry_of_Education_India.svg","alt","Ministry logo"],["src","assets/images/NCERT_1.svg","alt","NCERT image"],[1,"bhashini-logo"],[1,"text"],["src","assets/images/bhashini-logo.png","alt","bhashini"],[1,"splash-screen_box"],["src","assets/images/splash-center-box.png","alt","Pitara box",1,"pitara-box"],[1,"footer-img"],["src","assets/images/pitara-logo.png","alt","pitara-logo"]],template:function(t,l){1&t&&(e.TgZ(0,"ion-content",0)(1,"div",1)(2,"div",2),e._UZ(3,"img",3)(4,"img",4),e.qZA(),e.TgZ(5,"div",5)(6,"span",6),e._uU(7,"Powered by"),e.qZA(),e._UZ(8,"img",7),e.qZA()(),e.TgZ(9,"div",8),e._UZ(10,"img",9),e.qZA(),e.TgZ(11,"div",10),e._UZ(12,"img",11),e.qZA()()),2&t&&e.Q6J("fullscreen",!0)},dependencies:[u.W2],styles:["ion-content[_ngcontent-%COMP%]{--padding-top: 0;--background: url(/assets/images/splash-bg1.png) center center / cover no-repeat}.splash-screen[_ngcontent-%COMP%]   .splash-screen-header[_ngcontent-%COMP%]{height:13%;display:flex;justify-content:space-between;align-items:center;padding:2rem 1rem .5rem;background-color:#fff}.splash-screen[_ngcontent-%COMP%]   .splash-screen-header[_ngcontent-%COMP%]   .MOE-logos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child{width:100px;margin-right:1rem}.splash-screen[_ngcontent-%COMP%]   .splash-screen-header[_ngcontent-%COMP%]   .MOE-logos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:last-child{width:36px}.splash-screen[_ngcontent-%COMP%]   .splash-screen-header[_ngcontent-%COMP%]   .bhashini-logo[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}.splash-screen[_ngcontent-%COMP%]   .splash-screen-header[_ngcontent-%COMP%]   .bhashini-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:65px}.splash-screen[_ngcontent-%COMP%]   .splash-screen-header[_ngcontent-%COMP%]   .bhashini-logo[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:10px}.splash-screen[_ngcontent-%COMP%]   .splash-screen-img[_ngcontent-%COMP%]{padding-top:1rem;display:flex;justify-content:center;align-items:center;height:41%}.splash-screen[_ngcontent-%COMP%]   .splash-screen-img[_ngcontent-%COMP%]   .pm-logo[_ngcontent-%COMP%]{width:70%}.splash-screen[_ngcontent-%COMP%]   .splash-screen_box[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:55%}.splash-screen[_ngcontent-%COMP%]   .splash-screen_box[_ngcontent-%COMP%]   .pitara-box[_ngcontent-%COMP%]{width:80%}.splash-screen[_ngcontent-%COMP%]   .footer-img[_ngcontent-%COMP%]{position:fixed;bottom:-25%;background:white;border-radius:50%;width:100%;height:50%;display:flex;align-items:flex-start;justify-content:center;left:50%;transform:translate(-50%)}.splash-screen[_ngcontent-%COMP%]   .footer-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:11rem}"]}),a})()}];let b=(()=>{var n;class a{}return(n=a).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.Bz.forChild(Z),d.Bz]}),a})(),T=(()=>{var n;class a{}return(n=a).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[v.ez,P.u5,u.Pc,b]}),a})()}}]);