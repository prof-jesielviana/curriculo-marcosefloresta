if (self.CavalryLogger) { CavalryLogger.start_js(["Syoid"]); }

__d("NotificationCounter",["Arbiter","CrossWindowEventEmitter","DocumentTitle","JSLogger","MessengerEnvironment"],(function(a,b,c,d,e,f){__p&&__p();var g=new(b("CrossWindowEventEmitter"))("JewelBase"),h={messages:0,notifications:0,requests:0};a={init:function(){var a=this;b("Arbiter").subscribe("update_title",this._handleUpdate.bind(this));b("Arbiter").subscribe("jewel/count-updated",this._handleCountUpdate.bind(this));g.addListener("count-updated",function(b){a._handleCountUpdate("",b)})},getCount:function(){__p&&__p();var a=0;for(var c in h){var d=Number(h[c]);if(typeof h[c]==="string"&&isNaN(d))return h[c];if(isNaN(d)||d<0){b("JSLogger").create("jewels").error("bad_count",{jewel:c,count:h[c]});continue}a+=d}return a},updateTitle:function(){if(b("MessengerEnvironment").messengerui)return;var a=this.getCount();b("DocumentTitle").badge(a)},_handleCountUpdate:function(a,b){h[b.jewel]=b.count,this.updateTitle()},_handleUpdate:function(a,b){this.updateTitle()}};e.exports=a}),null);
__d("XWorkHubController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/notifications/hub/{?tab}/{?alert_id}/",{ref:{type:"String"},tab:{type:"String"},selected_key:{type:"String",defaultValue:"app_401904056828201"},alert_id:{type:"String"},mini:{type:"Bool",defaultValue:!1}})}),null);
__d("NotificationJewelController",["Arbiter","Bootloader","Event","EventProfiler","FunnelLogger","IndeterminateNotificationCounter","NotificationConstants","NotificationCounter","NotificationJewelFunnelLoggingConstants","NotificationSeenState","NotificationStore","NotificationUpdates","XWorkHubController","clearTimeout","createObjectFrom","curry","gkx","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g=b("NotificationConstants").PayloadSourceType,h=b("NotificationJewelFunnelLoggingConstants").FUNNEL_LOGGING_EVENT,i=b("NotificationJewelFunnelLoggingConstants").FUNNEL_LOGGING_NAME,j=0,k=!1,l=null;function m(a){var c=b("NotificationSeenState").getUnseenCount();b("Arbiter").inform("jewel/count-updated",{jewel:a,count:c,animation:"none"},"state")}a=function(){"use strict";__p&&__p();function a(a,c){__p&&__p();var d=this,e=c.badgeAnimationData,f=c.classification,k=c.endPoint,n=c.isBizsite,o=c.list;c=c.unseenNotifs;k&&b("NotificationStore").registerEndpoint({endpointControllerName:k,classification:f});n?b("IndeterminateNotificationCounter").init(c.length):b("NotificationCounter").init();var p=b("Event").listen(a.getRoot(),"mouseover",function(){b("FunnelLogger").startFunnel(i),p&&p.remove(),p=null,b("FunnelLogger").appendAction(i,h.MOUSE_OVER_ON_JEWEL),d.eagerRender(o)}),q=null;b("Event").listen(a.getRoot(),"mouseover",function(){q=b("setTimeoutAcrossTransitions")(function(){b("Bootloader").loadModules(["QE2Logger"],function(a){a.logExposureForUser("www_jewel_tooltip_experiment")},"NotificationJewelController"),q=null},500)});b("Event").listen(a.getRoot(),"mouseout",function(){q&&b("clearTimeout")(q)});b("gkx")("678265")&&b("Event").listen(a.getButton(),"click",function(a){if(a.metaKey||a.ctrlKey){a=b("XWorkHubController").getURIBuilder().setString("ref","jewel").setString("tab","all").getURI();window.open(a,"notification_hub_tab_identifier")}});var r=!1,s=a.subscribe("opened",function(){r||(r=!0,b("EventProfiler").tagCurrentActiveInteractionsAs("FirstNotificationJewelOpen")),l&&l(),s&&s.unsubscribe(),s=null,o.open()}),t=o.pause.bind(o);a.subscribe("opened",function(){window.setTimeout(t,0),m(a.name),b("Bootloader").loadModules(["NotificationVPVs"],function(a){return a.clearImpressions()},"NotificationJewelController"),b("Arbiter").inform("notificationJewel/opened")});a.subscribe("closed",function(){o.unpause(),m(a.name),b("Arbiter").inform("notificationJewel/closed"),o.setFlyoutOpenState(!1)});a.subscribe("user-open",function(a,b){o.setFlyoutOpenState(!0)});a.isOpen()&&o.setFlyoutOpenState(!0);b("NotificationUpdates").subscribe("seen-state-updated",b("curry")(m,a.name));e&&(e.logWithQEUniverse&&b("Bootloader").loadModules(["QE2Logger"],function(a){return a.logExposureForUser(e.logWithQEUniverse)},"NotificationJewelController"),e.injectWithAnimation&&b("Bootloader").loadModules(["RelationshipDelightsBadge"],function(b){return b.inject(a,e.injectWithAnimation)},"NotificationJewelController"));b("NotificationUpdates").handleUpdate(g.INITIAL_LOAD,{seenState:b("createObjectFrom")(c,j)});m(a.name);b("Arbiter").inform("jewel_mounted")}var c=a.prototype;c.eagerRender=function(a){k||(k=!0,l=b("EventProfiler").notifyRunningEagerInteraction(["Notifications_Jewel_Button"],"click"),a.open())};return a}();e.exports=a}),null);
__d("NotificationBucketUtils",["JSResource"],(function(a,b,c,d,e,f){"use strict";a={getCustomModuleForType:function(a){switch(a){case"TICKER":return b("JSResource")("NotificationBucketTicker.react").__setRef("NotificationBucketUtils");default:return null}}};e.exports=a}),null);
__d("NotificationAsyncWrapper",["NotificationListConfig","React"],(function(a,b,c,d,e,f){"use strict";e.exports=b("NotificationListConfig").reactFiberAsyncNotifications?b("React").unstable_ConcurrentMode:b("React").Fragment}),null);
__d("NotificationJewelListBucketHeader.react",["cx","FDSText.react","React"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return a.isNotifsBiz===!0?b("React").createElement("div",{className:"_7ghi",id:"notif_jewel_bucket_header"},b("React").createElement(b("FDSText.react"),{size:"body3",weight:"bold"},a.title)):b("React").createElement("div",{className:"_fyy"},a.title.toUpperCase())}e.exports=a}),null);
__d("NotificationBucketGeneric.react",["cx","NotificationJewelListBucketHeader.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.ids,d=a.isNotifsBiz,e=a.isSingleBucketInList,f=a.listRenderer,g=a.startIndex;a=a.title;if(c.length===0)return null;f=f(c,g);return b("React").createElement("div",{className:"_32hm"},a&&!e?b("React").createElement(b("NotificationJewelListBucketHeader.react"),{isNotifsBiz:d,title:a}):null,b("React").createElement("ul",null,f))};return c}(b("React").Component);e.exports=a}),null);
__d("NotificationBucket.react",["cx","BootloadedComponent.react","NotificationBucketGeneric.react","NotificationBucketUtils","NotificationJewelListBucketHeader.react","React","XUISpinner.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.$1=function(){var a=this.props.bucket,c=a.bucketType;a=a.title;return b("React").createElement("div",null,b("React").createElement(b("NotificationJewelListBucketHeader.react"),{title:a,bucketType:c}),b("React").createElement(b("XUISpinner.react"),{className:"_1e00"}))};d.render=function(){var a=this.props,c=a.bucket,d=a.listRenderer;a=a.startIndex;var e=c.bucketType;e=b("NotificationBucketUtils").getCustomModuleForType(e);return!e?b("React").createElement(b("NotificationBucketGeneric.react"),babelHelpers["extends"]({},c,{isNotifsBiz:this.props.isNotifsBiz,isSingleBucketInList:this.props.isSingleBucketInList,listRenderer:d,startIndex:a})):b("React").createElement(b("BootloadedComponent.react"),babelHelpers["extends"]({bootloadLoader:e,bootloadPlaceholder:this.$1()},c))};return c}(b("React").Component);e.exports=a}),null);
__d("WebNotificationsBottomCollisionsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:WebNotificationsBottomCollisionsLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:WebNotificationsBottomCollisionsLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:WebNotificationsBottomCollisionsLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setVC=function(a){this.$1.vc=a;return this};return a}();c={vc:!0};e.exports=a}),null);
__d("NotificationJewelList.react",["cx","fbt","Animation","ErrorBoundary.react","Event","FunnelLogger","JewelLogger","LogicalGrid.react","NotificationBucket.react","NotificationJewelFunnelLoggingConstants","NotificationListConfig","NotificationListItem.react","NotificationListPropTypes","NotificationListRetryFetchButton.react","NotificationVPVs","NotifTestIDs","React","ReactDOM","ScrollableArea.react","SubscriptionsHandler","TimeSlice","TrackingNodes","Vector","WebNotificationsBottomCollisionsTypedLogger","XUISpinner.react","clearTimeout","debounce","getObjectValues","gkx","isEmpty","performanceNowNoFallback","setTimeoutAcrossTransitions","throttle"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=b("NotificationJewelFunnelLoggingConstants").FUNNEL_LOGGING_EVENT,j=b("NotificationJewelFunnelLoggingConstants").FUNNEL_LOGGING_NAME;a=b("NotificationListConfig").numStoriesFromEndBeforeAFetchIsTriggered;var k=160,l=530,m=61,n=Math.ceil(m*a),o=430,p;function q(a){p!=a&&(new(b("WebNotificationsBottomCollisionsTypedLogger"))().log(),p=a)}c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={lastMeasuredHeight:null},d.$2=[],d.$6=new(b("SubscriptionsHandler"))(),d.$7=!1,d.$8=!1,d.$11=function(){__p&&__p();if(!d.$3||!d.$5)return;var a=b("ReactDOM").findDOMNode(d.$3);if(!a)return;var c=b("ReactDOM").findDOMNode(d.$5);if(!c)return;var e=b("NotificationVPVs").getValidatedRectangle(c);if(d.props.afterScroll){var f=function(){d.props.afterScroll(d.$9(),a,e)};c=b("Vector").getElementDimensions(c).y;var g=d.$5&&d.$5.getArea();g&&g.getContentHeight()>0&&d.$7===!1&&b("performanceNowNoFallback")&&b("getObjectValues")(d.props.notifs).length>0&&(d.$7=!0,b("JewelLogger").logJewelListComponentEvent({jewelName:"notifications",eventName:"list_population_initial",timestamp:b("performanceNowNoFallback")()}));g&&c>0&&g.getContentHeight()>=c?((b("gkx")("678282")||d.$8===!1)&&b("performanceNowNoFallback")&&(d.$8=!0,b("JewelLogger").logJewelListComponentEvent({jewelName:"notifications",eventName:"list_populated",timestamp:b("performanceNowNoFallback")()})),b("TimeSlice").guard(f,"NotificationJewelList afterScrollCallback",{propagationType:b("TimeSlice").PropagationType.ORPHAN})()):f()}},d.$17=function(a,b){b=b||0;return a.map(function(a,c){a=d.props.notifs[a];if(!a)return null;c=c+b;return d.$18(a,c,c)})},d.$19=function(){d.setState(function(a){return babelHelpers["extends"]({},a,{lastMeasuredHeight:d.$10()})})},d.$20=function(){var a=b("debounce")(d.$19);d.$6.addSubscriptions(a);return a}(),d.$23=function(){d.props.onResetRetryCount&&d.props.onResetRetryCount()},d.$24=function(){b("FunnelLogger").appendAction(j,i.SCROLL_TO_FETCH),d.$11()},d.$25=b("throttle").acrossTransitionsWithBlocking(d.$24),c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$9=function(){__p&&__p();if(!this.$4||!this.$5)return!1;var a=b("ReactDOM").findDOMNode(this.$5);if(!a)return!1;var c=b("ReactDOM").findDOMNode(this.$4);if(!c)return!1;var d=b("Vector").getElementDimensions(a).y;if(d===0)return!1;a=b("Vector").getElementPosition(a).y+d;d=b("Vector").getElementPosition(c).y;c=this.$5&&this.$5.getArea();c&&c.getScrollTop()>0&&d<a&&q(b("getObjectValues")(this.props.notifs).length);return d-n<a};d.$10=function(){var a=b("Vector").getViewportDimensions().y;a=Math.min(this.props.maxHeight||l,a-k);return a};d.$12=function(a){return this.$2.slice(0,a).reduce(function(a,b){return a+b},0)};d.$13=function(a){var b=0;a.forEach(function(a){a.ids&&a.ids.length!==0&&b++});return b<=1};d.$14=function(a){this.$2=a?a.map(function(a){return a.ids.length}):[]};d.$15=function(){var a=this,b=this.props.buckets;if(!b)return null;var c=this.$13(b);return b.map(function(b,d){return a.$16(b,d,c)})};d.$16=function(a,c,d){var e=this.$12(c);if(a.ids&&a.ids.length){var f=this.props.notifs,g=a.ids.filter(function(a){return!!f[a]});if(g.length===0)return null}return b("React").createElement("li",{key:c},b("React").createElement(b("NotificationBucket.react"),{bucket:a,isNotifsBiz:this.props.isNotifsBiz,isSingleBucketInList:d,listRenderer:this.$17,startIndex:e}))};d.$18=function(a,c,d){var e=a.alert_id;return b("React").createElement(b("ErrorBoundary.react"),{key:e},b("React").createElement(b("NotificationListItem.react"),{isNotifsBiz:this.props.isNotifsBiz,isRead:this.props.readState[e],onChevronHide:this.props.onChevronHide,onChevronShow:this.props.onChevronShow,onClick:this.props.onClick,onRead:this.props.onRead,parent:this,paused:this.props.paused,row:c,rowIndex:d,shortenTimestamp:this.props.shortenTimestamp,sourceView:this.props.sourceView,target:this.props.target,visible:!this.props.hiddenState[e],notification:a}))};d.$21=function(a){this.props.onNumNotificationsViewableChange&&this.props.onNumNotificationsViewableChange(a/m)};d.UNSAFE_componentWillMount=function(){this.$14(this.props.buckets),this.$6.addSubscriptions(b("Event").listen(window,"resize",this.$20)),this.$19()};d.componentDidMount=function(){var a=this.state.lastMeasuredHeight;a!=null&&this.$21(a);b("performanceNowNoFallback")&&b("JewelLogger").logJewelListComponentEvent({jewelName:"notifications",eventName:"list_did_mount",timestamp:b("performanceNowNoFallback")()})};d.UNSAFE_componentWillReceiveProps=function(a){if(a.buckets===this.props.buckets)return;this.$14(a.buckets)};d.componentDidUpdate=function(a,c){__p&&__p();if(this.props.paused&&!a.paused&&(this.props.shouldScroll&&this.$5)){a=this.$5.getArea();a&&a.scrollToTop(!1)}this.props.retryLimitReached&&b("JewelLogger").logJewelFail();a=this.state.lastMeasuredHeight;if(a!=null&&a!==c.lastMeasuredHeight){this.$21(a);this.$1&&(this.$1.stop(),delete this.$1);if(!b("isEmpty")(this.props.notifs)){c=b("ReactDOM").findDOMNode(this.$5);c&&(this.$1=new(b("Animation"))(c).to("height",a+"px").duration(100).go())}}var d=b("setTimeoutAcrossTransitions")(this.$11,0);this.$6.addSubscriptions({remove:function(){b("clearTimeout")(d)}})};d.componentWillUnmount=function(){this.$6.release(),this.$1&&(this.$1.stop(),delete this.$1)};d.$22=function(a,b){return b.indexOf(a)};d.$26=function(){var a=this;if(this.props.buckets&&this.props.buckets.length)return this.$15();var c=b("getObjectValues")(this.props.notifs).filter(Boolean).map(function(a){return a.alert_id});return b("getObjectValues")(this.props.notifs).filter(Boolean).map(function(b,d){var e=b.alert_id;e=a.$22(e,c);return a.$18(b,e,d)})};d.render=function(){__p&&__p();var a=this,c=this.props.notifs,d=null,e=null,f=o,g=null,i=b("React").createElement("ul",{"data-ft":b("TrackingNodes").getTrackingInfo(b("TrackingNodes").types.NOTIFICATION_JEWEL),"data-gt":this.props.tracking,"data-testid":b("NotifTestIDs").REACT_NOTIF_LIST});if(!b("isEmpty")(c))d=b("React").createElement(b("LogicalGrid.react"),{ref:function(b){return a.$3=b},component:i},this.$26()),e=this.state.lastMeasuredHeight;else if(!this.props.canFetchMore){c=this.props.isNotifsBiz&&this.props.emptyState?this.props.emptyState:h._("Sem novas notifica\u00e7\u00f5es");d=b("React").createElement("div",{className:"_572e","data-testid":b("NotifTestIDs").REACT_NOTIF_LIST},c)}this.props.canFetchMore&&(this.props.retryLimitReached&&this.props.onResetRetryCount!=null?g=b("React").createElement(b("NotificationListRetryFetchButton.react"),{handleRetryClick:this.$23}):g=b("React").createElement(b("XUISpinner.react"),{ref:function(b){return a.$4=b},paused:!this.props.currentlyFetching,className:"jewelLoading"}));i=null;if(this.props.upsell){c=this.props.upsell.module;i=b("React").createElement(c,this.props.upsell.props)}c="_50-t"+(this.props.showingChevron?" _2iy1":"");f=b("React").createElement(b("ScrollableArea.react"),{ref:function(b){return a.$5=b},width:f,fade:!0,persistent:!0,onScroll:this.$25},d,g);return b("React").createElement("div",{style:e?{height:e+"px"}:{},className:c},f,i)};return c}(b("React").Component);c.defaultProps={retryLimitExceeded:!1};c.propTypes=b("NotificationListPropTypes");e.exports=c}),null);