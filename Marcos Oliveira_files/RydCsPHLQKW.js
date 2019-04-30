if (self.CavalryLogger) { CavalryLogger.start_js(["34Spg"]); }

__d("DigitalContentWalletTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:DigitalContentWalletLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:DigitalContentWalletLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:DigitalContentWalletLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setErrorMsg=function(a){this.$1.error_msg=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setFundID=function(a){this.$1.fund_id=a;return this};c.setFundMatchUnits=function(a){this.$1.fund_match_units=a;return this};c.setFundSubtype=function(a){this.$1.fund_subtype=a;return this};c.setFundType=function(a){this.$1.fund_type=a;return this};c.setOwnerID=function(a){this.$1.owner_id=a;return this};c.setPayeeID=function(a){this.$1.payee_id=a;return this};c.setPaymentAccountID=function(a){this.$1.payment_account_id=a;return this};c.setPlatform=function(a){this.$1.platform=a;return this};c.setProductOrderID=function(a){this.$1.product_order_id=a;return this};c.setPromotionID=function(a){this.$1.promotion_id=a;return this};c.setPromotionType=function(a){this.$1.promotion_type=a;return this};c.setSpendID=function(a){this.$1.spend_id=a;return this};c.setSpendMatchUnits=function(a){this.$1.spend_match_units=a;return this};c.setSpendingSubtype=function(a){this.$1.spending_subtype=a;return this};c.setStackTrace=function(a){this.$1.stack_trace=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setTime=function(a){this.$1.time=a;return this};c.setUnits=function(a){this.$1.units=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWalletID=function(a){this.$1.wallet_id=a;return this};c.setWalletType=function(a){this.$1.wallet_type=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={error_msg:!0,event:!0,fund_id:!0,fund_match_units:!0,fund_subtype:!0,fund_type:!0,owner_id:!0,payee_id:!0,payment_account_id:!0,platform:!0,product_order_id:!0,promotion_id:!0,promotion_type:!0,spend_id:!0,spend_match_units:!0,spending_subtype:!0,stack_trace:!0,time:!0,units:!0,vc:!0,wallet_id:!0,wallet_type:!0,weight:!0};e.exports=a}),null);
__d("DigitalContentWalletPromotionUtils",[],(function(a,b,c,d,e,f){"use strict";a=function(a){switch(a){case"SPEND_MATCH":return"SPEND_MATCH";case"FUND_MATCH":return"FUND_MATCH";case"FLYOUT_V2":return"FLYOUT_V2";case"SHORTCUT_TIPPING":return"SHORTCUT_TIPPING"}return"SPEND_MATCH"};e.exports={toDigitalContentWalletPromotionType:a}}),null);
__d("DigitalContentWalletPromotionEventNuxViewedMutationWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"1968022583294717"};b.getQueryID=function(){return"2157877581153131"};return b}(b("WebGraphQLMutationBase"))}),null);
__d("WalletPromotionNuxModal.react",["cx","fbt","FDSButton.react","Image.react","OnVisible.react","React","XUICloseButton.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=80,j="100%",k="SPEND_MATCH";a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.$1=function(){return this.props.type!=null&&this.props.type==k?b("React").createElement(b("Image.react"),{src:this.props.imageSrc,height:i,width:i}):b("React").createElement(b("Image.react"),{src:this.props.imageSrc,width:j})};d.$2=function(){return this.props.type!=null&&this.props.type==k?b("React").createElement(b("FDSButton.react"),{onClick:this.props.onAccept,size:"large",label:h._("Ver pacote de estrelas")}):b("React").createElement(b("FDSButton.react"),{onClick:this.props.onClose,size:"large",label:h._("Fechar")})};d.render=function(){return b("React").createElement(b("OnVisible.react"),{onVisible:this.props.onVisible},b("React").createElement("div",{className:"_76gl"},b("React").createElement("div",{className:"_76gm"},b("React").createElement("div",{className:"_76f_"},b("React").createElement(b("XUICloseButton.react"),{onClick:this.props.onClose})),b("React").createElement("div",{className:"_76g0"},b("React").createElement("div",{className:"_76g1"},this.props.imageSrc!=null?b("React").createElement("div",{className:"_76g2"},this.$1()):null,b("React").createElement("div",{className:"_76g3"},this.props.title),b("React").createElement("div",{className:"_76g4"},b("React").createElement("span",null,this.props.description)))),b("React").createElement("div",{className:"_7749"}),b("React").createElement("div",{className:"_76g5"},this.$2()))))};return c}(b("React").PureComponent);e.exports=a}),null);
__d("VideoWithInstreamWalletPromotionNux",["CurrentUser","DigitalContentWalletPromotionActions.react","DigitalContentWalletPromotionEventNuxViewedMutationWebGraphQLMutation","DigitalContentWalletPromotionUtils","DigitalContentWalletTypedLogger","DOM","React","ReactDOM","Tahoe","WalletPromotionNuxModal.react","WebGraphQL","promiseDone"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("DigitalContentWalletPromotionUtils").toDigitalContentWalletPromotionType,h=!1,i=2*1e3,j=1*60*1e3,k=1*60*1e3;a=function(){__p&&__p();function a(a,c,d){__p&&__p();var e=this;this.$5=function(){var a;if((a=e.$3)==null?void 0:a.isNuxExposed){e.$6();return}a=e.$7();if(!a)return;e.$8()};this.$11=function(){new(b("DigitalContentWalletTypedLogger"))().setVC(b("CurrentUser").getAccountID()).setEvent("wallet_promotion_nux_viewed").setPayeeID(e.$4.payeeID).setPromotionID(e.$3.id).setPromotionType(g(e.$3.type)).log()};this.$1=a;this.$3=c;this.$4=d;window.setTimeout(this.$5,d.isLootDropEnabled?j:i)}var c=a.prototype;c.$7=function(){if(h)return null;var a=b("Tahoe").get(),c=a&&a.getMediaController();if(c!==this.$1||(c&&c.getMediaID())!==this.$4.videoID)return null;c=a&&a.getSideContent();return!c?null:c};c.$8=function(){__p&&__p();var a=this,c=this.$7();if(!c)return;var d=b("DOM").create("div");b("DOM").appendContent(c,d);b("ReactDOM").render(b("React").createElement(b("WalletPromotionNuxModal.react"),{title:this.$3.title,description:this.$3.description,imageSrc:this.$3.imageSrc,type:this.$3.type,onClose:function(){b("DOM").remove(d),a.$9()},onAccept:function(){b("DOM").remove(d),a.$10()},onVisible:this.$11}),d);this.$2.remove();h=!0};c.$9=function(){this.$6(),this.$12(),new(b("DigitalContentWalletTypedLogger"))().setVC(b("CurrentUser").getAccountID()).setEvent("wallet_promotion_nux_dismissed").setPayeeID(this.$4.payeeID).setPromotionID(this.$3.id).setPromotionType(g(this.$3.type)).log()};c.$10=function(){b("DigitalContentWalletPromotionActions.react").setAcceptPromotion(!0),this.$12(),new(b("DigitalContentWalletTypedLogger"))().setVC(b("CurrentUser").getAccountID()).setEvent("wallet_promotion_nux_accepted").setPayeeID(this.$4.payeeID).setPromotionID(this.$3.id).setPromotionType(g(this.$3.type)).log()};c.$12=function(){b("promiseDone")(b("WebGraphQL").exec(new(b("DigitalContentWalletPromotionEventNuxViewedMutationWebGraphQLMutation"))({event_id:this.$3.id})))};c.$6=function(){var a=this.$3.type;window.setTimeout(function(){b("DigitalContentWalletPromotionActions.react").setDismissPromotion(!0,a)},k)};return a}();e.exports=a}),null);