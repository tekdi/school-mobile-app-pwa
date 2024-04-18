"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6770],{6770:(et,D,r)=>{r.r(D),r.d(D,{ViewAllPageModule:()=>tt});var b=r(6814),S=r(6223),v=r(1929),k=r(2724),u=r(5861),g=r(3603),V=r(1586),A=r(3522),Y=r(7874),I=r(7955),U=r(553),B=r(7442),F=r(5398),H=r(546),Z=r.n(H),J=r(9691),E=r(8697),t=r(9212),N=r(4874),L=r(6215),j=r(2579),Q=r(7346),T=r(8698);function G(a,m){if(1&a&&(t.TgZ(0,"div",11),t._uU(1),t.qZA()),2&a){const l=t.oxw().$implicit;t.xp6(1),t.Oqu(null==l||null==l.metaData?null:l.metaData.name)}}function R(a,m){if(1&a){const l=t.EpF();t.TgZ(0,"div",12),t.NdJ("click",function(){t.CHM(l);const n=t.oxw().$implicit,o=t.oxw();return t.KtG(o.openModal(n))}),t._UZ(1,"ion-icon",13),t.qZA()}}function $(a,m){if(1&a){const l=t.EpF();t.TgZ(0,"div")(1,"ion-checkbox",14),t.NdJ("ionChange",function(n){t.CHM(l);const o=t.oxw().index,c=t.oxw();return t.KtG(c.isContentSelect(n,o))}),t.qZA()()}if(2&a){const l=t.oxw().$implicit;t.xp6(1),t.Q6J("checked",l.isSelected)}}function z(a,m){if(1&a){const l=t.EpF();t.TgZ(0,"div",4),t.NdJ("click",function(){const o=t.CHM(l).$implicit,c=t.oxw();return t.KtG(c.playcontent(o))}),t.TgZ(1,"div",5),t._UZ(2,"img",6),t.qZA(),t.TgZ(3,"div",7),t.YNc(4,G,2,1,"div",8)(5,R,2,0,"div",9)(6,$,2,1,"div",10),t.qZA()()}if(2&a){const l=m.$implicit,e=t.oxw();t.xp6(2),t.Q6J("src",null==l||null==l.metaData?null:l.metaData.thumbnail,t.LSH),t.xp6(2),t.Q6J("ngIf",null==l||null==l.metaData?null:l.metaData.name),t.xp6(1),t.Q6J("ngIf","recentlyviewed"===e.type),t.xp6(1),t.Q6J("ngIf","playlist"===e.type)}}function K(a,m){if(1&a){const l=t.EpF();t.TgZ(0,"div",15)(1,"div",16)(2,"div",17)(3,"div",18),t._uU(4),t.qZA(),t._UZ(5,"ion-icon",19),t.qZA(),t.TgZ(6,"div",20),t.NdJ("click",function(){t.CHM(l);const n=t.oxw();return t.KtG(n.uploadLocalContents())}),t._UZ(7,"ion-icon",21),t.qZA(),t.TgZ(8,"div",22)(9,"ion-button",23),t.NdJ("click",function(){t.CHM(l);const n=t.oxw();return t.KtG(n.createList())}),t._uU(10),t.ALo(11,"translate"),t.qZA()()()()}if(2&a){const l=t.oxw();t.xp6(4),t.Oqu(l.selectedContents.length),t.xp6(5),t.Q6J("disabled",!l.selectedContents.length),t.xp6(1),t.hij(" ",t.lcZ(11,3,"createPlaylist")," ")}}const W=a=>({"createList-cards":a}),X=[{path:"",component:(()=>{var a;class m{constructor(e,n,o,c,s,h,p,d){var P;this.contentService=e,this.router=n,this.headerService=o,this.playListService=c,this.platform=s,this.location=h,this.modalCtrl=p,this.utilService=d,this.contentList=[],this.type="",this.playlists=[],this.selectedContents=[],this.optModalOpen=!1,this.resolveNativePath=y=>new Promise((M,_)=>{window.FilePath.resolveNativePath(y,M,w=>{console.error(`${y} could not be resolved by the plugin: ${w.message}`),_(w)})}),this.navigated=!1;let f=null===(P=this.router.getCurrentNavigation())||void 0===P?void 0:P.extras;var O;f&&(this.type=null===(O=f.state)||void 0===O?void 0:O.type)}ngOnInit(){var e=this;return(0,u.Z)(function*(){e.platform.backButton.subscribeWithPriority(11,(0,u.Z)(function*(){e.location.back(),e.headerService.deviceBackBtnEvent({name:"backBtn"})})),e.headerService.headerEventEmitted$.subscribe(n=>{"back"===n&&!e.navigated&&(e.navigated=!0,e.location.back())}),e.getRecentlyviewedContent()})()}getPlaylistContent(){var e=this;return(0,u.Z)(function*(){yield e.playListService.getAllPlayLists("guest").then(n=>{n&&(e.playlists=n)}).catch(n=>{console.log("error",n)})})()}getRecentlyviewedContent(){var e=this;return(0,u.Z)(function*(){yield e.contentService.getRecentlyViewedContent("guest").then(n=>{e.contentList=n,e.contentList.map(o=>o.metaData="string"==typeof o.metaData?JSON.parse(o.metaData):o.metaData),e.contentList=e.getContentImgPath(e.contentList)}).catch(n=>{console.log("error",n)})})()}createList(){let e=[];this.contentList.forEach(n=>{n.isSelected&&e.push(n)}),console.log("...................",e),this.router.navigate(["/create-playlist"],{state:{selectedContents:e}})}deletePlaylist(){var e=this;return(0,u.Z)(function*(){yield e.playListService.deletePlayList(e.deleteContent.identifier).then(n=>{e.getPlaylistContent()}).catch(n=>{console.log("err",n)})})()}ionViewWillEnter(){this.navigated=!1,"recentlyviewed"===this.type?this.headerService.showHeader("Recently Viewed",!0):"playlist"===this.type&&this.headerService.showHeader("Select from Recently Viewed",!0),this.getPlaylistContent()}openModal(e){var n=this;return(0,u.Z)(function*(){let o;n.optModalOpen||(n.optModalOpen=!0,o=yield n.modalCtrl.create({component:I.K,componentProps:{content:e},cssClass:"sheet-modal",breakpoints:[.25],showBackdrop:!1,initialBreakpoint:.25,handle:!1,handleBehavior:"none"}),yield o.present()),o.onDidDismiss().then(function(){var c=(0,u.Z)(function*(s){n.optModalOpen=!1,s.data&&"addToPitara"===s.data.type?n.addContentToMyPitara(s.data.content||e):s.data&&"like"==s.data.type&&(n.contentService.likeContent(s.data.content||e,"guest",!0),s.data.content.metaData.isLiked&&(yield B.y.play({assetId:"windchime"}),(0,F.Z)({startVelocity:30,particleCount:400,spread:360,ticks:60,origin:{y:.5,x:.5},colors:["#a864fd","#29cdff","#78ff44","#ff718d","#fdff6a"]})))});return function(s){return c.apply(this,arguments)}}())})()}addContentToMyPitara(e){var n=this;return(0,u.Z)(function*(){const o=yield n.modalCtrl.create({component:U.W,componentProps:{content:e},cssClass:"add-to-pitara",breakpoints:[0,1],showBackdrop:!1,initialBreakpoint:1,handle:!1,handleBehavior:"none"});yield o.present(),o.onWillDismiss().then(c=>{})})()}isContentSelect(e,n){this.contentList[n].isSelected=e.detail.checked,this.checkSelectedContent()}checkSelectedContent(){this.selectedContents=[],this.contentList.forEach(e=>{e.isSelected&&this.selectedContents.push(e)})}openFilePicker(){var e=this;return(0,u.Z)(function*(){let n=[g.HY.PDF];n=n.concat(g.HY.VIDEOS).concat(g.HY.AUDIO);const{files:o}=yield V.G.pickFiles({types:n,multiple:!0,readData:!1});let c=[];const s=yield e.utilService.getLoader();yield s.present();for(let h=0;h<o.length;h++){const p=yield e.resolveNativePath(o[h].path);console.log("path",p);const d=p.substring(p.lastIndexOf("/")+1);c.push({source:"local",sourceType:"local",metaData:{identifier:(0,Y.SHA1)(p).toString(),url:p,name:d,mimetype:A.l.getMimeType(d),thumbnail:""}})}yield s.dismiss(),c.length&&(c=e.getContentImgPath(c,!0),e.contentList=c.concat(e.contentList))})()}getContentImgPath(e,n){return e.forEach(o=>{var c;o.metaData.thumbnail=o.metaData.mimetype===g.Gn.YOUTUBE?this.loadYoutubeImg(o.metaData):!o.metaData.thumbnail||null!=o&&null!==(c=o.metaData.identifier)&&void 0!==c&&c.startsWith("do_")?A.l.getImagePath(o.metaData.mimetype||o.metaData.mimeType):o.mediaData.thumbnail,n&&(o.isSelected=!0,this.selectedContents.push(o))}),e}loadYoutubeImg(e){let n=e.identifier;return n&&n.startsWith("do_")&&(n=Z()(e.url)),`https://img.youtube.com/vi/${n}/mqdefault.jpg`}playcontent(e){var n=this;return(0,u.Z)(function*(){"recentlyviewed"===n.type&&!n.optModalOpen&&(yield n.router.navigate(["/player"],{state:{content:e}}))})()}uploadLocalContents(){var e=this;return(0,u.Z)(function*(){let n;e.optModalOpen||(e.optModalOpen=!0,n=yield e.modalCtrl.create({component:J.j,componentProps:{uploadType:[{type:"url",label:"Upload from Youtube"},{type:"file",label:"Upload from Local Files"},{type:"diksha",label:"Upload from Diksha"}]},cssClass:"sheet-modal",breakpoints:[.25],showBackdrop:!1,initialBreakpoint:.25,handle:!1,handleBehavior:"none"}),yield n.present()),n.onDidDismiss().then(function(){var o=(0,u.Z)(function*(c){e.optModalOpen=!1,"file"===c.data.type?e.openFilePicker():e.createYoutubeContent(c.data.type)});return function(c){return o.apply(this,arguments)}}())})()}createYoutubeContent(e){var n=this;return(0,u.Z)(function*(){const o=yield n.modalCtrl.create({component:E.$,componentProps:{title:"url"==e?"Add Youtube URL":"Add Diksha URL",placeholder:"Name"},cssClass:"auto-height"});yield o.present(),o.onDidDismiss().then(function(){var c=(0,u.Z)(function*(s){var h;let p=null===(h=s.data)||void 0===h?void 0:h.url;if(s&&"create"===s.data.type){let d=[];const P=yield n.utilService.getLoader();yield P.present();let f="";if("url"===e)f=Z()(p),d.push({source:"local",sourceType:"local",metaData:{identifier:f,url:"https://www.youtube.com/watch?v="+f,name:s.data.name,mimetype:g.HY.YOUTUBE,thumbnail:""}}),d=n.getContentImgPath(d,!0),n.contentList=d.concat(n.contentList);else if("diksha"===e){f=p.split("/").filter(y=>y.startsWith("do_"));try{yield n.contentService.readDikshaContents(f[0]).then(function(){var y=(0,u.Z)(function*(M){var _,w;console.log("res ",M);let i=null===(_=M.body)||void 0===_||null===(_=_.result)||void 0===_?void 0:_.content;if((null===(w=i.dialcodes)||void 0===w?void 0:w.length)>0)yield n.contentService.getContents(i.dialcodes[0]).then(C=>{console.log("content data ",C),C.length>0&&(C.forEach(x=>{x.source="local",(x.metaData.mimetype==g.HY.PDF||x.metaData.mimetype==g.HY.VIDEO)&&d.push(x)}),d=n.getContentImgPath(d,!0),n.contentList=d.concat(n.contentList))});else if(i.mediaType="content"){let C={source:"local",sourceType:"diksha",metaData:{identifier:null==i?void 0:i.identifier,name:null==i?void 0:i.name,thumbnail:null==i?void 0:i.posterImage,description:null==i?void 0:i.name,mimetype:(null==i?void 0:i.mimetype)||(null==i?void 0:i.mimeType),url:null==i?void 0:i.streamingUrl,focus:null==i?void 0:i.focus,keyword:null==i?void 0:i.keyword,domain:null==i?void 0:i.domain,curriculargoal:null==i?void 0:i.curriculargoal,competencies:null==i?void 0:i.competencies,language:null==i?void 0:i.language,category:null==i?void 0:i.category,audience:null==i?void 0:i.audience,status:null==i?void 0:i.status,createdon:null==i?void 0:i.createdOn,lastupdatedon:(null==i?void 0:i.lastupdatedon)||(null==i?void 0:i.lastUpdatedOn),artifactUrl:null==i?void 0:i.artifactUrl}};(C.metaData.mimetype==g.HY.PDF||C.metaData.mimetype==g.HY.VIDEO)&&(d.push(C),d=n.getContentImgPath(d,!0),n.contentList=d.concat(n.contentList))}});return function(M){return y.apply(this,arguments)}}())}catch(y){console.log("server err ",y)}}yield P.dismiss()}});return function(s){return c.apply(this,arguments)}}())})()}}return(a=m).\u0275fac=function(e){return new(e||a)(t.Y36(N._),t.Y36(k.F0),t.Y36(L.uj),t.Y36(j.r),t.Y36(Q.t4),t.Y36(b.Ye),t.Y36(v.IN),t.Y36(L.fK))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-view-all"]],viewQuery:function(e,n){if(1&e&&t.Gf(v.ki,5),2&e){let o;t.iGM(o=t.CRH())&&(n.modal=o.first)}},decls:4,vars:6,consts:[[3,"fullscreen"],[1,"cards-container",3,"ngClass"],["class","card",3,"click",4,"ngFor","ngForOf"],["class","view-all-btn",4,"ngIf"],[1,"card",3,"click"],[1,"card__img"],["alt","Playlist Image",3,"src"],[1,"card__metadata"],["class","card__title",4,"ngIf"],[3,"click",4,"ngIf"],[4,"ngIf"],[1,"card__title"],[3,"click"],["slot","end","aria-hidden","true","src","../../../assets/icon/kabab-icon.svg"],[1,"playlist-card__checkbox",3,"checked","ionChange"],[1,"view-all-btn"],[1,"view-playlist"],[1,"view-playlist__icon"],[1,"count"],["aria-hidden","true","src","assets/icon/pitara-blue.svg"],[1,"view-playlist__icon",3,"click"],["aria-hidden","true","src","assets/icon/file-upload.svg"],[1,"view-playlist__button"],["fill","outline",1,"new-playlist__btn",3,"disabled","click"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-content",0)(1,"div",1),t.YNc(2,z,7,4,"div",2),t.qZA()(),t.YNc(3,K,12,5,"div",3)),2&e&&(t.Q6J("fullscreen",!0),t.xp6(1),t.Q6J("ngClass",t.VKq(4,W,"playlist"===n.type)),t.xp6(1),t.Q6J("ngForOf",n.contentList),t.xp6(1),t.Q6J("ngIf","playlist"===n.type))},dependencies:[b.mk,b.sg,b.O5,v.YG,v.nz,v.W2,v.gu,v.w,T.X$],styles:[".cards-container[_ngcontent-%COMP%]{padding:.2rem 1rem}.cards-container[_ngcontent-%COMP%]   .bot-section[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:0 1rem 1rem}.cards-container[_ngcontent-%COMP%]   .bot-section[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{position:relative}.cards-container[_ngcontent-%COMP%]   .bot-section[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .image-title[_ngcontent-%COMP%]{position:absolute;bottom:.625rem;color:var(--ion-color-primary-contrast);left:0;right:0;text-align:center}.card[_ngcontent-%COMP%]{position:relative;padding-bottom:1rem}.card__img[_ngcontent-%COMP%]{height:194px;width:100%;overflow:hidden}.card__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;width:100%;height:100%;border-radius:1rem}.card__metadata[_ngcontent-%COMP%]{padding-top:.5rem;display:flex;align-items:center;justify-content:space-between}.card__metadata[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{height:1.75rem;width:1.75rem}.card__action-btns[_ngcontent-%COMP%]{display:flex;align-items:center}.card__action-btns[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;margin-right:1rem}.card__action-btns[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]:last-child{margin-left:auto;margin-right:0}.card__title[_ngcontent-%COMP%]{font-size:.75rem;font-weight:400;width:90%;text-transform:capitalize;word-break:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.no-data[_ngcontent-%COMP%]{text-align:center}.cards-container[_ngcontent-%COMP%]{padding-top:.5rem}.card[_ngcontent-%COMP%]{display:flex}.card__img[_ngcontent-%COMP%]{width:100%;height:4.5rem;max-width:7.5rem}.card__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:.5rem}.card__metadata[_ngcontent-%COMP%]{padding-top:0;padding-left:.5rem;align-items:flex-start;width:100%}.view-playlist[_ngcontent-%COMP%]{position:fixed;bottom:.188rem;width:98%;height:4rem;background-color:var(--ion-color-secondary);border-radius:3.125rem;display:flex;align-items:center;padding:.5rem}.view-playlist__icon[_ngcontent-%COMP%]{width:3rem;height:3rem;background-color:var(--ion-color-primary-contrast);border-radius:50%;display:flex;align-items:center;justify-content:center;position:relative;margin-right:5%}.view-playlist__icon[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]{position:absolute;top:-.188rem;right:-.188rem;background:var(--ion-color-primary);border-radius:50%;font-size:.625rem;width:1.125rem;height:1.125rem;display:flex;align-items:center;justify-content:center;color:var(--ion-color-primary-contrast)}.view-playlist__icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem}.view-playlist__button[_ngcontent-%COMP%]{margin-left:auto}.view-playlist__button[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{font-size:.75rem;font-weight:700}.view-all-btn[_ngcontent-%COMP%]{display:flex;justify-content:center}[_nghost-%COMP%]   ion-checkbox[_ngcontent-%COMP%]{--border-radius: 50% !important;--border-color: var(--ion-color-medium) !important;--size: 1.5rem !important;--checkbox-background-checked: var(--ion-color-secondary) !important;--border-color-checked: var(--ion-color-secondary) !important;margin:0}[_nghost-%COMP%]   ion-button.new-playlist__btn[_ngcontent-%COMP%]{--background: var(--ion-color-secondary);--color: var(--ion-color-primary-contrast);--border-radius: 1.875rem;--border-color: var(--ion-color-primary-contrast);--border-style: solid;--border-width: 1px;--box-shadow: none}ion-content[_ngcontent-%COMP%]{--padding-top: 3.2rem}.createList-cards[_ngcontent-%COMP%]{height:calc(100vh - 120px);overflow:auto}"]}),m})()}];let q=(()=>{var a;class m{}return(a=m).\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[k.Bz.forChild(X),k.Bz]}),m})(),tt=(()=>{var a;class m{}return(a=m).\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[b.ez,S.u5,v.Pc,q,T.aw]}),m})()}}]);