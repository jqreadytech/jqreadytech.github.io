(window.webpackJsonp=window.webpackJsonp||[]).push([[116,18,22,58,101,102,108,124,126,127,130],{418:function(t,e,n){"use strict";n.r(e);var o={name:"notice",props:{message:{type:String,default:""},borderClass:{type:String,default:"yellow"}},data:function(){return{}},computed:{},methods:{}},l=(n(423),n(58)),component=Object(l.a)(o,(function(){var t=this;return(0,t._self._c)("div",{class:t.borderClass+" notice p-2",domProps:{innerHTML:t._s(t.message)}})}),[],!1,null,"07b98bc0",null);e.default=component.exports},419:function(t,e,n){var content=n(424);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(93).default)("7a3b6d4c",content,!0,{sourceMap:!1})},421:function(t,e,n){"use strict";n.r(e);n(20),n(125);var o={components:{multiSelect:n(426).default},name:"fieldGroup",props:{group:{type:Object,default:function(){return{}}},wrapperClass:{type:String,default:function(){return""}},buttonsColClass:{type:String,default:function(){return""}},includeButtons:{type:Boolean,default:function(){return!1}},includeCustomCol:{type:Boolean,default:function(){return!1}},includeCustomColBefore:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwitchOption:[{text:"Yes",value:!0},{text:"No",value:!1}]}},computed:{}},l=(n(429),n(58)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{class:t.wrapperClass},[e("b-row",[t.includeCustomColBefore?t._t("custom-col-before"):t._e(),t._v(" "),t._l(t.group,(function(n,o){return e("b-col",{key:o,attrs:{id:o}},[e("b-form-group",{class:n.labelClass?n.labelClass:n.class?n.class:"width-st",attrs:{label:n.label,description:n.description,disabled:n.disabled}},[n.labelInfoHover?e("label",{staticClass:"mb-1"},[t._v(t._s(n.labelInfoHover)+" "),e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"d-inline float-right py-0",staticStyle:{"font-size":"12px"},attrs:{variant:"link",title:n.labelInfoHoverText}},[e("b-icon",{staticClass:"text-warning",attrs:{icon:"info-circle"}})],1)],1):t._e(),t._v(" "),"readOnly"===n.type?e("div",{class:n.class?n.class:""},[e("label"),t._v(" "),e("span",[t._v(t._s(n.value))])]):t._e(),t._v(" "),"link"===n.type?e("div",{class:n.class?n.class:""},[e("label"),t._v(" "),e("span",[e("a",{attrs:{href:"#"}},[t._v(t._s(n.value))])])]):t._e(),t._v(" "),"text"===n.type?e("b-form-input",{class:n.class?n.class:"",model:{value:n.value,callback:function(e){t.$set(n,"value",e)},expression:"field.value"}}):t._e(),t._v(" "),"currency"===n.type?e("b-input-group",{attrs:{prepend:"$"}},[e("b-form-input",{class:n.class?n.class:"",model:{value:n.value,callback:function(e){t.$set(n,"value",e)},expression:"field.value"}})],1):t._e(),t._v(" "),"textarea"===n.type?e("b-form-textarea",{class:n.class?n.class:"",attrs:{rows:n.rows?n.rows:""},model:{value:n.value,callback:function(e){t.$set(n,"value",e)},expression:"field.value"}}):t._e(),t._v(" "),"file"===n.type?e("b-form-file",{class:n.class?n.class:"",model:{value:n.value,callback:function(e){t.$set(n,"value",e)},expression:"field.value"}}):t._e(),t._v(" "),"lov"===n.type?e("b-form-select",{class:n.class?n.class:"",attrs:{options:n.options?n.options:[]},model:{value:n.value,callback:function(e){t.$set(n,"value",e)},expression:"field.value"}}):t._e(),t._v(" "),"mlov"===n.type?e("MultiSelect",{class:n.class?n.class:"",attrs:{options:n.options?n.options:[]},model:{value:n.value,callback:function(e){t.$set(n,"value",e)},expression:"field.value"}}):t._e(),t._v(" "),"date"===n.type?e("b-form-datepicker",{class:n.class?n.class:"",model:{value:n.value,callback:function(e){t.$set(n,"value",e)},expression:"field.value"}}):t._e(),t._v(" "),"switch"===n.type?e("b-form-radio-group",{class:n.class?n.class:"",attrs:{options:n.options?n.options:t.defaultSwitchOption,"button-variant":"outline-primary",size:"sm",buttons:""},model:{value:n.value,callback:function(e){t.$set(n,"value",e)},expression:"field.value"}}):t._e(),t._v(" "),"radio"===n.type?e("b-form-radio-group",{class:n.class?n.class:"",attrs:{options:n.options?n.options:t.defaultSwitchOption,"button-variant":"outline-primary",size:"sm",buttons:""},model:{value:n.value,callback:function(e){t.$set(n,"value",e)},expression:"field.value"}}):t._e(),t._v(" "),"checkbox"===n.type?e("b-form-checkbox",{class:"mt-1"+(n.class?n.class:""),attrs:{value:!0,"unchecked-value":!1},model:{value:n.value,callback:function(e){t.$set(n,"value",e)},expression:"field.value"}},[t._v("\n          "+t._s(n.subLabel)+"\n        ")]):t._e(),t._v(" "),"dayHourMinute"===n.type?e("div",[e("label",{staticClass:"d-inline mr-1"},[t._v("Days")]),e("b-form-input",{staticClass:"d-inline width-xs",model:{value:t.days,callback:function(e){t.days=e},expression:"days"}}),t._v(" "),e("label",{staticClass:"d-inline mr-1 ml-2"},[t._v("Hours")]),e("b-form-input",{staticClass:"d-inline width-xs",model:{value:t.hours,callback:function(e){t.hours=e},expression:"hours"}}),t._v(" "),e("label",{staticClass:"d-inline mr-1 ml-2"},[t._v("Minutes")]),e("b-form-input",{staticClass:"d-inline width-xs",model:{value:t.mins,callback:function(e){t.mins=e},expression:"mins"}})],1):t._e()],1)],1)})),t._v(" "),t.includeCustomCol?t._t("custom-col"):t._e(),t._v(" "),t.includeButtons?e("b-col",{class:t.buttonsColClass},[e("div",{staticClass:"d-flex p-4"},[e("label"),t._v(" "),t._t("inline-buttons")],2)]):t._e()],2)],1)}),[],!1,null,"4514f2be",null);e.default=component.exports;installComponents(component,{MultiSelect:n(426).default})},423:function(t,e,n){"use strict";n(419)},424:function(t,e,n){var o=n(92)((function(i){return i[1]}));o.push([t.i,".notice[data-v-07b98bc0]{background:var(--grey-100)!important;color:var(--grey-500)!important}.green[data-v-07b98bc0]{border-left:4px solid var(--success)!important}.blue[data-v-07b98bc0]{border-left:4px solid var(--primary)!important}.yellow[data-v-07b98bc0]{border-left:4px solid var(--yellow)!important}.red[data-v-07b98bc0]{border-left:4px solid var(--danger)!important}",""]),o.locals={},t.exports=o},426:function(t,e,n){"use strict";n.r(e);var o={name:"multiSelect",props:{options:{type:Array,default:function(){return[]}}},methods:{}},l=n(58),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"ms-container p-1"},[t._l(t.options,(function(option,n){return e("b-button",{key:n,attrs:{id:n,variant:"outline-dark"}},[t._v(t._s(option)+"  x")])})),t._v("  \n")],2)}),[],!1,null,"30d40a90",null);e.default=component.exports},427:function(t,e,n){"use strict";n.r(e);var o={name:"sortIcon",computed:{},methods:{}},l=n(58),component=Object(l.a)(o,(function(){var t=this._self._c;return t("span",{staticClass:"float-right"},[t("b-icon",{attrs:{icon:"arrow-down-up"}})],1)}),[],!1,null,"05a07955",null);e.default=component.exports},428:function(t,e,n){var content=n(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(93).default)("51762d96",content,!0,{sourceMap:!1})},429:function(t,e,n){"use strict";n(428)},430:function(t,e,n){var o=n(92)((function(i){return i[1]}));o.push([t.i,".col[data-v-4514f2be]{flex-grow:0!important}.grow .col[data-v-4514f2be]{flex-grow:1!important}.input-group-text[data-v-4514f2be]{border-radius:0;font-size:.75rem}",""]),o.locals={},t.exports=o},432:function(t,e,n){var content=n(440);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(93).default)("67710844",content,!0,{sourceMap:!1})},434:function(t,e,n){"use strict";n.r(e);var o={name:"notice",props:{message:{type:String,default:""},borderClass:{type:String,default:"yellow"}},data:function(){return{}},computed:{},methods:{}},l=(n(439),n(58)),component=Object(l.a)(o,(function(){var t=this;return(0,t._self._c)("div",{class:t.borderClass+" notice p-2",domProps:{innerHTML:t._s(t.message)}})}),[],!1,null,"c8d7bb7a",null);e.default=component.exports},439:function(t,e,n){"use strict";n(432)},440:function(t,e,n){var o=n(92)((function(i){return i[1]}));o.push([t.i,".notice[data-v-c8d7bb7a]{background:var(--grey-100)!important;color:var(--grey-500)!important}.green[data-v-c8d7bb7a]{border-left:4px solid var(--success)!important}.blue[data-v-c8d7bb7a]{border-left:4px solid var(--primary)!important}.yellow[data-v-c8d7bb7a]{border-left:4px solid var(--yellow)!important}.red[data-v-c8d7bb7a]{border-left:4px solid var(--danger)!important}",""]),o.locals={},t.exports=o},455:function(t,e,n){"use strict";n.r(e);var o={components:{},name:"meansTestInputs",props:{item:{type:Object,default:function(){return{value:"",frequency:""}}},withFrequency:{type:Boolean,default:function(){return!0}},frequencyPosition:{type:String,default:function(){return"left"}}},data:function(){return{}},computed:{}},l=(n(490),n(58)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",["left"===t.frequencyPosition?e("b-row",[e("b-col",{staticClass:"pr-0"},[t.withFrequency?e("b-form-select",{attrs:{options:["Weekly","Fortnightly","Monthly","Quarterly","Yearly"]},model:{value:t.item.frequency,callback:function(e){t.$set(t.item,"frequency",e)},expression:"item.frequency"}}):t._e()],1),t._v(" "),e("b-col",{staticClass:"pl-0"},[e("b-input-group",{attrs:{prepend:"$"}},[e("b-form-input",{staticClass:"text-right",model:{value:t.item.value,callback:function(e){t.$set(t.item,"value",e)},expression:"item.value"}})],1)],1)],1):t._e(),t._v(" "),"right"===t.frequencyPosition?e("b-form-group",[e("b-input-group",{attrs:{prepend:"$"}},[e("b-form-input",{staticClass:"text-right",model:{value:t.item.value,callback:function(e){t.$set(t.item,"value",e)},expression:"item.value"}}),t._v(" "),t.withFrequency?e("b-form-select",{staticStyle:{width:"60px"},attrs:{options:["Weekly","Fortnightly","Monthly","Quarterly","Yearly"]},model:{value:t.item.frequency,callback:function(e){t.$set(t.item,"frequency",e)},expression:"item.frequency"}}):t._e()],1)],1):t._e()],1)])}),[],!1,null,"7aa72304",null);e.default=component.exports},466:function(t,e,n){"use strict";n.r(e);var o=n(421),l=n(418),r=n(455),c={components:{FieldGroup:o.default,notice:l.default,meansTestInputs:r.default},name:"meansTestModalContent",props:{mode:{type:String,default:function(){return"new"}}},data:function(){return{}},computed:{}},d=(n(502),n(58)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table b-table"},[t._m(0),t._v(" "),e("tbody",[e("tr",[e("td",{attrs:{rowspan:"2"}},[t._v("Q1")]),t._v(" "),e("td",[t._v("\n            Number of Dependents (who stay overnight at least once a week)\n          ")]),t._v(" "),e("td",[e("meansTestInputs")],1),t._v(" "),e("td",[e("meansTestInputs")],1)]),t._v(" "),t._m(1),t._v(" "),e("tr",[e("td",{attrs:{rowspan:"10"}},[t._v("Q2")]),t._v(" "),e("td",[t._v("Wage")]),t._v(" "),e("td",[e("meansTestInputs")],1),t._v(" "),e("td",[e("meansTestInputs")],1)]),t._v(" "),e("tr",[e("td",[t._v("Business/Partnership")]),t._v(" "),e("td",[e("meansTestInputs")],1),t._v(" "),e("td",[e("meansTestInputs")],1)]),t._v(" "),e("tr",[e("td",[t._v("Child Maintenance")]),t._v(" "),e("td",[e("meansTestInputs")],1),t._v(" "),e("td",[e("meansTestInputs")],1)]),t._v(" "),e("tr",[e("td",[t._v("Rent Received")]),t._v(" "),e("td",[e("meansTestInputs")],1),t._v(" "),e("td",[e("meansTestInputs")],1)]),t._v(" "),e("tr",[e("td",[t._v("Workers Compensation")]),t._v(" "),e("td",[e("meansTestInputs")],1),t._v(" "),e("td",[e("meansTestInputs")],1)]),t._v(" "),e("tr",[e("td",[t._v("Superannuation")]),t._v(" "),e("td",[e("meansTestInputs")],1),t._v(" "),e("td",[e("meansTestInputs")],1)]),t._v(" "),e("tr",[e("td",[t._v("Income Trust Funds")]),t._v(" "),e("td",[e("meansTestInputs")],1),t._v(" "),e("td",[e("meansTestInputs")],1)]),t._v(" "),e("tr",[e("td",[t._v("Spouse Maintenance")]),t._v(" "),e("td",[e("meansTestInputs")],1),t._v(" "),e("td",[e("meansTestInputs")],1)]),t._v(" "),e("tr",[e("td",[t._v("Other Income")]),t._v(" "),e("td",[e("meansTestInputs")],1),t._v(" "),e("td",[e("meansTestInputs")],1)]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)])])])])}),[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{attrs:{width:"100px"}},[t._v("Question")]),t._v(" "),e("th",{attrs:{width:"500px"}}),t._v(" "),e("th",[t._v("Client")]),t._v(" "),e("th",[t._v("FAP1")])])])},function(){var t=this,e=t._self._c;return e("tr",{staticClass:"sub-total"},[e("td",{staticClass:"pl-5"},[t._v("Total Weekly Centrelink Payments")]),t._v(" "),e("td",[t._v("300.00")]),t._v(" "),e("td",[t._v("120.00")])])},function(){var t=this,e=t._self._c;return e("tr",{staticClass:"sub-total"},[e("td",{staticClass:"pl-5"},[t._v("Total Weekly Income")]),t._v(" "),e("td",[t._v("300.00")]),t._v(" "),e("td",[t._v("120.00")])])},function(){var t=this,e=t._self._c;return e("tr",[e("td",{attrs:{rowspan:"3"}},[t._v("Allowances")]),t._v(" "),e("td",[t._v("First Child Allowance (calculated, per week)")]),t._v(" "),e("td",[t._v("-$130.00")]),t._v(" "),e("td")])},function(){var t=this,e=t._self._c;return e("tr",[e("td",[t._v("Subsequent Children Allowance (calculated, per week)")]),t._v(" "),e("td",[t._v("-$246.00 (2 subsequent children at -$123.00 each)")]),t._v(" "),e("td")])},function(){var t=this,e=t._self._c;return e("tr",{staticClass:"sub-total"},[e("td",[t._v("Total Dependents Allowance")]),t._v(" "),e("td",[t._v("-$376.00")]),t._v(" "),e("td")])}],!1,null,"6c64d392",null);e.default=component.exports},469:function(t,e,n){var content=n(491);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(93).default)("c3fa71ec",content,!0,{sourceMap:!1})},471:function(t,e,n){var content=n(503);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(93).default)("14841fa8",content,!0,{sourceMap:!1})},490:function(t,e,n){"use strict";n(469)},491:function(t,e,n){var o=n(92)((function(i){return i[1]}));o.push([t.i,".custom-select[data-v-7aa72304],input[data-v-7aa72304]{display:inline;margin-right:10px;max-width:120px}.input-group-text[data-v-7aa72304]{border-radius:1px;font-size:.75rem}.form-group[data-v-7aa72304]{margin-bottom:0}",""]),o.locals={},t.exports=o},502:function(t,e,n){"use strict";n(471)},503:function(t,e,n){var o=n(92)((function(i){return i[1]}));o.push([t.i,".sub-total[data-v-6c64d392]{background-color:pink;font-weight:900!important}.table td[data-v-6c64d392],.table th[data-v-6c64d392]{text-align:left}",""]),o.locals={},t.exports=o},547:function(t,e,n){var content=n(622);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(93).default)("2aba3acd",content,!0,{sourceMap:!1})},552:function(t,e,n){var content=n(634);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(93).default)("44821152",content,!0,{sourceMap:!1})},558:function(t,e,n){"use strict";n.r(e);var o=n(421),l=n(418),r=n(427),c={components:{FieldGroup:o.default,notice:l.default,sortIcon:r.default},name:"lscCostBreakdownModalContent",props:{mode:{type:String,default:function(){return"new"}}},data:function(){return{}},computed:{}},d=(n(621),n(58)),component=Object(d.a)(c,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table b-table table-bordered"},[e("thead",[e("tr",[e("th",[t._v("Cost")]),t._v(" "),e("th",[t._v("Estimated")]),t._v(" "),e("th",[t._v("Committed")]),t._v(" "),e("th",[t._v("Claimed")]),t._v(" "),e("th",[t._v("Certified")]),t._v(" "),e("th",[t._v("GST")]),t._v(" "),e("th",[t._v("Paid")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Solicitor")]),t._v(" "),e("td",[t._v("$292.00")]),t._v(" "),e("td",[t._v("$292.00")]),t._v(" "),e("td",[t._v("$0.00")]),t._v(" "),e("td",[t._v("$0.00")]),t._v(" "),e("td",[t._v("$29.20")]),t._v(" "),e("td",[t._v("$0.00")])]),t._v(" "),e("tr",[e("td",[t._v("Barrister")]),t._v(" "),e("td",[t._v("$292.00")]),t._v(" "),e("td",[t._v("$292.00")]),t._v(" "),e("td",[t._v("$0.00")]),t._v(" "),e("td",[t._v("$0.00")]),t._v(" "),e("td",[t._v("$29.20")]),t._v(" "),e("td",[t._v("$0.00")])]),t._v(" "),e("tr",[e("td",[t._v("Disbursment")]),t._v(" "),e("td",[t._v("$0.00")]),t._v(" "),e("td",[t._v("$0.00")]),t._v(" "),e("td",[t._v("$0.00")]),t._v(" "),e("td",[t._v("$0.00")]),t._v(" "),e("td",[t._v("$29.20")]),t._v(" "),e("td",[t._v("$0.00")])]),t._v(" "),e("tr",{staticClass:"bold"},[e("td",[t._v("Total")]),t._v(" "),e("td",[t._v("$584.00")]),t._v(" "),e("td",[t._v("$584.00")]),t._v(" "),e("td",[t._v("$0.00")]),t._v(" "),e("td",[t._v("$0.00")]),t._v(" "),e("td",[t._v("$58.40")]),t._v(" "),e("td",[t._v("$0.00")])])])])])])}],!1,null,"1e05917c",null);e.default=component.exports},621:function(t,e,n){"use strict";n(547)},622:function(t,e,n){var o=n(92)((function(i){return i[1]}));o.push([t.i,"tr.bold td[data-v-1e05917c]{font-size:1rem;font-weight:700}",""]),o.locals={},t.exports=o},633:function(t,e,n){"use strict";n(552)},634:function(t,e,n){var o=n(92)((function(i){return i[1]}));o.push([t.i,".sub-total td[data-v-59c62dec]{font-size:1rem;padding-bottom:30px}.input-group-prepend .input-group-text[data-v-59c62dec]{font-size:.85rem;justify-content:space-between;width:94px}.mw-90[data-v-59c62dec]{max-width:90px}.sub-total td[data-v-59c62dec]:not(:first-child),.sum[data-v-59c62dec]{border-top:1px solid #212529}.position-right .padded[data-v-59c62dec]{padding-right:150px;text-align:right!important}.position-right .mini-padded[data-v-59c62dec]{padding-right:116px;text-align:right!important}.position-left .mini-padded[data-v-59c62dec],.position-left .padded[data-v-59c62dec]{padding-right:24px;text-align:right!important}.no-border td[data-v-59c62dec]{border:none!important;font-style:italic}.table td[data-v-59c62dec],.table th[data-v-59c62dec]{text-align:left}",""]),o.locals={},t.exports=o},660:function(t,e,n){"use strict";n.r(e);n(63),n(21),n(20),n(15),n(12),n(22),n(17),n(23);var o=n(3),l=n(421),r=n(466),c=n(455),d=n(107),v=n(434),_=n(558);function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var h={layout:"readycase",client:"lsc",name:"commitment",components:{FieldGroup:l.default,meanTest:r.default,meansTestInputs:c.default,Notice:v.default,lscCostBreakdownModalContent:_.default},data:function(){return{commitmentDecisionState:"Current",recipient:"Please select",tabIndex:0,frequencyPosition:"left",pleaseSelect:"Please select",showCostBreakdown:!1,additionalInfoTableItems:[{type:"Disbursment",name:"Some court",text:"Text here, can be long"},{type:"Solicitor",name:"James Jones",text:"Free hand text here"},{type:"Solicitor",name:"James Jones",text:"Some differnet text here"}],commitmentTableItems:[{code:"MGP",type:"Disbursment",inv:"1234",desc:"ADDITIONAL DAYS",payee:null,ref:"ABC123",units:2,rate:"250",gstRate:"Current",gstApproved:"0.00",payable:"500",committed:"500",claimed:"500",approved:"420",paid:"500",status:"Certified",timeline:[{title:"Date approved",data:"22-04-2023"},{title:"Date received",data:"23-04-2023"}]},{code:"GPYS",type:"Barrister",inv:"4567",desc:"ADDITIONAL HOURS (COUNSEL)",payee:"Super Barr Firm ABN: 82353654, Sam Kerr",ref:"4567",units:1,rate:"250",gstRate:"Current",gstApproved:"0.00",payable:"250",committed:"250",claimed:"250",approved:"250",paid:"250",status:"Approved",timeline:[{title:"Date approved",data:"22-04-2023"},{title:"Date received",data:"23-04-2023"}]}],commitmentFilterFields:{courtType:{label:"CourtType",value:"Magistrates Court",type:"lov",options:["Select one","Magistrates Court","Another Court"]},groupCode:{label:"Group Code",value:"Code1",type:"lov",options:["Code1","Code2"],disabled:!0}}}},mounted:function(){},watch:{},computed:f({},Object(d.c)(["flow"])),methods:f({},Object(d.b)({openFlowModal:"flow/openFlowModal"}))},y=(n(633),n(58)),component=Object(y.a)(h,(function(){var t=this,e=t._self._c;return e("div",[e("b-row",[e("b-col",{staticClass:"text-right",attrs:{cols:"12"}},[e("h6",{staticClass:"mt-2 mb-0 d-inline"},[t._v("Total file commitment: $123.50")]),t._v(" "),t.showCostBreakdown?t._e():e("b-button",{attrs:{variant:"link",size:"sm"},on:{click:function(e){t.showCostBreakdown=!0}}},[t._v("View cost breakdown")]),t._v(" "),t.showCostBreakdown?e("b-button",{attrs:{variant:"link",size:"sm"},on:{click:function(e){t.showCostBreakdown=!1}}},[t._v("Hide cost breakdown")]):t._e()],1)],1),t._v(" "),t.showCostBreakdown?e("b-row",[e("b-col",[e("h6",[t._v("Cost Breakdown")]),t._v(" "),e("lscCostBreakdownModalContent"),t._v(" "),e("hr",{staticClass:"my-4"})],1)],1):t._e(),t._v(" "),e("b-row",[e("b-col",{attrs:{cols:"6"}},["Current"==t.commitmentDecisionState?e("div",[e("b-form-group",{staticClass:"d-inline width-st mr-2 mb-2",attrs:{label:"Court Type"}},[e("b-form-select")],1),t._v(" "),e("b-form-group",{staticClass:"d-inline width-st mr-2 mb-2",attrs:{label:"Group Code"}},[e("b-form-select")],1),t._v(" "),e("b-button",{staticClass:"d-inline",attrs:{size:"sm",variant:"outline-primary"}},[t._v("Add")])],1):t._e()]),t._v(" "),e("b-col",{staticClass:"pt-1 text-right",attrs:{cols:"6"}},[e("b-button",{staticClass:"mr-3",attrs:{variant:"link d-inline",size:"sm"},on:{click:function(e){return t.openFlowModal({modalContent:"lscGroupCodesOrder"})}}},[t._v("Manage group code order")]),t._v(" "),e("b-form-input",{staticClass:"mt-4 width-st d-inline",attrs:{placeholder:"Search by Invoice Number"}})],1)],1),t._v(" "),e("b-row",[e("b-col",[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table b-table table-bordered"},[e("thead",[e("tr",[e("th",{staticClass:"text-center",staticStyle:{width:"80px"}},[t._v("Select "),e("b-form-checkbox")],1),t._v(" "),e("th",{staticStyle:{width:"120px"}},[t._v("Group Code")]),t._v(" "),e("th",{staticStyle:{width:"120px"}},[t._v("Type")]),t._v(" "),e("th",[t._v("Invoice No.")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Payee")]),t._v(" "),e("th",[t._v("Firm Reference")]),t._v(" "),e("th",[t._v("Units")]),t._v(" "),e("th",[t._v("Rate")]),t._v(" "),e("th",[t._v("GST Rate/Approved GST")]),t._v(" "),e("th",[t._v("Totals")]),t._v(" "),e("th",[t._v("Status")]),t._v(" "),e("th",[t._v("Timeline")])])]),t._v(" "),e("tbody",t._l(t.commitmentTableItems,(function(n,o){return e("tr",{key:o,attrs:{id:o}},[e("td",{staticClass:"text-center",staticStyle:{width:"80px"}},[e("b-form-checkbox")],1),t._v(" "),e("td",[t._v("\n                  "+t._s(n.code)+"  "),e("b-button",{attrs:{variant:"link"},on:{click:function(e){return t.openFlowModal({modalContent:"lscClauseInfo"})}}},[e("b-icon",{staticClass:"text-warning",attrs:{icon:"info-circle"}})],1)],1),t._v(" "),e("td",[t._v("\n                  "+t._s(n.type)+" \n                ")]),t._v(" "),e("td",[t._v("\n                  "+t._s(n.inv)+"\n                ")]),t._v(" "),e("td",[t._v("\n                  "+t._s(n.desc)+"\n                ")]),t._v(" "),e("td",[n.payee?e("span",[t._v("\n                    "+t._s(n.payee)+"\n                  ")]):e("b-form-select",{attrs:{options:["Please select"]},model:{value:t.pleaseSelect,callback:function(e){t.pleaseSelect=e},expression:"pleaseSelect"}})],1),t._v(" "),e("td",[e("b-form-input",{model:{value:n.ref,callback:function(e){t.$set(n,"ref",e)},expression:"item.ref"}})],1),t._v(" "),e("td",[e("b-form-input",{staticStyle:{width:"48px"},model:{value:n.units,callback:function(e){t.$set(n,"units",e)},expression:"item.units"}})],1),t._v(" "),e("td",[t._v("\n                  $"+t._s(n.rate)+"\n                ")]),t._v(" "),e("td",{staticClass:"text-center"},[e("b-form-select",{attrs:{options:["Current","Zero Rated"]},model:{value:n.gstRate,callback:function(e){t.$set(n,"gstRate",e)},expression:"item.gstRate"}}),t._v("\n\n                  $"+t._s(n.gstApproved)+"\n                ")],1),t._v(" "),e("td",[e("b-input-group",{staticClass:"mb-2",scopedSlots:t._u([{key:"prepend",fn:function(){return[e("b-input-group-text",[t._v("Payable: "),e("span",{staticClass:"ml-2 float-right"},[t._v("$")])])]},proxy:!0}],null,!0)},[t._v(" "),e("b-form-input",{staticClass:"mw-90",model:{value:n.payable,callback:function(e){t.$set(n,"payable",e)},expression:"item.payable"}})],1),t._v(" "),e("b-input-group",{staticClass:"mb-2",scopedSlots:t._u([{key:"prepend",fn:function(){return[e("b-input-group-text",[t._v("Committed: "),e("span",{staticClass:"ml-2"},[t._v("$")])])]},proxy:!0}],null,!0)},[t._v(" "),e("b-form-input",{staticClass:"mw-90",model:{value:n.committed,callback:function(e){t.$set(n,"committed",e)},expression:"item.committed"}})],1),t._v(" "),e("b-input-group",{staticClass:"mb-2",scopedSlots:t._u([{key:"prepend",fn:function(){return[e("b-input-group-text",[t._v("Claimed: "),e("span",{staticClass:"ml-2"},[t._v("$")])])]},proxy:!0}],null,!0)},[t._v(" "),e("b-form-input",{staticClass:"mw-90",model:{value:n.claimed,callback:function(e){t.$set(n,"claimed",e)},expression:"item.claimed"}})],1),t._v(" "),e("b-input-group",{staticClass:"mb-2",scopedSlots:t._u([{key:"prepend",fn:function(){return[e("b-input-group-text",[t._v("Approved: "),e("span",{staticClass:"ml-2"},[t._v("$")])])]},proxy:!0}],null,!0)},[t._v(" "),e("b-form-input",{staticClass:"mw-90",model:{value:n.approved,callback:function(e){t.$set(n,"approved",e)},expression:"item.approved"}})],1),t._v(" "),e("b-input-group",{staticClass:"mb-2",scopedSlots:t._u([{key:"prepend",fn:function(){return[e("b-input-group-text",[t._v("Disallowed: "),e("span",{staticClass:"ml-2"},[t._v("$")])])]},proxy:!0}],null,!0)},[t._v(" "),e("b-form-input",{staticClass:"mw-90",attrs:{value:n.claimed-n.approved}})],1),t._v(" "),e("b-input-group",{staticClass:"mb-2",scopedSlots:t._u([{key:"prepend",fn:function(){return[e("b-input-group-text",[t._v("Paid: "),e("span",{staticClass:"ml-2"},[t._v("$")])])]},proxy:!0}],null,!0)},[t._v(" "),e("b-form-input",{staticClass:"mw-90",model:{value:n.paid,callback:function(e){t.$set(n,"paid",e)},expression:"item.paid"}})],1)],1),t._v(" "),e("td",[t._v("\n                  "+t._s(n.status)+"\n                ")]),t._v(" "),e("td",[e("b-button",{staticClass:"pt-0",attrs:{variant:"link",size:"sm"},on:{click:function(e){return t.openFlowModal({modalContent:"lscActivitiesTimeline"})}}},[t._v("View Timeline")])],1)])})),0)])])])],1),t._v(" "),e("b-row",[e("b-col",{staticClass:"text-right"},[e("span",[t._v("With selected activities")]),e("b-form-select",{staticClass:"width-st d-inline ml-2",attrs:{options:["Choose an action"],value:"'Choose an action"}}),t._v(" "),e("b-button",{attrs:{size:"sm",variant:"secondary"}},[t._v("Apply actions")]),t._v(" "),e("b-button",{attrs:{size:"sm",variant:"primary"}},[t._v("Save changes")])],1)],1),t._v(" "),e("hr",{staticClass:"my-4"}),t._v(" "),e("b-row",[e("b-col",[e("h6",[t._v("Additional Clauses")]),t._v(" "),e("b-button",{staticClass:"mb-2 d-inline float-right",attrs:{variant:"outline-primary",size:"sm"},on:{click:function(e){return t.openFlowModal({modalContent:"lscAdditionalClause"})}}},[t._v("Add an Additional Clause")]),t._v(" "),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table b-table table-bordered"},[e("thead",[e("tr",[e("th",{staticStyle:{width:"200px"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{width:"200px"}},[t._v("Name")]),t._v(" "),e("th",[t._v("Text")]),t._v(" "),e("th",{staticClass:"text-center",staticStyle:{width:"240px"}},[t._v("Actions")])])]),t._v(" "),e("tbody",t._l(t.additionalInfoTableItems,(function(n,o){return e("tr",{key:o,attrs:{id:o}},[e("td",[t._v("\n                  "+t._s(n.type)+"\n                ")]),t._v(" "),e("td",[t._v("\n                  "+t._s(n.name)+"\n                ")]),t._v(" "),e("td",[t._v("\n                  "+t._s(n.text)+"\n                ")]),t._v(" "),e("td",{staticClass:"text-center"},[e("b-button",{staticClass:"mr-1 d-inline",attrs:{variant:"outline-primary",size:"sm"},on:{click:function(e){return t.openFlowModal({modalContent:"lscAdditionalClause"})}}},[t._v("Edit")]),t._v(" "),e("b-button",{staticClass:"mr-1 d-inline",attrs:{variant:"outline-warning",size:"sm"},on:{click:function(e){return t.openFlowModal({modalContent:"lscAdditionalClause",mode:"clone"})}}},[t._v("Clone")]),t._v(" "),e("b-button",{staticClass:"mr-1 d-inline",attrs:{variant:"outline-danger",size:"sm"},on:{click:function(e){return t.openFlowModal({modalContent:"areYouSure"})}}},[t._v("Remove")])],1)])})),0)])])],1)],1),t._v(" "),e("hr",{staticClass:"mt-4"}),t._v(" "),e("b-row",{staticClass:"mt-4"},[e("b-col",{staticClass:"text-right"},[e("b-button",{staticClass:"d-inline",attrs:{variant:"primary"},on:{click:function(e){return t.openFlowModal({modalContent:"assessmentPublish"})}}},[t._v("Publish")])],1)],1)],1)}),[],!1,null,"59c62dec",null);e.default=component.exports}}]);