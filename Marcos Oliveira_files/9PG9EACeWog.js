if (self.CavalryLogger) { CavalryLogger.start_js(["KZPZ8"]); }

__d("ChatSidebarActionTypes",["keyMirror"],(function(a,b,c,d,e,f){"use strict";e.exports=b("keyMirror")({AFTER_DOM_LOAD:null,INIT:null,LOADED:null,SET_ENABLED:null,SHOW:null})}),null);
__d("ChatSidebarPresencePrivacyActions",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirror")({PRIVACY_CHANGED:null,USER_PRESENCE_CHANGED:null});e.exports=a}),null);
__d("ChatSidebarRecentCallsActions",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirror")({RECENT_CALLS_UPDATED:null});e.exports=a}),null);
__d("SidebarType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({SIDEBAR:"sidebar",BUDDYLIST:"buddylist",BUDDYLIST_NUB:"buddylist_nub"})}),null);
__d("ChatSidebarActions",["ChatDispatcher","ChatSidebarActionTypes","ChatSidebarPresencePrivacyActions","ChatSidebarRecentCallsActions","SidebarType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={init:function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarActionTypes").INIT})},afterDomLoad:function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarActionTypes").AFTER_DOM_LOAD})},loaded:function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarActionTypes").LOADED})},disable:function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarActionTypes").SET_ENABLED,enabled:!1,sidebarType:b("SidebarType").BUDDYLIST})},enable:function(a){b("ChatDispatcher").dispatch({type:b("ChatSidebarActionTypes").SET_ENABLED,enabled:!0,sidebarType:a})},show:function(a){b("ChatDispatcher").dispatch({type:b("ChatSidebarActionTypes").SHOW,sidebarType:a})},userPresenceChanged:function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarPresencePrivacyActions").USER_PRESENCE_CHANGED})},privacyChanged:function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarPresencePrivacyActions").PRIVACY_CHANGED})},recentCallsUpdated:function(a){b("ChatDispatcher").dispatch({type:b("ChatSidebarRecentCallsActions").RECENT_CALLS_UPDATED,calls:a})}};e.exports=a}),null);
__d("ChatSidebarDropdownConstants",[],(function(a,b,c,d,e,f){a=Object.freeze({SOUND:"sound",ADVANCED_SETTINGS:"advanced_settings",BLOCK_SETTINGS:"block_settings",TURN_OFF_DIALOG:"turn_off_dialog",CLOSE_ALL_TABS:"close_all_tabs",LOWER_ALL_TABS:"lower_all_tabs",TOGGLE_DISCOVER_BOTS:"toggle_discover_bots",SIDEBAR:"sidebar",HIDE_GROUPS:"hide_groups",ONLINE:"online",VIDEOCALL_ON:"videoon",VIDEOCALL_OFF:"videooff",PAUSE:"pause",SHOW_APPS:"show_apps",HIDE_APPS:"hide_apps",HIDE_MARKETPLACE:"hide_marketplace",SHOW_TICKER:"show_ticker",HIDE_TICKER:"hide_ticker",HIDE_ADMINED_PAGES:"hide_admined_pages",HIDE_BUSINESSES:"hide_businesses",EMOJI_SETTINGS:"emoji_settings",TURN_OFF_CHAT_TABS:"turn_off_chat_tabs"});e.exports=a}),null);
__d("FBRTCDispatcher",["Dispatcher_DEPRECATED"],(function(a,b,c,d,e,f){"use strict";e.exports=new(b("Dispatcher_DEPRECATED"))()}),null);
__d("FBRTCStore",["FBRTCDispatcher","FluxStore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.call(this,b("FBRTCDispatcher"))||this}var d=c.prototype;d.__emitChange=function(){this.__emitter.emit(this.__changeEvent)};return c}(b("FluxStore"));a.__moduleID=e.id;e.exports=a}),null);
__d("FBRTCCallBlockingStore",["Arbiter","AsyncRequest","ChannelConstants","FBRTCDispatcher","FBRTCStore","clearTimeout","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=!1,h=0,i=null,j="call_block_setting_changed";a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.init=function(a){this.$FBRTCCallBlockingStore1(a),b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("videocall_block_setting"),this.$FBRTCCallBlockingStore2.bind(this))};d.__onDispatch=function(a){if(a.type!==j)return;this.$FBRTCCallBlockingStore1(a.data)};d.$FBRTCCallBlockingStore1=function(a){switch(a){case 0:g=!1;this.$FBRTCCallBlockingStore3();break;case-1:g=!0;this.$FBRTCCallBlockingStore3();break;default:g=!0,this.$FBRTCCallBlockingStore4(a)}this.__emitChange()};d.$FBRTCCallBlockingStore4=function(a){i===null&&(i=b("setTimeoutAcrossTransitions")(this.turnOnVideoCalling.bind(this),a*1e3))};d.getBlockingStatus=function(){return g};d.turnOnVideoCalling=function(){new(b("AsyncRequest"))("/ajax/chat/settings.php").setHandler(this.$FBRTCCallBlockingStore5.bind(this)).setData({call_blocked_until:0}).send()};d.turnOffVideoCalling=function(a){h=a,new(b("AsyncRequest"))("/ajax/chat/settings.php").setHandler(this.$FBRTCCallBlockingStore6.bind(this)).setData({call_blocked_until:a}).send()};d.$FBRTCCallBlockingStore3=function(){i&&(b("clearTimeout")(i),i=null)};d.$FBRTCCallBlockingStore5=function(){b("FBRTCDispatcher").dispatch({type:j,data:0})};d.$FBRTCCallBlockingStore6=function(){b("FBRTCDispatcher").dispatch({type:j,data:h})};d.$FBRTCCallBlockingStore2=function(a,c){b("FBRTCDispatcher").dispatch({type:j,data:c.obj.value})};return c}(b("FBRTCStore"));e.exports=new a()}),null);
__d("ChatOptions",["Arbiter","ArbiterMixin","Bootloader","ChannelConstants","ChatSidebarActions","ChatSidebarDropdownConstants","FBRTCCallBlockingStore","JSLogger","PresenceUtil","SidebarType","mixin","ChatOptionsInitialData"],(function(a,b,c,d,e,f){__p&&__p();var g=b("JSLogger").create("chat_options"),h={};(function(){__p&&__p();var a=b("ChatOptionsInitialData");for(var c in a){var d=a[c];switch(c){case"call_blocked_until":b("FBRTCCallBlockingStore").init(d);break;case b("ChatSidebarDropdownConstants").TURN_OFF_CHAT_TABS:d!==-1&&(h[c]=!!d);break;default:h[c]=!!d}}})();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getSetting=function(a){return h[a]};d.setSetting=function(a,c,d){__p&&__p();if(a==="sidebar_mode"){b("Bootloader").loadModules(["ChatSidebarVisibility"],function(a){return a.shouldShowSidebarIgnoreEnabled(null,function(a,d){c?b("ChatSidebarActions").enable(a?b("SidebarType").SIDEBAR:b("SidebarType").BUDDYLIST):b("ChatSidebarActions").disable()})},"ChatOptions");return}if(this.getSetting(a)==c)return;d&&(d="from_"+d,g.log(d,{name:a,new_value:c,old_value:this.getSetting(a)}));h[a]=!!c;b("Arbiter").inform("chat/option-changed",{name:a,value:c})};return c}(b("mixin")(b("ArbiterMixin")));b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("setting"),function(a,c){a=c.obj;if(a.window_id===b("PresenceUtil").getSessionID())return;i.setSetting(a.setting,!!a.value,"channel")});b("Arbiter").subscribe(b("JSLogger").DUMP_EVENT,function(a,b){b.chat_options=h});var i=new a();e.exports=i}),null);
__d("ChatSidebarPreloadStore",["InitialChatFriendsList"],(function(a,b,c,d,e,f){"use strict";a={onLoaded:function(a){a({buddies:b("InitialChatFriendsList").list,groups:b("InitialChatFriendsList").groups,shortProfiles:b("InitialChatFriendsList").shortProfiles,nearby:b("InitialChatFriendsList").nearby,adminedPages:b("InitialChatFriendsList").adminedPages,marketplaceThreads:b("InitialChatFriendsList").marketplaceThreads,pageListModule:b("InitialChatFriendsList").pageListModule,pymmList:b("InitialChatFriendsList").pymmList||{},recentPageList:b("InitialChatFriendsList").recentPageList,profiles:[]})}};e.exports=a}),null);
__d("ChatProfileStore",["ChatSidebarPreloadStore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={};a={init:function(){b("ChatSidebarPreloadStore").onLoaded(function(a){var b=a.profiles,c=a.nearby;return b.filter(function(a){return!c||c.indexOf(a.id)===-1}).forEach(function(a){var b=new Date();b=a.birthdate&&b.getDate()===a.birthdate.day&&b.getMonth()+1===a.birthdate.month;var c=a.profile_picture&&a.profile_picture.uri?a.profile_picture.uri:null;g[a.id]={id:a.id,is_birthday:b,thumbSrc:c,name:a.name,is_messenger_only:!!a.is_messenger_only}})})},get:function(a){return g[a]}};e.exports=a}),null);
__d("ChatSortUsers",["ShortProfiles","TokenizeUtil"],(function(a,b,c,d,e,f){__p&&__p();var g={};function h(a){if(g[a])return g[a];var c=(b("ShortProfiles").getNow(a)||{}).name;return c?g[a]=b("TokenizeUtil").flatten(c):"~"}a={sortAlphabetical:function(a,b){a=h(a);b=h(b);return a!==b?a<b?-1:1:0}};e.exports=a}),null);
__d("ChatUnreadCountActionTypes",["keyMirror"],(function(a,b,c,d,e,f){"use strict";e.exports=b("keyMirror")({COUNT_UPDATED:null})}),null);
__d("ChatSidebarParticipantTooltipBuilder",["fbt","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=10,i="\n";function a(a,b){var c=[],d=Math.min(h,a.length);a=a.slice(0,d);a.forEach(function(a){a=a.name;a&&c.push(a)});d<b&&c.push(g._("e mais {num}...",[g._param("num",b-d)]));return c.join(i)}e.exports={buildParticipantsTooltip:a,MAX_NUM_PARTICIPANTS_TO_RENDER:h}}),null);
__d("OrderedFriendsList",["AvailableListConstants","ChatProfileStore","ChatSidebarParticipantTooltipBuilder","ChatSidebarPreloadStore","MercuryIDs","MercuryParticipantTypes","PresenceStatus","SearchableEntry","ShortProfiles","WorkModeConfig","createArrayFromMixed","isValidUniqueID"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=null,h={},i=[],j={};function k(a){a=String(a);return b("MercuryIDs").isValid(a)?a:b("MercuryIDs").getParticipantIDFromUserID(a)}function l(a,c){a=b("createArrayFromMixed")(a);c(a.filter(function(a){a=b("ShortProfiles").getNow(a);return!a||o(a)||a.is_nonfriend_messenger_contact}))}function m(a){g=[];var c=0;a.forEach(function(a){var d=a.slice(0,-2);a=a.slice(-1);b("PresenceStatus").get(d)==a&&(g[c]=d,h[d]=c++)})}function n(a){var c=0;a.forEach(function(a){var d=a.slice(0,-2);a=a.slice(-1);a==b("AvailableListConstants").ACTIVE&&(i[c]=d,j[d]=c++)})}function o(a){return a.type==="friend"||b("WorkModeConfig").is_work_user&&a.type==="fb4c"}var p={contains:function(a){return a in h},getList:function(a){if(g&&g.length){l(g,a);return}b("ChatSidebarPreloadStore").onLoaded(function(b){b=b.buddies;m(b);l(g,a)})},getSearchableEntries:function(a,c,d){__p&&__p();p.getList(function(e){__p&&__p();b("ChatSidebarPreloadStore").onLoaded(function(f){__p&&__p();var g=f.groups,h=f.recentPageList;b("ShortProfiles").getMulti(e.slice(0,a),function(a){var b=[];for(var e in a)b.push(p.normalizeProfileEntry(a[e],e));a=c?g.map(p.normalizeThreadEntry):[];var f=h.map(p.normalizePageEntry);d(b.concat(a,f).filter(function(a){return!!a}).sort(function(a,b){return a.getOrder()-b.getOrder()}))})})})},normalizePageEntry:function(a,c){var d=a.searchTokens||[],e=a.name,f=null;return new(b("SearchableEntry"))({uniqueID:a.id||c,keywordString:d.join(" "),order:c,photo:a.imgSrc,title:e,subtitle:f,type:b("MercuryParticipantTypes").PAGE,uri:a.uri,auxiliaryData:{isVerified:a.isVerified}})},normalizeProfileEntry:function(a,c){var d=a.searchTokens||[],e=a.name,f=null;return new(b("SearchableEntry"))({uniqueID:a.id||c,keywordString:d.join(" "),order:p.getRank(a.id||c),photo:a.thumbSrc,title:e,subtitle:f,type:a.type,uri:a.uri,auxiliaryData:{isMessengerUser:a.is_messenger_user}})},normalizeThreadEntry:function(a,c){__p&&__p();var d=a.mercury_thread,e=a.participants_to_render.map(function(a){return babelHelpers["extends"]({},a,{id:k(a.id)})});d.participants=d.participants.map(k);var f=a.text,g=null;f||(f=d.name);var h=b("ChatSidebarParticipantTooltipBuilder").buildParticipantsTooltip(e,d.participants.length-1),i=e.map(function(a){return a.name}).join(", ");!f?f=i:g=i;i=a.uid;return!f||!b("isValidUniqueID")(i)?null:new(b("SearchableEntry"))({uniqueID:i,order:c,photo:d.image_src,title:f,subtitle:g,type:"thread",auxiliaryData:{participantsToRender:e,tooltipContent:h,thread:d}})},getRank:function(a){return a in h?h[a]:g?g.length:0},getActiveList:function(a){if(i.length>0){a(i);return}p.getList(function(b){return a(b)})},getActiveRank:function(a){return a in j?j[a]:p.getRank(a)}};(function(){b("ChatSidebarPreloadStore").onLoaded(function(a){var c=a.buddies;a=a.shortProfiles;b("ShortProfiles").setMulti(a);n(c);m(c)}),b("ChatProfileStore").init()})();e.exports=p}),null);
__d("PresenceStatusStore",["ChatDispatcher","FluxStore","PresenceStatus","PresenceStatusActionTypes"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.call(this,b("ChatDispatcher"))||this}var d=c.prototype;d.__onDispatch=function(a){a=a.type;switch(a){case b("PresenceStatusActionTypes").AVAILABILITY_CHANGED:this.__emitChange();break;default:break}};d.get=function(a){return b("PresenceStatus").get(a)};d.getIsPlaying=function(a){return b("PresenceStatus").isPlayingCanvasGameUser(a)};return c}(b("FluxStore"));a.__moduleID=e.id;e.exports=new a()}),null);
__d("ShortProfilesActionTypes",["keyMirror"],(function(a,b,c,d,e,f){"use strict";e.exports=b("keyMirror")({PROFILE_UPDATED:null})}),null);
__d("ShortProfilesStore",["ChatDispatcher","ChatProfileStore","FluxStore","ShortProfiles","ShortProfilesActionTypes","debounce","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c;c=a.call(this,b("ChatDispatcher"))||this;b("gkx")("678263")&&(c.$ShortProfilesStore1=b("debounce")(c.$ShortProfilesStore1,50));return c}var d=c.prototype;d.__onDispatch=function(a){a=a.type;switch(a){case b("ShortProfilesActionTypes").PROFILE_UPDATED:this.__emitChange();break;default:break}};d.getNow=function(a){var c=b("ChatProfileStore").get(a);c||(c=b("ShortProfiles").getNow(a));return c};d.getMulti=function(a){b("ShortProfiles").getMulti(a,this.$ShortProfilesStore1)};d.$ShortProfilesStore1=function(a){b("ChatDispatcher").dispatch({type:b("ShortProfilesActionTypes").PROFILE_UPDATED})};return c}(b("FluxStore"));a.__moduleID=e.id;e.exports=new a()}),null);
__d("VerseSidebarUtil",["Bootloader","CSS","DOM","ge"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={show:function(){var a=document.documentElement||"";b("CSS").addClass(a,"buddylistOff");if(b("ge")("pagelet_verse_sidebar"))return;b("Bootloader").loadModules(["UIPagelet"],function(a){var c=b("DOM").create("div",{id:"pagelet_verse_sidebar"});b("DOM").appendContent(document.body,c);a.loadFromEndpoint("VerseSidebarPagelet","pagelet_verse_sidebar",{path:""})},"VerseSidebarUtil")},remove:function(){var a=b("ge")("pagelet_verse_sidebar");a&&b("DOM").remove(a)}};e.exports=a}),null);
__d("PrivacyLiteFlyoutBootloader",["regeneratorRuntime","Promise","Deferred","JSResource"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=!1,h=null,i=null,j={loadFlyout:function(){return b("regeneratorRuntime").async(function(a){while(1)switch(a.prev=a.next){case 0:a.next=2;return b("regeneratorRuntime").awrap(j._loadFlyout(!1));case 2:case"end":return a.stop()}},null,this)},loadFlyoutAsChild:function(){return b("regeneratorRuntime").async(function(a){while(1)switch(a.prev=a.next){case 0:a.next=2;return b("regeneratorRuntime").awrap(j._loadFlyout(!0));case 2:case"end":return a.stop()}},null,this)},_loadFlyout:function(a){__p&&__p();var c,d,e,f,h,i,j,k,l,m;return b("regeneratorRuntime").async(function(n){__p&&__p();while(1)switch(n.prev=n.next){case 0:if(!g){n.next=2;break}return n.abrupt("return");case 2:g=!0;n.next=5;return b("regeneratorRuntime").awrap(b("Promise").all([b("JSResource")("PrivacyLiteFlyout").__setRef("PrivacyLiteFlyoutBootloader").load(),this._getDeferredFlyoutElements().getPromise(),this._getDeferredFooterElements().getPromise()]));case 5:c=n.sent,d=c[0],e=c[1],f=e.flyout,h=e.flyoutRoot,i=c[2],j=i.footer,k=i.event,l=i.settingsExitPoint,m=i.basicsExitPoint,d.setIsChild(!!a),d.registerFlyoutToggler(f,h),d.registerSettingsAndBasicsLinkLogging(j,k,l,m),d.loadBody();case 19:case"end":return n.stop()}},null,this)},setChildFlyoutVisible:function(a){__p&&__p();var c,d,e,f;return b("regeneratorRuntime").async(function(h){__p&&__p();while(1)switch(h.prev=h.next){case 0:if(!(!g&&!a)){h.next=2;break}return h.abrupt("return");case 2:h.next=4;return b("regeneratorRuntime").awrap(b("Promise").all([b("JSResource")("PrivacyLiteFlyout").__setRef("PrivacyLiteFlyoutBootloader").load(),this._getDeferredFlyoutElements().getPromise()]));case 4:c=h.sent;d=c[0];e=c[1];f=e.flyout;e._flyoutRoot;if(!(a===d.isFlyoutVisible())){h.next=11;break}return h.abrupt("return");case 11:d.setChildFlyoutVisible(a),d.onToggle(f,a?"show":"hide");case 13:case"end":return h.stop()}},null,this)},_getDeferredFlyoutElements:function(){h==null&&(h=new(b("Deferred"))());return h},registerFlyoutElements:function(a,b){this._getDeferredFlyoutElements().resolve({flyout:a,flyoutRoot:b})},_getDeferredFooterElements:function(){i==null&&(i=new(b("Deferred"))());return i},registerFooterElements:function(a,b,c,d){this._getDeferredFooterElements().resolve({footer:a,event:b,settingsExitPoint:c,basicsExitPoint:d})}};e.exports=j}),null);
__d("HelpLiteFlyout",["AsyncRequest","CSS","DOM","Event","HelpLiteFlyoutBootloader","PrivacyLiteFlyoutBootloader","Toggler","ge"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=null,h={loadBody:function(){b("ge")("fbHelpLiteFlyoutLoading")&&new(b("AsyncRequest"))("/help/ajax/contextual/").setData({page_type:b("HelpLiteFlyoutBootloader").getHelpType()}).send()},refreshHelp:function(){b("ge")("fbHelpLiteFlyoutLoading")&&new(b("AsyncRequest"))("/help/ajax/contextual/").setData({page_type:b("HelpLiteFlyoutBootloader").getHelpType(),is_refresh:!0}).send()},resetHelp:function(a){var c=b("ge")("fbContextualHelpContent");c&&b("DOM").replace(c,a);h.isFlyoutVisible()&&h.refreshHelp()},showHelp:function(){b("PrivacyLiteFlyoutBootloader").setChildFlyoutVisible(!1),b("CSS").show(b("ge")("fbHelpLiteFlyout"))},openPrivacy:function(){b("CSS").hide(b("ge")("fbHelpLiteFlyout")),b("PrivacyLiteFlyoutBootloader").loadFlyoutAsChild(),b("PrivacyLiteFlyoutBootloader").setChildFlyoutVisible(!0)},registerPrivacyBackLink:function(a){b("Event").listen(a,"click",h.showHelp)},registerFlyoutToggler:function(a,c){g=c;a=b("Toggler").createInstance(a);a.setSticky(!1);b("Toggler").listen("hide",c,function(a){b("PrivacyLiteFlyoutBootloader").setChildFlyoutVisible(!1)});b("Toggler").listen("show",c,function(a){h.showHelp()})},isFlyoutVisible:function(){return g&&b("Toggler").getActive()===g},setFlyoutVisible:function(a){a&&b("HelpLiteFlyoutBootloader").loadFlyout(),a?b("Toggler").show(g):b("Toggler").hide(g)}};e.exports=h}),null);
__d("ChatPerfTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:ChatPerfLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:ChatPerfLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:ChatPerfLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setDuration=function(a){this.$1.duration=a;return this};c.setEndpoint=function(a){this.$1.endpoint=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setTabsOpen=function(a){this.$1.tabs_open=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={duration:!0,endpoint:!0,event:!0,tabs_open:!0,time:!0,weight:!0};e.exports=a}),null);
__d("ChatPerfInstrumentation",["Promise","BaseEventEmitter","ChatPerfEvent","ChatPerfTypedLogger","FantaConst","PresenceState","WorkModeConfig","emptyFunction","performanceAbsoluteNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("WorkModeConfig").is_work_user;c=a?b("FantaConst").cookieIDs.WORK_COOKIE_ID:b("FantaConst").cookieIDs.PERSONAL_COOKIE_ID;d=b("PresenceState").getInitial();var g=d&&d[c]?d[c].length:0,h;f={_startTime:Number,_sidebarStartTime:Number,init:function(){this._startTime=b("performanceAbsoluteNow")();return new(b("Promise"))(function(a){return a()})},initDivebar:function(){this._sidebarStartTime=b("performanceAbsoluteNow")()},_log:function(a,c){c=b("performanceAbsoluteNow")()-(c||this._startTime);h&&h.emit(a,c);var d=new(b("ChatPerfTypedLogger"))();d.setEvent(a).setDuration(c);d.setTabsOpen(g);d.log()},addPerfTimingsListener:function(a,c){h||(h=new(b("BaseEventEmitter"))());return h.once(a,c)},logInitStores:function(){this.logInitStores=b("emptyFunction"),this._log(b("ChatPerfEvent").CHAT_INIT_STORES)},logInitData:function(){this.logInitData=b("emptyFunction"),this._log(b("ChatPerfEvent").CHAT_INIT_DATA)},logInitUI:function(){this.logInitUI=b("emptyFunction"),this._log(b("ChatPerfEvent").CHAT_INIT_UI)},logInitSound:function(){this.logInitSound=b("emptyFunction"),this._log(b("ChatPerfEvent").CHAT_INIT_SOUND)},logDisplayDone:function(){this.logDisplayDone=b("emptyFunction"),this._log(b("ChatPerfEvent").CHAT_DISPLAY_DONE)},logTTI:function(){this.logTTI=b("emptyFunction"),this._log(b("ChatPerfEvent").TTI)},logCHAT_CONVERSATION_TTI:function(){this.logCHAT_CONVERSATION_TTI=b("emptyFunction"),this._log(b("ChatPerfEvent").CHAT_CONVERSATION_TTI)},logSIDEBAR_FROM_CLIENT_TTI:function(){this.logSIDEBAR_FROM_CLIENT_TTI=b("emptyFunction"),this._log(b("ChatPerfEvent").SIDEBAR_FROM_CLIENT_TTI,this._sidebarStartTime)},logSIDEBAR_DISPLAY_DONE:function(){this.logSIDEBAR_DISPLAY_DONE=b("emptyFunction"),this._log(b("ChatPerfEvent").SIDEBAR_DISPLAY_DONE,this._sidebarStartTime)}};e.exports=f}),null);
__d("FantaHider",["ifRequired"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports={hide:function(){b("ifRequired")("FantaTabsSlimApp",function(a){a.hide()},function(){b("ifRequired")("FantaTabsReactApp",function(a){a.hide()})})},unhide:function(){b("ifRequired")("FantaTabsSlimApp",function(a){a.unhide()},function(){b("ifRequired")("FantaTabsReactApp",function(a){a.unhide()})})}}}),null);
__d("ChatSidebarPresencePrivacyStore",["ChatDispatcher","ChatSidebarPresencePrivacyActions","FluxReduceStore","PresencePrivacy"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getInitialState=function(){return{currentUser:b("PresencePrivacy").getVisibility(),onlinePolicy:b("PresencePrivacy").getOnlinePolicy(),friends:b("PresencePrivacy").getFriendsVisibility()}};d.reduce=function(a,c){switch(c.type){case b("ChatSidebarPresencePrivacyActions").PRIVACY_CHANGED:return{onlinePolicy:b("PresencePrivacy").getOnlinePolicy(),currentUser:b("PresencePrivacy").getVisibility(),friends:b("PresencePrivacy").getFriendsVisibility()};case b("ChatSidebarPresencePrivacyActions").USER_PRESENCE_CHANGED:return babelHelpers["extends"]({},a,{onlinePolicy:b("PresencePrivacy").getOnlinePolicy(),currentUser:b("PresencePrivacy").getVisibility()})}return a};d.isUserOffline=function(){return this.getState().currentUser===b("PresencePrivacy").OFFLINE};return c}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=new a(b("ChatDispatcher"))}),null);
__d("PresenceOrderedList",["ChatSidebarPreloadStore","ChatSortUsers","PresencePrivacy","PresenceStatus"],(function(a,b,c,d,e,f){__p&&__p();function g(a){return a.map(function(a){var b=a.slice(0,-2);a=Number(a.slice(-1));return[b,a]})}function h(a,c){__p&&__p();var d=[];a.forEach(function(a){var e=a[0];a=a[1];if(d.length>=c)return;if(b("PresencePrivacy").getFriendVisibility(e)==b("PresencePrivacy").BLACKLISTED)return;a==b("PresenceStatus").get(e)&&d.push(e)});return d}a=function(){"use strict";__p&&__p();function a(){this.$1=null}var c=a.prototype;c.getSorted=function(a,c){var d=this;if(this.$1){c(h(this.$1,a));return}b("ChatSidebarPreloadStore").onLoaded(function(b){b=b.buddies;d.$1=g(b);c(h(d.$1,a))})};c.getAvailableSorted=function(a){var c=b("PresenceStatus").getOnlineIDs();a&&(c=c.filter(function(b){return a&&a.indexOf(b)===-1}));return c.sort(b("ChatSortUsers").sortAlphabetical)};c.getAllSorted=function(a){var c=[],d=this.$1||[];b("PresenceStatus").getAllIDs().concat(d.map(function(a){return a[0]})).forEach(function(a){return c.indexOf(a)===-1&&c.push(a)});a&&(c=c.filter(function(b){return a&&a.indexOf(b)===-1}));return c.sort(b("ChatSortUsers").sortAlphabetical)};return a}();e.exports=new a()}),null);
__d("ChatSidebarStore",["AvailableListConstants","ChatConfig","ChatDispatcher","ChatOptions","ChatOptionsInitialData","ChatSidebarActionTypes","ChatUnreadCountActionTypes","FluxStore","InitialChatFriendsList","MercuryParticipantTypes","PresenceOrderedList","PresencePrivacy","PresenceStatus","PresenceStatusActionTypes","PresenceStatusStore","ShortProfiles","ShortProfilesActionTypes","ShortProfilesStore","WorkModeConfig","gkx","performanceAbsoluteNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){return a.map(function(a){var b=a.slice(0,-2);a=Number(a.slice(-1));return[b,a]})}function h(a,c,d){d===void 0&&(d=[]);return a.reduce(function(a,e){var f=e[0];e=e[1];a.length<c&&b("PresencePrivacy").getFriendVisibility(f)!==b("PresencePrivacy").BLACKLISTED&&e===b("PresenceStatus").get(f)&&!d.includes(f)&&a.push(f);return a},[])}function i(a){return b("PresencePrivacy").getVisibility()==b("PresencePrivacy").ONLINE?a.filter(function(a){return b("PresencePrivacy").allows(a)}):a}a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c;c=a.call(this,b("ChatDispatcher"))||this;c.$ChatSidebarStore2={enabled:!1,initTime:0,initialized:!1,isAfterDomLoad:!1,loaded:!1,visible:null};c.setupShortProfiles();c.$ChatSidebarStore3={enabled:!!b("ChatOptionsInitialData").sidebar_mode,initTime:b("performanceAbsoluteNow")(),initialized:!1,isAfterDomLoad:!1,loaded:!1,visible:null};return c}var d=c.prototype;d.setupShortProfiles=function(){var a=b("InitialChatFriendsList").shortProfiles;a&&b("ShortProfiles").setMulti(a)};d.__onDispatch=function(a){__p&&__p();var c=a.type;this.$ChatSidebarStore2=babelHelpers["extends"]({},this.$ChatSidebarStore3);switch(c){case b("ChatSidebarActionTypes").INIT:this.$ChatSidebarStore2.initialized||(this.$ChatSidebarStore3=babelHelpers["extends"]({},this.$ChatSidebarStore3,{initTime:b("performanceAbsoluteNow")()}));this.$ChatSidebarStore3=babelHelpers["extends"]({},this.$ChatSidebarStore3,{initialized:!0});break;case b("ChatSidebarActionTypes").AFTER_DOM_LOAD:this.$ChatSidebarStore3=babelHelpers["extends"]({},this.$ChatSidebarStore3,{isAfterDomLoad:!0});break;case b("ChatSidebarActionTypes").LOADED:this.$ChatSidebarStore3=babelHelpers["extends"]({},this.$ChatSidebarStore3,{loaded:!0});break;case b("ChatSidebarActionTypes").SHOW:this.$ChatSidebarStore3=babelHelpers["extends"]({},this.$ChatSidebarStore3,{visible:a.sidebarType});break;case b("ChatSidebarActionTypes").SET_ENABLED:this.$ChatSidebarStore3=babelHelpers["extends"]({},this.$ChatSidebarStore3,{enabled:a.enabled,visible:a.sidebarType});break}if(b("gkx")("678655")&&(c===b("PresenceStatusActionTypes").AVAILABILITY_CHANGED||c===b("ShortProfilesActionTypes").PROFILE_UPDATED||c===b("ChatUnreadCountActionTypes").COUNT_UPDATED)){this.__emitChange();return}for(var d in this.$ChatSidebarStore3)if(Object.prototype.hasOwnProperty.call(this.$ChatSidebarStore3,d)&&this.$ChatSidebarStore3[d]!==this.$ChatSidebarStore2[d]){this.__emitChange();break}};d.getPrevState=function(){return this.$ChatSidebarStore2};d.getState=function(){return this.$ChatSidebarStore3};d.isInitialized=function(){return this.$ChatSidebarStore3.initialized};d.isLoaded=function(){return this.$ChatSidebarStore3.loaded};d.isAfterDomLoad=function(){return this.$ChatSidebarStore3.isAfterDomLoad};d.isEnabled=function(){return this.$ChatSidebarStore3.enabled};d.getInitTime=function(){return this.$ChatSidebarStore3.initTime};d.getVisibleType=function(){return this.$ChatSidebarStore3.visible};d.getUsersData=function(a){__p&&__p();a=this.getOrderedPresenceUserList(a);var c=b("InitialChatFriendsList").nearby,d=b("WorkModeConfig").is_work_user?b("PresenceOrderedList").getAllSorted(a.concat(c)).filter(function(a){a=b("ShortProfilesStore").getNow(a);return!a||a.type===b("MercuryParticipantTypes").FB4C}):b("PresenceOrderedList").getAvailableSorted(a.concat(c)),e=b("WorkModeConfig").is_work_user?b("PresenceOrderedList").getAllSorted(a.concat(c)).filter(function(a){a=b("ShortProfilesStore").getNow(a);return a&&a.type!==b("MercuryParticipantTypes").FB4C}):[];a=a.filter(function(a){return!c||c.indexOf(a)===-1});var f=i(a);a=b("PresencePrivacy").getOnlinePolicy()===b("PresencePrivacy").ONLINE_TO_WHITELIST&&b("PresencePrivacy").getVisibility()?a.filter(function(a){return!b("PresencePrivacy").allows(a)}):[];return{availableUsers:d,topUsers:f,workOthers:e,offlineUsers:a}};d.getExtraData=function(a){__p&&__p();var c=b("InitialChatFriendsList").groups,d=b("InitialChatFriendsList").nearby,e=b("InitialChatFriendsList").adminedPages,f=b("InitialChatFriendsList").marketplaceThreads,g=b("InitialChatFriendsList").pageListModule,h=b("InitialChatFriendsList").pymmList;a--;b("ChatConfig").get("show_header")&&a--;var j=!b("ChatOptions").getSetting("hide_businesses")&&h&&h.pages;j&&(a-=3);e=b("ChatOptions").getSetting("hide_admined_pages")?[]:e;e.length&&(a-=e.length+1);var k=a,l=a;c=this.getGroupsToShow(c);var m=c.length;m===0&&b("gkx")("678261")&&!b("ChatOptions").getSetting("hide_groups")&&m++;m>0&&(l-=m+1);b("ChatConfig").get("nearby_friends_www_chatbar")&&d.length>0&&(l-=d.length+1);b("ChatConfig").get("show_admined_pages")&&e.length>0&&(l-=e.length+1);m=j&&h?h:{pages:[]};b("ChatConfig").get("show_businesses")&&m.pages.length>0&&(l-=2);l=Math.min(a,Math.max(l,b("ChatConfig").get("min_top_friends")||0));j=i(d);return{isUserOffline:b("PresencePrivacy").isUserOffline(),groups:c,numTopFriends:l,nearby:j,marketplaceThreads:f,maxThreadSlots:k,adminedPages:e,pageListModule:g,pymmList:m}};d.getGroupsToShow=function(a){if(b("ChatOptions").getSetting("hide_groups"))return[];return b("gkx")("678656")&&a.length>1?a.sort(function(a,c){return b("PresenceStatus").getGroup(c.mercury_thread.participants)-b("PresenceStatus").getGroup(a.mercury_thread.participants)}).slice(0,b("ChatConfig").getNumber("num_groups_to_show")):a};d.getOrderedPresenceUserList=function(a){if(this.$ChatSidebarStore1&&Array.isArray(this.$ChatSidebarStore1))return h(this.$ChatSidebarStore1,a);this.$ChatSidebarStore1=g(b("InitialChatFriendsList").list)||[];return h(this.$ChatSidebarStore1,a)};d.getStatusMap=function(a,c){var d={},e={};a.forEach(function(a){if(c){var f=b("PresenceStatusStore").getIsPlaying(a);d[a]=f}f=b("PresenceStatusStore").get(a);f===b("AvailableListConstants").ACTIVE&&(e[a]=f)});return{statusMap:e,playingMap:d}};return c}(b("FluxStore"));a.__moduleID=e.id;e.exports=new a()}),null);
__d("ChatSidebarHideReason",[],(function(a,b,c,d,e,f){a=Object.freeze({VIEWPORT_INCAPABLE:0,LOW_FRIEND_COUNT:1,NOT_ENABLED:2,OFF_HOMEPAGE:3});e.exports=a}),null);
__d("ChatSidebarVisibility",["ChatConfig","ChatSidebarHideReason","ChatSidebarStore","OrderedFriendsList","SidebarType","URI","getViewportDimensions","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("ChatConfig").get("sidebar.min_friends"),h=b("ChatConfig").get("sidebar.minimum_width"),i=b("ChatConfig").get("sidebar.hide_divebar_off_homepage"),j={getViewport:function(){return b("gkx")("678657")?b("getViewportDimensions")():b("getViewportDimensions").withoutScrollbars()},shouldShowSidebar:function(a,c,d){j.shouldShowSidebarIgnoreEnabled(a,function(a,d){var e=b("ChatSidebarStore").isEnabled();c(a&&e,e?d:d.concat([b("ChatSidebarHideReason").NOT_ENABLED]))},d)},shouldShowSidebarIgnoreEnabled:function(a,c,d){__p&&__p();var e=this;b("OrderedFriendsList").getActiveList(function(f){var k=a||j.getViewport();k=k.width>h;f=f.length<g;var l=!0,m=[];i&&!e.isOnHomepage(d)&&(l=!1,m.push(b("ChatSidebarHideReason").OFF_HOMEPAGE));k||(l=!1,m.push(b("ChatSidebarHideReason").VIEWPORT_INCAPABLE));f&&(l=!1,m.push(b("ChatSidebarHideReason").LOW_FRIEND_COUNT));c(l,m)})},isOnHomepage:function(a){a=a?a.getPath():new(b("URI"))(window.location.href).getPath();return a==="/"},isSidebarVisible:function(){return b("ChatSidebarStore").getVisibleType()===b("SidebarType").SIDEBAR},isBuddyListVisible:function(){return b("ChatSidebarStore").getVisibleType()===b("SidebarType").BUDDYLIST}};e.exports=j}),null);
__d("ChatSidebar",["csx","Arbiter","AsyncRequest","Bootloader","ChatConfig","ChatDispatcher","ChatPerfInstrumentation","ChatSidebarActions","ChatSidebarBotsDispatcher","ChatSidebarBotsStore","ChatSidebarCachedViewport","ChatSidebarPresencePrivacyStore","ChatSidebarStore","ChatSidebarVisibility","CSS","CurrentUser","DOM","DOMDimensions","Event","LitestandClassicPlaceHolders","Parent","PresencePrivacy","PresenceUtil","SidebarAppsInitialVisibility","SidebarType","SidebarWorkTopGroupsVisibility","Style","TimeSlice","URI","ViewportBounds","emptyFunction","ge","gkx","ifRequired","onAfterDisplay","onAfterLoadSafe","queryThenMutateDOM","requireWeak"],(function(a,b,c,d,e,f,g){__p&&__p();var h=b("ChatSidebarBotsDispatcher").module,i=b("ChatSidebarBotsStore").module,j,k,l,m,n,o,p=!0,q=b("ChatSidebarCachedViewport").viewport,r=44,s=117,t=40,u=32,v=44,w=30,x=171,y=b("ChatConfig").get("expanded_divebar_width"),z=b("ChatConfig").get("sidebar.hide_buddylist_off_homepage"),A="buddylistOff";function B(){return b("ChatSidebarStore").getVisibleType()===b("SidebarType").SIDEBAR}function C(a,b){if(!B())return;b?m.hide():(m.show(),G())}function D(){return!B()||!l?0:y}function E(){b("CSS").removeClass(document.documentElement,"sidebarMode"),z&&new(b("URI"))(window.location.href).getPath()!=="/"?b("CSS").addClass(document.documentElement,A):(b("CSS").removeClass(document.documentElement,A),z&&b("Bootloader").loadModules(["Dock"],function(a){a.resizeAllFlyouts()},"ChatSidebar")),b("ChatSidebarStore").isInitialized()&&(m.hide(),b("CSS").hide(l),b("CSS").hide(k)),b("Arbiter").inform("sidebar/visibility",!1,"state"),b("Arbiter").inform("reflow"),b("ViewportBounds").inform("change")}function F(a){G(a,P._cacheViewport)}function G(a,c){var d;b("queryThenMutateDOM")(function(){c&&c(),(!a||a.height!==q.height)&&(d=L())},function(){(a==null||a.width!==q.width)&&b("ChatSidebarVisibility").shouldShowSidebar(q,function(a,c){b("ChatSidebarActions").show(a?b("SidebarType").SIDEBAR:b("SidebarType").BUDDYLIST)}),M(d)})}function H(){b("ChatSidebarVisibility").shouldShowSidebar(q,function(a,c){b("ChatSidebarActions").show(a?b("SidebarType").SIDEBAR:b("SidebarType").BUDDYLIST)}),M(L())}function I(a){b("Bootloader").loadModules(["KeyboardShortcuts"],function(c){c.register("q",function(c){if(b("ChatSidebarStore").getVisibleType()!==b("SidebarType").SIDEBAR)return;b("requireWeak")("ChatTypeaheadCore",function(b){b.focusSearchField(a,c)})},{persistOnTransition:!0})},"ChatSidebar")}function J(a){var c=q||b("ChatSidebarVisibility").getViewport(),d=c.height;a&&a.length?(a.forEach(function(a){a&&a!==j&&!b("CSS").hasClass(a,"hidden_elem")&&(d-=b("DOMDimensions").getElementDimensions(a).height)}),o&&(d-=o.getOffset()),n&&(d-=b("DOMDimensions").getElementDimensions(n).height)):(b("ifRequired")("AppsDivebarDisplayController",function(a){a.isVisible()&&(d-=x)},function(){b("SidebarAppsInitialVisibility").visible&&(d-=x)}),b("CurrentUser").isWorkUser()&&(i&&i.hasBots()&&(d-=s),b("SidebarWorkTopGroupsVisibility").visible&&(d-=t*b("SidebarWorkTopGroupsVisibility").numGroups+u),b("gkx")("678652")&&(d-=v)),d-=r,d-=w);return Math.max(0,d)}function K(){b("CSS").show(k),b("CSS").show(l),b("CSS").addClass(document.documentElement,"sidebarMode"),b("CSS").removeClass(document.documentElement,A),z&&b("Bootloader").loadModules(["Dock"],function(a){a.resizeAllFlyouts()},"ChatSidebar"),m.show(),b("Arbiter").inform("sidebar/visibility",!0,"state"),b("LitestandClassicPlaceHolders").destroy("sidebar"),b("ViewportBounds").inform("change")}function L(){return{body:P.getBodyHeight(),item:m.getItemHeight()}}function M(a){if(!a)return;var c=8,d=Math.floor((a.body-c)/a.item);m.setNumTopFriends(d,p,b("SidebarType").SIDEBAR);p=!1;d=Math.floor(a.body-c);b("Style").set(j,"height",a.body+"px");b("Arbiter").inform("sidebar/resized",d,"state");b("Arbiter").inform("reflow")}function N(){var a;b("queryThenMutateDOM")(function(){a=L()},function(){return M(a)})}function O(){new(b("AsyncRequest"))("/ajax/chat/settings.php").setHandler(b("emptyFunction")).setErrorHandler(b("emptyFunction")).setData({sidebar_mode:b("ChatSidebarStore").isEnabled(),window_id:b("PresenceUtil").getSessionID()}).setAllowCrossPageTransition(!0).send()}var P={init:function(a,c){__p&&__p();P.init=b("emptyFunction"),b("ChatPerfInstrumentation").initDivebar(),b("ChatDispatcher").explicitlyRegisterStore(b("ChatSidebarStore")),b("ChatDispatcher").explicitlyRegisterStore(b("ChatSidebarPresencePrivacyStore")),h&&i&&h.explicitlyRegisterStore(i),b("ChatSidebarActions").loaded(),l=a,m=c,j=b("DOM").find(a,"div.fbChatSidebarBody"),k=b("DOM").find(a,"._51x_"),n=b("DOM").find(a,"._5qqe"),b("Event").listen(window,"resize",function(){var a=babelHelpers["extends"]({},q)||{};F(a)}),b("Arbiter").subscribe("page_transition",function(a,c){b("ChatSidebarVisibility").shouldShowSidebar(q,function(a,d){d=document.documentElement||"";z&&c.uri.getPath()!=="/"?b("CSS").addClass(d,A):b("CSS").removeClass(d,A);b("ChatSidebarActions").show(a?b("SidebarType").SIDEBAR:b("SidebarType").BUDDYLIST)},c.uri)}),b("gkx")("678653")?b("onAfterDisplay")(function(){I(a)}):I(a),m.setScrollContainer(b("Parent").byClass(m.getRoot(),"uiScrollableAreaWrap")),b("Arbiter").subscribe("chat/option-changed",function(a,b){a=b.name;(a==="hide_groups"||a==="hide_admined_pages"||a==="hide_businesses")&&N()}),b("Arbiter").subscribe(["AppsDivebar/show-apps","AppsDivebar/hide-apps","PagesDivebar/show-pages","PagesDivebar/hide-pages"],N),b("Arbiter").subscribe("sidebar/typeahead/active",C),b("PresencePrivacy").subscribe("privacy-user-presence-changed",function(){G(),b("ChatSidebarActions").userPresenceChanged()}),b("PresencePrivacy").subscribe("privacy-changed",function(){G(),b("ChatSidebarActions").privacyChanged()}),b("ChatSidebarStore").addListener(function(){var a=b("ChatSidebarStore").getState(),c=b("ChatSidebarStore").getPrevState();if(a.visible!==c.visible)switch(a.visible){case b("SidebarType").SIDEBAR:K();break;case b("SidebarType").BUDDYLIST:E();break}a.enabled!==c.enabled&&O()}),i&&i.addListener(function(){return N()}),b("gkx")("678654")?(H(),b("onAfterLoadSafe")(function(){if(q.needsRefresh){var a=b("ChatSidebarStore").getState().visible===b("SidebarType").SIDEBAR;F();b("onAfterLoadSafe")(function(){a!==(b("ChatSidebarStore").getState().visible===b("SidebarType").SIDEBAR)&&b("Bootloader").loadModules(["ChatReliabilityInstrumentation"],function(a){a.logERROR("sidebar flashed")},"ChatSidebar")})}})):F(),b("onAfterLoadSafe")(function(){b("Bootloader").loadModules(["ChatImpressionLogger"],function(a){a.init(m)},"ChatSidebar")}),b("ViewportBounds").addPersistentRight(D),b("Arbiter").inform("sidebar/initialized",P,"state"),b("ChatSidebarActions").init(),b("ChatPerfInstrumentation").logSIDEBAR_DISPLAY_DONE()},ensureLoaded:function(){__p&&__p();if(!b("ChatSidebarStore").isEnabled())return;if(b("ChatSidebarStore").isLoaded())return;if(b("ge")("pagelet_sidebar"))return;b("Bootloader").loadModules(["UIPagelet"],function(a){var c=b("DOM").create("div",{id:"pagelet_sidebar"});b("DOM").appendContent(document.body,c);a.loadFromEndpoint("SidebarPagelet","pagelet_sidebar")},"ChatSidebar");b("ChatSidebarActions").loaded()},hide:function(){if(!b("ChatSidebarStore").isEnabled())return;b("ChatSidebarActions").disable()},unhide:function(){if(b("ChatSidebarStore").isEnabled())return;b("ChatSidebarVisibility").shouldShowSidebarIgnoreEnabled(null,function(a,c){b("ChatSidebarActions").enable(a?b("SidebarType").SIDEBAR:b("SidebarType").BUDDYLIST)})},_cacheViewport:function(){q=b("ChatSidebarVisibility").getViewport()},getBodyHeight:function(){return b("gkx")("678259")?J():J(Array.from(k.childNodes))}};P.init=b("TimeSlice").guard(P.init,"ChatSidebar init");e.exports=P}),null);