"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5844],{5844:(M,l,n)=>{n.r(l),n.d(l,{StoryPageModule:()=>S});var c=n(1929),d=n(6814),g=n(6223),i=n(2724),o=n(9212),h=n(6215),y=n(1925),m=n(6305);const f=[{path:"",component:(()=>{var t;class s{constructor(e,r,u){this.headerService=e,this.router=r,this.telemetry=u}ngOnInit(){this.config={type:"story"}}tabViewWillEnter(){this.ionViewWillEnter()}ionViewWillEnter(){this.config={type:"story"},this.headerService.showHeader("Katha Sakhi",!0,["bot"]),this.headerService.showStatusBar(!1,"#CF4147")}handleBotEvent(e){e&&(this.cdata={audioMessagesCount:e.audio,textMessagesCount:e.text},this.duration=e.duration),this.router.navigate(["/tabs/home"])}ngOnDestroy(){this.telemetry.generateEndTelemetry("bot","end","story-sakhi","story-sakhi",void 0,void 0,void 0,this.duration,this.cdata)}}return(t=s).\u0275fac=function(e){return new(e||t)(o.Y36(h.uj),o.Y36(i.F0),o.Y36(y.E))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-story"]],decls:2,vars:2,consts:[[3,"fullscreen"],[3,"config","botMessageEvent"]],template:function(e,r){1&e&&(o.TgZ(0,"ion-content",0)(1,"app-bot-messages",1),o.NdJ("botMessageEvent",function(P){return r.handleBotEvent(P)}),o.qZA()()),2&e&&(o.Q6J("fullscreen",!0),o.xp6(1),o.Q6J("config",r.config))},dependencies:[c.W2,m.S],styles:["ion-content[_ngcontent-%COMP%]{--padding-top: 5rem !important;height:100%}"]}),s})()}];let p=(()=>{var t;class s{}return(t=s).\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[i.Bz.forChild(f),i.Bz]}),s})();var v=n(822);let S=(()=>{var t;class s{}return(t=s).\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[c.Pc,d.ez,g.u5,p,v.K]}),s})()}}]);