if (self.CavalryLogger) { CavalryLogger.start_js(["64bCB"]); }

__d("NotifType",[],(function(a,b,c,d,e,f){e.exports={LIKE:"like",OPEN_GRAPH_ACTION_LIKE:"open_graph_action_like",LIKE_TAGGED:"like_tagged",PAGE_FAN:"page_fan",IG_MEDIA_LIKE:"ig_media_like",FEEDBACK_REACTION_GENERIC:"feedback_reaction_generic",FEEDBACK_REACTION_GENERIC_TAGGED:"feedback_reaction_generic_tagged",MESSENGER_REACTIONS:"messenger_reactions",MARKETPLACE_RECEIVED_RATING:"marketplace_received_rating",MARKETPLACE_RECEIVED_RATING_COMPLETED:"marketplace_received_rating_completed"}}),null);
__d("asyncSleep",["regeneratorRuntime","Promise"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){return b("regeneratorRuntime").async(function(c){while(1)switch(c.prev=c.next){case 0:c.next=2;return b("regeneratorRuntime").awrap(new(b("Promise"))(function(b){return setTimeout(b,a)}));case 2:case"end":return c.stop()}},null,this)}e.exports=a}),null);
__d("NotificationHiddenState",["NotificationConstants","NotificationUpdates","isEmpty"],(function(a,b,c,d,e,f){__p&&__p();var g={};b("NotificationUpdates").subscribe("update-notifications",function(a,c){a=c.nodes;c=c.payloadsource;if(c===b("NotificationConstants").PayloadSourceType.LIVE_SEND&&a&&a.length){var d={};a.forEach(function(a){a=a.alert_id;g[a]&&(d[a]=!1)});b("isEmpty")(d)||(g=Object.assign(g,d),b("NotificationUpdates").didUpdateHiddenState(Object.keys(d)))}});b("NotificationUpdates").subscribe("update-hidden",function(a,c){if(c.hiddenState){a=c.hiddenState;g=Object.assign(g,a);b("NotificationUpdates").didUpdateHiddenState(Object.keys(a))}});a={isHidden:function(a){return g[a]?g[a]:!1}};e.exports=a}),null);
__d("NotificationVPVs",["MarauderLogger","getElementRect"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=new Set();function a(a,c){if(h(a))return;b("MarauderLogger").log("notifications_impression_www",void 0,{notif_tracking:c},"notification",a);g.add(a)}function h(a){return g.has(a)}function c(){g.clear()}function d(a,b){return!a||!b?!1:!(a.bottom<b.top||a.top>b.bottom||a.right<b.left||a.left>b.right)}function f(a){a=b("getElementRect")(a);return!a||a.top==0&&a.bottom==0&&a.left==0&&a.right==0?null:a}a={logImpression:a,clearImpressions:c,hasLoggedImpression:h,getValidatedRectangle:f,areRectsOverlapping:d};e.exports=a}),null);
__d("retry",["regeneratorRuntime","asyncSleep"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=function(b){__p&&__p();babelHelpers.inheritsLoose(a,b);function a(a,c,d,e){var f;f=b.call(this,a)||this;f.message=a;f.values=c;f.errors=d;f.options=e;return f}return a}(babelHelpers.wrapNativeSuper(Error)),h=function(){__p&&__p();function a(b){this.$1=babelHelpers["extends"]({},a.RETRY_OPTION_DEFAULTS,b),this.$2=0,this.$3=!1,this.$4=!1,this.$5=[],this.$6=[],this.$7=null,this.$8=0,this.$9()}var c=a.prototype;c.$9=function(){if(this.$1.interval&&this.$1.interval<0)throw new g("C'mon, interval < 0 makes no sense.",[],[],this.$1);if(this.$1.backoff&&this.$1.backoff<1)throw new g("backoff must be >= 1",[],[],this.$1);if(this.$1.jitter&&(this.$1.jitter<0||this.$1.jitter>1))throw new g("jitter must be in range [0, 1]",[],[],this.$1)};c.onValue=function(){this.$1.retryValues||(this.$1.retryValues=[]);for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];this.$1.retryValues=this.$1.retryValues.concat(b);return this};c.untilValue=function(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];return this.untilValueMatches(function(a){return b.indexOf(a)!==-1})};c.onFalsy=function(){return this.onValueMatches(function(a){return!a})};c.onTruthy=function(){return this.onValueMatches(function(a){return!!a})};c.untilTruthy=function(){return this.onFalsy()};c.untilFalsy=function(){return this.onTruthy()};c.onNull=function(){return this.onValueMatches(function(a){return a===null})};c.onUndefined=function(){return this.onValueMatches(function(a){return a===void 0})};c.onValueMatches=function(){this.$1.retryValueMatchers||(this.$1.retryValueMatchers=[]);for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];this.$1.retryValueMatchers=this.$1.retryValueMatchers.concat(b);return this};c.untilValueMatches=function(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];return this.onValueMatches.apply(this,b.map(function(a){return function(b){return!a(b)}}))};c.onError=function(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];if(b.length===0)return this.onErrorMatches(function(a){return!0});this.$1.retryErrorClasses||(this.$1.retryErrorClasses=[]);this.$1.retryErrorClasses=this.$1.retryErrorClasses.concat(b);return this};c.onErrorMatches=function(){this.$1.retryErrorMatchers||(this.$1.retryErrorMatchers=[]);for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];this.$1.retryErrorMatchers=this.$1.retryErrorMatchers.concat(b);return this};c.limit=function(a){this.$1.retries=a;this.$9();return this};c.once=function(){return this.limit(1)};c.twice=function(){return this.limit(2)};c.withInterval=function(a){this.$1.interval=a;this.$9();return this};c.withMaxInterval=function(a){this.$1.maxInterval=a;return this};c.withMinInterval=function(a){this.$1.minInterval=a;return this};c.withBackoff=function(a){this.$1.backoff=a;this.$9();return this};c.withJitter=function(a){this.$1.jitter=a;this.$9();return this};c.abort=function(){this.$3=!0};c.getCallCount=function(){return this.$2};c.getValues=function(){return this.$5};c.getErrors=function(){return this.$6};c.isRunning=function(){return this.$4};c.call=function(a){__p&&__p();var c,d;return b("regeneratorRuntime").async(function(e){__p&&__p();while(1)switch(e.prev=e.next){case 0:if(!this.$4){e.next=2;break}throw new g("Cannot reuse a retry object while it is still running!",[],[],this.$1);case 2:this.$4=!0,e.prev=3,this.$7=a,this.$6=[],this.$5=[];case 7:if(!(!this.$1.retries||this.$2<this.$1.retries+1)){e.next=33;break}if(!(this.$2>0)){e.next=12;break}c=this.$10();e.next=12;return b("regeneratorRuntime").awrap(b("asyncSleep")(c));case 12:if(!this.$3){e.next=14;break}throw new g("Retry aborted.",this.$5,this.$6,this.$1);case 14:e.prev=14;this.$2++;e.next=18;return b("regeneratorRuntime").awrap(a());case 18:d=e.sent;this.$5.push(d);if(!this.$11(d)){e.next=22;break}return e.abrupt("continue",7);case 22:return e.abrupt("return",d);case 25:e.prev=25;e.t0=e["catch"](14);this.$6.push(e.t0);if(!this.$12(e.t0)){e.next=30;break}return e.abrupt("continue",7);case 30:throw e.t0;case 31:e.next=7;break;case 33:throw new g("Max call count exceeded.",this.$5,this.$6,this.$1);case 34:e.prev=34;this.$4=!1;return e.finish(34);case 37:case"end":return e.stop()}},null,this,[[3,,34,37],[14,25]])};c.$10=function(){return Math.max(0,this.$13(this.$14()))};c.$13=function(a){a=a;this.$1.minInterval&&(a=Math.max(a,this.$1.minInterval));this.$1.maxInterval&&(a=Math.min(a,this.$1.maxInterval));return a};c.$14=function(){return this.$15()+this.$16()};c.$17=function(){return this.$1.interval?this.$1.interval:0};c.$18=function(){return this.$1.backoff?this.$1.backoff:1};c.$15=function(){var a=this.$17(),b=this.$18();return a*Math.pow(b,this.$2-1)};c.$16=function(){var a=this.$19(),b=a-this.$8;this.$8=a;return b};c.$19=function(){var a=this.$1.jitter;if(!a)return 0;var b=Math.random()*2-1;b=b*b*b*a/2;a=this.$17();var c=this.$18(),d=c-1;return d<1e-6?a*Math.pow(c,this.$2)*(b+d*(b*b-b)/2):a*Math.pow(c,this.$2)*(Math.pow(c,b)-1)/(c-1)};c.$11=function(a){return!!this.$1.retryValues&&this.$1.retryValues.indexOf(a)!==-1||!!this.$1.retryValueMatchers&&this.$1.retryValueMatchers.some(function(b){return b(a)})};c.$12=function(a){return!!this.$1.retryErrorClasses&&this.$1.retryErrorClasses.some(function(b){return a instanceof b})||!!this.$1.retryErrorMatchers&&this.$1.retryErrorMatchers.some(function(b){return b(a)})};return a}();h.RETRY_OPTION_DEFAULTS={interval:1e3,backoff:1,jitter:.25};function a(a,c){return b("regeneratorRuntime").async(function(d){while(1)switch(d.prev=d.next){case 0:d.next=2;return b("regeneratorRuntime").awrap(new h(c).call(a));case 2:return d.abrupt("return",d.sent);case 3:case"end":return d.stop()}},null,this)}a.Retry=h;a.RetryError=g;function c(){var a;return(a=new h()).onValue.apply(a,arguments)}a.onValue=c;function d(){var a;return(a=new h()).untilValue.apply(a,arguments)}a.untilValue=d;function f(){return new h().onFalsy()}a.onFalsy=f;function i(){return new h().onTruthy()}a.onTruthy=i;function j(){return new h().untilTruthy()}a.untilTruthy=j;function k(){return new h().untilFalsy()}a.untilFalsy=k;function l(){return new h().onNull()}a.onNull=l;function m(){return new h().onUndefined()}a.onUndefined=m;function n(){var a;return(a=new h()).onValueMatches.apply(a,arguments)}a.onValueMatches=n;function o(){var a;return(a=new h()).untilValueMatches.apply(a,arguments)}a.untilValueMatches=o;function p(){var a;return(a=new h()).onError.apply(a,arguments)}a.onError=p;function q(){var a;return(a=new h()).onErrorMatches.apply(a,arguments)}a.onErrorMatches=q;function r(a){return new h().limit(a)}a.limit=r;function s(){return new h().once()}a.once=s;function t(){return new h().twice()}a.twice=t;function u(a){return new h().withInterval(a)}a.withInterval=u;function v(a){return new h().withMaxInterval(a)}a.withMaxInterval=v;function w(a){return new h().withMinInterval(a)}a.withMinInterval=w;function x(a){return new h().withBackoff(a)}a.withBackoff=x;function y(a){return new h().withJitter(a)}a.withJitter=y;e.exports=a}),null);
__d("NotificationList.react",["regeneratorRuntime","Promise","Arbiter","FunnelLogger","NotificationBucketStoreManager","NotificationConstants","NotificationHiddenState","NotificationJewelFunnelLoggingConstants","NotificationSeenState","NotificationStore","NotificationUpdates","NotificationUserActions","NotificationVPVs","NotifType","React","SubscriptionsHandler","TimeSlice","createCancelableFunction","getObjectValues","isEmpty","mapObject","retry"],(function(a,b,c,d,e,f){__p&&__p();var g=b("NotificationJewelFunnelLoggingConstants").FUNNEL_LOGGING_EVENT,h=b("NotificationJewelFunnelLoggingConstants").FUNNEL_LOGGING_NAME;a=b("React").PropTypes;var i=b("NotificationConstants").PayloadSourceType.LIVE_SEND,j=3,k="notification_clicked",l="WebNotificationsPayloadPagelet";function m(a){return{classification:a.classification,endpointControllerName:a.endpoint!=null?a.endpoint:"WebNotificationsPayloadPagelet",readness:a.readness}}c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){__p&&__p();var d;for(var e=arguments.length,f=new Array(e>1?e-1:0),i=1;i<e;i++)f[i-1]=arguments[i];d=a.call.apply(a,[this,c].concat(f))||this;d.$1={};d.$2=!1;d.$3=new(b("SubscriptionsHandler"))();d.$4=0;d.$9=function(){d.setState({retryLimitReached:!1}),d.$10()};d.$11=function(){var a={};Object.keys(d.$1).forEach(function(c){var e=b("NotificationHiddenState").isHidden(c);e!=d.state.hiddenState[c]&&(a[c]=e)});b("isEmpty")(a)||d.setState({hiddenState:babelHelpers["extends"]({},d.state.hiddenState,a)});d.$1={};d.$8(b("NotificationStore").getCount(m(d.props)))};d.$12=function(a,c,e){if(d.state.currentlyFetching||!d.state.canFetchMore)return;a&&(b("FunnelLogger").appendAction(h,g.FETCH_NEXT_SET),d.$10());d.$13(c,e)};d.$15=function(){d.setState({showingChevron:!0})};d.$16=function(){d.setState({showingChevron:!1})};d.$19=function(a,c){d.props.onClick&&d.props.onClick(a,c),b("Arbiter").inform(k,{endpointConfig:m(d.props),alertID:a})};d.$20=function(a){if(d.props.paused&&d.props.readness==="UNREAD"){var b=babelHelpers["extends"]({},d.state.readWhilePausedOrNavigating);b[a]=!0;d.setState({readWhilePausedOrNavigating:b})}};d.$21=function(a){d.$4=a};var j=m(c);b("NotificationStore").registerEndpoint(j);var l=b("NotificationStore").getAll(j);d.state={currentlyFetching:!1,canFetchMore:b("NotificationStore").canFetchMore(j),notifs:l,hiddenState:b("mapObject")(l,function(a,c){return b("NotificationHiddenState").isHidden(c)}),readState:b("mapObject")(l,function(a,c){return b("NotificationSeenState").isRead(c)}),showingChevron:!1,readWhilePausedOrNavigating:{},retryLimitReached:!1};return d}var d=c.prototype;d.UNSAFE_componentWillMount=function(){__p&&__p();var a=this;b("FunnelLogger").appendAction(h,g.FETCH_NOTIFICATIONS);this.$3.addSubscriptions(b("NotificationUpdates").subscribe("notifications-updated",function(c,d){if(d.source==i&&!b("isEmpty")(d.updates)){a.$2=!0;c=a.props.paused;if(c){a.$1=babelHelpers["extends"]({},a.$1,d.updates);return}}a.$5(b("NotificationStore").getAll(m(a.props)))}),b("NotificationUpdates").subscribe(["hidden-state-updated","read-state-updated"],function(c,d){__p&&__p();if(c=="hidden-state-updated"){if(d.source!==i||!a.props.paused){c=b("mapObject")(d.updates,function(a,c){return b("NotificationHiddenState").isHidden(c)});a.setState({hiddenState:babelHelpers["extends"]({},a.state.hiddenState,c)})}}else{c=b("mapObject")(d.updates,function(a,c){return b("NotificationSeenState").isRead(c)});a.setState({readState:babelHelpers["extends"]({},a.state.readState,c)})}}))};d.componentWillUnmount=function(){this.$3.release()};d.UNSAFE_componentWillReceiveProps=function(a){if(!this.$6(a)&&a.paused)return;if(this.props.enableHubView&&this.props.readness==="UNREAD")return;this.setState({readWhilePausedOrNavigating:{}})};d.$6=function(a){return a.classification!==this.props.classification||a.readness!==this.props.readness};d.$7=function(a){var b=this,c=Object.keys(this.state.notifs),d=Object.keys(a).filter(function(a){return!b.state.notifs[a]});c=c.concat(d);var e={};c.forEach(function(c){b.$1[c]?b.state.notifs[c]&&(e[c]=b.state.notifs[c]):e[c]=a[c]||b.state.notifs[c]});return e};d.$5=function(a){a=b("isEmpty")(this.$1)?a:this.$7(a);var c={},d={};b("getObjectValues")(a).forEach(function(a){a=a.alert_id;c[a]=b("NotificationSeenState").isRead(a);d[a]=b("NotificationHiddenState").isHidden(a)});var e=m(this.props);this.setState({notifs:a,canFetchMore:b("NotificationStore").canFetchMore(e)||b("NotificationStore").getCount(e)!==Object.keys(a).length,readState:babelHelpers["extends"]({},this.state.readState,c),hiddenState:babelHelpers["extends"]({},this.state.hiddenState,d)})};d.$8=function(a){__p&&__p();var c=this,d,e,f;return b("regeneratorRuntime").async(function(g){__p&&__p();while(1)switch(g.prev=g.next){case 0:this.setState({currentlyFetching:!0});d=m(this.props);e=b("createCancelableFunction")(function(){c.setState({currentlyFetching:!1,retryLimitReached:!0})});this.$3.addSubscriptions({remove:function(){e.cancel()}});f=b("retry").limit(j).onError().withBackoff(2).withInterval(100).withJitter(.1);g.prev=5;g.next=8;return b("regeneratorRuntime").awrap(f.call(function(){return new(b("Promise"))(function(e,g){var h=b("NotificationStore").getNotifications(a,d,function(f){c.$5(f),Object.keys(f).length<a&&b("NotificationStore").canFetchMore(d)?g():e()}),i=h.remove;c.$3.addSubscriptions({remove:function(){i(),f.abort(),g()}})})}));case 8:this.setState({currentlyFetching:!1});g.next=18;break;case 11:g.prev=11;g.t0=g["catch"](5);if(!(g.t0 instanceof b("retry").RetryError)){g.next=17;break}e();g.next=18;break;case 17:throw g.t0;case 18:case"end":return g.stop()}},null,this,[[5,11]])};d.$10=function(){if(!this.state.currentlyFetching){var a=Object.keys(this.state.notifs).length;this.$8(a+this.props.numPerPage)}};d.$13=function(a,c){__p&&__p();if(!a||!c)return;a=this.$14(a);if(!a)return;for(var d=0,e=a.length;d<e;d++){var f=a[d];if(f){var g=f.getAttribute("data-alert-id"),h=f.getAttribute("data-gt");if(g&&!b("NotificationVPVs").hasLoggedImpression(g)){f=b("NotificationVPVs").getValidatedRectangle(f);f&&b("NotificationVPVs").areRectsOverlapping(c,f)&&b("NotificationVPVs").logImpression(g,h)}}}};d.$14=function(a){__p&&__p();if(!a||!a.children)return null;for(var b=0,c=a.children.length;b<c;b++){var d=a.children[b],e=d.getAttribute("data-alert-id");if(e&&this.state.notifs[e])return a.children;e=this.$14(d);if(e)return e}return null};d.$17=function(a){a=Math.max(this.props.numPerPage,Math.ceil(this.$4));a>0&&this.$8(a)};d.$18=function(a){var c=this,d=b("NotificationSeenState").getUnseenIDs(this.props.classification,this.props.unseenNotifsClassificationsMap);b("isEmpty")(this.$1)||(d=d.filter(function(a){return!c.$1[a]}));d.length&&(this.props.paused||this.props.enableHubView)&&b("TimeSlice").guard(function(){return b("NotificationUserActions").markNotificationsAsSeen(d,c.props.sourceView,c.props.classification)},"NotificationList _populateList markNotificationsAsSeen",{propagationType:b("TimeSlice").PropagationType.ORPHAN})();this.props.hasEverBeenOpened&&((!a||!a.hasEverBeenOpened)&&this.$17(d))};c.isReaction=function(a){return a===b("NotifType").LIKE||a===b("NotifType").OPEN_GRAPH_ACTION_LIKE||a===b("NotifType").LIKE_TAGGED||a===b("NotifType").PAGE_FAN||a===b("NotifType").IG_MEDIA_LIKE||a===b("NotifType").FEEDBACK_REACTION_GENERIC||a===b("NotifType").FEEDBACK_REACTION_GENERIC_TAGGED||a===b("NotifType").MESSENGER_REACTIONS};d.componentDidUpdate=function(a){__p&&__p();this.$18(a);if(a.paused&&!this.props.paused){this.$2=!1;var b=window.setTimeout(this.$11,0);this.$3.addSubscriptions({remove:function(){window.clearTimeout(b)}});return}if(this.props.paused&&this.$6(a)){var c=window.setTimeout(this.$11,0);this.$3.addSubscriptions({remove:function(){window.clearTimeout(c)}});return}};d.componentDidMount=function(){this.$18()};d.render=function(){__p&&__p();var a=this,d=this.props.listRenderer,e=this.state,f=e.notifs,g=e.readState,h=e.readWhilePausedOrNavigating,i={};this.props.readness==null?i=f:Object.keys(f).forEach(function(b){b=f[b];var c=b.alert_id,d=g[c];a.props.readness==="UNREAD"&&(d=!d||Object.prototype.hasOwnProperty.call(h,c));d&&(i[c]=b)});if(this.props.hideReactions){var j={};Object.keys(i).forEach(function(a){a=f[a];c.isReaction(a.notif_type)||(j[a.alert_id]=a)});i=j}var k=this.props.classification;k&&Object.keys(f).forEach(function(a){a=f[a];(!a.classifications||!a.classifications.includes(k))&&delete i[a.alert_id]});e=null;if(!this.props.isBucketingDisabled){b("NotificationBucketStoreManager").setActiveClassification(k);var m=this.props.isNotifsBiz?b("NotificationBucketStoreManager").getBucketStoreInstance(this.props.endpoint||l,k):b("NotificationBucketStoreManager").getBucketStoreInstance(l);e=m.isEmptyBucketListData()?null:m.getBucketListData()}return b("React").createElement(d,{emptyState:this.props.emptyState,paused:this.props.paused,isNotifsBiz:this.props.isNotifsBiz,isFlyoutOpened:this.props.isFlyoutOpened,target:this.props.target,tracking:this.props.tracking,shortenTimestamp:this.props.shortenTimestamp,sourceView:this.props.sourceView,maxHeight:this.props.maxHeight,useChevron:this.props.useChevron,chevronType:this.props.chevronType,buckets:e,notifs:i,afterScroll:this.$12,onChevronShow:this.$15,onChevronHide:this.$16,currentlyFetching:this.state.currentlyFetching,canFetchMore:this.state.canFetchMore,hiddenState:this.state.hiddenState,readState:this.state.readState,showingChevron:this.state.showingChevron,shouldScroll:this.$2,upsell:this.props.upsell||null,isRHC:this.props.isRHC,enableMarkUnread:this.props.enableMarkUnread,onClick:this.$19,onRead:this.$20,onNumNotificationsViewableChange:this.$21,onResetRetryCount:this.$9,retryLimitReached:this.state.retryLimitReached})};return c}(b("React").Component);c.propTypes={hasEverBeenOpened:a.bool,enableHubView:a.bool,enableMarkUnread:a.bool,maxHeight:a.number,paused:a.bool,isFlyoutOpened:a.bool,tracking:a.string,useChevron:a.bool,chevronType:a.string,numPerPage:a.number.isRequired,listRenderer:a.func.isRequired,upsell:a.object,endpoint:a.string,readness:a.string,classification:a.string};e.exports=c}),null);
__d("NotificationListItemBaseWrapper.react",["requireCond","cr:830096"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:830096")}),null);
__d("NotificationListItem.react",["cx","AsyncDialog","AsyncRequest","Bootloader","Event","GamingDestinationEntrypoints","Keys","NotificationListConfig","NotificationListItemBaseWrapper.react","NotificationURI","NotificationUserActions","NotifTestIDs","PageTransitions","React","SubscriptionsHandler","URI","clearImmediate","notificationListRendererIsStoryOnlyLiveVideoNotification","notificationListRendererOpenNotification","notificationListRendererStartTTLMarkers","requireCond","setImmediateAcrossTransitions","cr:902525"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();b("cr:902525");a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$2=new(b("SubscriptionsHandler"))(),d.$5=function(a){__p&&__p();var c=d.props.notification,e=c.primerAttributes;c=c.url;if(a.metaKey||a.ctrlKey||a.button===1)return;if(e&&e.ajaxify){var f=new(b("URI"))(e.ajaxify),g=f.getQueryData(),h=g.app_id,i=g.page_id,j=g.post_id,k=g.ref;k==="aymt_auto_opened_dialog"&&b("Bootloader").loadModules(["BoostedComponentAYMTActionsV2"],function(a){a.aymtAutoOpenDialogLinkClick(h,i,j,k)},"NotificationListItem.react");if(e.rel==="dialog"){a.preventDefault();a.stopPropagation();g=new(b("AsyncRequest"))(f);b("AsyncDialog").send(g,function(a){})}}else if(c){e=new(b("URI"))(c);a=e.getQueryData();f=a.aymt_tip;g=a.external_ref;f==="1"&&b("PageTransitions").go(e.addQueryData("aymt_link_click",Date.now()));g===b("GamingDestinationEntrypoints").LIVE_NOTIFICATION&&b("PageTransitions").go(e)}},d.$6=function(a){__p&&__p();var c=d.props.onClick;c!=null&&c(d.$4(),d.props.notification.notif_type);d.$7(a);if(a.metaKey||a.ctrlKey||a.button===1){var e=a.currentTarget,f=e.getAttribute("rel");if(f!=null){e.removeAttribute("rel");var g=b("setImmediateAcrossTransitions")(function(){e.setAttribute("rel",f)});d.$2.addSubscriptions({remove:function(){b("clearImmediate")(g)}})}return}b("notificationListRendererOpenNotification")(a,d.props.notification);b("notificationListRendererStartTTLMarkers")(a,d.props.notification)},d.$8=function(a){if(b("Event").getKeyCode(a.nativeEvent)==b("Keys").RETURN){var c=d.$4();d.props.onSelected&&d.props.onSelected(c);d.$7(a)}},d.$7=function(a){var c=d.$4();d.props.onRead&&a&&d.props.onRead(c);b("NotificationUserActions").markNotificationsAsRead([c],d.props.sourceView)},d.$9=function(){var a=d.$4();b("NotificationUserActions").markNotificationsAsUnread([a],d.props.sourceView)},d.$10=function(a){var c,e;b("notificationListRendererIsStoryOnlyLiveVideoNotification")(d.props.notification)||(e=b("NotificationURI").localize(new(b("URI"))(d.props.notification.url)));var f=d.props.notification.primerAttributes;((c=f)==null?void 0:c.rel)==="dialog"&&(f=null);return b("React").createElement("a",babelHelpers["extends"]({},f,{"data-testid":b("NotifTestIDs").NOTIF_LIST_ITEM_LINK,href:e,target:d.props.target,role:"button",tabIndex:0,className:"_33e _1_0e",onClick:d.$5,onClickCapture:d.$6,onKeyUp:d.$8}),a)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$3=function(){return b("NotificationListConfig").canMarkUnread||(this.props.enableHubView||!1)&&b("NotificationListConfig").canMarkUnreadInHub};d.$4=function(){return this.props.notification.alert_id};d.componentWillUnmount=function(){this.$2.release()};d.render=function(){return b("React").createElement(b("NotificationListItemBaseWrapper.react"),babelHelpers["extends"]({},this.props,{canMarkUnread:this.$3(),renderLink:this.$10,onMarkItemRead:this.$7,onMarkItemUnread:this.$9,hideIcon:!1}))};return c}(b("React").Component);e.exports=a}),null);
__d("NotificationListPropTypes",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").PropTypes;c={tracking:a.string,notifs:a.object,afterScroll:a.func,onChevronShow:a.func,onChevronHide:a.func,onRead:a.func,canFetchMore:a.bool,hiddenState:a.object,readState:a.object,showingChevron:a.bool,paused:a.bool,maxHeight:a.number,shouldScroll:a.bool,listItemRenderer:a.func};e.exports=c}),null);
__d("NotificationListRetryFetchButton.react",["ix","cx","fbt","AbstractButton.react","Image.react","React","asset"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement(b("AbstractButton.react"),{className:"_3heb","data-hover":"tooltip","data-tooltip-alignh":"center","data-tooltip-content":i._("Um problema tempor\u00e1rio impediu que suas notifica\u00e7\u00f5es fossem carregadas. Clique para tentar novamente."),"data-tooltip-delay":!0,image:b("React").createElement(b("Image.react"),{className:"_3hec",src:g("458300")}),label:i._("Tentar novamente"),labelIsHidden:!0,onClick:this.props.handleRetryClick})};return c}(b("React").Component);e.exports=a}),null);
__d("NotificationPageList.react",["cx","fbt","AbstractButton.react","ErrorBoundary.react","Event","Image.react","LoadingIndicator.react","LogicalGrid.react","NotificationListItem.react","NotificationListPropTypes","NotificationListRetryFetchButton.react","NotifTestIDs","React","ReactDOM","Vector","asset","debounce","getObjectValues","getViewportDimensions","isEmpty"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$5=function(){var a=b("ReactDOM").findDOMNode(d.$2),c=d.$4();d.props.afterScroll&&d.props.afterScroll(d.$3(),a,c)},d.$7=function(){return b("getObjectValues")(d.props.notifs).map(function(a){return JSON.stringify(a)})},d.$8=function(){d.props.onResetRetryCount&&d.props.onResetRetryCount()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$3=function(){if(!this.$1)return!1;var a=b("ReactDOM").findDOMNode(this.$1);if(!a)return!1;a=b("Vector").getElementPosition(a,"viewport").y;return a<b("Vector").getViewportDimensions().y};d.$4=function(){var a=b("getViewportDimensions").withoutScrollbars();return{top:0,bottom:a.height,left:0,right:a.width}};d.$6=function(a,b){return b.indexOf(a)};d.componentDidUpdate=function(){this.$5()};d.componentDidMount=function(){b("Event").listen(window,"scroll",b("debounce")(this.$5,200)),this.$5()};d.$9=function(){var a=this,c=b("getObjectValues")(this.props.notifs).map(function(a){return a.alert_id}),d=this.props.listItemRenderer;return b("getObjectValues")(this.props.notifs).map(function(e,f){var g=e.alert_id,h=a.$6(g,c);return b("React").createElement(b("ErrorBoundary.react"),{key:g},b("React").createElement(d,{getDebugData:a.$7,enableMarkUnread:a.props.enableMarkUnread,isNotifsPage:!0,isRead:a.props.readState[g],isSelected:a.props.selectedID===g,noPhotoPreviews:!0,notification:e,onRead:a.props.onRead,onChevronHide:a.props.onChevronHide,onChevronShow:a.props.onChevronShow,paused:!!a.props.paused,row:h,rowIndex:f,shortenTimestamp:a.props.shortenTimestamp,sourceView:a.props.sourceView,visible:!a.props.hiddenState[g]}))})};d.render=function(){__p&&__p();var a=this,c=null,d=null,e=b("React").createElement("ul",{"data-gt":this.props.tracking,"data-testid":b("NotifTestIDs").SEE_ALL_LIST});!b("isEmpty")(this.props.notifs)?c=b("React").createElement(b("LogicalGrid.react"),{ref:function(b){return a.$2=b},component:e},this.$9()):this.props.canFetchMore||(c=b("React").createElement("div",{className:"_44_s","data-testid":b("NotifTestIDs").SEE_ALL_LIST},h._("Sem novas notifica\u00e7\u00f5es")));this.props.canFetchMore&&(this.props.retryLimitReached&&this.props.onResetRetryCount!=null?d=b("React").createElement(b("NotificationListRetryFetchButton.react"),{handleRetryClick:this.$8}):d=b("React").createElement(b("LoadingIndicator.react"),{color:"white",size:"large",ref:function(b){return a.$1=b},className:"_44_t"}));e=null;if(this.props.upsell){var f=this.props.upsell.module;e=b("React").createElement(f,babelHelpers["extends"]({isPage:!0},this.props.upsell.props))}f="_44_u"+(this.props.showingChevron?" _44_v":"");return b("React").createElement("div",{className:f},e,c,d)};return c}(b("React").Component);a.propTypes=b("NotificationListPropTypes");a.defaultProps={listItemRenderer:b("NotificationListItem.react")};e.exports=a}),null);
__d("DeprecatedCSSMiscellany",["CSS","$","ge"],(function(a,b,c,d,e,f){__p&&__p();function a(){for(var a=0;a<arguments.length;a++){var c=b("ge")(arguments[a]);c&&b("CSS").show(c)}return!1}function c(){for(var a=0;a<arguments.length;a++){var c=b("ge")(arguments[a]);c&&b("CSS").hide(c)}return!1}function d(a){a=b("ge")(a);if(a)return b("CSS").shown(a);else return!1}function f(){for(var a=0;a<arguments.length;a++){var c=b("$")(arguments[a]);c&&b("CSS").toggle(c)}return!1}function g(){for(var a=0;a<arguments.length;a++){var c=b("$")(arguments[a]);c&&b("CSS").toggle(c)}return!1}e.exports={show:a,hide:c,shown:d,toggle:f,toggleDisplayNone:g}}),null);
__d("MobileSmsActivationController",["AsyncRequest","AsyncResponse","DeprecatedCSSMiscellany","Dialog","ReloadPage","$","ge","goURI"],(function(a,b,c,d,e,f){__p&&__p();var g=b("DeprecatedCSSMiscellany").hide,h=b("DeprecatedCSSMiscellany").show;function i(a,b,c,d,e,f){Object.assign(this,{profile_id:a,parent:parent,source:b,misc:c,carrier:null,AJAX_URI:"/ajax/mobile/activation.php",redirect_uri:null,cb_obj:d,status_id:f||"mobile_throbber"}),e?this.goVerification():this.start(),i.instance=this}i.instance={};i.getInstance=function(){return i.instance};i.show_carriers=function(){var a=b("$")("selected_country").value,c=b("$")("carrier_country").value;a&&g(b("$")(a+"_carrier_select"));b("$")("selected_country").value=c;b("$")("selected_carrier").value=0;h(b("$")(c+"_carrier_select"))};i.update_carrier=function(){var a=b("$")("selected_country").value+"_carrier_select";b("$")("selected_carrier").value=b("$")(a).value};Object.assign(i.prototype,{goStep:function(a){if(a==2){this.getShortCode();return}else if(a==3){this.getConfirmCode();return}this.start()},start:function(a){new(b("AsyncRequest"))().setURI(this.AJAX_URI).setData({profile_id:this.profile_id,get_carriers:1,source:this.source,misc:this.misc,error:a}).setHandler(this.showCarriers.bind(this)).setStatusElement(b("$")(this.status_id)).send()},showCarriers:function(a){a=a.getPayload();if(!a)return;this.cb_obj&&this.cb_obj.onShowCarriers?this.cb_obj.onShowCarriers(a):new(b("Dialog"))().setTitle(a.title).setBody(a.html).setHandler(this.getShortCode.bind(this)).setButtons([b("Dialog").NEXT,b("Dialog").CANCEL]).show()},getShortCode:function(){__p&&__p();if(!this.carrier){this.carrier=parseInt(b("$")("selected_carrier").value,10);if(!this.carrier){this.start(!0);return!1}}b("Dialog").getCurrent()&&b("Dialog").getCurrent().setButtonsMessage('<img src="/images/loaders/indicator_blue_small.gif" />');new(b("AsyncRequest"))().setURI(this.AJAX_URI).setData({profile_id:this.profile_id,get_code:1,carrier:this.carrier,source:this.source,misc:this.misc}).setHandler(this.showShortCode.bind(this)).send();return!1},showShortCode:function(a){a=a.getPayload();this.cb_obj&&this.cb_obj.onShowShortCode?this.cb_obj.onShowShortCode(a):new(b("Dialog"))().setTitle(a.title).setBody(a.html).setHandler(this.activate.bind(this)).setButtons([b("Dialog").NEXT,b("Dialog").CANCEL]).show()},activate:function(){var a=b("$")("sms_code").value;if(!a)return;var c=b("ge")("profile_add");c=c?c.checked:null;var d=b("ge")("message_on");d=d?d.checked:null;new(b("AsyncRequest"))().setURI(this.AJAX_URI).setData({profile_id:this.profile_id,confirm:1,code:a,profile_add:c,message_on:d,source:this.source,misc:this.misc}).setHandler(this.confirmCode.bind(this)).setErrorHandler(this.confirmCode.bind(this)).send()},confirmCode:function(a){__p&&__p();var c=a.getPayload();if(!a.error&&c.success)if(this.cb_obj&&this.cb_obj.onActivationSuccess)this.cb_obj.onActivationSuccess(c);else{if(c.redirect_now){b("goURI")(c.redirect,c.force_redirect);return}if(c.redirect==null)return;this.redirect_uri=c.redirect;new(b("Dialog"))().setTitle(c.title).setBody(c.html).setHandler(this.redirect.bind(this)).setButtons([b("Dialog").OK]).show()}else this.cb_obj&&this.cb_obj.onActivationFailure?this.cb_obj.onActivationFailure(a):b("AsyncResponse").defaultErrorHandler.call(this,a)},redirect:function(){this.redirect_uri=="reload"?b("ReloadPage").now():b("goURI")(this.redirect_uri)},goVerification:function(){new(b("AsyncRequest"))().setURI(this.AJAX_URI).setData({profile_id:this.profile_id,show_verification:1,source:this.source,misc:this.misc}).setHandler(this.displayVerification.bind(this)).send();return!1},displayVerification:function(a){var c=a.getPayload();this.cb_obj&&this.cb_obj.onDisplayVerification?this.cb_obj.onDisplayVerification(c):new(b("Dialog"))().setTitle(c.title).setBody(c.html).setHandler(this.completeVerification.bind(this,a)).setButtons([b("Dialog").OK]).show()},completeVerification:function(a){a=a.getPayload();this.cb_obj&&this.cb_obj.onVerificationComplete(a)}});e.exports=i}),null);
__d("legacy:mobile-sms-activation",["MobileSmsActivationController"],(function(a,b,c,d,e,f){a.MobileSmsActivationController=b("MobileSmsActivationController"),a.mobile_activation_show_carriers=b("MobileSmsActivationController").show_carriers,a.mobile_activation_update_carrier=b("MobileSmsActivationController").update_carrier}),3);