if (self.CavalryLogger) { CavalryLogger.start_js(["XuOFo"]); }

__d("DialogNumberedFlow",["Arbiter","DialogX","Event","SubscriptionsHandler","tidyEvent"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d,e,f,g){__p&&__p();var h;h=a.call(this)||this;h.$DialogNumberedFlow1=c;h.$DialogNumberedFlow2=d;h.$DialogNumberedFlow3=e;h.$DialogNumberedFlow4=f;h.$DialogNumberedFlow5=g;h.$DialogNumberedFlow6=new(b("SubscriptionsHandler"))();h.$DialogNumberedFlow8();return h}var d=c.prototype;d.show=function(){this.$DialogNumberedFlow1&&this.$DialogNumberedFlow1.show(),this.$DialogNumberedFlow7=0,this.$DialogNumberedFlow9()};d.hide=function(){this.$DialogNumberedFlow5.forEach(function(a){a&&a.cleanup()}),this.$DialogNumberedFlow1&&this.$DialogNumberedFlow1.hide(),this.$DialogNumberedFlow6&&this.$DialogNumberedFlow6.release(),this.inform("hide")};d.goToNextStep=function(){this.$DialogNumberedFlow7++,this.$DialogNumberedFlow7<this.$DialogNumberedFlow5.length?(this.$DialogNumberedFlow5[this.$DialogNumberedFlow7-1].hide(),this.$DialogNumberedFlow5[this.$DialogNumberedFlow7].show()):this.hide()};d.goToPreviousStep=function(){if(this.$DialogNumberedFlow7<=0)return;this.$DialogNumberedFlow7--;this.$DialogNumberedFlow5[this.$DialogNumberedFlow7+1].rewind();this.$DialogNumberedFlow5[this.$DialogNumberedFlow7].revisit()};d.getInnerDialog=function(){return this.$DialogNumberedFlow1};d.$DialogNumberedFlow9=function(){for(var a=0;a<this.$DialogNumberedFlow5.length;a++){var b=this.$DialogNumberedFlow5[a];if(!b)continue;b.initialize(a+1,this.$DialogNumberedFlow3[a],this.$DialogNumberedFlow4[a+1])}this.$DialogNumberedFlow1.updatePosition()};d.$DialogNumberedFlow8=function(){this.$DialogNumberedFlow6.addSubscriptions(b("tidyEvent")(b("Event").listen(this.$DialogNumberedFlow2,"click",function(){this.hide(),b("Arbiter").inform("dnflow/checkup_cancel",null)}.bind(this)))),this.$DialogNumberedFlow6.addSubscriptions(b("Arbiter").subscribe("dnflow/nextButton",function(){this.goToNextStep()}.bind(this)),b("Arbiter").subscribe("dnflow/backButton",function(){this.goToPreviousStep()}.bind(this)))};return c}(b("DialogX"));e.exports=a}),null);
__d("DialogNumberedFlowNextButton",["Arbiter","Banzai","Event","tidyEvent"],(function(a,b,c,d,e,f){a={init:function(a,c,d,e,f,g){g&&a.focus(),b("tidyEvent")(b("Event").listen(a,"click",function(d,e,f){d&&b("Banzai").post("dialog_numbered_flow",{token:d,label:e,extra_data:f},{delay:3e3}),c?b("Arbiter").inform("dnflow/backButton",null):a.getAttribute("href")!=null&&b("Arbiter").inform("dnflow/nextButton",null),b("Arbiter").inform("dnflow/resetFocus",null)}.bind(this,d,e,f)))}};e.exports=a}),null);
__d("DialogNumberedFlowOpenedSection",["ArbiterMixin","mixin"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(b,a);function b(b,c){var d;d=a.call(this)||this;d.$DialogNumberedFlowOpenedSection1=b;d.$DialogNumberedFlowOpenedSection2=c;return d}var c=b.prototype;c.getDiv=function(){return this.$DialogNumberedFlowOpenedSection1};c.onShow=function(){this.inform("show"),this.$DialogNumberedFlowOpenedSection2&&this.$DialogNumberedFlowOpenedSection2.onShow()};c.onHide=function(){this.inform("hide"),this.$DialogNumberedFlowOpenedSection2&&this.$DialogNumberedFlowOpenedSection2.onHide()};c.cleanup=function(){this.$DialogNumberedFlowOpenedSection2&&this.$DialogNumberedFlowOpenedSection2.cleanup()};return b}(b("mixin")(b("ArbiterMixin")));e.exports=a}),null);
__d("DialogNumberedFlowStepBase",[],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(){}var b=a.prototype;b.initialize=function(a,b,c){};b.show=function(){};b.hide=function(){};b.rewind=function(){};b.revisit=function(){};b.cleanup=function(){};return a}();e.exports=a}),null);
__d("DialogNumberedFlowStep",["cx","Animation","CSS","DialogNumberedFlowStepBase","DOM","Ease"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b,c,d,e){var f;f=a.call(this)||this;f.$DialogNumberedFlowStep1=b;f.$DialogNumberedFlowStep2=c;f.$DialogNumberedFlowStep3=d;f.$DialogNumberedFlowStep4=e;return f}var d=c.prototype;d.revisit=function(){this.$DialogNumberedFlowStep4&&b("CSS").hide(this.$DialogNumberedFlowStep4),this.show()};d.initialize=function(a,c,d){this.$DialogNumberedFlowStep5=a,this.$DialogNumberedFlowStep6=c,this.$DialogNumberedFlowStep7=d,b("CSS").show(this.$DialogNumberedFlowStep1),a>1?(this.$DialogNumberedFlowStep2&&b("CSS").show(this.$DialogNumberedFlowStep2),this.$DialogNumberedFlowStep3&&b("CSS").hide(this.$DialogNumberedFlowStep3.getDiv())):(this.$DialogNumberedFlowStep2&&b("CSS").hide(this.$DialogNumberedFlowStep2),this.$DialogNumberedFlowStep3&&b("CSS").show(this.$DialogNumberedFlowStep3.getDiv()),this.$DialogNumberedFlowStep3&&this.$DialogNumberedFlowStep3.onShow()),this.$DialogNumberedFlowStep4&&b("CSS").hide(this.$DialogNumberedFlowStep4),this.$DialogNumberedFlowStep8(),this.$DialogNumberedFlowStep9(),this.$DialogNumberedFlowStep1.style.backgroundColor="#fff"};d.$DialogNumberedFlowStep8=function(){var a=this.$DialogNumberedFlowStep10(this.$DialogNumberedFlowStep5);b("DOM").prependContent(this.$DialogNumberedFlowStep2,a)};d.$DialogNumberedFlowStep9=function(){if(!this.$DialogNumberedFlowStep3)return;var a=this.$DialogNumberedFlowStep3.getDiv(),c=b("DOM").create("span",{className:"_5s1e _5s1f",role:"heading","aria-level":"3"},this.$DialogNumberedFlowStep6);b("DOM").prependContent(a,c);c=this.$DialogNumberedFlowStep10(this.$DialogNumberedFlowStep5);b("DOM").prependContent(a,c)};d.$DialogNumberedFlowStep10=function(a){return b("DOM").create("span",{className:"_5s1g"},this.$DialogNumberedFlowStep7)};d.show=function(){__p&&__p();if(!this.$DialogNumberedFlowStep3)return;var a=this.$DialogNumberedFlowStep3.getDiv(),c=this.$DialogNumberedFlowStep2;a.style.opacity="0";a.style["float"]="left";b("CSS").show(a);var d=a.clientHeight;new(b("Animation"))(c).to("opacity",0).blind().hide().ease(b("Ease").circInOut).duration(500).go();new(b("Animation"))(this.$DialogNumberedFlowStep1).to("height",d).from("background-color","#f6f7f8").to("background-color","#fff").blind().ease(b("Ease").circInOut).duration(500).go();new(b("Animation"))(a).duration(500).checkpoint().from("opacity",0).to("opacity",1).ease(b("Ease").circInOut).duration(250).ondone(function(){this.$DialogNumberedFlowStep3&&this.$DialogNumberedFlowStep3.onShow()}.bind(this)).go()};d.hide=function(){if(!this.$DialogNumberedFlowStep3)return;var a=this.$DialogNumberedFlowStep3.getDiv(),b=this.$DialogNumberedFlowStep4;this.transform(a,b)};d.rewind=function(){if(!this.$DialogNumberedFlowStep3)return;var a=this.$DialogNumberedFlowStep3.getDiv(),b=this.$DialogNumberedFlowStep2;this.transform(a,b)};d.transform=function(a,c){if(!c)return;c.style.opacity="0";b("CSS").show(c);var d=a.clientHeight,e=c.clientHeight;new(b("Animation"))(a).blind().to("opacity",0).hide().ease(b("Ease").circInOut).duration(250).ondone(function(){this.$DialogNumberedFlowStep3&&this.$DialogNumberedFlowStep3.onHide()}.bind(this)).go();new(b("Animation"))(this.$DialogNumberedFlowStep1).from("height",d).to("height",e).to("background-color","#f6f7f8").blind().ease(b("Ease").circInOut).duration(500).go();new(b("Animation"))(c).duration(500).checkpoint().from("opacity",0).to("opacity",1).ease(b("Ease").circInOut).duration(250).go()};d.cleanup=function(){this.$DialogNumberedFlowStep3&&this.$DialogNumberedFlowStep3.cleanup()};return c}(b("DialogNumberedFlowStepBase"));e.exports=a}),null);
__d("DialogNumberedFlowStepFooter",["Animation","CSS","DialogNumberedFlowStepBase","Ease"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){var c;c=a.call(this)||this;c.$DialogNumberedFlowStepFooter1=b;return c}var d=c.prototype;d.initialize=function(){b("CSS").hide(this.$DialogNumberedFlowStepFooter1),this.$DialogNumberedFlowStepFooter1.style.backgroundColor="#fff"};d.show=function(){var a=this.$DialogNumberedFlowStepFooter1.children[0];a.style.opacity="0";a.style["float"]="right";b("CSS").show(this.$DialogNumberedFlowStepFooter1);b("CSS").show(a);var c=a.clientHeight;new(b("Animation"))(this.$DialogNumberedFlowStepFooter1).from("height",0).to("height",c).blind().ease(b("Ease").circInOut).duration(500).go();new(b("Animation"))(a).duration(500).checkpoint().from("opacity",0).to("opacity",1).ease(b("Ease").circInOut).duration(250).go()};d.hide=function(){};d.rewind=function(){b("CSS").hide(this.$DialogNumberedFlowStepFooter1)};return c}(b("DialogNumberedFlowStepBase"));e.exports=a}),null);
__d("ProfileWizardModalManager",["Arbiter","ProfileWizardUIEvents","TimelineProfilePicConfig","tidyEvent"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(){this.setIsOpen(!1)}var c=a.prototype;c.setIsOpen=function(a){this.$1=a;return this};c.isOpen=function(){return this.$1};c.informProfilePictureUploaded=function(a){b("Arbiter").inform(b("ProfileWizardUIEvents").PROFILE_PIC_UPLOADED,a)};c.informStepEdited=function(a){b("Arbiter").inform(b("ProfileWizardUIEvents").STEP_EDITED+"-"+a)};c.subscribeProfilePictureUploaded=function(a){b("tidyEvent")([b("Arbiter").subscribe(b("ProfileWizardUIEvents").PROFILE_PIC_UPLOADED,a),b("Arbiter").subscribe(b("TimelineProfilePicConfig").success,a)])};c.subscribeStepEdited=function(a,c){b("tidyEvent")(b("Arbiter").subscribe(b("ProfileWizardUIEvents").STEP_EDITED+"-"+a,c))};c.subscribeOnceProfilePictureUploaded=function(a){b("tidyEvent")([b("Arbiter").subscribeOnce(b("ProfileWizardUIEvents").PROFILE_PIC_UPLOADED,a),b("Arbiter").subscribeOnce(b("TimelineProfilePicConfig").success,a)])};return a}();e.exports=new a()}),null);
__d("ProfileWizardDialogFlowCompletion",["Event","ProfileWizardModalManager","goURI","tidyEvent"],(function(a,b,c,d,e,f){a=function(a,c,d,e){"use strict";b("tidyEvent")([b("Event").listen(a,"click",function(){return g(d)}),b("Event").listen(c,"click",function(){return g(e)})])};function g(a){b("ProfileWizardModalManager").setIsOpen(!1),b("goURI")(a,!0)}e.exports=a}),null);
__d("ProfileWizardDialogSpawner",["cx","AsyncRequest","CSS","Event","ProfileWizardModalManager","XProfileWizardImpressionController","tidyEvent"],(function(a,b,c,d,e,f,g){a={attachImpressionHandlers:function(a,c,d,e,f){b("ProfileWizardModalManager").subscribeStepEdited(e,function(){c.setAttribute("href","#"),c.removeAttribute("data-href"),b("CSS").removeClass(c,"_42fr")}),b("tidyEvent")(b("Event").listen(a,"click",function(){var a=b("XProfileWizardImpressionController").getURIBuilder().setInt("step",d).setEnum("surface",f).getURI();new(b("AsyncRequest"))().setURI(a).send()}))}};e.exports=a}),null);
__d("ProfileWizardModalManagerInit",["PageTransitions","ProfileWizardModalManager","URI","destroyOnUnload","goURI"],(function(a,b,c,d,e,f){__p&&__p();a={init:function(a,c){var d=a.subscribeOnce("hide",function(){if(b("ProfileWizardModalManager").isOpen()){b("ProfileWizardModalManager").setIsOpen(!1);var a=new(b("URI"))(b("PageTransitions").getCurrentURI().getPath());b("goURI")(a,!0)}});b("destroyOnUnload")(function(){return d.unsubscribe()});b("ProfileWizardModalManager").setIsOpen(!0)}};e.exports=a}),null);