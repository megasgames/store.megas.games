"use strict";exports.id=4471,exports.ids=[4471],exports.modules={3223:(e,t,r)=>{let{createProxy:l}=r(5347);e.exports=l("/home/ubuntu/builds/1729984912402/node_modules/@next/third-parties/dist/ThirdPartyScriptEmbed.js")},8678:(e,t,r)=>{let{createProxy:l}=r(5347);e.exports=l("/home/ubuntu/builds/1729984912402/node_modules/@next/third-parties/dist/google/ga.js")},2217:function(e,t,r){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let o=r(2051),a=r(110),n=l(r(3223));t.default=function(e){let{apiKey:t,...r}=e,l={...r,key:t},{html:s}=(0,a.GoogleMapsEmbed)(l);return(0,o.jsx)(n.default,{height:l.height||null,width:l.width||null,html:s,dataNtpc:"GoogleMapsEmbed"})}},4271:(e,t,r)=>{let{createProxy:l}=r(5347);e.exports=l("/home/ubuntu/builds/1729984912402/node_modules/@next/third-parties/dist/google/gtm.js")},9605:function(e,t,r){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=t.sendGTMEvent=t.GoogleTagManager=t.YouTubeEmbed=t.GoogleMapsEmbed=void 0;var o=r(2217);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return l(o).default}});var a=r(6536);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return l(a).default}});var n=r(4271);Object.defineProperty(t,"GoogleTagManager",{enumerable:!0,get:function(){return n.GoogleTagManager}}),Object.defineProperty(t,"sendGTMEvent",{enumerable:!0,get:function(){return n.sendGTMEvent}});var s=r(8678);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return s.GoogleAnalytics}}),Object.defineProperty(t,"sendGAEvent",{enumerable:!0,get:function(){return s.sendGAEvent}})},6536:function(e,t,r){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let o=r(2051),a=l(r(8252)),n=r(110),s=l(r(3223)),i={server:"beforeInteractive",client:"afterInteractive",idle:"lazyOnload",worker:"worker"};t.default=function(e){let{html:t,scripts:r,stylesheets:l}=(0,n.YouTubeEmbed)(e);return(0,o.jsx)(s.default,{height:e.height||null,width:e.width||null,html:t,dataNtpc:"YouTubeEmbed",children:null==r?void 0:r.map(e=>(0,o.jsx)(a.default,{src:e.url,strategy:i[e.strategy],stylesheets:l},e.url))})}},110:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=t.GoogleMapsEmbed=t.GoogleAnalytics=void 0;var l=r(6533);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return l.GoogleAnalytics}});var o=r(279);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return o.GoogleMapsEmbed}});var a=r(3986);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return a.YouTubeEmbed}})},6533:function(e,t,r){var l=this&&this.__rest||function(e,t){var r={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(r[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,l=Object.getOwnPropertySymbols(e);o<l.length;o++)0>t.indexOf(l[o])&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(r[l[o]]=e[l[o]]);return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleAnalytics=void 0;let a=o(r(4945)),n=r(6039);t.GoogleAnalytics=e=>{var t=l(e,[]);return(0,n.formatData)(a.default,t)}},279:function(e,t,r){var l=this&&this.__rest||function(e,t){var r={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(r[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,l=Object.getOwnPropertySymbols(e);o<l.length;o++)0>t.indexOf(l[o])&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(r[l[o]]=e[l[o]]);return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleMapsEmbed=void 0;let a=o(r(6661)),n=r(6039);t.GoogleMapsEmbed=e=>{var t=l(e,[]);return(0,n.formatData)(a.default,t)}},3986:function(e,t,r){var l=this&&this.__rest||function(e,t){var r={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(r[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,l=Object.getOwnPropertySymbols(e);o<l.length;o++)0>t.indexOf(l[o])&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(r[l[o]]=e[l[o]]);return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=void 0;let a=o(r(5448)),n=r(6039);t.YouTubeEmbed=e=>{var t=l(e,[]);return(0,n.formatData)(a.default,t)}},6039:(e,t)=>{function r(e,t,r=!1){return t?Object.keys(e).filter(e=>r?!t.includes(e):t.includes(e)).reduce((t,r)=>(t[r]=e[r],t),{}):{}}function l(e,t,r,l){let o=l&&Object.keys(l).length>0?new URL(Object.values(l)[0],e):new URL(e);return t&&r&&t.forEach(e=>{r[e]&&o.searchParams.set(e,r[e])}),o.toString()}function o(e,t,r,o,a){var n;if(!t)return`<${e}></${e}>`;let s=(null===(n=t.src)||void 0===n?void 0:n.url)?Object.assign(Object.assign({},t),{src:l(t.src.url,t.src.params,o,a)}):t,i=Object.keys(Object.assign(Object.assign({},s),r)).reduce((e,t)=>{let l=null==r?void 0:r[t],o=s[t],a=null!=l?l:o,n=!0===a?t:`${t}="${a}"`;return a?e+` ${n}`:e},"");return`<${e}${i}></${e}>`}Object.defineProperty(t,"__esModule",{value:!0}),t.formatData=t.createHtml=t.formatUrl=void 0,t.formatUrl=l,t.createHtml=o,t.formatData=function(e,t){var a,n,s,i,u;let d=r(t,null===(a=e.scripts)||void 0===a?void 0:a.reduce((e,t)=>[...e,...Array.isArray(t.params)?t.params:[]],[])),c=r(t,null===(s=null===(n=e.html)||void 0===n?void 0:n.attributes.src)||void 0===s?void 0:s.params),m=r(t,[null===(u=null===(i=e.html)||void 0===i?void 0:i.attributes.src)||void 0===u?void 0:u.slugParam]),b=r(t,[...Object.keys(d),...Object.keys(c),...Object.keys(m)],!0);return Object.assign(Object.assign({},e),{html:e.html?o(e.html.element,e.html.attributes,b,c,m):null,scripts:e.scripts?e.scripts.map(e=>Object.assign(Object.assign({},e),{url:l(e.url,e.params,d)})):null})}},4471:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var l=r(2051);r(6269);var o=r(2349),a=r(7207),n=r.n(a),s=r(9605),i=r(2328);function u({title:e,description:t,subtitle:r,primaryButton:a,secondaryButton:u,media:d}){return l.jsx("div",{children:(0,l.jsxs)("div",{className:"text-center",children:[r&&l.jsx("small",{className:"text-primary mb-md inline-block",children:r}),l.jsx("h1",{className:"text-foreground-primary text-4xl mb-lg",children:e}),l.jsx("div",{className:"max-w-[80ch] mx-auto markdown",dangerouslySetInnerHTML:{__html:n().sanitize(t,{ADD_ATTR:["target"]})}}),a||u?(0,l.jsxs)("div",{className:"mt-lg flex justify-center gap-sm",children:[a&&(0,l.jsxs)(o.default,{href:a.url,className:"btn-primary",children:[a.icon?l.jsx("i",{className:`${a.icon} mr-xs`}):null,a.name]}),u&&(0,l.jsxs)(o.default,{href:u.url,className:"btn-secondary",children:[u.icon?l.jsx("i",{className:`${u.icon} mr-xs`}):null,u.name]})]}):null,d&&l.jsx("div",{className:"mt-lg",children:"image"===d.type?l.jsx("img",{src:d.src,alt:d.alt,className:"aspect-auto w-full block"}):l.jsx("div",{className:"[&_lite-youtube]:aspect-video [&_lite-youtube]:w-full [&_lite-youtube]:max-w-full [&_lite-youtube]:rounded",children:l.jsx(s.YouTubeEmbed,{videoid:(0,i.N)(d.src||"")})})})]})})}},2328:(e,t,r)=>{r.d(t,{N:()=>l});function l(e){let t=e.match(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);return t&&11==t[2].length?t[2]:""}},4945:e=>{e.exports=JSON.parse('{"id":"google-analytics","description":"Install a Google Analytics tag on your website","website":"https://analytics.google.com/analytics/web/","scripts":[{"url":"https://www.googletagmanager.com/gtag/js","params":["id"],"strategy":"worker","location":"head","action":"append"},{"code":"window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag(\'js\',new Date());gtag(\'config\',\'${args.id}\')","strategy":"worker","location":"head","action":"append"}]}')},6661:e=>{e.exports=JSON.parse('{"id":"google-maps-embed","description":"Embed a Google Maps embed on your webpage","website":"https://developers.google.com/maps/documentation/embed/get-started","html":{"element":"iframe","attributes":{"loading":"lazy","src":{"url":"https://www.google.com/maps/embed/v1/place","slugParam":"mode","params":["key","q","center","zoom","maptype","language","region"]},"referrerpolicy":"no-referrer-when-downgrade","frameborder":"0","style":"border:0","allowfullscreen":true,"width":null,"height":null}}}')},5448:e=>{e.exports=JSON.parse('{"id":"youtube-embed","description":"Embed a YouTube embed on your webpage.","website":"https://github.com/paulirish/lite-youtube-embed","html":{"element":"lite-youtube","attributes":{"videoid":null,"playlabel":null}},"stylesheets":["https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css"],"scripts":[{"url":"https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.js","strategy":"idle","location":"head","action":"append"}]}')}};