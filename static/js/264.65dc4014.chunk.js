"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[264],{9894:function(t,e,n){n.d(e,{z:function(){return s}});var a="Button_submitBtn__Xtf41",r=n(3329),s=function(t){var e=t.children;return(0,r.jsx)("button",{className:a,type:"submit",children:e})}},264:function(t,e,n){n.r(e),n.d(e,{default:function(){return J}});var a=n(2791),r=n(9434),s=n(6916),c=function(t){return t.filter.status},o=function(t){return t.contacts.items},i=function(t){return t.contacts.error},l=function(t){return t.contacts.isLoading},u=(0,s.P1)([o,c],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),m=n(5036),_="Contact_contactCard__5AHBI",d="Contact_name__xbxVU",h="Contact_deleteBtn__L35yB",f=n(6856),p=n(3329),x=function(t){var e=t.contact,n=(0,r.I0)();return(0,p.jsxs)("div",{className:_,children:[(0,p.jsxs)("p",{className:d,children:[e.name,": ",e.number]}),(0,p.jsx)("button",{className:h,type:"buttone",onClick:function(){return n((0,m.GK)(e.id))},children:(0,p.jsx)(f.ZkW,{})})]})},j="ContactList_wrapper__VP-XU",C="ContactList_title__gpugJ",N="ContactList_list__csErn",b="ContactList_item__EZYHO",v="ContactList_message__b6Via",g=function(){var t=(0,r.v9)(u),e=(0,r.v9)(c);return(0,p.jsxs)("div",{className:j,children:[(0,p.jsx)("h2",{className:C,children:"Contact list"}),(0,p.jsxs)("ul",{className:N,children:[t.map((function(t){return(0,p.jsx)("li",{className:b,children:(0,p.jsx)(x,{contact:t})},t.id)})),0===t.length&&""===e&&(0,p.jsx)("p",{className:v,children:"your contact list is empty, add new contact"}),0===t.length&&""!==e&&(0,p.jsx)("p",{className:v,children:"no mutches"})]})]})},F={formCard:"ContactForm_formCard__zIxaR",form:"ContactForm_form__dhl+T",label:"ContactForm_label__-cVXI",input:"ContactForm_input__Bl93P",ErrorMessage:"ContactForm_ErrorMessage__ttuE5",btnWrapper:"ContactForm_btnWrapper__Z1qej"},w=n(9894),y=n(5705),E=n(2797);function L(){var t=(0,r.v9)(o),e=(0,r.I0)(),n=E.Ry().shape({name:E.Z_().trim().required("Example: Alain Delon"),number:E.Z_().trim().required("Example: 555-55-55")});return(0,p.jsxs)("div",{className:F.formCard,children:[(0,p.jsx)("h2",{children:"New Contact"}),(0,p.jsx)(y.J9,{initialValues:{name:"",number:""},validationSchema:n,onSubmit:function(n,a){console.log(n),console.log(a);var r,s=n.name;r=s,t.some((function(t){return t.name.toLowerCase()===r.toLowerCase()}))?alert('"'.concat(s,'" is already in contacts.')):(e((0,m.uK)(n)),a.resetForm())},children:function(t){var e=t.handleSubmit;return(0,p.jsxs)(y.l0,{className:F.form,onSubmit:e,name:"contact_form",autoComplete:"off",children:[(0,p.jsxs)("label",{className:F.label,children:["Name",(0,p.jsx)(y.gN,{className:F.input,type:"text",name:"name",placeholder:" ",autoFocus:!0,required:!0,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"}),(0,p.jsx)(y.Bc,{name:"name",component:"p",className:F.inputError})]}),(0,p.jsxs)("label",{className:F.label,children:["Phone",(0,p.jsx)(y.gN,{className:F.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",placeholder:" ",required:!0}),(0,p.jsx)(y.Bc,{name:"number",component:"p",className:F.inputError})]}),(0,p.jsx)(w.z,{children:"Add"})]})}})]})}var k=n(5653),B="Filter_formCard__QOYwR",I="Filter_label__vEd1E",Z="Filter_input__N7T3z",z="Filter_findIcon__P-9u4",A=n(5880),q=function(){var t=(0,r.I0)();return(0,p.jsxs)("div",{className:B,children:[(0,p.jsx)("h2",{children:"Find"}),(0,p.jsxs)("label",{className:I,children:["Find contact by name:",(0,p.jsx)("input",{className:Z,type:"text",name:"filter",onChange:function(e){return t((0,k.T)(e.target.value))}}),(0,p.jsx)(A.lnn,{className:z})]})]})},P=n(807),V=n.n(P),S="Contacts_contacts__LNvgJ",J=function(){var t=(0,r.I0)(),e=(0,r.v9)(l),n=(0,r.v9)(i);return(0,a.useEffect)((function(){t((0,m.yF)())}),[t]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("section",{className:S,children:[(0,p.jsx)(L,{}),(0,p.jsx)(q,{})]}),(0,p.jsx)("section",{children:e&&!n?(0,p.jsx)(V(),{color:"#5ac846",width:"100%"}):(0,p.jsx)(g,{})})]})}}}]);
//# sourceMappingURL=264.65dc4014.chunk.js.map