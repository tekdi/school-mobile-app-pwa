"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4560],{4560:(j,h,o)=>{o.r(h),o.d(h,{QrScanResultPageModule:()=>L});var m=o(6814),P=o(6223),r=o(1929),u=o(2724),g=o(5861),x=o(7442),C=o(5398),S=o(3603),y=o(553),T=o(7955),O=o(1081),t=o(9212),M=o(6215),Z=o(4874),D=o(1925),Q=o(5189),w=o(3029),f=o(8698);function R(n,s){1&n&&(t.TgZ(0,"ion-item")(1,"div",5)(2,"div",6),t._UZ(3,"app-skeleton-item",7),t.qZA(),t.TgZ(4,"div",8)(5,"div",9),t._UZ(6,"app-skeleton-item",10),t.qZA(),t.TgZ(7,"div",11),t._UZ(8,"app-skeleton-item",10),t.qZA()()()())}const b=()=>[0,1,2,3,4,5,6,7,8];function A(n,s){1&n&&(t.TgZ(0,"ion-list",3),t.YNc(1,R,9,0,"ion-item",4),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",t.DdM(1,b)))}function I(n,s){1&n&&(t.TgZ(0,"div",12),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"CONTENT_IS_BEING_ADDED")))}function J(n,s){1&n&&(t.TgZ(0,"div",17)(1,"div",18),t._UZ(2,"img",19),t.TgZ(3,"div",20),t._uU(4),t.ALo(5,"translate"),t.qZA()(),t.TgZ(6,"div",18),t._UZ(7,"img",21),t.TgZ(8,"div",20),t._uU(9),t.ALo(10,"translate"),t.qZA()()()),2&n&&(t.xp6(4),t.Oqu(t.lcZ(5,2,"Make a Story")),t.xp6(5),t.Oqu(t.lcZ(10,4,"Ask a Doubt")))}function k(n,s){if(1&n&&t._UZ(0,"img",27),2&n){const e=t.oxw(2).$implicit;t.Q6J("src",null!=e&&null!=e.metaData&&e.metaData.thumbnail&&!e.metaData.identifier.startsWith("do_")?null==e||null==e.metaData?null:e.metaData.thumbnail:"assets/images/Audio.png",t.LSH)}}function U(n,s){if(1&n&&t._UZ(0,"img",28),2&n){const e=t.oxw(2).$implicit;t.Q6J("appThumbnail",null==e?null:e.metaData)}}function B(n,s){if(1&n&&t._UZ(0,"img",27),2&n){const e=t.oxw(2).$implicit;t.Q6J("src",null!=e&&null!=e.metaData&&e.metaData.thumbnail&&!e.metaData.identifier.startsWith("do_")?null==e||null==e.metaData?null:e.metaData.thumbnail:"assets/images/Video.png",t.LSH)}}function F(n,s){if(1&n&&t._UZ(0,"img",27),2&n){const e=t.oxw(2).$implicit;t.Q6J("src",null!=e&&null!=e.metaData&&e.metaData.thumbnail&&!e.metaData.identifier.startsWith("do_")?null==e||null==e.metaData?null:e.metaData.thumbnail:"assets/images/PDF.png",t.LSH)}}function Y(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",5)(1,"div",22),t.NdJ("click",function(i){t.CHM(e);const l=t.oxw().$implicit,d=t.oxw(2);return t.KtG(d.playContent(i,l))}),t.YNc(2,k,1,1,"img",23)(3,U,1,1,"img",24)(4,B,1,1,"img",23)(5,F,1,1,"img",23),t.qZA(),t.TgZ(6,"div",8)(7,"div",25),t._uU(8),t.qZA(),t.TgZ(9,"ion-icon",26),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.moreOtions(i))}),t.qZA()()()}if(2&n){const e=t.oxw().$implicit,a=t.oxw(2);t.xp6(2),t.Q6J("ngIf",e.metaData.mimetype===a.mimeType.AUDIO),t.xp6(1),t.Q6J("ngIf",e.metaData.mimetype===a.mimeType.YOUTUBE&&!e.play),t.xp6(1),t.Q6J("ngIf",e.metaData.mimetype===a.mimeType.MP4||e.metaData.mimetype===a.mimeType.WEBM),t.xp6(1),t.Q6J("ngIf",e.metaData.mimetype===a.mimeType.PDF),t.xp6(3),t.Oqu(null==e.metaData?null:e.metaData.name)}}function N(n,s){if(1&n&&(t.TgZ(0,"div",14),t.YNc(1,J,11,6,"div",15)(2,Y,10,5,"div",16),t.qZA()),2&n){const e=s.$implicit;t.xp6(1),t.Q6J("ngIf",!e.metaData||!e.metaData.name),t.xp6(1),t.Q6J("ngIf",e.metaData&&e.metaData.name)}}function E(n,s){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,N,3,2,"div",13),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.configContents)}}const W=[{path:"",component:(()=>{var n;class s{constructor(a,i,l,d,c,z){var p;this.headerService=a,this.location=i,this.modalCtrl=l,this.contentService=d,this.router=c,this.telemetryGeneratorService=z,this.optModalOpen=!1,this.showSheenAnimation=!0,this.scanText="",this.mimeType=S.Gn,this.navigated=!1;let _=null===(p=this.router.getCurrentNavigation())||void 0===p?void 0:p.extras;var v;_&&(this.scanText=null===(v=_.state)||void 0===v?void 0:v.scannedData,console.log("scan text ",this.scanText))}tabViewWillEnter(){this.headerService.showHeader("QR Scan Result",!0,[]),this.headerService.showStatusBar(!1)}ngOnInit(){this.headerService.headerEventEmitted$.subscribe(a=>{"back"==a&&!this.navigated&&(this.navigated=!0,this.location.back())}),this.configContents=[]}ionViewWillEnter(){this.navigated=!1,this.headerService.showHeader("QR Scan Result",!0,[]),this.headerService.showStatusBar(!1),this.contentService.getContents(this.scanText).then(a=>{this.showSheenAnimation=!1,console.log("Result: ",a),this.configContents=a}).catch(a=>{this.showSheenAnimation=!1})}playContent(a,i){var l=this;return(0,g.Z)(function*(){l.contentService.markContentAsViewed(i),yield l.router.navigate(["/player"],{state:{content:i}})})()}moreOtions(a){var i=this;return(0,g.Z)(function*(){let l;i.optModalOpen||(i.optModalOpen=!0,l=yield i.modalCtrl.create({component:T.K,componentProps:{content:a},cssClass:"sheet-modal",breakpoints:[.25],showBackdrop:!1,initialBreakpoint:.25,handle:!1,handleBehavior:"none"}),yield l.present()),l.onDidDismiss().then(function(){var d=(0,g.Z)(function*(c){i.optModalOpen=!1,c.data&&"addToPitara"===c.data.type?i.addContentToMyPitara(c.data.content||a):c.data&&"like"==c.data.type&&(i.contentService.likeContent(c.data.content||a,"guest",!0),c.data.content.metaData.isLiked&&(yield x.y.play({assetId:"windchime"}),(0,C.Z)({startVelocity:30,particleCount:400,spread:360,ticks:60,origin:{y:.5,x:.5},colors:["#a864fd","#29cdff","#78ff44","#ff718d","#fdff6a"]})),i.telemetryGeneratorService.generateInteractTelemetry("TOUCH","content-liked","qr-scan-result","qr-scan-result",new O.DR(null==a?void 0:a.metaData.identifier,null==a?void 0:a.metaData.mimetype,"")))});return function(c){return d.apply(this,arguments)}}())})()}addContentToMyPitara(a){var i=this;return(0,g.Z)(function*(){const l=yield i.modalCtrl.create({component:y.W,componentProps:{content:a},cssClass:"add-to-pitara",breakpoints:[0,1],showBackdrop:!1,initialBreakpoint:1,handle:!1,handleBehavior:"none"});yield l.present(),l.onWillDismiss().then(d=>{})})()}}return(n=s).\u0275fac=function(a){return new(a||n)(t.Y36(M.uj),t.Y36(m.Ye),t.Y36(r.IN),t.Y36(Z._),t.Y36(u.F0),t.Y36(D.E))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-qr-scan-result"]],decls:4,vars:3,consts:[["class","m-n",4,"ngIf"],["class","text-not-available",4,"ngIf"],[4,"ngIf"],[1,"m-n"],[4,"ngFor","ngForOf"],[1,"card"],["item-start","",1,"card__img"],["height","15rem","width","22rem","radius","16px"],[1,"card__metadata"],[2,"width","90%"],["height","12px","width","100%"],[2,"padding-left","1.5rem","width","10%"],[1,"text-not-available"],["class","cards-container",4,"ngFor","ngForOf"],[1,"cards-container"],["class","bot-section",4,"ngIf"],["class","card",4,"ngIf"],[1,"bot-section"],[1,"image"],["src","assets/images/Story_bot.svg","alt",""],[1,"image-title"],["src","assets/images/Question_bot.svg","alt",""],[1,"card__img",3,"click"],["alt","",3,"src",4,"ngIf"],["appThumbnail","","alt","",3,"appThumbnail",4,"ngIf"],[1,"card__title"],["aria-hidden","true","src","assets/icon/kabab-icon.svg",3,"click"],["alt","",3,"src"],["appThumbnail","","alt","",3,"appThumbnail"]],template:function(a,i){1&a&&(t.TgZ(0,"ion-content"),t.YNc(1,A,2,2,"ion-list",0)(2,I,3,3,"div",1)(3,E,2,1,"div",2),t.qZA()),2&a&&(t.xp6(1),t.Q6J("ngIf",i.showSheenAnimation),t.xp6(1),t.Q6J("ngIf",!i.configContents.length&&!i.showSheenAnimation),t.xp6(1),t.Q6J("ngIf",!i.showSheenAnimation&&i.configContents.length>0))},dependencies:[m.sg,m.O5,r.W2,r.gu,r.Ie,r.q_,Q.w,w.W,f.X$],styles:[".cards-container[_ngcontent-%COMP%]{padding:.2rem 1rem}.cards-container[_ngcontent-%COMP%]   .bot-section[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:0 1rem 1rem}.cards-container[_ngcontent-%COMP%]   .bot-section[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{position:relative}.cards-container[_ngcontent-%COMP%]   .bot-section[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .image-title[_ngcontent-%COMP%]{position:absolute;bottom:.625rem;color:var(--ion-color-primary-contrast);left:0;right:0;text-align:center}.card[_ngcontent-%COMP%]{position:relative;padding-bottom:1rem}.card__img[_ngcontent-%COMP%]{height:194px;width:100%;overflow:hidden}.card__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;width:100%;height:100%;border-radius:1rem}.card__metadata[_ngcontent-%COMP%]{padding-top:.5rem;display:flex;align-items:center;justify-content:space-between}.card__metadata[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{height:1.75rem;width:1.75rem}.card__action-btns[_ngcontent-%COMP%]{display:flex;align-items:center}.card__action-btns[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;margin-right:1rem}.card__action-btns[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]:last-child{margin-left:auto;margin-right:0}.card__title[_ngcontent-%COMP%]{font-size:.75rem;font-weight:400;width:90%;text-transform:capitalize;word-break:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.no-data[_ngcontent-%COMP%]{text-align:center}ion-content[_ngcontent-%COMP%]{--padding-top: 5rem !important}ion-list[_ngcontent-%COMP%]{background-color:transparent}ion-item[_ngcontent-%COMP%]{--background: transparent}.text-not-available[_ngcontent-%COMP%]{position:absolute;left:30%;right:0;top:20%;transform:translate(-20%,-20%);text-align:center;color:var(--ion-color-medium);font-size:.75rem}"]}),s})()}];let $=(()=>{var n;class s{}return(n=s).\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.Bz.forChild(W),u.Bz]}),s})();var H=o(822),G=o(577);let L=(()=>{var n;class s{}return(n=s).\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[m.ez,P.u5,r.Pc,$,f.aw,H.K,G.o]}),s})()}}]);