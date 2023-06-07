(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[494],{3252:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/BroadcastSuppression/Dev_KT",function(){return n(4325)}])},4989:function(e,s,n){"use strict";var t=n(1874);n(9953);let a={logo:(0,t.jsx)("span",{children:"Messaging Documentation"}),project:{link:"https://github.com/Spaced-Out/sense/tree/stable/ui_server/src/components/messaging"},docsRepositoryBase:"https://github.com/Spaced-Out/sense/tree/stable/ui_server/src/components/messaging"};s.Z=a},4325:function(e,s,n){"use strict";n.r(s);var t=n(1874),a=n(5623),r=n(9320),i=n(4989);n(4167);var o=n(3641);n(6465);let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,o.ah)(),e.components);return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/BroadcastSuppression/Dev_KT.mdx",route:"/BroadcastSuppression/Dev_KT",headings:[{depth:1,value:"Dev KT",id:"dev-kt"},{depth:2,value:"State Management",id:"state-management"},{depth:3,value:"Areas to test",id:"areas-to-test"}],timestamp:1686050232e3,pageMap:[{kind:"Folder",name:"BroadcastSuppression",route:"/BroadcastSuppression",children:[{kind:"MdxPage",name:"Dev_KT",route:"/BroadcastSuppression/Dev_KT"},{kind:"MdxPage",name:"Overview",route:"/BroadcastSuppression/Overview"},{kind:"MdxPage",name:"Resources",route:"/BroadcastSuppression/Resources"},{kind:"MdxPage",name:"TestCases",route:"/BroadcastSuppression/TestCases"},{kind:"Meta",data:{Dev_KT:"Dev Kt",Overview:"Overview",Resources:"Resources",TestCases:"Testcases"}}]},{kind:"Meta",data:{index:"Introduction",BroadcastSuppression:"Broadcast suppression"}},{kind:"MdxPage",name:"index",route:"/"}],flexsearch:{codeblocks:!0},title:"Dev KT"},pageNextRoute:"/BroadcastSuppression/Dev_KT",nextraLayout:r.ZP,themeConfig:i.Z};function c(e){let s=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",p:"p",code:"code",ol:"ol",h3:"h3"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{children:"Dev KT"}),"\n",(0,t.jsx)(s.h2,{id:"state-management",children:"State Management"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["All the state management for broadcast is under ",(0,t.jsx)(s.code,{children:"state.draftMessages"})," as entire state management happens when the message is in draft stage"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Newly added state variables"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"restoredLandlineNumbers - (Only numbers restored from Landline tab of third panel - this is required when the number is restored from landline and upon adding one more number it would be broadcast, so in such cases the icon and color should be consistent)"}),"\n",(0,t.jsx)(s.li,{children:"restoredPhoneNumbers - All the phone numbers restored (includes landline)"}),"\n",(0,t.jsx)(s.li,{children:"timeFrame - to store the timeFrame edited in case of RecruiterControlled broadcast"}),"\n",(0,t.jsx)(s.li,{children:"phoneTypes - Contains all the phoneTypes information"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["There is one exception though, when the chip is inserted in the input, we get the details from threads, so we store the threads in ",(0,t.jsx)(s.code,{children:"state.threadLists.threads"}),". But all the information after receiving is being processed and put in the format in the above draftMessages state."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"API Changes"}),"\n",(0,t.jsx)(s.p,{children:"All the API contracts details can be found in resources section of Broadcast Suppression. Below is just Gist."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["POST ",(0,t.jsx)(s.code,{children:"phone-number-lookup"})," we get information about the broadcast_suppression_status, type of the phone, all other details from this API, it is called on every chip change in the input box. Need to optimize. In order to get the above details, we need to pass in an extra parameter ",(0,t.jsx)(s.code,{children:"broadcastSuppressionSetting"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["GET ",(0,t.jsx)(s.code,{children:"messages_v2/thread-list"}),", incase of broadcast chip, we get the details from this API. We need to pass 2 extra parameters ",(0,t.jsx)(s.code,{children:"broadcast_suppression_number: value ,broadcast_suppression_unit: value"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"areas-to-test",children:"Areas to test"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Web new message with individual and broadcast chips"}),"\n",(0,t.jsx)(s.li,{children:"Extension Grab numbers and add numbers to contact"}),"\n",(0,t.jsx)(s.li,{children:"TRM + Messaging integration"}),"\n"]})]})}s.default=(0,a.j)(d)}},function(e){e.O(0,[774,524,888,179],function(){return e(e.s=3252)}),_N_E=e.O()}]);