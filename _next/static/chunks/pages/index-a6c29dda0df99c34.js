(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{32218:function(t,e,n){var i={"./NoOp":56864,"./NoOp.tsx":56864};function r(t){return n(o(t))}function o(t){if(!n.o(i,t)){var e=Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=o,t.exports=r,r.id=32218},48312:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5075)}])},96411:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var i=n(85893);n(67294);var r=n(9008),o=n.n(r),a=n(25935);function s(t){var e=t.content,n=(0,a.ZP)(e);return(0,i.jsx)(o(),{children:n})}},70520:function(t,e,n){"use strict";n.d(e,{Z:function(){return R}});var i,r=n(47568),o=n(828),a=n(20414),s=n(85893),c=n(25903),u=n(4604),d=n(6348),l=n(6226),f=n(96486),m=n.n(f),g=n(67294),p=n(42336),h=n(41664),x=n.n(h),v=n(99490);function j(t){var e,n,i,r,o,a=t.note,c=t.noteIndex,u=(0,p.gt)({note:a,noteIndex:c});try{o=m().get(a,"custom.date",!1)?(e=a.custom.date,n=v.DateTime.DATE_SHORT,v.DateTime.fromISO(e).toLocaleString(n)):(i=a.created,r=v.DateTime.DATE_SHORT,v.DateTime.fromMillis(i).toLocaleString(r))}catch(d){throw Error("no date found for note ".concat(a.id))}return(0,s.jsx)("div",{children:(0,s.jsxs)("article",{itemScope:!0,itemType:"https://schema.org/CreativeWork",children:[(0,s.jsx)("h2",{itemProp:"headline",children:(0,s.jsx)(x(),{href:u,children:a.title})}),!m().isUndefined(o)&&(0,s.jsx)("p",{children:o}),m().has(a,"custom.excerpt")&&(0,s.jsx)("p",{itemProp:"description",children:a.custom.excerpt})]})})}var _=n(96411),Z=n(2962),N=n(1512),y=function(t){var e=t.sitePath,n=t.seoProps,i=t.siteConfig;return n.canonicalBaseUrl?[i.siteUrl,e].join(""):n.canonicalUrl?n.canonicalUrl:[i.canonicalBaseUrl?i.canonicalBaseUrl:(0,p.N0)(i),e].join("")},w=function(t){return c.Time.DateTime.fromMillis(m().toInteger(t)).setZone("utc").toLocaleString("yyyy-LL-dd")};function E(t){var e=t.note,n=t.config,i=(0,N.vm)().router.asPath;if(m().some(["403"],function(t){return i==="/notes/".concat(t,"/")}))return null;var r,o=c.PublishUtils.getSEOPropsFromConfig(n),a=c.PublishUtils.getSEOPropsFromNote(e),u=m().defaults(a,o),d=u.title,l=u.description,f=(null==u?void 0:u.image)?[u.image]:[],g=c.ConfigUtils.getPublishingConfig(n),p=y({sitePath:i,seoProps:u,siteConfig:g}),h=u.twitter?{handle:u.twitter,site:u.twitter,cardType:"summary_large_image"}:void 0;return(0,s.jsx)(Z.PB,{title:d,description:l,canonical:p,noindex:u.noindex,twitter:h,openGraph:{title:d,description:l,url:p,images:f,type:"article",article:{publishedTime:w(u.created),modifiedTime:w(u.updated),tags:e.tags?Array.isArray(e.tags)?e.tags:[e.tags]:[]}}})}var L=n(56052),T=n(41799),U=n(69396),S=n(99534),P=n(8450),b=P.Z.Link,C=function(t){t=(t=t.replace(/_/g,"-")).replace(/--/g,"-");var e=[];return t.split("-").forEach(function(t){e.push(t.substr(0,1).toUpperCase()+t.substr(1))}),e.join(" ")},O=function(t){var e,n=t.note,i=(0,S.Z)(t,["note"]);return(0,s.jsx)(P.Z,(0,U.Z)((0,T.Z)({style:{zIndex:1},className:"dendron-toc"},i),{children:Object.entries(null==n?void 0:n.anchors).map(function(t){var n=(0,o.Z)(t,2),i=n[0],r=n[1];return(0,s.jsx)(g.Fragment,{children:(null==r?void 0:r.type)==="header"?(0,s.jsx)(b,{href:"#".concat(i),title:null!==(e=null==r?void 0:r.text)&&void 0!==e?e:C(null==r?void 0:r.value)}):null},i)})}))},B=n(54856),D=n(85416),F=n(45875),I=n(4298),A=n.n(I),k=n(54811),H=function(t){var e=(0,o.Z)(g.useState(!1),2),n=e[0],i=e[1];(0,k.T)(function(t){return t.engine});var r=t.noteBody;return((0,g.useEffect)(function(){void 0===window.mermaid&&r.includes('class="mermaid"')&&i(!0)},[r]),n)?((0,u.createLogger)("MermaidScript").info({ctx:"loading mermaid"}),(0,s.jsx)(A(),{id:"initmermaid",src:"https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js",onLoad:function(){var t=window.mermaid;window._mermaid=t,t.initialize({startOnLoad:!1}),t.init()}})):(0,s.jsx)(s.Fragment,{})},G=n(37870),z=function(t){var e,n=t.note,i=t.config,r=c.ConfigUtils.getGiscusConfig(i),o=n.id;if(void 0===r||(null===(e=n.custom)||void 0===e?void 0:e.enableGiscus)===void 0)return null;var a,u,d=r.repo;if(u=d.match("^[a-zA-Z0-9_-]*[/][a-zA-Z0-9_-]*$"),m().isNull(u))return null;var l=(0,U.Z)((0,T.Z)({},r),{repo:d,term:o});return(0,s.jsx)(G.Z,(0,T.Z)({},l))},M=F.b.HEADER;function R(t){var e,f=t.note,p=t.body,h=t.collectionChildren,x=t.noteIndex,v=t.customHeadContent,Z=t.config,y=(0,u.createLogger)("Note"),w=(0,N.vm)().getActiveNoteId,T=(0,o.Z)(g.useState(void 0),2),U=T[0],S=T[1],P=w();"root"===P&&(P=x.id),g.useEffect(function(){var t="custom"===c.ConfigUtils.getPublishing(Z).siteBanner?"BannerAlert.tsx":"NoOp";y.info({ctx:"loading banner",BannerFile:t}),i=n(32218)("./".concat(t)).default},[]);var b=(0,B.$s)();y.info({ctx:"enter",id:P}),g.useEffect(function(){var t;if(y.info({ctx:"updateNoteBody:enter",id:P}),m().isUndefined(P)){y.info({ctx:"updateNoteBody:exit",id:P,state:"id undefined"});return}if(P===f.id){b(D.w.Nw.setLoadingStatus(u.LoadingStatus.FULFILLED)),y.info({ctx:"updateNoteBody:exit",id:P,state:"id = note.id"});return}y.info({ctx:"updateNoteBody:fetch:pre",id:P}),fetch("/data/notes/".concat(P,".html")).then((t=(0,r.Z)(function(t){var e;return(0,a.__generator)(this,function(e){switch(e.label){case 0:return y.info({ctx:"updateNoteBody:fetch:post",id:P}),[4,t.text()];case 1:return S(e.sent()),b(D.w.Nw.setLoadingStatus(u.LoadingStatus.FULFILLED)),[2]}})}),function(e){return t.apply(this,arguments)}))},[P]);var C=P===f.id?p:U;if(m().isUndefined(C))return(0,s.jsx)(L.Z,{});var F=(null===(e=f.custom)||void 0===e?void 0:e.has_collection)&&!m().isNull(h)?h.map(function(t){return(0,s.jsx)(j,{note:t,noteIndex:x},t.id)}):null;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(H,{noteBody:C}),(0,s.jsx)(E,{note:f,config:Z}),v&&(0,s.jsx)(_.Z,{content:v}),(0,s.jsx)(d.Z,{children:(0,s.jsx)(l.Z,{span:24,children:(0,s.jsxs)(d.Z,{gutter:20,children:[(0,s.jsxs)(l.Z,{xs:24,md:18,children:[i&&(0,s.jsx)(i,{}),(0,s.jsx)(u.DendronNote,{noteContent:C}),F,(0,s.jsx)(z,{note:f,config:Z})]}),(0,s.jsx)(l.Z,{xs:0,md:6,children:(0,s.jsx)(O,{note:f,offsetTop:M.HEIGHT})})]})})})]})}},56864:function(t,e,n){"use strict";function i(){return null}n.r(e),n.d(e,{default:function(){return i}})},5075:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return r}});var i=n(70520),r=!0;e.default=i.Z}},function(t){t.O(0,[274,939,774,888,179],function(){return t(t.s=48312)}),_N_E=t.O()}]);