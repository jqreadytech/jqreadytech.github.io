(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{505:function(e,t,o){"use strict";o.r(t);o(12),o(72);var n={name:"vagueDate",props:{date:{type:Object,default:function(){return{dateDay:"",dateMonth:"",dateYear:"",unknownDate:!1}}},dateLabel:{type:String,default:"Select the date"},approxDateLabel:{type:String,default:"Enter the approximate date"}},data:function(){return{modalId:Math.random().toString(36).substring(7)}},computed:{},methods:{}},r=o(58),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("div",[t("label",{domProps:{innerHTML:e._s(e.dateLabel)}}),e._v(" "),t("b-form-group",[!0!==e.date.unknownDate?t("b-form-datepicker",{staticClass:"mb-2"}):e._e()],1),e._v(" "),t("b-form-group",[t("b-form-checkbox",{attrs:{value:!0,"unchecked-value":!1},model:{value:e.date.unknownDate,callback:function(t){e.$set(e.date,"unknownDate",t)},expression:"date.unknownDate"}},[e._v("\n                  I don’t know the exact date\n                ")])],1),e._v(" "),!0===e.date.unknownDate?t("b-form-group",{attrs:{label:e.approxDateLabel}},[t("b-row",[t("b-col",{attrs:{cols:"2"}},[t("b-form-group",{attrs:{label:"Day"}},[t("b-form-input",{model:{value:e.date.dateDay,callback:function(t){e.$set(e.date,"dateDay",t)},expression:"date.dateDay"}})],1)],1),e._v(" "),t("b-col",{attrs:{cols:"5"}},[t("b-form-group",{attrs:{label:"Month"}},[t("b-form-input",{model:{value:e.date.dateMonth,callback:function(t){e.$set(e.date,"dateMonth",t)},expression:"date.dateMonth"}})],1)],1),e._v(" "),t("b-col",{attrs:{cols:"5"}},[t("b-form-group",{attrs:{label:"Year"}},[t("b-form-input",{model:{value:e.date.dateYear,callback:function(t){e.$set(e.date,"dateYear",t)},expression:"date.dateYear"}})],1)],1)],1)],1):e._e()],1)}),[],!1,null,"7f5ff863",null);t.default=component.exports}}]);