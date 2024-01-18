(window.webpackJsonp=window.webpackJsonp||[]).push([[59,16,17,18],{418:function(e,t,o){"use strict";o.r(t);var r={name:"notice",props:{message:{type:String,default:""},borderClass:{type:String,default:"yellow"}},data:function(){return{}},computed:{},methods:{}},n=(o(423),o(58)),component=Object(n.a)(r,(function(){var e=this;return(0,e._self._c)("div",{class:e.borderClass+" notice p-2",domProps:{innerHTML:e._s(e.message)}})}),[],!1,null,"07b98bc0",null);t.default=component.exports},419:function(e,t,o){var content=o(424);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(93).default)("7a3b6d4c",content,!0,{sourceMap:!1})},420:function(e,t,o){"use strict";o.r(t);o(12),o(72);var r={name:"entityAddress",props:{addressLabel:{type:String,default:"Address"},showAddress:{type:Boolean,default:!0},idPrefix:{type:String,default:"entity-form"},addressHelp:{type:String,default:"Start typing your address and select one of the options"},addressString:{type:String,default:""},address:{type:Object,default:function(){return{line1:"",line2:"",suburb:"",postcode:"",state:"",country:""}}}},data:function(){return{modalId:Math.random().toString(36).substring(7)}},computed:{},methods:{}},n=o(58),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;return t("div",[t("b-form-group",{staticClass:"mb-0",attrs:{label:e.addressLabel,description:e.addressHelp}},[t("b-form-input",{attrs:{id:e.idPrefix+"-address",name:e.idPrefix+"-address"},model:{value:e.addressString,callback:function(t){e.addressString=t},expression:"addressString"}})],1),e._v(" "),t("div",{staticClass:"text-right"},[t("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"manual-address-".concat(e.modalId),expression:"`manual-address-${modalId}`"}],staticClass:"p-0 mb-4",attrs:{variant:"link"}},[e._v("\n      Click here if you cannot find the right address\n    ")])],1),e._v(" "),t("b-modal",{attrs:{id:"manual-address-".concat(e.modalId),title:"BootstrapVue"},scopedSlots:e._u([{key:"modal-header",fn:function(o){var r=o.close;return[t("h6",[e._v("Address ")]),e._v(" "),t("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"bi bi-x fs-3 removeIcon",attrs:{title:"Close"},on:{click:function(e){return r()}}})]}}])},[e._v(" "),t("b-form-group",{attrs:{label:"Address line 1"}},[t("b-form-input",{attrs:{id:e.idPrefix+"-line1",name:e.idPrefix+"-line1"},model:{value:e.address.line1,callback:function(t){e.$set(e.address,"line1",t)},expression:"address.line1"}})],1),e._v(" "),t("b-form-group",{attrs:{label:"Address line 2"}},[t("b-form-input",{attrs:{id:e.idPrefix+"-line2",name:e.idPrefix+"-line2"},model:{value:e.address.line2,callback:function(t){e.$set(e.address,"line2",t)},expression:"address.line2"}})],1),e._v(" "),t("b-form-group",{attrs:{label:"Suburb"}},[t("b-form-input",{attrs:{id:e.idPrefix+"-Suburb",name:e.idPrefix+"-Suburb"},model:{value:e.address.suburb,callback:function(t){e.$set(e.address,"suburb",t)},expression:"address.suburb"}})],1),e._v(" "),t("b-row",[t("b-col",[t("b-form-group",{attrs:{label:"Postcode"}},[t("b-form-input",{attrs:{id:e.idPrefix+"-Postcode",name:e.idPrefix+"-Postcode"},model:{value:e.address.postcode,callback:function(t){e.$set(e.address,"postcode",t)},expression:"address.postcode"}})],1)],1),e._v(" "),t("b-col",[t("b-form-group",{attrs:{label:"State"}},[t("b-form-input",{attrs:{id:e.idPrefix+"-State",name:e.idPrefix+"-State"},model:{value:e.address.state,callback:function(t){e.$set(e.address,"state",t)},expression:"address.state"}})],1)],1)],1),e._v(" "),t("b-form-group",{attrs:{label:"Country"}},[t("b-form-select",{attrs:{id:e.idPrefix+"-country",name:e.idPrefix+"-country",options:[{value:"Australia",text:"Australia"}]},model:{value:e.address.country,callback:function(t){e.$set(e.address,"country",t)},expression:"address.country"}})],1)],1)],1)}),[],!1,null,"ba6b45f8",null);t.default=component.exports},422:function(e,t,o){"use strict";o.r(t);var r=o(3),n=(o(201),o(47),{components:{entityAddress:o(420).default},name:"entity",props:Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)({idPrefix:{type:String,default:"entity-form"},entity:{type:Object,default:function(){return{}}},orgNameLabel:{type:String,default:"Organisation name"},showOrgName:{type:Boolean,default:!1},orgAddressLabel:{type:String,default:"Organisation address"},showOrgAddress:{type:Boolean,default:!1},firstNameLabel:{type:String,default:"First name"},showFirstName:{type:Boolean,default:!1},middleNameLabel:{type:String,default:"Middle name(s) (optional)?"},haveMiddleNameLabel:{type:String,default:"Do you have a middle name?"},showMiddleName:{type:Boolean,default:!1},showOtherNames:{type:Boolean,default:!1},haveOtherNamesLabel:{type:String,default:"Do you have a other names?"},havePreferredNameLabel:{type:String,default:"Do you have a preferred name?"},lastNameLabel:{type:String,default:"Surname"},showLastName:{type:Boolean,default:!1},emailLabel:{type:String,default:"Email"},emailDesc:{type:String,default:""},showEmail:{type:Boolean,default:!1},phonesLabel:{type:String,default:"Phone number(s)"},showPhones:{type:Boolean,default:!1},addressLabel:{type:String,default:"Address"},showAddress:{type:Boolean,default:!1},postalAddressLabel:{type:String,default:"Postal Address"},showPostalAddress:{type:Boolean,default:!1},safeAddressLabel:{type:String,default:"Is it safe to send you mail to this address?"},showIsSafeAddress:{type:Boolean,default:!1},safePostalAddressLabel:{type:String,default:"Is it safe to send you mail to this address?"},showIsSafePostalAddress:{type:Boolean,default:!1},safeEmailAddressLabel:{type:String,default:"Is it safe to contact on this email address?"},showIsSafeEmail:{type:Boolean,default:!1},safePhoneLabel:{type:String,default:"Is it safe to contact on this phone number?"},showIsSafePhone:{type:Boolean,default:!1},postalAddessSameLabel:{type:String,default:"Postal address is the same as home address"},showPostalAddessSame:{type:Boolean,default:!1},titleLabel:{type:String,default:"Title (optional)"},showTitle:{type:Boolean,default:!1}},"titleLabel",{type:String,default:"Title (optional)"}),"showPreferredPronoun",{type:Boolean,default:!1}),"preferredPronounLabel",{type:String,default:"Preferred pronoun (optional)"}),"showPreferredName",{type:Boolean,default:!1}),"preferredContactLabel",{type:String,default:"Preferred Contact"}),"showPreferredContact",{type:Boolean,default:!1}),"showMobilePhone",{type:Boolean,default:!1}),"mobilePhoneLabel",{type:String,default:"Mobile Phone"}),"mobilePhoneDesc",{type:String,default:""}),data:function(){return{firstname:"",lastname:"",firstnameLabel:"",boolOptions:[{text:"Yes",value:!0},{text:"No",value:!1}]}},computed:{preferredContactOptions:function(){var e=[];return this.entity.email.length&&e.push({value:"email",text:"Email"}),this.entity.phones.length&&e.push({value:"phone",text:"Phone"}),this.entity.postalAddress&&e.push({value:"mail",text:"Mail"}),e}},methods:{addPhone:function(){this.entity.phones.push({type:"",number:"",isSafe:null})},removePhone:function(i){this.entity.phones.splice(i,1)},onAddressModalClose:function(){this.addressString=this.entity.addresses[0].join},addOtherName:function(){this.entity.otherNames.push({firstName:"",lastName:""})}}}),l=o(58),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("div",[e.showOrgName?t("b-form-group",{attrs:{label:e.orgNameLabel}},[t("b-form-input",{attrs:{id:e.idPrefix+"-orgName",name:e.idPrefix+"-orgName"},model:{value:e.entity.orgName,callback:function(t){e.$set(e.entity,"orgName",t)},expression:"entity.orgName"}})],1):e._e(),e._v(" "),e.showOrgAddress?t("entity-address",{attrs:{addressLabel:e.orgAddressLabel,address:e.entity.orgAddress}}):e._e(),e._v(" "),e.showTitle?t("b-form-group",{staticStyle:{"max-width":"150px"},attrs:{label:e.titleLabel}},[t("b-form-select",{attrs:{options:["Mr.","Mrs.","Ms.","Other"]},model:{value:e.entity.title,callback:function(t){e.$set(e.entity,"title",t)},expression:"entity.title"}})],1):e._e(),e._v(" "),"Other"===e.entity.title?t("b-form-group",{attrs:{label:"Please specify"}},[t("b-form-input",{model:{value:e.entity.titleDetails,callback:function(t){e.$set(e.entity,"titleDetails",t)},expression:"entity.titleDetails"}})],1):e._e(),e._v(" "),e.showFirstName?t("b-form-group",{attrs:{label:e.firstNameLabel}},[t("b-form-input",{attrs:{id:e.idPrefix+"-firstName",name:e.idPrefix+"-firstName"},model:{value:e.entity.firstName,callback:function(t){e.$set(e.entity,"firstName",t)},expression:"entity.firstName"}})],1):e._e(),e._v(" "),e.showMiddleName?t("div",[t("b-form-group",{attrs:{label:e.haveMiddleNameLabel}},[t("b-form-radio-group",{attrs:{options:e.boolOptions},model:{value:e.entity.hasMiddleName,callback:function(t){e.$set(e.entity,"hasMiddleName",t)},expression:"entity.hasMiddleName"}})],1),e._v(" "),e.showMiddleName&&!0===e.entity.hasMiddleName?t("b-form-group",{attrs:{label:e.middleNameLabel}},[t("b-form-input",{model:{value:e.entity.middleName,callback:function(t){e.$set(e.entity,"middleName",t)},expression:"entity.middleName"}})],1):e._e()],1):e._e(),e._v(" "),e.showLastName?t("b-form-group",{attrs:{label:e.lastNameLabel}},[t("b-form-input",{attrs:{id:e.idPrefix+"-lastName",name:e.idPrefix+"-lastName"},model:{value:e.entity.lastName,callback:function(t){e.$set(e.entity,"lastName",t)},expression:"entity.lastName"}})],1):e._e(),e._v(" "),e.showPreferredName?t("div",[t("b-form-group",{attrs:{label:e.havePreferredNameLabel}},[t("b-form-radio-group",{attrs:{options:e.boolOptions},model:{value:e.entity.hasPreferredName,callback:function(t){e.$set(e.entity,"hasPreferredName",t)},expression:"entity.hasPreferredName"}})],1),e._v(" "),!0===e.entity.hasPreferredName?t("b-form-group",{attrs:{label:e.preferredNameLabel}},[t("b-form-input",{model:{value:e.entity.preferredName,callback:function(t){e.$set(e.entity,"preferredName",t)},expression:"entity.preferredName"}})],1):e._e()],1):e._e(),e._v(" "),e.showPreferredPronoun?t("div",[t("b-form-group",{attrs:{label:e.preferredPronounLabel,description:"Please let us know if you have a preference for how the Commission refers to you throughout this case."}},[t("b-form-input",{model:{value:e.entity.preferredPronoun,callback:function(t){e.$set(e.entity,"preferredPronoun",t)},expression:"entity.preferredPronoun"}})],1)],1):e._e(),e._v(" "),e.showOtherNames?t("div",[t("b-form-group",{attrs:{label:e.haveOtherNamesLabel}},[t("b-form-radio-group",{attrs:{options:e.boolOptions},model:{value:e.entity.hasOtherNames,callback:function(t){e.$set(e.entity,"hasOtherNames",t)},expression:"entity.hasOtherNames"}})],1),e._v(" "),!0===e.entity.hasOtherNames?t("div",e._l(e.entity.otherNames,(function(o,r){return t("div",{key:r,staticClass:"mb-2 courts pl-3",attrs:{id:r}},[t("b-form-group",{attrs:{label:"Other first name"}},[t("b-form-input",{model:{value:e.entity.otherNames[r].firstName,callback:function(t){e.$set(e.entity.otherNames[r],"firstName",t)},expression:"\n              entity.otherNames[index].firstName\n            "}})],1),e._v(" "),t("b-form-group",{attrs:{label:"Other surname"}},[t("b-form-input",{model:{value:e.entity.otherNames[r].lastName,callback:function(t){e.$set(e.entity.otherNames[r],"lastName",t)},expression:"\n              entity.otherNames[index].lastName\n            "}})],1),e._v(" "),t("div",{staticClass:"text-right"},[r<3&&e.entity.hasOtherNames?t("b-button",{staticClass:"p-0 mb-4",attrs:{variant:"link"},on:{click:function(t){return t.preventDefault(),e.addOtherName.apply(null,arguments)}}},[e._v("Click here to add another previous name")]):e._e()],1)],1)})),0):e._e()],1):e._e(),e._v(" "),e.showEmail?t("b-form-group",{attrs:{label:e.emailLabel,description:e.emailDesc}},[t("b-form-input",{attrs:{id:e.idPrefix+"-email",name:e.idPrefix+"-email"},model:{value:e.entity.email,callback:function(t){e.$set(e.entity,"email",t)},expression:"entity.email"}})],1):e._e(),e._v(" "),e.showIsSafeEmail?t("b-form-group",{attrs:{label:e.safeEmailAddressLabel}},[t("b-form-radio-group",{attrs:{id:"isAEmailSafeToMail",options:e.boolOptions,name:"isAEmailSafeToMail"},model:{value:e.entity.isEmailSafeToMail,callback:function(t){e.$set(e.entity,"isEmailSafeToMail",t)},expression:"entity.isEmailSafeToMail"}})],1):e._e(),e._v(" "),e.showPhones?t("div",[t("label",[e._v(e._s(e.phonesLabel))]),e._v(" "),e._l(e.entity.phones,(function(o,r){return t("div",{key:r,attrs:{id:r}},[t("b-row",[t("b-col",{attrs:{cols:"4"}},[t("b-form-group",[t("b-form-select",{attrs:{id:e.idPrefix+"-phoneType"+r,name:e.idPrefix+"-phoneType"+r,options:[{value:"mobile",text:"Mobile"},{value:"landline",text:"Land line"}]},model:{value:e.entity.phones[r].type,callback:function(t){e.$set(e.entity.phones[r],"type",t)},expression:"entity.phones[index].type"}})],1)],1),e._v(" "),t("b-col",{attrs:{cols:"7"}},[t("b-form-group",[t("b-form-input",{attrs:{id:e.idPrefix+"-phoneNumber"+r,name:e.idPrefix+"-phoneNumber"+r},model:{value:e.entity.phones[r].number,callback:function(t){e.$set(e.entity.phones[r],"number",t)},expression:"entity.phones[index].number"}})],1)],1),e._v(" "),t("b-col",{staticClass:"align-middle",attrs:{cols:"1"}},[t("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"p-0",attrs:{variant:"link",title:"Remove"},on:{click:function(t){return t.preventDefault(),e.removePhone(r)}}},[t("b-icon",{attrs:{icon:"x-circle"}})],1)],1)],1),e._v(" "),t("b-row",[t("b-col",[e.showIsSafePhone?t("b-form-group",{staticClass:"mb-0",attrs:{label:e.safePhoneLabel}},[t("b-form-radio-group",{attrs:{id:e.idPrefix+"-isSafe"+r,name:e.idPrefix+"-isSafe"+r,options:e.boolOptions},model:{value:e.entity.phones[r].isSafe,callback:function(t){e.$set(e.entity.phones[r],"isSafe",t)},expression:"entity.phones[index].isSafe"}})],1):e._e()],1)],1)],1)})),e._v(" "),t("div",{staticClass:"text-right"},[t("b-button",{staticClass:"p-0 mb-4",attrs:{variant:"link"},on:{click:function(t){return t.preventDefault(),e.addPhone.apply(null,arguments)}}},[e._v("Click here to add another phone number\n        ")])],1)],2):e._e(),e._v(" "),e.showMobilePhone?t("b-form-group",{attrs:{label:e.mobilePhoneLabel,description:e.mobilePhoneDesc}},[t("b-form-input",{model:{value:e.entity.mobilePhone,callback:function(t){e.$set(e.entity,"mobilePhone",t)},expression:"entity.mobilePhone"}})],1):e._e(),e._v(" "),e.showAddress?t("entity-address",{attrs:{addressLabel:e.addressLabel,address:e.entity.address,showOrgName:""}}):e._e(),e._v(" "),e.showPostalAddessSame?t("b-form-group",[t("b-form-checkbox",{attrs:{id:"postalAddressSame",name:"postalAddressSame",value:!0,"unchecked-value":!1},model:{value:e.entity.postalAddressSame,callback:function(t){e.$set(e.entity,"postalAddressSame",t)},expression:"entity.postalAddressSame"}},[e._v("\n        "+e._s(e.postalAddessSameLabel)+"\n      ")])],1):e._e(),e._v(" "),e.showPostalAddress&&!e.entity.postalAddressSame?t("entity-address",{attrs:{addressLabel:e.postalAddressLabel,address:e.entity.postalAddress}}):e._e(),e._v(" "),e.showIsSafePostalAddress?t("b-form-group",{attrs:{label:e.safePostalAddressLabel}},[t("b-form-radio-group",{attrs:{id:"isPostalAddressSafeToMail",options:e.boolOptions,name:"isPostalAddressSafeToMail"},model:{value:e.entity.isPostalAddressSafeToMail,callback:function(t){e.$set(e.entity,"isPostalAddressSafeToMail",t)},expression:"entity.isPostalAddressSafeToMail"}})],1):e._e(),e._v(" "),e.showPreferredContact?t("b-form-group",{attrs:{label:e.preferredContactLabel}},[t("b-form-select",{attrs:{id:"preferredContact",name:"preferredContact",options:e.preferredContactOptions},model:{value:e.entity.preferredContact,callback:function(t){e.$set(e.entity,"preferredContact",t)},expression:"entity.preferredContact"}})],1):e._e(),e._v(" "),e._t("additionalFields")],2)}),[],!1,null,"68a5a885",null);t.default=component.exports},423:function(e,t,o){"use strict";o(419)},424:function(e,t,o){var r=o(92)((function(i){return i[1]}));r.push([e.i,".notice[data-v-07b98bc0]{background:var(--grey-100)!important;color:var(--grey-500)!important}.green[data-v-07b98bc0]{border-left:4px solid var(--success)!important}.blue[data-v-07b98bc0]{border-left:4px solid var(--primary)!important}.yellow[data-v-07b98bc0]{border-left:4px solid var(--yellow)!important}.red[data-v-07b98bc0]{border-left:4px solid var(--danger)!important}",""]),r.locals={},e.exports=r},473:function(e,t,o){var content=o(516);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(93).default)("3da626ac",content,!0,{sourceMap:!1})},515:function(e,t,o){"use strict";o(473)},516:function(e,t,o){var r=o(92)((function(i){return i[1]}));r.push([e.i,"h6[data-v-eeaabebe]:first-letter{text-transform:uppercase}.numberCol[data-v-eeaabebe]{max-width:30px;padding-right:0}.v-enter-active[data-v-eeaabebe],.v-leave-active[data-v-eeaabebe]{transition:opacity 2.5s ease!important}.v-enter-from[data-v-eeaabebe],.v-leave-to[data-v-eeaabebe]{opacity:0}",""]),r.locals={},e.exports=r},522:function(e,t,o){"use strict";o.r(t);var r=o(422),n=o(420),l=o(418),d={components:{entity:r.default,Notice:l.default,EntityAddress:n.default},name:"f42HolderSuperDetails",props:{form:{type:Object,default:function(){return{}}},readOnly:{type:Boolean,default:!1},dec:{type:Object,default:function(){return{}}}},data:function(){return{decItems:["didAboveTraining","convictedIndustrialLaw","convictedOther","orderedToPay","hadRevoked","hadConditionsImposed","beenDisqualified","awareOfMatters"],businessDetailsWereWrong:!1,showIsBusinessDetailsCorrect:!0,boolOptions:[{text:"Yes",value:!0},{text:"No",value:!1}],letters:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"]}},computed:{haveYouStr:function(){return"permitHolder"===this.form.userRole?"have you":"Has the proposed permit holder"},youStr:function(){return"permitHolder"===this.form.userRole?"you":"The proposed permit holder"}},methods:{onWrongBusinessNameClick:function(){!1===form.businessDetailsCorrect&&(this.businessDetailsWereWrong=!0)}}},c=(o(515),o(58)),component=Object(c.a)(d,(function(){var e=this,t=e._self._c;return t("div",[t("b-row",[t("b-col",{staticClass:"numberCol"},[e._v(" a. ")]),e._v(" "),t("b-col",{staticClass:"pl-1"},[t("b-form-group",{attrs:{label:"Have you received the appropriate training, shown above, about the rights and responsibilities of an entry permit holder?"}},[t("b-form-radio-group",{attrs:{disabled:e.readOnly,options:e.boolOptions},model:{value:e.dec.didAboveTraining,callback:function(t){e.$set(e.dec,"didAboveTraining",t)},expression:"dec.didAboveTraining"}})],1)],1)],1),e._v(" "),t("Transition",[null!==e.dec.didAboveTraining?t("b-row",[t("b-col",{staticClass:"numberCol"},[e._v(" b. ")]),e._v(" "),t("b-col",{staticClass:"pl-1"},[t("b-form-group",{attrs:{label:e.haveYouStr+" ever been convicted of an offence against an industrial law?"}},[t("b-form-radio-group",{attrs:{disabled:e.readOnly,options:e.boolOptions},model:{value:e.dec.convictedIndustrialLaw,callback:function(t){e.$set(e.dec,"convictedIndustrialLaw",t)},expression:"dec.convictedIndustrialLaw"}})],1),e._v(" "),!0===e.dec.convictedIndustrialLaw?t("b-form-group",{attrs:{label:"Please provide details"}},[t("b-form-textarea",{attrs:{disabled:e.readOnly},model:{value:e.dec.convictedIndustrialLawDetails,callback:function(t){e.$set(e.dec,"convictedIndustrialLawDetails",t)},expression:"dec.convictedIndustrialLawDetails"}})],1):e._e()],1)],1):e._e()],1),e._v(" "),t("Transition",[!1===e.dec.convictedIndustrialLaw||e.dec.convictedIndustrialLawDetails.length>2?t("b-row",[t("b-col",{staticClass:"numberCol"},[e._v(" c. ")]),e._v(" "),t("b-col",{staticClass:"pl-1"},[t("b-form-group",[t("label",[e._v("\n            "+e._s(e.haveYouStr)+" ever been convicted of an offence against a law of\n            the Commonwealth, a State, a Territory or a foreign country,\n            involving: "),t("br"),e._v("(i) entry onto premises; or "),t("br"),e._v("(ii) fraud or\n            dishonesty; or "),t("br"),e._v("(iii) intentional use of violence against\n            another person or intentional damage or destruction of property?\n          ")]),e._v(" "),t("b-form-radio-group",{attrs:{disabled:e.readOnly,options:e.boolOptions},model:{value:e.dec.convictedOther,callback:function(t){e.$set(e.dec,"convictedOther",t)},expression:"dec.convictedOther"}})],1),e._v(" "),!0===e.dec.convictedOther?t("b-form-group",{attrs:{label:"Please provide details"}},[t("b-form-textarea",{attrs:{disabled:e.readOnly},model:{value:e.dec.convictedOtherDetails,callback:function(t){e.$set(e.dec,"convictedOtherDetails",t)},expression:"dec.convictedOtherDetails"}})],1):e._e()],1)],1):e._e()],1),e._v(" "),t("Transition",[!1===e.dec.convictedOther||e.dec.convictedOtherDetails.length>2?t("b-row",[t("b-col",{staticClass:"numberCol"},[e._v(" d. ")]),e._v(" "),t("b-col",{staticClass:"pl-1"},[t("b-form-group",{attrs:{label:e.haveYouStr+", or any other person (which includes a union), ever been ordered to pay a penalty under the Fair Work Act 2009 or any other industrial law in relation to action taken by "+e.youStr+"?"}},[t("b-form-radio-group",{attrs:{disabled:e.readOnly,options:e.boolOptions},model:{value:e.dec.orderedToPay,callback:function(t){e.$set(e.dec,"orderedToPay",t)},expression:"dec.orderedToPay"}})],1),e._v(" "),!0===e.dec.orderedToPay?t("b-form-group",{attrs:{label:"Please provide details"}},[t("b-form-textarea",{attrs:{disabled:e.readOnly},model:{value:e.dec.orderedToPayDetails,callback:function(t){e.$set(e.dec,"orderedToPayDetails",t)},expression:"dec.orderedToPayDetails"}})],1):e._e()],1)],1):e._e()],1),e._v(" "),t("Transition",[!1===e.dec.orderedToPay||e.dec.orderedToPayDetails.length>2?t("b-row",[t("b-col",{staticClass:"numberCol"},[e._v(" e. ")]),e._v(" "),t("b-col",{staticClass:"pl-1"},[t("b-form-group",{attrs:{label:e.haveYouStr+" had revoked, suspended or made subject to conditions, any permit issued under Part 3 4 of the Fair Work Act 2009 or a similar law of the Commonwealth (no matter when in force)?"}},[t("b-form-radio-group",{attrs:{disabled:e.readOnly,options:e.boolOptions},model:{value:e.dec.hadRevoked,callback:function(t){e.$set(e.dec,"hadRevoked",t)},expression:"dec.hadRevoked"}})],1),e._v(" "),!0===e.dec.hadRevoked?t("b-form-group",{attrs:{label:"Please provide details"}},[t("b-form-textarea",{attrs:{disabled:e.readOnly},model:{value:e.dec.hadRevokedDetails,callback:function(t){e.$set(e.dec,"hadRevokedDetails",t)},expression:"dec.hadRevokedDetails"}})],1):e._e()],1)],1):e._e()],1),e._v(" "),t("Transition",[!1===e.dec.hadRevoked||e.dec.hadRevokedDetails.length>2?t("b-row",[t("b-col",{staticClass:"numberCol"},[e._v(" f. ")]),e._v(" "),t("b-col",{staticClass:"pl-1"},[t("b-form-group",{attrs:{label:e.haveYouStr+" had cancelled or suspended or had conditions imposed on a right of entry for industrial or occupational health and safety (OHS) purposes, by any court, or other person or body, under a State or Territory industrial law or a State or Territory OHS law?"}},[t("b-form-radio-group",{attrs:{disabled:e.readOnly,options:e.boolOptions},model:{value:e.dec.hadConditionsImposed,callback:function(t){e.$set(e.dec,"hadConditionsImposed",t)},expression:"dec.hadConditionsImposed"}})],1),e._v(" "),!0===e.dec.hadConditionsImposed?t("b-form-group",{attrs:{label:"Please provide details"}},[t("b-form-textarea",{attrs:{disabled:e.readOnly},model:{value:e.dec.hadConditionsImposedDetails,callback:function(t){e.$set(e.dec,"hadConditionsImposedDetails",t)},expression:"dec.hadConditionsImposedDetails"}})],1):e._e()],1)],1):e._e()],1),e._v(" "),t("Transition",[!1===e.dec.hadConditionsImposed||e.dec.hadConditionsImposedDetails.length>2?t("b-row",[t("b-col",{staticClass:"numberCol"},[e._v(" g. ")]),e._v(" "),t("b-col",{staticClass:"pl-1"},[t("b-form-group",{attrs:{label:e.haveYouStr+" been disqualified, by any court, or other person or body, under a State or Territory industrial law or a State or Territory OHS law, from exercising, or applying for, a right of entry for industrial or OHS purposes under that law?"}},[t("b-form-radio-group",{attrs:{disabled:e.readOnly,options:e.boolOptions},model:{value:e.dec.beenDisqualified,callback:function(t){e.$set(e.dec,"beenDisqualified",t)},expression:"dec.beenDisqualified"}})],1),e._v(" "),!0===e.dec.beenDisqualified?t("b-form-group",{attrs:{label:"Please provide details"}},[t("b-form-textarea",{attrs:{disabled:e.readOnly},model:{value:e.dec.beenDisqualifiedDetails,callback:function(t){e.$set(e.dec,"beenDisqualifiedDetails",t)},expression:"dec.beenDisqualifiedDetails"}})],1):e._e()],1)],1):e._e()],1),e._v(" "),t("Transition",[!1===e.dec.beenDisqualified||e.dec.beenDisqualifiedDetails.length>2?t("b-row",[t("b-col",{staticClass:"numberCol"},[e._v(" h. ")]),e._v(" "),t("b-col",{staticClass:"pl-1"},[t("b-form-group",{attrs:{label:"Are you aware of any other matters that may be relevant to whether you are a fit and proper person to hold a permit?"}},[t("b-form-radio-group",{attrs:{options:e.boolOptions},model:{value:e.form.permitHolder.dec.awareOfMatters,callback:function(t){e.$set(e.form.permitHolder.dec,"awareOfMatters",t)},expression:"form.permitHolder.dec.awareOfMatters"}})],1),e._v(" "),!0===e.form.permitHolder.dec.awareOfMatters?t("b-form-group",{attrs:{label:"Please provide details"}},[t("b-form-textarea",{model:{value:e.form.permitHolder.dec.awareOfMattersDetails,callback:function(t){e.$set(e.form.permitHolder.dec,"awareOfMattersDetails",t)},expression:"form.permitHolder.dec.awareOfMattersDetails"}})],1):e._e(),e._v(" "),t("notice",{attrs:{message:"The Commission can take into account any other matter that it considers relevant to whether you are a fit and proper person to hold a permit. This may include adverse comments made about you in a Commission or court decision, regardless of whether you were a party to the proceeding."}})],1)],1):e._e()],1)],1)}),[],!1,null,"eeaabebe",null);t.default=component.exports}}]);