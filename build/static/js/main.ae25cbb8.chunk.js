(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{171:function(e,t,n){},172:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(23),i=n.n(c),o=n(65),s=n(10),u=n(39),p=n.n(u),l=(n(83),n(26)),h=n(206),x=n(89),f=n(207),b=n(88),j=n(90);function d(){return(d=Object(o.a)(p.a.mark((function e(t){var n,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new j.Configuration({apiKey:"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"}),a=new j.OpenAIApi(n),e.next=4,a.createCompletion({model:"text-davinci-003",prompt:t,temperature:.9,max_tokens:150,top_p:1,frequency_penalty:0,presence_penalty:.6,stop:[" Human:"," AI:"]});case 4:return r=e.sent,e.abrupt("return",r.data.choices[0].text);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=n(2),y=Object(l.b)({palette:{primary:{main:"#007aff"}}});function O(){var e=r.a.useState(new b.ChatController({showDateTime:!0})),t=Object(s.a)(e,1)[0];r.a.useMemo((function(){a(t)}),[t]);var n=function(e){(function(e){return d.apply(this,arguments)})(e).then((function(e){t.addMessage({type:"text",content:e,self:!1,avatar:"-"})}))};function a(e){return c.apply(this,arguments)}function c(){return c=Object(o.a)(p.a.mark((function e(t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.setActionRequest({type:"text",placeholder:"Please enter something"});case 2:r=e.sent,n(r.value),a(t);case 5:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}return Object(m.jsxs)(h.a,{theme:y,children:[Object(m.jsx)(x.b,{}),Object(m.jsx)(f.a,{sx:{height:"1000px",backgroundColor:"black"},children:Object(m.jsx)(f.a,{sx:{display:"flex",flexDirection:"column",height:"100%",maxWidth:"640px",marginLeft:"auto",marginRight:"auto",bgcolor:"black",opacity:.6},children:Object(m.jsx)(f.a,{sx:{flex:"1 1 0%",minHeight:0},children:Object(m.jsx)(b.MuiChat,{chatController:t})})})})]})}n(171);var g=document.getElementById("root");i.a.render(Object(m.jsx)(a.StrictMode,{children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)(O,{})})}),g)}},[[172,1,2]]]);
//# sourceMappingURL=main.ae25cbb8.chunk.js.map