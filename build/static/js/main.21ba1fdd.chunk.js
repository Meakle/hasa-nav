(this["webpackJsonphasa-nav"]=this["webpackJsonphasa-nav"]||[]).push([[0],{26:function(e,t,i){},27:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),o=i(11),r=i.n(o),s=i(2),c=i(3),l=i(29),p=i(1),d=s.a.form.withConfig({displayName:"Search__SearchBar",componentId:"sc-179f5gm-0"})(["position:relative;>input{width:561px;height:44px;padding:0px 50px;border:none;border-radius:22px;font-size:17px;outline:none;box-shadow:0 1px 6px 0 rgb(32 33 36 / 28%);}>button{display:none;}"]),m=Object(s.a)(l.a).withConfig({displayName:"Search__MySearchOutlined",componentId:"sc-179f5gm-1"})(["position:absolute;top:50%;transform:translateY(-50%);left:15px;font-size:19px;color:gray;"]),g=function(){var e=window.localStorage;null===e.getItem("enginData")&&e.setItem("enginData",JSON.stringify({action:"",name:""}));var t=e.getItem("enginData"),i=Object(n.useState)(""),a=Object(c.a)(i,2),o=a[0],r=a[1],s=Object(n.useState)(JSON.parse(t)),l=Object(c.a)(s,2),g=l[0],u=l[1];Object(n.useEffect)((function(){if(e.getItem("enginData")&&""!==g.action)e.setItem("enginData",JSON.stringify(g));else{var t={action:"https://www.google.com/search",name:"q"};u(t),e.setItem("enginData",JSON.stringify(t))}}),[g]);var f;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(d,{action:g.action,method:"GET",target:"_blank",name:"searchForm",children:[Object(p.jsx)(m,{}),Object(p.jsx)("input",{type:"text",name:g.name,value:o,onChange:function(e){r(e.target.value)},autoComplete:"off",autoFocus:!0,spellCheck:"false",placeholder:"\u5728 ".concat((f=g.action,f.replace("https://","").replace("http://","").replace("www.","").replace(".com","").replace(/\/.*/,""))," \u4e0a\u641c\u7d22\uff0c\u6216\u8005\u4f7f\u7528 :xx \u5207\u6362\u5f15\u64ce")}),Object(p.jsx)("button",{type:"submit",onClick:function(){var e=o.split(" ");":gg"===e[0]||"\uff1agg"===e[0]?(u({action:"https://www.google.com/search",name:"q"}),r(e.slice(1).join(" "))):":bd"!==e[0]&&"\uff1abd"!==e[0]||(u({action:"https://www.baidu.com/s",name:"wd"}),r(e.slice(1).join(" ")))},children:"\u641c\u7d22"})]})})},u=i(30),f=s.a.a.withConfig({displayName:"Site__SiteWrapper",componentId:"sc-44wgha-0"})(["position:relative;display:flex;flex-flow:column;align-items:center;width:112px;height:112px;margin-bottom:10px;padding:10px 0 3px 0;color:black;border-radius:7px;&:hover{background-color:#e8e8e9;color:black;};&:focus{box-shadow:0 0 0 2px pink;}"]),h=s.a.div.withConfig({displayName:"Site__LogoWrapper",componentId:"sc-44wgha-1"})(["position:relative;width:48px;height:48px;border-radius:50%;background-color:#f1f3f4;overflow:hidden;&>img{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:24px;height:24px;}"]),x=s.a.div.withConfig({displayName:"Site__Title",componentId:"sc-44wgha-2"})(["margin-top:20px;"]),b=s.a.span.withConfig({displayName:"Site__Menu",componentId:"sc-44wgha-3"})(["position:absolute;top:3px;right:10px;z-index:2;&:hover{cursor:default;};"]),j=Object(s.a)(u.a).withConfig({displayName:"Site__MyCloseOutlined",componentId:"sc-44wgha-4"})(["font-size:12px;"]),w=function(e){var t,i=Object(n.useState)(!1),a=Object(c.a)(i,2),o=a[0],r=a[1];return Object(p.jsxs)(f,{href:e.url,onMouseEnter:function(){r(!0)},onMouseLeave:function(){r(!1)},target:"_blank",children:[o?Object(p.jsx)(b,{onClick:(t=e.name,function(i){i.preventDefault();var n=JSON.parse(localStorage.getItem("siteList")).filter((function(e){return e.name!==t}));localStorage.setItem("siteList",JSON.stringify(n)),e.responseRemove()}),children:Object(p.jsx)(j,{})}):Object(p.jsx)(p.Fragment,{}),Object(p.jsx)(h,{children:Object(p.jsx)("img",{src:"".concat(e.url,"/favicon.ico"),alt:""})}),Object(p.jsx)(x,{children:e.name})]})},O=i(9),v=i(31),S=s.a.a.withConfig({displayName:"AddSite__SiteWrapper",componentId:"q3ms4u-0"})(["display:flex;flex-flow:column;align-items:center;width:112px;height:112px;margin-bottom:10px;padding:10px 0 3px 0;color:black;border-radius:7px;&:hover{background-color:#e8e8e9;color:black;};"]),y=s.a.div.withConfig({displayName:"AddSite__LogoWrapper",componentId:"q3ms4u-1"})(["position:relative;width:48px;height:48px;border-radius:50%;background-color:#f1f3f4;overflow:hidden;&>span{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:20px;}"]),I=s.a.div.withConfig({displayName:"AddSite__Title",componentId:"q3ms4u-2"})(["margin-top:20px;"]),_=function(e){return Object(p.jsxs)(S,Object(O.a)(Object(O.a)({},e),{},{children:[Object(p.jsx)(y,{children:Object(p.jsx)(v.a,{})}),Object(p.jsx)(I,{children:"\u6dfb\u52a0"})]}))},N=s.a.main.withConfig({displayName:"MoreSite__MoreSiteWrapper",componentId:"sc-57zsoo-0"})(["display:flex;flex-wrap:wrap;width:573px;margin-top:40px;"]),C=function(){var e=window.localStorage;e.getItem("siteList")||e.setItem("siteList",JSON.stringify([{name:"",url:""}]));var t=Object(n.useState)(e.getItem("siteList")),i=Object(c.a)(t,2),a=(i[0],i[1]),o=function(){a(e.getItem("siteList"))};return Object(p.jsxs)(N,{children:[JSON.parse(e.getItem("siteList")).map((function(e){if(""!==e.url)return Object(p.jsx)(w,{name:e.name,url:e.url,responseRemove:o},10*Math.random());console.log(e.url)})),Object(p.jsx)(_,{onClick:function(){var t=window.prompt("name"),i=window.prompt("url");if(""===(null===t||void 0===t?void 0:t.trim())&&""===(null===i||void 0===i?void 0:i.trim())||null===t&&null===i)alert("\u8f93\u5165\u9519\u8bef, \u8bf7\u91cd\u8bd5");else{var n=JSON.parse(e.getItem("siteList"));n.push({name:t,url:i}),e.setItem("siteList",JSON.stringify(n)),a(e.getItem("siteList"))}}})]})},k=s.a.div.withConfig({displayName:"App__Layout",componentId:"dqatw0-0"})(["display:flex;flex-flow:column;align-items:center;padding-top:280px;"]),L=function(){return Object(p.jsxs)(k,{children:[Object(p.jsx)(g,{}),Object(p.jsx)(C,{})]})};i(26);r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(L,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.21ba1fdd.chunk.js.map