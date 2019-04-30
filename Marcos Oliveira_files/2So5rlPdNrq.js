if (self.CavalryLogger) { CavalryLogger.start_js(["WzyLd"]); }

__d("SwapButtonDEPRECATED",["Arbiter","CSS","Event","Focus"],(function(a,b,c,d,e,f){function a(a,c,d){this._swapperButton=a,this._swappeeButton=c,b("Event").listen(a,"click",this.swap.bind(this)),d&&b("Event").listen(c,"click",this.unswap.bind(this)),b("Arbiter").subscribe("SwapButtonDEPRECATED/focusOnJoinButton",this.setFocusOnSwapper.bind(this),"all")}Object.assign(a.prototype,{_swapperButton:null,_swappeeButton:null,swap:function(a){b("CSS").hide(this._swapperButton),b("CSS").show(this._swappeeButton),a!==!1&&b("Focus").setWithoutOutline(this._swappeeButton)},unswap:function(a){b("CSS").show(this._swapperButton),b("CSS").hide(this._swappeeButton),a!==!1&&b("Focus").setWithoutOutline(this._swapperButton)},toggle:function(){b("CSS").toggle(this._swapperButton),b("CSS").toggle(this._swappeeButton)},setFocusOnSwapper:function(){this._swapperButton.focus()}});e.exports=a}),null);
__d("QualityOfConnectionsExperimentEvents",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({SHOW_MODAL:"SHOW_MODAL",CLICK_LIKE:"CLICK_LIKE",CLICK_FOLLOW:"CLICK_FOLLOW",CLICK_UNFOLLOW:"CLICK_UNFOLLOW",CLICK_MODAL_LIKE:"CLICK_MODAL_LIKE",CLICK_MODAL_UNLIKE:"CLICK_MODAL_UNLIKE",CLICK_MODAL_FOLLOW:"CLICK_MODAL_FOLLOW",CLICK_MODAL_UNFOLLOW:"CLICK_MODAL_UNFOLLOW",CLOSE_MODAL:"CLOSE_MODAL",LIKE_BUTTON_IMPRESSION:"LIKE_BUTTON_IMPRESSION",FOLLOW_BUTTON_IMPRESSION:"FOLLOW_BUTTON_IMPRESSION"})}),null);
__d("QualityOfConnectionsExperimentTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:QualityOfConnectionsExperimentLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:QualityOfConnectionsExperimentLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:QualityOfConnectionsExperimentLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setError=function(a){this.$1.error=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setExperimentGroup=function(a){this.$1.experiment_group=a;return this};c.setFollowPage=function(a){this.$1.follow_page=a;return this};c.setLikePage=function(a){this.$1.like_page=a;return this};c.setPageID=function(a){this.$1.page_id=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={error:!0,event:!0,experiment_group:!0,follow_page:!0,like_page:!0,page_id:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("XFollowPrivacyNuxLogViewAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/follow/follow_privacy/nux/log/view/",{})}),null);
__d("XPagesQualityOfConnectionsExperimentController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/quality_of_connections_experiment/",{page_id:{type:"FBID",required:!0},__asyncDialog:{type:"Int"}})}),null);
__d("XPubcontentChainedSuggestionsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pubcontent/chained_suggestions/",{pageid:{type:"String"},profileid:{type:"Int"},eh:{type:"Bool",defaultValue:!1},friendid:{type:"Int"}})}),null);
__d("SubscribeButton",["Arbiter","AsyncRequest","Button","CSS","Event","QualityOfConnectionsExperimentEvents","QualityOfConnectionsExperimentTypedLogger","TooltipData","XFollowPrivacyNuxLogViewAsyncController","XPagesQualityOfConnectionsExperimentController","XPubcontentChainedSuggestionsController","qex"],(function(a,b,c,d,e,f){__p&&__p();var g={SUBSCRIBED:"FollowingUser",UNSUBSCRIBED:"UnfollowingUser",_enable:function(a){b("Button").setEnabled(a,!0),b("TooltipData").remove(a)},_disable:function(a,c){b("Button").setEnabled(a,!1),c&&b("TooltipData").set(a,c)},init:function(a,c,d,e,f,h,i,j,k,l,m,n,o,p,q){__p&&__p();q===void 0&&(q=!1);var r=!m&&!o,s=!(k===void 0||k===null);s&&!i&&!j&&g._disable(c,k);b("Event").listen(c,"click",function(){__p&&__p();b("Arbiter").inform(g.SUBSCRIBED,{profile_id:e,contextID:n,suppress:!0});if(l){l.show();var a=b("XFollowPrivacyNuxLogViewAsyncController").getURIBuilder().getURI();new(b("AsyncRequest"))(a).send()}if(p){a=b("XPagesQualityOfConnectionsExperimentController").getURIBuilder().setFBID("page_id",e).getURI();new(b("AsyncRequest"))().setURI(a).send()}if(q){a=b("qex")._("812260");a!==null&&new(b("QualityOfConnectionsExperimentTypedLogger"))().setExperimentGroup(a).setEvent(b("QualityOfConnectionsExperimentEvents").CLICK_FOLLOW).setPageID(e).log()}});b("Arbiter").subscribe(g.SUBSCRIBED,function(k,l){__p&&__p();if(e==l.profile_id){f||d.suppressNextMouseEnter&&d.suppressNextMouseEnter();s&&(typeof l.connected!=="undefined"&&(i=l.connected),(i||j)&&g._enable(c));l.focusOnClick!==void 0&&(r=l.focusOnClick);a.swap(r);if(h===!0&&l.chaining!==!1){k=b("XPubcontentChainedSuggestionsController").getURIBuilder().setInt("profileid",e).getURI();new(b("AsyncRequest"))().setURI(k).send()}}});b("Arbiter").subscribe(g.UNSUBSCRIBED,function(f,h){e==h.profile_id&&(a.unswap(r),d.hideFlyout&&d.hideFlyout(),s&&(typeof h.connected!=="undefined"&&(i=h.connected),!i&&!j&&g._disable(c,k)),b("Arbiter").inform("SubMenu/Reset"))})},initSubscribe:function(a,c){b("Event").listen(a,"click",function(){setTimeout(b("Arbiter").inform.bind(b("Arbiter"),g.SUBSCRIBED,{profile_id:c}),0)})},initUnsubscribe:function(a,c,d,e){e===void 0&&(e=!1),b("Event").listen(a,"click",function(){setTimeout(b("Arbiter").inform.bind(b("Arbiter"),g.UNSUBSCRIBED,{profile_id:c,contextID:d}),0);if(e){var a=b("qex")._("812260");a!==null&&new(b("QualityOfConnectionsExperimentTypedLogger"))().setExperimentGroup(a).setEvent(b("QualityOfConnectionsExperimentEvents").CLICK_UNFOLLOW).setPageID(c).log()}})},initSubscribeMenuItem:function(a,c,d){b("CSS").hide(c),this._initMenuItem(a,c,d)},initUnsubscribeMenuItem:function(a,c,d){b("CSS").hide(a),this._initMenuItem(a,c,d)},_initMenuItem:function(a,c,d){this.initSubscribe(a,d),this.initUnsubscribe(c,d),b("Arbiter").subscribe(g.SUBSCRIBED,function(d,e){b("CSS").hide(a),b("CSS").show(c)}),b("Arbiter").subscribe(g.UNSUBSCRIBED,function(d,e){b("CSS").hide(c),b("CSS").show(a)})}};e.exports=g}),null);
__d("abstractMethod",["invariant"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){g(0,1537,a,b)}e.exports=a}),null);
__d("AbstractContextualDialogArrowBehavior",["cx","CSS","DOM","Locale","Style","Vector","abstractMethod"],(function(a,b,c,d,e,f,g){__p&&__p();var h={bottom:"_53ik",top:"_53il",right:"_53im",left:"_53in"},i={above:"bottom",below:"top",left:"right",right:"left"};a=function(){"use strict";__p&&__p();function a(a){this.__layer=this._layer=a}var c=a.prototype;c.enable=function(){this._subscription=this._layer.subscribe(["adjust","reposition"],this._handle.bind(this))};c.disable=function(){this._subscription.unsubscribe(),this._subscription=null};c.__getArrow=function(){return b("abstractMethod")("AbstractContextualDialogArrowBehavior","__getArrow")};c._handle=function(a,b){a==="adjust"?this._repositionArrow(b):this._repositionRoot(b)};c._repositionRoot=function(a){__p&&__p();var c=a.getAlignment();if(c=="center")return;var d=this._layer.getRoot(),e=this._layer.getContext();a=a.isVertical();var f=this._layer.getArrowDimensions(),g=f.offset;f=f.length;e=b("Vector").getElementDimensions(e);e=a?e.x:e.y;if(e>=f+g*2)return;f=f/2+g;g=e/2;e=parseInt(f-g,10);if(a){f=null;c=="left"?f=b("Locale").isRTL()?"right":"left":f=b("Locale").isRTL()?"left":"right";g=parseInt(b("Style").get(d,f),10);b("Style").set(d,f,g-e+"px")}else{a=parseInt(b("Style").get(d,"top"),10);b("Style").set(d,"top",a-e+"px")}};c._repositionArrow=function(c){__p&&__p();var d=this._layer.getContentRoot(),e=c.getPosition(),f=i[e];for(var g in h)b("CSS").conditionClass(d,h[g],f===g);if(e=="none")return;this._arrow||(this._arrow=this.__getArrow());b("DOM").contains(d,this._arrow)||b("DOM").appendContent(d,this._arrow);b("Style").set(this._arrow,"top","");b("Style").set(this._arrow,"left","");b("Style").set(this._arrow,"right","");b("Style").set(this._arrow,"margin","");f=a.getOffsetPercent(c);e=a.getOffset(c,f,this._layer);d=a.getOffsetSide(c);b("Style").set(this._arrow,d,f+"%");b("Style").set(this._arrow,"margin-"+d,e+"px")};a.getOffsetPercent=function(a){var b=a.getAlignment();a=a.getPosition();if(a=="above"||a=="below")if(b=="center")return 50;else if(b=="right")return 100;return 0};a.getOffsetSide=function(a){a=a.isVertical();return a?b("Locale").isRTL()?"right":"left":"top"};a.getOffset=function(a,b,c){c=c.getArrowDimensions();var d=c.offset;c=c.length;a=a.getAlignment();d=a=="center"?0:d;d+=c*b/100;a!="left"&&(d*=-1);return d};return a}();e.exports=a}),null);
__d("ContextualDialogArrow",["cx","AbstractContextualDialogArrowBehavior","CSS","JSXDOM"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.__getArrow=function(){return b("JSXDOM").i({className:"_53io"})};d.enable=function(){a.prototype.enable.call(this);var c=this.__layer.getContentRoot();b("CSS").addClass(c,"_5v-0")};d.disable=function(){a.prototype.disable.call(this);var c=this.__layer.getContentRoot();b("CSS").removeClass(c,"_5v-0")};return c}(b("AbstractContextualDialogArrowBehavior"));e.exports=a}),null);