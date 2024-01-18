(window.webpackJsonp=window.webpackJsonp||[]).push([[57,16,17,18],{418:function(e,t,r){"use strict";r.r(t);var o={name:"notice",props:{message:{type:String,default:""},borderClass:{type:String,default:"yellow"}},data:function(){return{}},computed:{},methods:{}},n=(r(423),r(58)),component=Object(n.a)(o,(function(){var e=this;return(0,e._self._c)("div",{class:e.borderClass+" notice p-2",domProps:{innerHTML:e._s(e.message)}})}),[],!1,null,"07b98bc0",null);t.default=component.exports},419:function(e,t,r){var content=r(424);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(93).default)("7a3b6d4c",content,!0,{sourceMap:!1})},420:function(e,t,r){"use strict";r.r(t);r(12),r(72);var o={name:"entityAddress",props:{addressLabel:{type:String,default:"Address"},showAddress:{type:Boolean,default:!0},idPrefix:{type:String,default:"entity-form"},addressHelp:{type:String,default:"Start typing your address and select one of the options"},addressString:{type:String,default:""},address:{type:Object,default:function(){return{line1:"",line2:"",suburb:"",postcode:"",state:"",country:""}}}},data:function(){return{modalId:Math.random().toString(36).substring(7)}},computed:{},methods:{}},n=r(58),component=Object(n.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("b-form-group",{staticClass:"mb-0",attrs:{label:e.addressLabel,description:e.addressHelp}},[t("b-form-input",{attrs:{id:e.idPrefix+"-address",name:e.idPrefix+"-address"},model:{value:e.addressString,callback:function(t){e.addressString=t},expression:"addressString"}})],1),e._v(" "),t("div",{staticClass:"text-right"},[t("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"manual-address-".concat(e.modalId),expression:"`manual-address-${modalId}`"}],staticClass:"p-0 mb-4",attrs:{variant:"link"}},[e._v("\n      Click here if you cannot find the right address\n    ")])],1),e._v(" "),t("b-modal",{attrs:{id:"manual-address-".concat(e.modalId),title:"BootstrapVue"},scopedSlots:e._u([{key:"modal-header",fn:function(r){var o=r.close;return[t("h6",[e._v("Address ")]),e._v(" "),t("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"bi bi-x fs-3 removeIcon",attrs:{title:"Close"},on:{click:function(e){return o()}}})]}}])},[e._v(" "),t("b-form-group",{attrs:{label:"Address line 1"}},[t("b-form-input",{attrs:{id:e.idPrefix+"-line1",name:e.idPrefix+"-line1"},model:{value:e.address.line1,callback:function(t){e.$set(e.address,"line1",t)},expression:"address.line1"}})],1),e._v(" "),t("b-form-group",{attrs:{label:"Address line 2"}},[t("b-form-input",{attrs:{id:e.idPrefix+"-line2",name:e.idPrefix+"-line2"},model:{value:e.address.line2,callback:function(t){e.$set(e.address,"line2",t)},expression:"address.line2"}})],1),e._v(" "),t("b-form-group",{attrs:{label:"Suburb"}},[t("b-form-input",{attrs:{id:e.idPrefix+"-Suburb",name:e.idPrefix+"-Suburb"},model:{value:e.address.suburb,callback:function(t){e.$set(e.address,"suburb",t)},expression:"address.suburb"}})],1),e._v(" "),t("b-row",[t("b-col",[t("b-form-group",{attrs:{label:"Postcode"}},[t("b-form-input",{attrs:{id:e.idPrefix+"-Postcode",name:e.idPrefix+"-Postcode"},model:{value:e.address.postcode,callback:function(t){e.$set(e.address,"postcode",t)},expression:"address.postcode"}})],1)],1),e._v(" "),t("b-col",[t("b-form-group",{attrs:{label:"State"}},[t("b-form-input",{attrs:{id:e.idPrefix+"-State",name:e.idPrefix+"-State"},model:{value:e.address.state,callback:function(t){e.$set(e.address,"state",t)},expression:"address.state"}})],1)],1)],1),e._v(" "),t("b-form-group",{attrs:{label:"Country"}},[t("b-form-select",{attrs:{id:e.idPrefix+"-country",name:e.idPrefix+"-country",options:[{value:"Australia",text:"Australia"}]},model:{value:e.address.country,callback:function(t){e.$set(e.address,"country",t)},expression:"address.country"}})],1)],1)],1)}),[],!1,null,"ba6b45f8",null);t.default=component.exports},422:function(e,t,r){"use strict";r.r(t);var o=r(3),n=(r(201),r(47),{components:{entityAddress:r(420).default},name:"entity",props:Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)({idPrefix:{type:String,default:"entity-form"},entity:{type:Object,default:function(){return{}}},orgNameLabel:{type:String,default:"Organisation name"},showOrgName:{type:Boolean,default:!1},orgAddressLabel:{type:String,default:"Organisation address"},showOrgAddress:{type:Boolean,default:!1},firstNameLabel:{type:String,default:"First name"},showFirstName:{type:Boolean,default:!1},middleNameLabel:{type:String,default:"Middle name(s) (optional)?"},haveMiddleNameLabel:{type:String,default:"Do you have a middle name?"},showMiddleName:{type:Boolean,default:!1},showOtherNames:{type:Boolean,default:!1},haveOtherNamesLabel:{type:String,default:"Do you have a other names?"},havePreferredNameLabel:{type:String,default:"Do you have a preferred name?"},lastNameLabel:{type:String,default:"Surname"},showLastName:{type:Boolean,default:!1},emailLabel:{type:String,default:"Email"},emailDesc:{type:String,default:""},showEmail:{type:Boolean,default:!1},phonesLabel:{type:String,default:"Phone number(s)"},showPhones:{type:Boolean,default:!1},addressLabel:{type:String,default:"Address"},showAddress:{type:Boolean,default:!1},postalAddressLabel:{type:String,default:"Postal Address"},showPostalAddress:{type:Boolean,default:!1},safeAddressLabel:{type:String,default:"Is it safe to send you mail to this address?"},showIsSafeAddress:{type:Boolean,default:!1},safePostalAddressLabel:{type:String,default:"Is it safe to send you mail to this address?"},showIsSafePostalAddress:{type:Boolean,default:!1},safeEmailAddressLabel:{type:String,default:"Is it safe to contact on this email address?"},showIsSafeEmail:{type:Boolean,default:!1},safePhoneLabel:{type:String,default:"Is it safe to contact on this phone number?"},showIsSafePhone:{type:Boolean,default:!1},postalAddessSameLabel:{type:String,default:"Postal address is the same as home address"},showPostalAddessSame:{type:Boolean,default:!1},titleLabel:{type:String,default:"Title (optional)"},showTitle:{type:Boolean,default:!1}},"titleLabel",{type:String,default:"Title (optional)"}),"showPreferredPronoun",{type:Boolean,default:!1}),"preferredPronounLabel",{type:String,default:"Preferred pronoun (optional)"}),"showPreferredName",{type:Boolean,default:!1}),"preferredContactLabel",{type:String,default:"Preferred Contact"}),"showPreferredContact",{type:Boolean,default:!1}),"showMobilePhone",{type:Boolean,default:!1}),"mobilePhoneLabel",{type:String,default:"Mobile Phone"}),"mobilePhoneDesc",{type:String,default:""}),data:function(){return{firstname:"",lastname:"",firstnameLabel:"",boolOptions:[{text:"Yes",value:!0},{text:"No",value:!1}]}},computed:{preferredContactOptions:function(){var e=[];return this.entity.email.length&&e.push({value:"email",text:"Email"}),this.entity.phones.length&&e.push({value:"phone",text:"Phone"}),this.entity.postalAddress&&e.push({value:"mail",text:"Mail"}),e}},methods:{addPhone:function(){this.entity.phones.push({type:"",number:"",isSafe:null})},removePhone:function(i){this.entity.phones.splice(i,1)},onAddressModalClose:function(){this.addressString=this.entity.addresses[0].join},addOtherName:function(){this.entity.otherNames.push({firstName:"",lastName:""})}}}),l=r(58),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("div",[e.showOrgName?t("b-form-group",{attrs:{label:e.orgNameLabel}},[t("b-form-input",{attrs:{id:e.idPrefix+"-orgName",name:e.idPrefix+"-orgName"},model:{value:e.entity.orgName,callback:function(t){e.$set(e.entity,"orgName",t)},expression:"entity.orgName"}})],1):e._e(),e._v(" "),e.showOrgAddress?t("entity-address",{attrs:{addressLabel:e.orgAddressLabel,address:e.entity.orgAddress}}):e._e(),e._v(" "),e.showTitle?t("b-form-group",{staticStyle:{"max-width":"150px"},attrs:{label:e.titleLabel}},[t("b-form-select",{attrs:{options:["Mr.","Mrs.","Ms.","Other"]},model:{value:e.entity.title,callback:function(t){e.$set(e.entity,"title",t)},expression:"entity.title"}})],1):e._e(),e._v(" "),"Other"===e.entity.title?t("b-form-group",{attrs:{label:"Please specify"}},[t("b-form-input",{model:{value:e.entity.titleDetails,callback:function(t){e.$set(e.entity,"titleDetails",t)},expression:"entity.titleDetails"}})],1):e._e(),e._v(" "),e.showFirstName?t("b-form-group",{attrs:{label:e.firstNameLabel}},[t("b-form-input",{attrs:{id:e.idPrefix+"-firstName",name:e.idPrefix+"-firstName"},model:{value:e.entity.firstName,callback:function(t){e.$set(e.entity,"firstName",t)},expression:"entity.firstName"}})],1):e._e(),e._v(" "),e.showMiddleName?t("div",[t("b-form-group",{attrs:{label:e.haveMiddleNameLabel}},[t("b-form-radio-group",{attrs:{options:e.boolOptions},model:{value:e.entity.hasMiddleName,callback:function(t){e.$set(e.entity,"hasMiddleName",t)},expression:"entity.hasMiddleName"}})],1),e._v(" "),e.showMiddleName&&!0===e.entity.hasMiddleName?t("b-form-group",{attrs:{label:e.middleNameLabel}},[t("b-form-input",{model:{value:e.entity.middleName,callback:function(t){e.$set(e.entity,"middleName",t)},expression:"entity.middleName"}})],1):e._e()],1):e._e(),e._v(" "),e.showLastName?t("b-form-group",{attrs:{label:e.lastNameLabel}},[t("b-form-input",{attrs:{id:e.idPrefix+"-lastName",name:e.idPrefix+"-lastName"},model:{value:e.entity.lastName,callback:function(t){e.$set(e.entity,"lastName",t)},expression:"entity.lastName"}})],1):e._e(),e._v(" "),e.showPreferredName?t("div",[t("b-form-group",{attrs:{label:e.havePreferredNameLabel}},[t("b-form-radio-group",{attrs:{options:e.boolOptions},model:{value:e.entity.hasPreferredName,callback:function(t){e.$set(e.entity,"hasPreferredName",t)},expression:"entity.hasPreferredName"}})],1),e._v(" "),!0===e.entity.hasPreferredName?t("b-form-group",{attrs:{label:e.preferredNameLabel}},[t("b-form-input",{model:{value:e.entity.preferredName,callback:function(t){e.$set(e.entity,"preferredName",t)},expression:"entity.preferredName"}})],1):e._e()],1):e._e(),e._v(" "),e.showPreferredPronoun?t("div",[t("b-form-group",{attrs:{label:e.preferredPronounLabel,description:"Please let us know if you have a preference for how the Commission refers to you throughout this case."}},[t("b-form-input",{model:{value:e.entity.preferredPronoun,callback:function(t){e.$set(e.entity,"preferredPronoun",t)},expression:"entity.preferredPronoun"}})],1)],1):e._e(),e._v(" "),e.showOtherNames?t("div",[t("b-form-group",{attrs:{label:e.haveOtherNamesLabel}},[t("b-form-radio-group",{attrs:{options:e.boolOptions},model:{value:e.entity.hasOtherNames,callback:function(t){e.$set(e.entity,"hasOtherNames",t)},expression:"entity.hasOtherNames"}})],1),e._v(" "),!0===e.entity.hasOtherNames?t("div",e._l(e.entity.otherNames,(function(r,o){return t("div",{key:o,staticClass:"mb-2 courts pl-3",attrs:{id:o}},[t("b-form-group",{attrs:{label:"Other first name"}},[t("b-form-input",{model:{value:e.entity.otherNames[o].firstName,callback:function(t){e.$set(e.entity.otherNames[o],"firstName",t)},expression:"\n              entity.otherNames[index].firstName\n            "}})],1),e._v(" "),t("b-form-group",{attrs:{label:"Other surname"}},[t("b-form-input",{model:{value:e.entity.otherNames[o].lastName,callback:function(t){e.$set(e.entity.otherNames[o],"lastName",t)},expression:"\n              entity.otherNames[index].lastName\n            "}})],1),e._v(" "),t("div",{staticClass:"text-right"},[o<3&&e.entity.hasOtherNames?t("b-button",{staticClass:"p-0 mb-4",attrs:{variant:"link"},on:{click:function(t){return t.preventDefault(),e.addOtherName.apply(null,arguments)}}},[e._v("Click here to add another previous name")]):e._e()],1)],1)})),0):e._e()],1):e._e(),e._v(" "),e.showEmail?t("b-form-group",{attrs:{label:e.emailLabel,description:e.emailDesc}},[t("b-form-input",{attrs:{id:e.idPrefix+"-email",name:e.idPrefix+"-email"},model:{value:e.entity.email,callback:function(t){e.$set(e.entity,"email",t)},expression:"entity.email"}})],1):e._e(),e._v(" "),e.showIsSafeEmail?t("b-form-group",{attrs:{label:e.safeEmailAddressLabel}},[t("b-form-radio-group",{attrs:{id:"isAEmailSafeToMail",options:e.boolOptions,name:"isAEmailSafeToMail"},model:{value:e.entity.isEmailSafeToMail,callback:function(t){e.$set(e.entity,"isEmailSafeToMail",t)},expression:"entity.isEmailSafeToMail"}})],1):e._e(),e._v(" "),e.showPhones?t("div",[t("label",[e._v(e._s(e.phonesLabel))]),e._v(" "),e._l(e.entity.phones,(function(r,o){return t("div",{key:o,attrs:{id:o}},[t("b-row",[t("b-col",{attrs:{cols:"4"}},[t("b-form-group",[t("b-form-select",{attrs:{id:e.idPrefix+"-phoneType"+o,name:e.idPrefix+"-phoneType"+o,options:[{value:"mobile",text:"Mobile"},{value:"landline",text:"Land line"}]},model:{value:e.entity.phones[o].type,callback:function(t){e.$set(e.entity.phones[o],"type",t)},expression:"entity.phones[index].type"}})],1)],1),e._v(" "),t("b-col",{attrs:{cols:"7"}},[t("b-form-group",[t("b-form-input",{attrs:{id:e.idPrefix+"-phoneNumber"+o,name:e.idPrefix+"-phoneNumber"+o},model:{value:e.entity.phones[o].number,callback:function(t){e.$set(e.entity.phones[o],"number",t)},expression:"entity.phones[index].number"}})],1)],1),e._v(" "),t("b-col",{staticClass:"align-middle",attrs:{cols:"1"}},[t("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"p-0",attrs:{variant:"link",title:"Remove"},on:{click:function(t){return t.preventDefault(),e.removePhone(o)}}},[t("b-icon",{attrs:{icon:"x-circle"}})],1)],1)],1),e._v(" "),t("b-row",[t("b-col",[e.showIsSafePhone?t("b-form-group",{staticClass:"mb-0",attrs:{label:e.safePhoneLabel}},[t("b-form-radio-group",{attrs:{id:e.idPrefix+"-isSafe"+o,name:e.idPrefix+"-isSafe"+o,options:e.boolOptions},model:{value:e.entity.phones[o].isSafe,callback:function(t){e.$set(e.entity.phones[o],"isSafe",t)},expression:"entity.phones[index].isSafe"}})],1):e._e()],1)],1)],1)})),e._v(" "),t("div",{staticClass:"text-right"},[t("b-button",{staticClass:"p-0 mb-4",attrs:{variant:"link"},on:{click:function(t){return t.preventDefault(),e.addPhone.apply(null,arguments)}}},[e._v("Click here to add another phone number\n        ")])],1)],2):e._e(),e._v(" "),e.showMobilePhone?t("b-form-group",{attrs:{label:e.mobilePhoneLabel,description:e.mobilePhoneDesc}},[t("b-form-input",{model:{value:e.entity.mobilePhone,callback:function(t){e.$set(e.entity,"mobilePhone",t)},expression:"entity.mobilePhone"}})],1):e._e(),e._v(" "),e.showAddress?t("entity-address",{attrs:{addressLabel:e.addressLabel,address:e.entity.address,showOrgName:""}}):e._e(),e._v(" "),e.showPostalAddessSame?t("b-form-group",[t("b-form-checkbox",{attrs:{id:"postalAddressSame",name:"postalAddressSame",value:!0,"unchecked-value":!1},model:{value:e.entity.postalAddressSame,callback:function(t){e.$set(e.entity,"postalAddressSame",t)},expression:"entity.postalAddressSame"}},[e._v("\n        "+e._s(e.postalAddessSameLabel)+"\n      ")])],1):e._e(),e._v(" "),e.showPostalAddress&&!e.entity.postalAddressSame?t("entity-address",{attrs:{addressLabel:e.postalAddressLabel,address:e.entity.postalAddress}}):e._e(),e._v(" "),e.showIsSafePostalAddress?t("b-form-group",{attrs:{label:e.safePostalAddressLabel}},[t("b-form-radio-group",{attrs:{id:"isPostalAddressSafeToMail",options:e.boolOptions,name:"isPostalAddressSafeToMail"},model:{value:e.entity.isPostalAddressSafeToMail,callback:function(t){e.$set(e.entity,"isPostalAddressSafeToMail",t)},expression:"entity.isPostalAddressSafeToMail"}})],1):e._e(),e._v(" "),e.showPreferredContact?t("b-form-group",{attrs:{label:e.preferredContactLabel}},[t("b-form-select",{attrs:{id:"preferredContact",name:"preferredContact",options:e.preferredContactOptions},model:{value:e.entity.preferredContact,callback:function(t){e.$set(e.entity,"preferredContact",t)},expression:"entity.preferredContact"}})],1):e._e(),e._v(" "),e._t("additionalFields")],2)}),[],!1,null,"68a5a885",null);t.default=component.exports},423:function(e,t,r){"use strict";r(419)},424:function(e,t,r){var o=r(92)((function(i){return i[1]}));o.push([e.i,".notice[data-v-07b98bc0]{background:var(--grey-100)!important;color:var(--grey-500)!important}.green[data-v-07b98bc0]{border-left:4px solid var(--success)!important}.blue[data-v-07b98bc0]{border-left:4px solid var(--primary)!important}.yellow[data-v-07b98bc0]{border-left:4px solid var(--yellow)!important}.red[data-v-07b98bc0]{border-left:4px solid var(--danger)!important}",""]),o.locals={},e.exports=o},474:function(e,t,r){var content=r(518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(93).default)("46a417a9",content,!0,{sourceMap:!1})},517:function(e,t,r){"use strict";r(474)},518:function(e,t,r){var o=r(92)((function(i){return i[1]}));o.push([e.i,"h6[data-v-a2bc2fa4]:first-letter{text-transform:uppercase}",""]),o.locals={},e.exports=o},523:function(e,t,r){"use strict";r.r(t);var o=r(422),n=r(420),l=r(418),d={components:{entity:o.default,Notice:l.default,EntityAddress:n.default},name:"f42HolderDetailsComp",props:{form:{type:Object,default:function(){return{}}}},data:function(){return{businessDetailsWereWrong:!1,showIsBusinessDetailsCorrect:!0,boolOptions:[{text:"Yes",value:!0},{text:"No",value:!1}]}},computed:{firstPerson:function(){return"permitHolder"===this.form.userRole||"admin"===this.form.userRole&&this.form.permitHolder.isSameAsAdmin},employeeOrOfficeHolderLabel:function(){return this.firstPerson?"What is your role in ths organisation?":"The proposed permit holder is:"},positionOrOfficeHeldLabel:function(){return this.firstPerson?"What is your office or position?":"What is their office or position?"},previouslyHeldAnEntryPermitLabel:function(){return this.firstPerson?"Have you previously held an entry permit?":"Has this person previously held an entry permit?"},previousPermitNumberLabel:function(){return this.firstPerson?"What is your most recent or current permit number?":"What is their most recent or current permit number?"},emailDesc:function(){return this.firstPerson?"":"The email address will be used to notify the Proposed Permit holder"},youString:function(){return this.firstPerson?"you":"they"},yourString:function(){return this.firstPerson?"your":"their"},AreYouString:function(){return this.firstPerson?"are you":"are they"},DoYouString:function(){return this.firstPerson?"do you":"do they"},youAreString:function(){return this.firstPerson?"you are":"they are"},wereYouString:function(){return this.firstPerson?"were you":"were they"},HaveYouString:function(){return"permitHolder"===this.form.userRole?"have you been":"have they been"}},methods:{onWrongBusinessNameClick:function(){!1===form.businessDetailsCorrect&&(this.businessDetailsWereWrong=!0)}}},m=(r(517),r(58)),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;return t("div",[t("entity",{attrs:{entity:e.form.permitHolder,showFirstName:"",showLastName:"",showEmail:"",showMiddleName:!0,firstNameLabel:"Legal first name",lastNameLabel:"Legal surname",middleNameLabel:"Middle name",showPreferredName:!0,showOtherNames:"",showPhones:"",emailDesc:e.emailDesc,haveMiddleNameLabel:e.DoYouString+" have a middle name?",havePreferredNameLabel:e.DoYouString+" have a preferred name?",haveOtherNamesLabel:e.HaveYouString+" known by any other names?"}}),e._v(" "),e.firstPerson?e._e():t("notice",{staticClass:"mb-4",attrs:{message:"If you give us a mobile number for the proposed permit holder, we may send them reminders by SMS"}}),e._v(" "),e.firstPerson?t("notice",{staticClass:"mb-4",attrs:{message:"If you give us a mobile number, we may send you reminders by SMS"}}):e._e(),e._v(" "),e.firstPerson?e._e():t("b-form-group",{attrs:{label:"Does the proposed permit holder hold a Digital iD™ matching their full legal as provided on this form?"}},[t("b-form-radio-group",{attrs:{options:e.boolOptions},model:{value:e.form.permitHolder.hasDigitalId,callback:function(t){e.$set(e.form.permitHolder,"hasDigitalId",t)},expression:"form.permitHolder.hasDigitalId"}})],1),e._v(" "),e.firstPerson?t("b-form-group",{attrs:{label:"Do you hold a Digital iD™ matching your full legal name as provided on this form?"}},[t("b-form-radio-group",{attrs:{options:e.boolOptions},model:{value:e.form.permitHolder.hasDigitalId,callback:function(t){e.$set(e.form.permitHolder,"hasDigitalId",t)},expression:"form.permitHolder.hasDigitalId"}})],1):e._e(),e._v(" "),!1!==e.form.permitHolder.hasDigitalId||e.firstPerson?e._e():t("notice",{staticClass:"mb-3",attrs:{message:"Please contact FWC."}}),e._v(" "),!1===e.form.permitHolder.hasDigitalId&&e.firstPerson?t("notice",{staticClass:"mb-3",attrs:{message:"You will require a Digital iD™ that matches your full legal name provided above before this application can be lodged"}}):e._e(),e._v(" "),t("b-form-group",{attrs:{label:e.employeeOrOfficeHolderLabel}},[t("b-form-radio-group",{attrs:{stacked:"",options:["An Office Holder","An Employee"]},model:{value:e.form.permitHolder.employeeOrOfficeHolder,callback:function(t){e.$set(e.form.permitHolder,"employeeOrOfficeHolder",t)},expression:"form.permitHolder.employeeOrOfficeHolder"}})],1),e._v(" "),t("b-form-group",{attrs:{label:e.positionOrOfficeHeldLabel}},[t("b-form-input",{model:{value:e.form.permitHolder.positionOrOfficeHeld,callback:function(t){e.$set(e.form.permitHolder,"positionOrOfficeHeld",t)},expression:"form.permitHolder.positionOrOfficeHeld"}})],1),e._v(" "),t("b-form-group",{attrs:{label:e.previouslyHeldAnEntryPermitLabel}},[t("b-form-radio-group",{attrs:{options:e.boolOptions},model:{value:e.form.permitHolder.previouslyHeldAnEntryPermit,callback:function(t){e.$set(e.form.permitHolder,"previouslyHeldAnEntryPermit",t)},expression:"form.permitHolder.previouslyHeldAnEntryPermit"}})],1),e._v(" "),!0===e.form.permitHolder.previouslyHeldAnEntryPermit?t("b-form-group",{attrs:{label:e.previousPermitNumberLabel}},[t("b-form-input",{model:{value:e.form.permitHolder.previousPermitNumber,callback:function(t){e.$set(e.form.permitHolder,"previousPermitNumber",t)},expression:"form.permitHolder.previousPermitNumber"}})],1):e._e(),e._v(" "),!0===e.form.permitHolder.previouslyHeldAnEntryPermit?t("notice",{staticClass:"mt-2 mb-2",attrs:{message:"If a permit is returned more than 7 days after expiry or cannot be returned because it is lost, the proposed permit holder may be asked to provide a statutory declaration explaining the failure to comply with s.517 of the Fair Work Act 2009."}}):e._e(),e._v(" "),!0===e.form.permitHolder.previouslyHeldAnEntryPermit?t("b-form-group",{attrs:{label:"Has that permit been returned?"}},[t("b-form-radio-group",{attrs:{options:e.boolOptions},model:{value:e.form.permitHolder.previousPermitReturned,callback:function(t){e.$set(e.form.permitHolder,"previousPermitReturned",t)},expression:"form.permitHolder.previousPermitReturned"}})],1):e._e(),e._v(" "),!1===e.form.permitHolder.previousPermitReturned?t("b-form-group",{attrs:{label:"Why has it not been returned?"}},[t("b-form-textarea",{model:{value:e.form.permitHolder.previousPermitNotReturnedReason,callback:function(t){e.$set(e.form.permitHolder,"previousPermitNotReturnedReason",t)},expression:"form.permitHolder.previousPermitNotReturnedReason"}})],1):e._e(),e._v(" "),!1===e.form.permitHolder.previousPermitReturned?t("b-form-group",{attrs:{label:"Please provide a statutory Declaration (optional)"}},[t("b-form-file")],1):e._e(),e._v(" "),!0===e.form.permitHolder.previousPermitReturned?t("b-form-group",{attrs:{label:"Has that permit been returned on time?"}},[t("b-form-radio-group",{attrs:{options:e.boolOptions},model:{value:e.form.permitHolder.previousPermitReturnedOnTime,callback:function(t){e.$set(e.form.permitHolder,"previousPermitReturnedOnTime",t)},expression:"form.permitHolder.previousPermitReturnedOnTime"}})],1):e._e(),e._v(" "),!0===e.form.permitHolder.previousPermitReturned&&!1===e.form.permitHolder.previousPermitReturnedOnTime?t("b-form-group",{attrs:{label:"Please provide a statutory Declaration (optional)"}},[t("b-form-file",{model:{value:e.form.permitHolder.previousPermitStatDecFile,callback:function(t){e.$set(e.form.permitHolder,"previousPermitStatDecFile",t)},expression:"form.permitHolder.previousPermitStatDecFile"}})],1):e._e()],1)}),[],!1,null,"a2bc2fa4",null);t.default=component.exports}}]);