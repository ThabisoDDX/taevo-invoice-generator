(this["webpackJsonptaevo-invoice-generator"]=this["webpackJsonptaevo-invoice-generator"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/arrow-right-icon.88d604b4.svg"},function(e,t,a){e.exports=a.p+"static/media/arrow-left.b08550bd.svg"},function(e,t,a){e.exports=a.p+"static/media/close-icon.6c16cb82.svg"},,,,,,,function(e,t,a){e.exports=a.p+"static/media/arrow-right.6e4c4184.svg"},function(e,t,a){e.exports=a.p+"static/media/tick.1346cafb.svg"},function(e,t,a){e.exports=a.p+"static/media/theme.03f29de3.svg"},function(e,t,a){e.exports=a.p+"static/media/untamed-night.59d15f2f.png"},function(e,t,a){e.exports=a.p+"static/media/aqua-theme.c1218a95.png"},function(e,t,a){e.exports=a.p+"static/media/trash.0c9746b7.svg"},,function(e,t,a){e.exports=a(36)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(10),r=a.n(c),o=(a(27),a(28),a(21)),u=a(2),i=a(5),m=a(11);var s=a(1),E=a.n(s),d=a(12),p=(a(30),a(6)),h=a.n(p);function v(){var e=Object(d.a)(["",""]);return v=function(){return e},e}function g(e){var t=e.clientName,a=(e.dateIssued,e.invoiceNo),n=e.yourName,c=e.yourAddress,r=e.yourTown,o=e.yourCity,u=e.postalCode,i=e.taxNumber,m=(e.clientVATNumber,e.accountNumber),s=e.branchCode,d=e.dateDue,p=e.email,g=e.phone,C=e.website,b=e.discountAmount,y=e.items,f=e.avatar,N=(e.totalAmountVatInclusive,e.totalAmountDue),A=(e.toggleSaveForm,e.saveForm,e.invoiceClass),T=e.brandColor,x=e.fontFamily,I=e.priceType,w=e.clientTaxNumber,k=e.clientAddress,D=e.clientTown,F=e.clientCity,S=e.clientPostalCode,V=e.BankName,R=sessionStorage.getItem("vat");return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{fontFamily:x},className:A},l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement("span",null,l.a.createElement("img",{src:f,alt:"",syle:{color:"blue",backgroundColor:"blue"}})),l.a.createElement("span",null,"Invoice")),l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",null,"Client"),l.a.createElement("span",null,t)),l.a.createElement("li",null,k),l.a.createElement("li",null,""!==D&&"".concat(D,",")," ",""!==F&&"".concat(F,",")," ",S),l.a.createElement("li",null," ",l.a.createElement("span",null,"Date Issued")," ",l.a.createElement("span",{style:{color:"#323742"}}," ",E()().format("DD MMM YYYY"))),l.a.createElement("li",null," ",l.a.createElement("span",null,"Invoice No")," ",l.a.createElement("span",{style:{color:"#323742"}},a)),""!==w&&l.a.createElement("li",null," ",l.a.createElement("span",null,"Tax Reg. No")," ",l.a.createElement("span",{style:{color:"#323742"}},w))),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",null,"Supplier"),l.a.createElement("span",null,n)),l.a.createElement("li",null,c),l.a.createElement("li",null,""!==r&&"".concat(r,",")," ",""!==o&&"".concat(o,",")," ",u),""!==i&&l.a.createElement("li",null," ",l.a.createElement("span",null,"Tax Reg. No:")," ",l.a.createElement("span",{style:{color:"#323742"}},i))))),l.a.createElement("div",{className:"details"},l.a.createElement("ul",null,l.a.createElement("li",null,"Description"),l.a.createElement("li",null,"Rate"),l.a.createElement("li",null,I),l.a.createElement("li",null,"Subtotal")),y.map((function(e,t){return""!==e.description&&0!==e.rate&&0!==e.units&&l.a.createElement("ul",{key:t},l.a.createElement("li",null,e.description),l.a.createElement("li",null,l.a.createElement("span",null,"R")," ",e.rate),l.a.createElement("li",null,e.units),l.a.createElement("li",{style:{color:T}}," ",l.a.createElement("span",null,"R")," ",e.rate*e.units))})),b>=1&&l.a.createElement("ul",{className:"vat"},l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null,"DISCOUNT"),l.a.createElement("li",null,l.a.createElement("span",null,"R")," ",b)),R>0&&l.a.createElement("ul",{className:"vat"},l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null," VAT @ 15%"),l.a.createElement("li",null,l.a.createElement("span",null,"R")," ",((N-b)*R).toFixed(2)))),l.a.createElement("footer",null,l.a.createElement("div",{className:"total"},l.a.createElement("ul",null,l.a.createElement("li",null,"Bank Info"),l.a.createElement("li",{style:{color:"#f2f6f3"}},"DUE BY"),l.a.createElement("li",null,"TOTAL DUE")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",null,"Bank: ",l.a.createElement("strong",{style:{color:"#323742"}},V)),l.a.createElement("span",null,"Account No:"," ",l.a.createElement("strong",{style:{color:"#323742"}},m)),l.a.createElement("span",null,"Branch Code:"," ",l.a.createElement("strong",{style:{color:"#323742"}},s))),l.a.createElement("li",null,null!==d&&" ".concat(E()(d).format("DD MMM "),"'")(v(),E()(d).format("YY"))),l.a.createElement("li",{style:{color:T}},"R",(N-b+(N-b)*R).toFixed(2)))),l.a.createElement("div",{className:"contacts"},l.a.createElement("h2",null,"Thank you!"),l.a.createElement("ul",null,""!==p&&l.a.createElement("li",null,p),""!==g&&l.a.createElement("li",null,l.a.createElement("img",{src:h.a,alt:"icon"}),g),""!==C&&l.a.createElement("li",null,l.a.createElement("img",{src:h.a,alt:"icon"}),C))))))}var C=a(13),b=a.n(C),y=a(14),f=a.n(y),N=(a(32),a(7)),A=a.n(N),T=a(15),x=a.n(T),I=a(16),w=a.n(I),k=a(17),D=a.n(k),F=a(18),S=a.n(F),V=a(19),R=a.n(V);function Y(e){var t=e.handleInputChange,a=e.themeChange,n=e.brandColor,c=e.fontFamily;return l.a.createElement("section",{className:"Invoice-Style"},l.a.createElement("header",null,l.a.createElement("h2",null,"Invoice Style"),l.a.createElement("h4",null,"Choose Invoice Theme")),l.a.createElement("div",{className:"format"},l.a.createElement("label",null,"Invoice"!==a&&"Aqua Theme"!==a&&l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{src:A.a,alt:"icon"}),l.a.createElement("input",{type:"checkbox",name:"themeChange",value:"Invoice",onChange:t})),"Aqua Theme"===a&&l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{src:A.a,alt:"icon"}),l.a.createElement("input",{type:"checkbox",name:"themeChange",value:"Untamed Night",onChange:t}))),l.a.createElement("figure",null,"Invoice"===a&&l.a.createElement("img",{src:D.a,alt:"icon"}),"Untamed Night"===a&&l.a.createElement("img",{src:S.a,alt:"icon"}),"Aqua Theme"===a&&l.a.createElement("img",{src:R.a,alt:"icon"}))," ",l.a.createElement("label",null,("Untamed Night"!==a&&"Invoice"===a||"Untamed Night"===a&&"Aqua Theme"!==a)&&l.a.createElement("img",{src:x.a,alt:"icon"}),"Invoice"===a&&l.a.createElement("input",{type:"checkbox",name:"themeChange",value:"Untamed Night",onChange:t}),"Untamed Night"===a&&l.a.createElement("input",{type:"checkbox",name:"themeChange",value:"Aqua Theme",onChange:t}))),l.a.createElement("div",{className:"color"},l.a.createElement("h4",null,"Choose a theme color"),l.a.createElement("ul",null,["rgb(246, 77, 91)","rgb(255, 168, 50)","rgb(111, 30, 255)","#000"].map((function(e,a){return console.log(e),l.a.createElement("li",null,l.a.createElement("span",{style:{backgroundColor:e}}),n===e&&l.a.createElement("img",{src:w.a,alt:"tick"}),l.a.createElement("input",{type:"checkbox",name:"brandColor",value:e,onChange:t}))})))),l.a.createElement("footer",null,l.a.createElement("h4",null,"Choose a font"),l.a.createElement("select",{defaultValue:c,name:"fontFamily",onChange:t},l.a.createElement("option",{value:"Roboto, Helvetica, sans-serif"},"Default Font"),l.a.createElement("option",{value:"Arial, Helvetica, sans-serif"},"Arial"),l.a.createElement("option",{value:'"Arial Black", Gadget'},"Arial Black"),l.a.createElement("option",{value:'"Comic Sans MS", cursive'},"Comic Sans MS"),l.a.createElement("option",{value:'"Courier New", Courier, monospace'},"Courier New"),l.a.createElement("option",{value:"Georgia, serif"},"Georgia"),l.a.createElement("option",{value:'"Palatino Linotype", "Book Antiqua", Palatino'},"Palatino Linotype"),l.a.createElement("option",{value:'"Times New Roman", Times'},"Times New Roman"),l.a.createElement("option",{value:"Impact, Charcoal"},"Impact"),l.a.createElement("option",{value:'"Lucida Sans Unicode", "Lucida Grande"'},"Lucida Sans Unicode"),l.a.createElement("option",{value:"Tahoma, Geneva"},"Tahoma, Geneva"),l.a.createElement("option",{value:'"Trebuchet MS", Helvetica'},"Trebuchet MS"),l.a.createElement("option",{value:"Verdana, Geneva"},"Verdana"),l.a.createElement("option",{value:'"Lucida Console", Monaco'},'"Lucida Console", Monaco'))))}var M=a(8),P=a.n(M),O=a(20),U=a.n(O);function B(e){var t=e.items,a=e.description,c=e.units,r=e.rate,o=e.discountAmount,i=e.clientName,m=(e.dateIssued,e.vatAmount),s=e.totalAmountDue,E=e.discountAmountZero,d=e.addItem,p=e.bankName,h=e.taxNumber,v=e.yourName,g=e.email,C=e.phone,b=e.yourAddress,y=e.priceType,f=e.yourCity,N=e.yourTown,A=e.postalCode,T=e.branchCode,x=e.accountNumber,I=e.handleInputChange,w=e.handleAddItem,k=e.handleRemoveItem,D=e.clientTaxNumber,F=e.clientAddress,S=e.clientTown,V=e.clientCity,R=e.clientPostalCode,Y=Object(n.useState)(!1),M=Object(u.a)(Y,2),O=M[0],B=M[1],j=Object(n.useState)(!1),L=Object(u.a)(j,2),q=L[0],G=L[1];s<=0&&sessionStorage.removeItem("vat");var H=sessionStorage.getItem("vat");return l.a.createElement("form",{className:"form"},l.a.createElement("div",{className:"client"},l.a.createElement("h3",null,"Client Information"),l.a.createElement("div",null,l.a.createElement("label",null,l.a.createElement("span",null,"Client Name"),l.a.createElement("input",{type:"text",name:"clientName",placeholder:"Client Name",defaultValue:i,onChange:I})),l.a.createElement("input",{type:"text",name:"clientAddress",placeholder:"Client Address",defaultValue:F,onChange:I}),l.a.createElement("input",{type:"text",name:"clientTown",placeholder:"Client Town",defaultValue:S,onChange:I}),l.a.createElement("input",{type:"text",name:"clientCity",placeholder:"Client City",defaultValue:V,onChange:I}),l.a.createElement("input",{type:"text",name:"clientPostalCode",placeholder:"Client Postal Code",defaultValue:R,onChange:I}),l.a.createElement("input",{type:"text",name:"clientTaxNumber",placeholder:"Client VAT Reg. no",defaultValue:D,onChange:I}))),l.a.createElement("div",{className:"company"},l.a.createElement("h3",null,"Company Information"),l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"yourName",placeholder:"Your Name",defaultValue:v,onChange:I})," ",l.a.createElement("input",{type:"text",name:"yourAddress",placeholder:"Your Address",defaultValue:b,onChange:I}),l.a.createElement("input",{type:"text",name:"yourTown",placeholder:"Your Town",defaultValue:N,onChange:I}),l.a.createElement("input",{type:"text",name:"yourCity",placeholder:"Your City",defaultValue:f,onChange:I}),l.a.createElement("input",{type:"text",name:"postalCode",placeholder:"Postal Code",defaultValue:A,onChange:I}),l.a.createElement("input",{type:"text",name:"email",placeholder:"email",defaultValue:g,onChange:I}),l.a.createElement("input",{type:"text",name:"phone",placeholder:"phone",defaultValue:C,onChange:I}),l.a.createElement("input",{type:"text",name:"taxNumber",placeholder:"VAT Reg. no",defaultValue:h,onChange:I}))),l.a.createElement("div",{className:"banking-details"},l.a.createElement("h3",null,"Bank Details"),l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"bankName",placeholder:"Bank Name",defaultValue:p,onChange:I}),l.a.createElement("input",{type:"text",name:"accountNumber",placeholder:"Account Number",defaultValue:x,onChange:I}),l.a.createElement("input",{type:"text",name:"branchCode",placeholder:"Branch Code",defaultValue:T,onChange:I}))),l.a.createElement("div",{className:"items"},l.a.createElement("h3",null,"Items"),l.a.createElement("ul",null,l.a.createElement("li",null,"Description"),l.a.createElement("li",null,"Price"),l.a.createElement("li",null,l.a.createElement("select",{name:"priceType",defaultValue:y,onChange:I},l.a.createElement("option",{value:"Units"},"Units"),l.a.createElement("option",{value:"Hours"},"Hours"))),l.a.createElement("li",null,"Subtotal")),t.map((function(e,t){return""!==e.description&&0!==e.rate&&0!==e.units&&l.a.createElement("ul",{key:t},l.a.createElement("li",null,l.a.createElement("img",{src:U.a,alt:"delete",onClick:function(){return k(e.id)}}),l.a.createElement("span",null,e.description)),l.a.createElement("li",null,e.rate),l.a.createElement("li",null,e.units),l.a.createElement("li",null,(e.rate*e.units).toFixed(2)))})),l.a.createElement("label",{className:"add-item"},l.a.createElement("input",{type:"text",name:"description",placeholder:"Item description",value:a,onChange:I}),l.a.createElement("input",{type:"text",name:"rate",placeholder:"Price",value:r,onChange:I}),l.a.createElement("input",{type:"text",name:"units",placeholder:"Units",value:c,onChange:I}),l.a.createElement("button",{style:{backgroundColor:""!==a&&r>0?"#7fbcbe":"rgba(0, 0, 0, .1)"},onClick:w,disabled:(""===a||r<1)&&"disabled"},"Add"))),l.a.createElement("div",{className:"extra"},!q&&o<=0?l.a.createElement("button",{onClick:function(){return G(!0)}},"Add Discount"):l.a.createElement("label",null,l.a.createElement("span",null,"Discount ",l.a.createElement("span",null,"R")),l.a.createElement("input",{type:"text",name:"discountAmount",defaultValue:o,onChange:I}),l.a.createElement("img",{src:P.a,alt:"remove discount",onClick:function(e){G(!1),E(),d(e)}})),!O&&H<=0?l.a.createElement("button",{style:{backgroundColor:s>0?"#7fbcbe":"rgba(0, 0, 0, .1)"},onClick:function(e){B(!O),d(e),m=.15,sessionStorage.setItem("vat",m)},disabled:s<=0&&"disabled"},"Include VAT"):l.a.createElement("label",null,l.a.createElement("span",null,"VAT @ 15% ",l.a.createElement("span",null,"R")),l.a.createElement("input",{type:"text",value:((s-o)*H).toFixed(2)}),l.a.createElement("img",{src:P.a,alt:"remove discount",onClick:function(e){B(!1),sessionStorage.removeItem("vat"),d(e)}}))))}a(33);function j(e){var t=e.clientName,a=(e.dateIssued,e.invoiceNo),n=e.yourName,c=e.yourAddress,r=e.yourTown,o=e.yourCity,u=e.postalCode,i=e.taxNumber,m=e.accountNumber,s=e.branchCode,d=(e.dateDue,e.email),p=e.phone,h=(e.website,e.discountAmount),v=e.items,g=e.avatar,C=(e.totalAmountVatInclusive,e.totalAmountDue),b=(e.toggleSaveForm,e.saveForm,e.invoiceClass,e.brandColor),y=e.fontFamily,f=e.bankName,N=e.priceType,A=e.clientTaxNumber,T=e.clientAddress,x=e.clientTown,I=e.clientCity,w=e.clientPostalCode,k=sessionStorage.getItem("vat");return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{fontFamily:y},className:"Untamed-Night"},l.a.createElement("ul",{className:"invoice-number"},l.a.createElement("li",null,a),l.a.createElement("li",null,E()().format("DD MMM YYYY"))),l.a.createElement("h1",null,l.a.createElement("span",null,l.a.createElement("img",{src:g,alt:"",syle:{color:"blue",backgroundColor:"blue"}})),l.a.createElement("span",null,"Invoice")),l.a.createElement("div",{className:"information"},l.a.createElement("div",{className:"Card"},l.a.createElement("h3",null,"Client"),l.a.createElement("ul",null,l.a.createElement("li",null,t),l.a.createElement("li",null,T),l.a.createElement("li",null,""!==x&&"".concat(x,",")," ",""!==I&&"".concat(I,",")," ",w),""!==A&&l.a.createElement("li",null,l.a.createElement("span",null,"Tax Reg. No: ",A)))),l.a.createElement("div",{className:"Card"},l.a.createElement("h3",null,"Supplier"),l.a.createElement("ul",null,l.a.createElement("li",null,n),l.a.createElement("li",null,c),l.a.createElement("li",null,""!==r&&"".concat(r,",")," ",""!==o&&"".concat(o,",")," ",u),l.a.createElement("li",null,""!==d&&l.a.createElement("span",null,"Email: ",d),""!==p&&l.a.createElement("span",null,"Phone: ",p)),""!==i&&l.a.createElement("li",null,"Tax Reg. No: ",i))),l.a.createElement("div",{className:"Card"},l.a.createElement("h3",null,"Date Issued"),l.a.createElement("h4",null,E()().format("DD MMM YYYY"))),l.a.createElement("div",{className:"Card"},l.a.createElement("h3",null,"Invoice No."),l.a.createElement("h4",null,a))),l.a.createElement("div",{className:"details"},l.a.createElement("ul",null,l.a.createElement("li",null,"Description"),l.a.createElement("li",null,"Rate"),l.a.createElement("li",null,N),l.a.createElement("li",null,"Subtotal")),l.a.createElement("div",{className:"items "},v.map((function(e,t){return""!==e.description&&0!==e.rate&&0!==e.units&&l.a.createElement("ul",{key:t},l.a.createElement("li",null,e.description),l.a.createElement("li",null,l.a.createElement("span",null,"R")," ",e.rate),l.a.createElement("li",null,e.units),l.a.createElement("li",{style:{color:b}}," ",l.a.createElement("span",null,"R")," ",e.rate*e.units))}))),l.a.createElement("div",{className:"total"},l.a.createElement("ul",null,h>=1&&l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,"DISCOUNT"),l.a.createElement("li",null,l.a.createElement("span",null,h),l.a.createElement("span",null,"ZAR")," "))),l.a.createElement("ul",null,k>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null," VAT @ 15%"),l.a.createElement("li",null,l.a.createElement("span",null,((C-h)*k).toFixed(2)),l.a.createElement("span",null,"ZAR")," "))),l.a.createElement("ul",null,C>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null," Total Amount Due"),l.a.createElement("li",null,l.a.createElement("span",null,(C-h+(C-h)*k).toFixed(2)),l.a.createElement("span",null,"ZAR")," "))))),l.a.createElement("footer",null,l.a.createElement("p",null,"Transfer the amount to the business account below. Please include invoice number as reference."),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",null),l.a.createElement("span",null,"Bank:"),l.a.createElement("span",null,f)),l.a.createElement("li",null,l.a.createElement("span",null),l.a.createElement("span",null,"Account number:"),l.a.createElement("span",null,m)),l.a.createElement("li",null,l.a.createElement("span",null),l.a.createElement("span",null,"Branch code:"),l.a.createElement("span",null,s))))))}a(34),a(35);function L(e){var t=e.clientName,a=(e.dateIssued,e.invoiceNo),n=e.yourName,c=e.yourAddress,r=e.yourTown,o=e.yourCity,u=e.postalCode,i=(e.taxNumber,e.accountNumber),m=e.branchCode,s=(e.dateDue,e.email),d=e.phone,p=(e.website,e.discountAmount),h=e.items,v=(e.avatar,e.totalAmountVatInclusive,e.totalAmountDue),g=(e.toggleSaveForm,e.saveForm,e.invoiceClass,e.brandColor),C=e.fontFamily,b=e.bankName,y=e.priceType,f=sessionStorage.getItem("vat");return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{fontFamily:C},className:"Aqua-Theme"},l.a.createElement("header",null,l.a.createElement("h4",{style:{color:g}},"Hello! This is your"),l.a.createElement("h1",null,"Invoice"),l.a.createElement("h5",null,l.a.createElement("span",null,"NO")," ",a," | ",E()().format("DD MMM YYYY")),l.a.createElement("p",null,l.a.createElement("span",null,"for"),l.a.createElement("span",null,t))),l.a.createElement("div",{className:"details"},l.a.createElement("ul",null,l.a.createElement("li",null,"Description"),l.a.createElement("li",null,"Rate"),l.a.createElement("li",null,y)),l.a.createElement("div",{className:"items "},h.map((function(e,t){return""!==e.description&&0!==e.rate&&0!==e.units&&l.a.createElement("ul",{key:t},l.a.createElement("li",null,e.description),l.a.createElement("li",null,l.a.createElement("span",null,"R")," ",e.rate),l.a.createElement("li",null,e.units))}))),l.a.createElement("div",{className:"total"},l.a.createElement("ul",null,p>=1&&l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,"DISCOUNT"),l.a.createElement("li",null,l.a.createElement("span",null,p),l.a.createElement("span",null,"ZAR")," "))),l.a.createElement("ul",null,f>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null," VAT @ 15%"),l.a.createElement("li",null,l.a.createElement("span",null,((v-p)*f).toFixed(2)),l.a.createElement("span",null,"ZAR")," "))),l.a.createElement("ul",null,v>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null," Total Amount Due"),l.a.createElement("li",null,l.a.createElement("span",null,(v-p+(v-p)*f).toFixed(2)),l.a.createElement("span",null,"ZAR")," "))))),l.a.createElement("footer",null,l.a.createElement("div",{className:"appriciation"},l.a.createElement("h2",null,"THANK YOU"),l.a.createElement("p",null,l.a.createElement("span",null,"for using"),l.a.createElement("span",null,n))),l.a.createElement("div",{className:"contact"},l.a.createElement("ul",null,l.a.createElement("li",null,"Questions? Contact Us!"),l.a.createElement("li",null,l.a.createElement("span",null,s),l.a.createElement("span",null,d)),l.a.createElement("li",null,c,", ",r,", ",o,", ",u)),l.a.createElement("ul",null,l.a.createElement("li",null,"Banking Details"),l.a.createElement("li",null," ","Transfer the amount to the business account below. Please include invoice number as reference."),l.a.createElement("li",null,l.a.createElement("span",null,"Bank"),l.a.createElement("span",null,b)),l.a.createElement("li",null,l.a.createElement("span",null,"Account No."),l.a.createElement("span",null,i)),l.a.createElement("li",null,l.a.createElement("span",null,"Branch Code"),l.a.createElement("span",null,m)))))))}function q(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),s=Object(u.a)(r,2),d=s[0],p=s[1],h=Object(n.useState)(null),v=Object(u.a)(h,2),C=v[0],y=(v[1],"INVOICE".concat(E()().format("DDMMYYYY")).concat(Math.floor(100*Math.random())+10)),N=sessionStorage.getItem("vat"),A=function(){c(!a)},T=function(e){e.preventDefault(),p([].concat(Object(o.a)(d),[{id:d.length+=1,description:I.description,rate:Number(I.rate).toFixed(2),units:Number(I.units).toFixed(0)}])),I.description="",I.rate=0,I.units=1},x=function(e,t){var a=Object(n.useState)(e),l=Object(u.a)(a,2),c=l[0],r=l[1];return{inputs:c,handleInputChange:function(e,t){e.persist(),r((function(t){return Object(m.a)({},t,Object(i.a)({},e.target.name,e.target.value))}))},handleSubmit:function(e){e&&e.preventDefault(),t()}}}({brandColor:null,fontFamily:null,themeChange:"Invoice",clientName:"",dateIssued:"",invoiceNo:"#".concat(E()().format("DDMMYYYY")).concat(Math.floor(1e3*Math.random())+100),yourName:"",yourAddress:"",yourTown:"",yourCity:"",postalCode:"",taxNumber:"",bankName:"",accountNumber:"",branchCode:"",dateDue:null,description:"",email:"",phone:"",priceType:"Units",website:"",vatAmount:0,clientVATNumber:null,clientAddress:"",clientTown:"",clientCity:"",clientPostalCode:"",discountAmount:0,rate:0,units:1,message:"success"},(function(){})),I=x.inputs,w=x.handleInputChange,k=x.handleSubmit,D=d.reduce((function(e,t){return e+t.rate*t.units}),0),F=D+D+N,S=C&&C.file,V={clientName:I.clientName,dateIssued:I.dateIssued,invoiceNo:I.invoiceNo,yourName:I.yourName,yourAddress:I.yourAddress,yourTown:I.yourTown,yourCity:I.yourCity,taxNumber:I.taxNumber,bankName:I.bankName,accountNumber:I.accountNumber,branchCode:I.branchCode,dateDue:I.dateDue,email:I.email,phone:I.phone,website:I.website,brandColor:I.brandColor,fontFamily:I.fontFamily,postalCode:I.postalCode,avatar:S,invoiceClass:"Print-Invoice",discountAmount:I.discountAmount,items:d,priceType:I.priceType,clientTaxNumber:I.clientTaxNumber,clientAddress:I.clientAddress,clientTown:I.clientTown,clientCity:I.clientCity,clientPostalCode:I.clientPostalCode,togglePrintPreview:A,totalAmountVatInclusive:F,totalAmountDue:D};return l.a.createElement(l.a.Fragment,null,a?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mb5 btn"},a&&l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:A},"Edit"),l.a.createElement("button",{onClick:function(){var e=document.getElementById("divToPrint");f()(e,{allowTaint:!0,taintTest:!1,useCORS:!0,scale:1}).then((function(e){var t=e.toDataURL("image/png"),a=new b.a;a.addImage(t,"JPEG",0,0),a.save("".concat(y,".pdf"))})).then((function(){sessionStorage.clear(),window.location.assign("https://turbz.github.io/taevo-invoice-generator")}))}},"Print"))),l.a.createElement("div",{id:"divToPrint",style:{position:"relative",width:"210mm",minHeight:"297mm",marginLeft:"auto",marginRight:"auto",backgroundColor:"#f2f6f3"}},"Invoice"===I.themeChange&&l.a.createElement(g,V),"Untamed Night"===I.themeChange&&l.a.createElement(j,V),"Aqua Theme"===I.themeChange&&l.a.createElement(L,V))):l.a.createElement("section",{className:"Dashboard"},l.a.createElement("header",null,l.a.createElement("h2",null,"Create an invoice",l.a.createElement("span",null,"Beta")),l.a.createElement("button",{onClick:A},"Print Preview")),l.a.createElement("div",null,l.a.createElement(B,{clientName:I.clientName,dateIssued:I.dateIssued,invoiceNo:I.invoiceNo,yourName:I.yourName,yourAddress:I.yourAddress,yourTown:I.yourTown,yourCity:I.yourCity,taxNumber:I.taxNumber,accountNumber:I.accountNumber,branchCode:I.branchCode,dateDue:I.dateDue,email:I.email,phone:I.phone,website:I.website,postalCode:I.postalCode,handleInputChange:w,avatar:S,discountAmount:I.discountAmount,items:d,addItem:T,handleAddItem:T,description:I.description,handleRemoveItem:function(e){p((function(){return d.filter((function(t){return t.id!==e}))}))},rate:I.rate,units:I.units,handleSubmit:k,vatAmount:I.vatAmount,priceType:I.priceType,discountAmountZero:function(){I.discountAmount=0},totalAmountDue:D,clientTaxNumber:I.clientTaxNumber,clientAddress:I.clientAddress,clientTown:I.clientTown,clientCity:I.clientCity,clientPostalCode:I.clientPostalCode}),l.a.createElement(Y,{handleInputChange:w,themeChange:I.themeChange,brandColor:I.brandColor,fontFamily:I.fontFamily}))))}var G=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[22,1,2]]]);
//# sourceMappingURL=main.69524fa8.chunk.js.map