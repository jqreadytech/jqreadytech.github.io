(window.webpackJsonp=window.webpackJsonp||[]).push([[143,18,108,130],{418:function(e,t,l){"use strict";l.r(t);var o={name:"notice",props:{message:{type:String,default:""},borderClass:{type:String,default:"yellow"}},data:function(){return{}},computed:{},methods:{}},n=(l(423),l(58)),component=Object(n.a)(o,(function(){var e=this;return(0,e._self._c)("div",{class:e.borderClass+" notice p-2",domProps:{innerHTML:e._s(e.message)}})}),[],!1,null,"07b98bc0",null);t.default=component.exports},419:function(e,t,l){var content=l(424);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(93).default)("7a3b6d4c",content,!0,{sourceMap:!1})},421:function(e,t,l){"use strict";l.r(t);l(20),l(125);var o={components:{multiSelect:l(426).default},name:"fieldGroup",props:{group:{type:Object,default:function(){return{}}},wrapperClass:{type:String,default:function(){return""}},buttonsColClass:{type:String,default:function(){return""}},includeButtons:{type:Boolean,default:function(){return!1}},includeCustomCol:{type:Boolean,default:function(){return!1}},includeCustomColBefore:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwitchOption:[{text:"Yes",value:!0},{text:"No",value:!1}]}},computed:{}},n=(l(429),l(58)),component=Object(n.a)(o,(function(){var e=this,t=e._self._c;return t("div",{class:e.wrapperClass},[t("b-row",[e.includeCustomColBefore?e._t("custom-col-before"):e._e(),e._v(" "),e._l(e.group,(function(l,o){return t("b-col",{key:o,attrs:{id:o}},[t("b-form-group",{class:l.labelClass?l.labelClass:l.class?l.class:"width-st",attrs:{label:l.label,description:l.description,disabled:l.disabled}},[l.labelInfoHover?t("label",{staticClass:"mb-1"},[e._v(e._s(l.labelInfoHover)+" "),t("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"d-inline float-right py-0",staticStyle:{"font-size":"12px"},attrs:{variant:"link",title:l.labelInfoHoverText}},[t("b-icon",{staticClass:"text-warning",attrs:{icon:"info-circle"}})],1)],1):e._e(),e._v(" "),"readOnly"===l.type?t("div",{class:l.class?l.class:""},[t("label"),e._v(" "),t("span",[e._v(e._s(l.value))])]):e._e(),e._v(" "),"link"===l.type?t("div",{class:l.class?l.class:""},[t("label"),e._v(" "),t("span",[t("a",{attrs:{href:"#"}},[e._v(e._s(l.value))])])]):e._e(),e._v(" "),"text"===l.type?t("b-form-input",{class:l.class?l.class:"",model:{value:l.value,callback:function(t){e.$set(l,"value",t)},expression:"field.value"}}):e._e(),e._v(" "),"currency"===l.type?t("b-input-group",{attrs:{prepend:"$"}},[t("b-form-input",{class:l.class?l.class:"",model:{value:l.value,callback:function(t){e.$set(l,"value",t)},expression:"field.value"}})],1):e._e(),e._v(" "),"textarea"===l.type?t("b-form-textarea",{class:l.class?l.class:"",attrs:{rows:l.rows?l.rows:""},model:{value:l.value,callback:function(t){e.$set(l,"value",t)},expression:"field.value"}}):e._e(),e._v(" "),"file"===l.type?t("b-form-file",{class:l.class?l.class:"",model:{value:l.value,callback:function(t){e.$set(l,"value",t)},expression:"field.value"}}):e._e(),e._v(" "),"lov"===l.type?t("b-form-select",{class:l.class?l.class:"",attrs:{options:l.options?l.options:[]},model:{value:l.value,callback:function(t){e.$set(l,"value",t)},expression:"field.value"}}):e._e(),e._v(" "),"mlov"===l.type?t("MultiSelect",{class:l.class?l.class:"",attrs:{options:l.options?l.options:[]},model:{value:l.value,callback:function(t){e.$set(l,"value",t)},expression:"field.value"}}):e._e(),e._v(" "),"date"===l.type?t("b-form-datepicker",{class:l.class?l.class:"",model:{value:l.value,callback:function(t){e.$set(l,"value",t)},expression:"field.value"}}):e._e(),e._v(" "),"switch"===l.type?t("b-form-radio-group",{class:l.class?l.class:"",attrs:{options:l.options?l.options:e.defaultSwitchOption,"button-variant":"outline-primary",size:"sm",buttons:""},model:{value:l.value,callback:function(t){e.$set(l,"value",t)},expression:"field.value"}}):e._e(),e._v(" "),"radio"===l.type?t("b-form-radio-group",{class:l.class?l.class:"",attrs:{options:l.options?l.options:e.defaultSwitchOption,"button-variant":"outline-primary",size:"sm",buttons:""},model:{value:l.value,callback:function(t){e.$set(l,"value",t)},expression:"field.value"}}):e._e(),e._v(" "),"checkbox"===l.type?t("b-form-checkbox",{class:"mt-1"+(l.class?l.class:""),attrs:{value:!0,"unchecked-value":!1},model:{value:l.value,callback:function(t){e.$set(l,"value",t)},expression:"field.value"}},[e._v("\n          "+e._s(l.subLabel)+"\n        ")]):e._e(),e._v(" "),"dayHourMinute"===l.type?t("div",[t("label",{staticClass:"d-inline mr-1"},[e._v("Days")]),t("b-form-input",{staticClass:"d-inline width-xs",model:{value:e.days,callback:function(t){e.days=t},expression:"days"}}),e._v(" "),t("label",{staticClass:"d-inline mr-1 ml-2"},[e._v("Hours")]),t("b-form-input",{staticClass:"d-inline width-xs",model:{value:e.hours,callback:function(t){e.hours=t},expression:"hours"}}),e._v(" "),t("label",{staticClass:"d-inline mr-1 ml-2"},[e._v("Minutes")]),t("b-form-input",{staticClass:"d-inline width-xs",model:{value:e.mins,callback:function(t){e.mins=t},expression:"mins"}})],1):e._e()],1)],1)})),e._v(" "),e.includeCustomCol?e._t("custom-col"):e._e(),e._v(" "),e.includeButtons?t("b-col",{class:e.buttonsColClass},[t("div",{staticClass:"d-flex p-4"},[t("label"),e._v(" "),e._t("inline-buttons")],2)]):e._e()],2)],1)}),[],!1,null,"4514f2be",null);t.default=component.exports;installComponents(component,{MultiSelect:l(426).default})},423:function(e,t,l){"use strict";l(419)},424:function(e,t,l){var o=l(92)((function(i){return i[1]}));o.push([e.i,".notice[data-v-07b98bc0]{background:var(--grey-100)!important;color:var(--grey-500)!important}.green[data-v-07b98bc0]{border-left:4px solid var(--success)!important}.blue[data-v-07b98bc0]{border-left:4px solid var(--primary)!important}.yellow[data-v-07b98bc0]{border-left:4px solid var(--yellow)!important}.red[data-v-07b98bc0]{border-left:4px solid var(--danger)!important}",""]),o.locals={},e.exports=o},426:function(e,t,l){"use strict";l.r(t);var o={name:"multiSelect",props:{options:{type:Array,default:function(){return[]}}},methods:{}},n=l(58),component=Object(n.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"ms-container p-1"},[e._l(e.options,(function(option,l){return t("b-button",{key:l,attrs:{id:l,variant:"outline-dark"}},[e._v(e._s(option)+"  x")])})),e._v("  \n")],2)}),[],!1,null,"30d40a90",null);t.default=component.exports},428:function(e,t,l){var content=l(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(93).default)("51762d96",content,!0,{sourceMap:!1})},429:function(e,t,l){"use strict";l(428)},430:function(e,t,l){var o=l(92)((function(i){return i[1]}));o.push([e.i,".col[data-v-4514f2be]{flex-grow:0!important}.grow .col[data-v-4514f2be]{flex-grow:1!important}.input-group-text[data-v-4514f2be]{border-radius:0;font-size:.75rem}",""]),o.locals={},e.exports=o},808:function(e,t,l){"use strict";l.r(t);var o=l(421),n=l(418),r={components:{FieldGroup:o.default,notice:n.default},name:"entityAliasModalContent",props:{alias:{type:Object,default:function(){return{aliasFields:{firstName:{label:"Given Names",value:"",type:"text",class:"width-lg"},lastName:{label:"Last Name",value:"",type:"text",class:"width-lg"},activeFrom:{label:"Active From",value:"",type:"date"},activeTo:{label:"Active To",value:"",type:"date"},preferredDelivery:{label:"Preferred name",value:"false",type:"switch"}}}}},mode:{type:String,default:function(){return"new"}}},data:function(){return{}},computed:{}},c=l(58),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("div",["edit"===e.mode?t("notice",{staticClass:"mb-4",attrs:{message:"Mockup note: You are in edit mode - fields will be populated with the selected item details"}}):e._e(),e._v(" "),t("field-group",{attrs:{group:e.alias.aliasFields}})],1)}),[],!1,null,"2bf6969d",null);t.default=component.exports}}]);