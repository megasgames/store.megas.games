exports.id=7207,exports.ids=[7207],exports.modules={7207:(e,t,n)=>{function o(e){return e&&e.default||e}e.exports=global.DOMPurify=global.DOMPurify||("undefined"!=typeof window?o(n(9826)):function(){let e=o(n(9826)),{JSDOM:t}=o(n(8860)),{window:r}=new t("<!DOCTYPE html>");return e(r)}())},9826:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Q});let{entries:o,setPrototypeOf:r,isFrozen:i,getPrototypeOf:a,getOwnPropertyDescriptor:l}=Object,{freeze:c,seal:s,create:u}=Object,{apply:m,construct:p}="undefined"!=typeof Reflect&&Reflect;c||(c=function(e){return e}),s||(s=function(e){return e}),m||(m=function(e,t,n){return e.apply(t,n)}),p||(p=function(e,t){return new e(...t)});let f=w(Array.prototype.forEach),d=w(Array.prototype.pop),h=w(Array.prototype.push),g=w(String.prototype.toLowerCase),y=w(String.prototype.toString),T=w(String.prototype.match),E=w(String.prototype.replace),_=w(String.prototype.indexOf),A=w(String.prototype.trim),b=w(Object.prototype.hasOwnProperty),N=w(RegExp.prototype.test),S=(K=TypeError,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return p(K,t)});function w(e){return function(t){for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return m(e,t,o)}}function R(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g;r&&r(e,null);let o=t.length;for(;o--;){let r=t[o];if("string"==typeof r){let e=n(r);e!==r&&(i(t)||(t[o]=e),r=e)}e[r]=!0}return e}function v(e){let t=u(null);for(let[n,r]of o(e))b(e,n)&&(Array.isArray(r)?t[n]=function(e){for(let t=0;t<e.length;t++)b(e,t)||(e[t]=null);return e}(r):r&&"object"==typeof r&&r.constructor===Object?t[n]=v(r):t[n]=r);return t}function C(e,t){for(;null!==e;){let n=l(e,t);if(n){if(n.get)return w(n.get);if("function"==typeof n.value)return w(n.value)}e=a(e)}return function(){return null}}let D=c(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),L=c(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),x=c(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),O=c(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),k=c(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),I=c(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),M=c(["#text"]),U=c(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),P=c(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),H=c(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),F=c(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),z=s(/\{\{[\w\W]*|[\w\W]*\}\}/gm),W=s(/<%[\w\W]*|[\w\W]*%>/gm),B=s(/\${[\w\W]*}/gm),G=s(/^data-[\-\w.\u00B7-\uFFFF]/),Y=s(/^aria-[\-\w]+$/),j=s(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),q=s(/^(?:\w+script|data):/i),X=s(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),$=s(/^html$/i);var K,V=Object.freeze({__proto__:null,MUSTACHE_EXPR:z,ERB_EXPR:W,TMPLIT_EXPR:B,DATA_ATTR:G,ARIA_ATTR:Y,IS_ALLOWED_URI:j,IS_SCRIPT_OR_DATA:q,ATTR_WHITESPACE:X,DOCTYPE_NAME:$,CUSTOM_ELEMENT:s(/^[a-z][.\w]*(-[.\w]+)+$/i)});let Z={element:1,text:3,progressingInstruction:7,comment:8,document:9},J=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null,o="data-tt-policy-suffix";t&&t.hasAttribute(o)&&(n=t.getAttribute(o));let r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}};var Q=function e(){let t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"undefined"==typeof window?null:window,r=t=>e(t);if(r.version="3.1.7",r.removed=[],!n||!n.document||n.document.nodeType!==Z.document)return r.isSupported=!1,r;let{document:i}=n,a=i,l=a.currentScript,{DocumentFragment:s,HTMLTemplateElement:m,Node:p,Element:w,NodeFilter:z,NamedNodeMap:W=n.NamedNodeMap||n.MozNamedAttrMap,HTMLFormElement:B,DOMParser:G,trustedTypes:Y}=n,q=w.prototype,X=C(q,"cloneNode"),K=C(q,"remove"),Q=C(q,"nextSibling"),ee=C(q,"childNodes"),et=C(q,"parentNode");if("function"==typeof m){let e=i.createElement("template");e.content&&e.content.ownerDocument&&(i=e.content.ownerDocument)}let en="",{implementation:eo,createNodeIterator:er,createDocumentFragment:ei,getElementsByTagName:ea}=i,{importNode:el}=a,ec={};r.isSupported="function"==typeof o&&"function"==typeof et&&eo&&void 0!==eo.createHTMLDocument;let{MUSTACHE_EXPR:es,ERB_EXPR:eu,TMPLIT_EXPR:em,DATA_ATTR:ep,ARIA_ATTR:ef,IS_SCRIPT_OR_DATA:ed,ATTR_WHITESPACE:eh,CUSTOM_ELEMENT:eg}=V,{IS_ALLOWED_URI:ey}=V,eT=null,eE=R({},[...D,...L,...x,...k,...M]),e_=null,eA=R({},[...U,...P,...H,...F]),eb=Object.seal(u(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),eN=null,eS=null,ew=!0,eR=!0,ev=!1,eC=!0,eD=!1,eL=!0,ex=!1,eO=!1,ek=!1,eI=!1,eM=!1,eU=!1,eP=!0,eH=!1,eF=!0,ez=!1,eW={},eB=null,eG=R({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),eY=null,ej=R({},["audio","video","img","source","image","track"]),eq=null,eX=R({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),e$="http://www.w3.org/1998/Math/MathML",eK="http://www.w3.org/2000/svg",eV="http://www.w3.org/1999/xhtml",eZ=eV,eJ=!1,eQ=null,e0=R({},[e$,eK,eV],y),e1=null,e2=["application/xhtml+xml","text/html"],e9=null,e3=null,e7=i.createElement("form"),e8=function(e){return e instanceof RegExp||e instanceof Function},e6=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!e3||e3!==e){if(e&&"object"==typeof e||(e={}),e=v(e),e9="application/xhtml+xml"===(e1=-1===e2.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE)?y:g,eT=b(e,"ALLOWED_TAGS")?R({},e.ALLOWED_TAGS,e9):eE,e_=b(e,"ALLOWED_ATTR")?R({},e.ALLOWED_ATTR,e9):eA,eQ=b(e,"ALLOWED_NAMESPACES")?R({},e.ALLOWED_NAMESPACES,y):e0,eq=b(e,"ADD_URI_SAFE_ATTR")?R(v(eX),e.ADD_URI_SAFE_ATTR,e9):eX,eY=b(e,"ADD_DATA_URI_TAGS")?R(v(ej),e.ADD_DATA_URI_TAGS,e9):ej,eB=b(e,"FORBID_CONTENTS")?R({},e.FORBID_CONTENTS,e9):eG,eN=b(e,"FORBID_TAGS")?R({},e.FORBID_TAGS,e9):{},eS=b(e,"FORBID_ATTR")?R({},e.FORBID_ATTR,e9):{},eW=!!b(e,"USE_PROFILES")&&e.USE_PROFILES,ew=!1!==e.ALLOW_ARIA_ATTR,eR=!1!==e.ALLOW_DATA_ATTR,ev=e.ALLOW_UNKNOWN_PROTOCOLS||!1,eC=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,eD=e.SAFE_FOR_TEMPLATES||!1,eL=!1!==e.SAFE_FOR_XML,ex=e.WHOLE_DOCUMENT||!1,eI=e.RETURN_DOM||!1,eM=e.RETURN_DOM_FRAGMENT||!1,eU=e.RETURN_TRUSTED_TYPE||!1,ek=e.FORCE_BODY||!1,eP=!1!==e.SANITIZE_DOM,eH=e.SANITIZE_NAMED_PROPS||!1,eF=!1!==e.KEEP_CONTENT,ez=e.IN_PLACE||!1,ey=e.ALLOWED_URI_REGEXP||j,eZ=e.NAMESPACE||eV,eb=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&e8(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(eb.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&e8(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(eb.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(eb.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),eD&&(eR=!1),eM&&(eI=!0),eW&&(eT=R({},M),e_=[],!0===eW.html&&(R(eT,D),R(e_,U)),!0===eW.svg&&(R(eT,L),R(e_,P),R(e_,F)),!0===eW.svgFilters&&(R(eT,x),R(e_,P),R(e_,F)),!0===eW.mathMl&&(R(eT,k),R(e_,H),R(e_,F))),e.ADD_TAGS&&(eT===eE&&(eT=v(eT)),R(eT,e.ADD_TAGS,e9)),e.ADD_ATTR&&(e_===eA&&(e_=v(e_)),R(e_,e.ADD_ATTR,e9)),e.ADD_URI_SAFE_ATTR&&R(eq,e.ADD_URI_SAFE_ATTR,e9),e.FORBID_CONTENTS&&(eB===eG&&(eB=v(eB)),R(eB,e.FORBID_CONTENTS,e9)),eF&&(eT["#text"]=!0),ex&&R(eT,["html","head","body"]),eT.table&&(R(eT,["tbody"]),delete eN.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw S('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw S('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');en=(t=e.TRUSTED_TYPES_POLICY).createHTML("")}else void 0===t&&(t=J(Y,l)),null!==t&&"string"==typeof en&&(en=t.createHTML(""));c&&c(e),e3=e}},e4=R({},["mi","mo","mn","ms","mtext"]),e5=R({},["annotation-xml"]),te=R({},["title","style","font","a","script"]),tt=R({},[...L,...x,...O]),tn=R({},[...k,...I]),to=function(e){let t=et(e);t&&t.tagName||(t={namespaceURI:eZ,tagName:"template"});let n=g(e.tagName),o=g(t.tagName);return!!eQ[e.namespaceURI]&&(e.namespaceURI===eK?t.namespaceURI===eV?"svg"===n:t.namespaceURI===e$?"svg"===n&&("annotation-xml"===o||e4[o]):!!tt[n]:e.namespaceURI===e$?t.namespaceURI===eV?"math"===n:t.namespaceURI===eK?"math"===n&&e5[o]:!!tn[n]:e.namespaceURI===eV?(t.namespaceURI!==eK||!!e5[o])&&(t.namespaceURI!==e$||!!e4[o])&&!tn[n]&&(te[n]||!tt[n]):"application/xhtml+xml"===e1&&!!eQ[e.namespaceURI])},tr=function(e){h(r.removed,{element:e});try{et(e).removeChild(e)}catch(t){K(e)}},ti=function(e,t){try{h(r.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){h(r.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!e_[e]){if(eI||eM)try{tr(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}}},ta=function(e){let n=null,o=null;if(ek)e="<remove></remove>"+e;else{let t=T(e,/^[\r\n\t ]+/);o=t&&t[0]}"application/xhtml+xml"===e1&&eZ===eV&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");let r=t?t.createHTML(e):e;if(eZ===eV)try{n=new G().parseFromString(r,e1)}catch(e){}if(!n||!n.documentElement){n=eo.createDocument(eZ,"template",null);try{n.documentElement.innerHTML=eJ?en:r}catch(e){}}let a=n.body||n.documentElement;return(e&&o&&a.insertBefore(i.createTextNode(o),a.childNodes[0]||null),eZ===eV)?ea.call(n,ex?"html":"body")[0]:ex?n.documentElement:a},tl=function(e){return er.call(e.ownerDocument||e,e,z.SHOW_ELEMENT|z.SHOW_COMMENT|z.SHOW_TEXT|z.SHOW_PROCESSING_INSTRUCTION|z.SHOW_CDATA_SECTION,null)},tc=function(e){return e instanceof B&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof W)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},ts=function(e){return"function"==typeof p&&e instanceof p},tu=function(e,t,n){ec[e]&&f(ec[e],e=>{e.call(r,t,n,e3)})},tm=function(e){let t=null;if(tu("beforeSanitizeElements",e,null),tc(e))return tr(e),!0;let n=e9(e.nodeName);if(tu("uponSanitizeElement",e,{tagName:n,allowedTags:eT}),e.hasChildNodes()&&!ts(e.firstElementChild)&&N(/<[/\w]/g,e.innerHTML)&&N(/<[/\w]/g,e.textContent)||e.nodeType===Z.progressingInstruction||eL&&e.nodeType===Z.comment&&N(/<[/\w]/g,e.data))return tr(e),!0;if(!eT[n]||eN[n]){if(!eN[n]&&tf(n)&&(eb.tagNameCheck instanceof RegExp&&N(eb.tagNameCheck,n)||eb.tagNameCheck instanceof Function&&eb.tagNameCheck(n)))return!1;if(eF&&!eB[n]){let t=et(e)||e.parentNode,n=ee(e)||e.childNodes;if(n&&t){let o=n.length;for(let r=o-1;r>=0;--r){let o=X(n[r],!0);o.__removalCount=(e.__removalCount||0)+1,t.insertBefore(o,Q(e))}}}return tr(e),!0}return e instanceof w&&!to(e)||("noscript"===n||"noembed"===n||"noframes"===n)&&N(/<\/no(script|embed|frames)/i,e.innerHTML)?(tr(e),!0):(eD&&e.nodeType===Z.text&&(t=e.textContent,f([es,eu,em],e=>{t=E(t,e," ")}),e.textContent!==t&&(h(r.removed,{element:e.cloneNode()}),e.textContent=t)),tu("afterSanitizeElements",e,null),!1)},tp=function(e,t,n){if(eP&&("id"===t||"name"===t)&&(n in i||n in e7))return!1;if(eR&&!eS[t]&&N(ep,t));else if(ew&&N(ef,t));else if(!e_[t]||eS[t]){if(!(tf(e)&&(eb.tagNameCheck instanceof RegExp&&N(eb.tagNameCheck,e)||eb.tagNameCheck instanceof Function&&eb.tagNameCheck(e))&&(eb.attributeNameCheck instanceof RegExp&&N(eb.attributeNameCheck,t)||eb.attributeNameCheck instanceof Function&&eb.attributeNameCheck(t))||"is"===t&&eb.allowCustomizedBuiltInElements&&(eb.tagNameCheck instanceof RegExp&&N(eb.tagNameCheck,n)||eb.tagNameCheck instanceof Function&&eb.tagNameCheck(n))))return!1}else if(eq[t]);else if(N(ey,E(n,eh,"")));else if(("src"===t||"xlink:href"===t||"href"===t)&&"script"!==e&&0===_(n,"data:")&&eY[e]);else if(ev&&!N(ed,E(n,eh,"")));else if(n)return!1;return!0},tf=function(e){return"annotation-xml"!==e&&T(e,eg)},td=function(e){tu("beforeSanitizeAttributes",e,null);let{attributes:n}=e;if(!n)return;let o={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:e_},i=n.length;for(;i--;){let{name:a,namespaceURI:l,value:c}=n[i],s=e9(a),u="value"===a?c:A(c);if(o.attrName=s,o.attrValue=u,o.keepAttr=!0,o.forceKeepAttr=void 0,tu("uponSanitizeAttribute",e,o),u=o.attrValue,o.forceKeepAttr||(ti(a,e),!o.keepAttr))continue;if(!eC&&N(/\/>/i,u)){ti(a,e);continue}eD&&f([es,eu,em],e=>{u=E(u,e," ")});let m=e9(e.nodeName);if(tp(m,s,u)){if(eH&&("id"===s||"name"===s)&&(ti(a,e),u="user-content-"+u),eL&&N(/((--!?|])>)|<\/(style|title)/i,u)){ti(a,e);continue}if(t&&"object"==typeof Y&&"function"==typeof Y.getAttributeType){if(l);else switch(Y.getAttributeType(m,s)){case"TrustedHTML":u=t.createHTML(u);break;case"TrustedScriptURL":u=t.createScriptURL(u)}}try{l?e.setAttributeNS(l,a,u):e.setAttribute(a,u),tc(e)?tr(e):d(r.removed)}catch(e){}}}tu("afterSanitizeAttributes",e,null)},th=function e(t){let n=null,o=tl(t);for(tu("beforeSanitizeShadowDOM",t,null);n=o.nextNode();)tu("uponSanitizeShadowNode",n,null),tm(n)||(n.content instanceof s&&e(n.content),td(n));tu("afterSanitizeShadowDOM",t,null)};return r.sanitize=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=null,i=null,l=null,c=null;if((eJ=!e)&&(e="<!-->"),"string"!=typeof e&&!ts(e)){if("function"==typeof e.toString){if("string"!=typeof(e=e.toString()))throw S("dirty is not a string, aborting")}else throw S("toString is not a function")}if(!r.isSupported)return e;if(eO||e6(n),r.removed=[],"string"==typeof e&&(ez=!1),ez){if(e.nodeName){let t=e9(e.nodeName);if(!eT[t]||eN[t])throw S("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof p)(i=(o=ta("<!---->")).ownerDocument.importNode(e,!0)).nodeType===Z.element&&"BODY"===i.nodeName?o=i:"HTML"===i.nodeName?o=i:o.appendChild(i);else{if(!eI&&!eD&&!ex&&-1===e.indexOf("<"))return t&&eU?t.createHTML(e):e;if(!(o=ta(e)))return eI?null:eU?en:""}o&&ek&&tr(o.firstChild);let u=tl(ez?e:o);for(;l=u.nextNode();)tm(l)||(l.content instanceof s&&th(l.content),td(l));if(ez)return e;if(eI){if(eM)for(c=ei.call(o.ownerDocument);o.firstChild;)c.appendChild(o.firstChild);else c=o;return(e_.shadowroot||e_.shadowrootmode)&&(c=el.call(a,c,!0)),c}let m=ex?o.outerHTML:o.innerHTML;return ex&&eT["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&N($,o.ownerDocument.doctype.name)&&(m="<!DOCTYPE "+o.ownerDocument.doctype.name+">\n"+m),eD&&f([es,eu,em],e=>{m=E(m,e," ")}),t&&eU?t.createHTML(m):m},r.setConfig=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e6(e),eO=!0},r.clearConfig=function(){e3=null,eO=!1},r.isValidAttribute=function(e,t,n){return e3||e6({}),tp(e9(e),e9(t),n)},r.addHook=function(e,t){"function"==typeof t&&(ec[e]=ec[e]||[],h(ec[e],t))},r.removeHook=function(e){if(ec[e])return d(ec[e])},r.removeHooks=function(e){ec[e]&&(ec[e]=[])},r.removeAllHooks=function(){ec={}},r}()}};