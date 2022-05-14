"use strict";(self.webpackChunkoperate_first=self.webpackChunkoperate_first||[]).push([[270],{22888:function(e,r,t){t.d(r,{M:function(){return x}});var n=t(67294),o=t(45849),a=t(47569),i=t(42982);function l(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==t.return||t.return()}finally{if(l)throw a}}}}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var s=Object.defineProperty,u=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=function(e,r,t){return r in e?s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t},d=function(e,r){for(var t in r||(r={}))f.call(r,t)&&p(e,t,r[t]);if(u){var n,o=l(u(r));try{for(o.s();!(n=o.n()).done;){t=n.value;m.call(r,t)&&p(e,t,r[t])}}catch(a){o.e(a)}finally{o.f()}}return e},y=(0,a.k)((function(e,r){var t=r.spacing,n=r.breakpoints,o=r.cols,a=function(e,r){if(0===r.length)return r;var t="maxWidth"in r[0]?"maxWidth":"minWidth",n=(0,i.Z)(r).sort((function(r,n){return e.fn.size({size:n[t],sizes:e.breakpoints})-e.fn.size({size:r[t],sizes:e.breakpoints})}));return"minWidth"===t?n.reverse():n}(e,n).reduce((function(r,n){var o="maxWidth"in n?"max-width":"min-width",a=e.fn.size({size:"max-width"===o?n.maxWidth:n.minWidth,sizes:e.breakpoints});return r["@media (".concat(o,": ").concat(a+("max-width"===o?0:1),"px)")]={gridTemplateColumns:"repeat(".concat(n.cols,", minmax(0, 1fr))"),gap:e.fn.size({size:n.spacing||t,sizes:e.spacing})},r}),{});return{root:d({boxSizing:"border-box",display:"grid",gridTemplateColumns:"repeat(".concat(o,", minmax(0, 1fr))"),gap:e.fn.size({size:t,sizes:e.spacing})},a)}})),h=t(37697);function v(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"==typeof e)return b(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==t.return||t.return()}finally{if(l)throw a}}}}function b(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var g=Object.defineProperty,w=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,O=function(e,r,t){return r in e?g(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t},S={breakpoints:[],cols:1,spacing:"md"},x=(0,n.forwardRef)((function(e,r){var t=(0,o.Z3)("SimpleGrid",S,e),a=t.className,i=t.breakpoints,l=t.cols,c=t.spacing,s=t.children,u=t.classNames,f=t.styles,m=function(e,r){var t={};for(var n in e)E.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&w){var o,a=v(w(e));try{for(a.s();!(o=a.n()).done;)n=o.value,r.indexOf(n)<0&&k.call(e,n)&&(t[n]=e[n])}catch(i){a.e(i)}finally{a.f()}}return t}(t,["className","breakpoints","cols","spacing","children","classNames","styles"]),p=y({breakpoints:i,cols:l,spacing:c},{classNames:u,styles:f,name:"SimpleGrid"}),d=p.classes,b=p.cx;return n.createElement(h.x,function(e,r){for(var t in r||(r={}))E.call(r,t)&&O(e,t,r[t]);if(w){var n,o=v(w(r));try{for(o.s();!(n=o.n()).done;)t=n.value,k.call(r,t)&&O(e,t,r[t])}catch(a){o.e(a)}finally{o.f()}}return e}({className:b(d.root,a),ref:r},m),s)}));x.displayName="@mantine/core/SimpleGrid"},82389:function(e,r,t){t.r(r),t.d(r,{default:function(){return G}});var n=t(67294),o=(t(1597),t(63982)),a=t(20358),i=t(34468),l=t(92230),c=t(24458),s=t(50547),u=t(1375),f=t(45849),m=t(808),p=t(47569),d=(0,p.k)((function(e,r){var t=r.padding,n=r.first,o=r.last;return{cardSection:{display:"block",marginLeft:-1*e.fn.size({size:t,sizes:e.spacing}),marginRight:-1*e.fn.size({size:t,sizes:e.spacing}),marginTop:n?-1*e.fn.size({size:t,sizes:e.spacing}):void 0,marginBottom:o?-1*e.fn.size({size:t,sizes:e.spacing}):void 0}}})),y=t(37697);function h(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"==typeof e)return v(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return v(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==t.return||t.return()}finally{if(l)throw a}}}}function v(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var b=Object.defineProperty,g=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,k=function(e,r,t){return r in e?b(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t},O=(0,n.forwardRef)((function(e,r){var t=e,o=t.className,a=t.padding,i=void 0===a?0:a,l=t.component,c=t.first,s=t.last,u=function(e,r){var t={};for(var n in e)w.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&g){var o,a=h(g(e));try{for(a.s();!(o=a.n()).done;)n=o.value,r.indexOf(n)<0&&E.call(e,n)&&(t[n]=e[n])}catch(i){a.e(i)}finally{a.f()}}return t}(t,["className","padding","component","first","last"]),f=d({padding:i,first:c,last:s},{name:"Card"}),m=f.classes,p=f.cx;return n.createElement(y.x,function(e,r){for(var t in r||(r={}))w.call(r,t)&&k(e,t,r[t]);if(g){var n,o=h(g(r));try{for(o.s();!(n=o.n()).done;)t=n.value,E.call(r,t)&&k(e,t,r[t])}catch(a){o.e(a)}finally{o.f()}}return e}({component:l||"div",className:p(m.cardSection,o),ref:r},u))}));O.displayName="@mantine/core/CardSection";var S=(0,p.k)((function(e){return{root:{position:"relative",overflow:"hidden",backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.white}}}));function x(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"==typeof e)return z(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return z(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==t.return||t.return()}finally{if(l)throw a}}}}function z(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var j=Object.defineProperty,A=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,N=function(e,r,t){return r in e?j(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t},P={p:"md"},W=(0,n.forwardRef)((function(e,r){var t=(0,f.Z3)("Card",P,e),o=t.component,a=t.className,i=t.p,l=t.radius,c=t.children,s=t.classNames,u=t.styles,p=function(e,r){var t={};for(var n in e)I.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&A){var o,a=x(A(e));try{for(a.s();!(o=a.n()).done;)n=o.value,r.indexOf(n)<0&&C.call(e,n)&&(t[n]=e[n])}catch(i){a.e(i)}finally{a.f()}}return t}(t,["component","className","p","radius","children","classNames","styles"]),d=S(null,{name:"Card",classNames:s,styles:u}),y=d.classes,h=d.cx,v=n.Children.toArray(c),b=v.map((function(e,r){return"object"==typeof e&&e&&"type"in e&&e.type===O?(0,n.cloneElement)(e,{padding:i,first:0===r,last:r===v.length-1}):e}));return n.createElement(m.X,function(e,r){for(var t in r||(r={}))I.call(r,t)&&N(e,t,r[t]);if(A){var n,o=x(A(r));try{for(o.s();!(n=o.n()).done;)t=n.value,C.call(r,t)&&N(e,t,r[t])}catch(a){o.e(a)}finally{o.f()}}return e}({className:h(y.root,a),radius:l,p:i,component:o||"div",ref:r},p),b)}));W.Section=O,W.displayName="@mantine/core/Card";var Z=t(80537),R=t(83128),M=t(22888),T=t(57856),B=[{title:"Infra",icon:T.ZJk,color:"red",url:"http://console-openshift-console.apps.moc-infra.massopen.cloud/"},{title:"Smaug",icon:T.ZJk,color:"red",url:"http://console-openshift-console.apps.smaug.na.operate-first.cloud/"},{title:"Morty",icon:T.ZJk,color:"blue",url:"https://console-openshift-console.apps.morty.emea.operate-first.cloud/"},{title:"Rick",icon:T.ZJk,color:"blue",url:"https://console-openshift-console.apps.rick.emea.operate-first.cloud/"},{title:"Balrog",icon:T.ZJk,color:"orange",url:"https://console-openshift-console.apps.balrog.aws.operate-first.cloud/"}],D=(0,p.k)((function(e){return{card:{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0]},title:{fontFamily:"Greycliff CF, "+e.fontFamily,fontWeight:700},item:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",borderRadius:e.radius.md,height:90,backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,transition:"box-shadow 150ms ease, transform 100ms ease","&:hover":{boxShadow:e.shadows.md+" !important",transform:"scale(1.05)"}}}})),G=function(){var e=D(),r=e.classes,t=e.theme,f=B.map((function(e){return n.createElement("a",{href:e.url,key:e.title,className:r.item},n.createElement(Z.k,{key:e.title,className:r.item},n.createElement(e.icon,{color:t.colors[e.color][6],size:32}),n.createElement(i.x,{size:"sm",mt:7,weight:600},e.title)))}));return n.createElement("main",null,n.createElement(o.J,null),n.createElement(l.W,{pb:69},n.createElement(c.D,{order:2,my:"md"},"Op1st Community Cloud"),n.createElement(i.x,null,"The Operate First Community Cloud is a shared environment for Open Source projects and SRE practicioners."),n.createElement(i.x,null,"It's operated under a community SLA and as open and transparent as possible."),n.createElement(c.D,{order:2,my:"lg"},"Resources"),n.createElement(s.Z,{mb:40},n.createElement("a",{href:"https://www.operate-first.cloud/apps/content/README.html"},n.createElement(u.z,{leftIcon:n.createElement(T.fy8,null),color:"dark"},"GitOps Docs")),n.createElement("a",{href:"https://github.com/operate-first/blueprint"},n.createElement(u.z,{leftIcon:n.createElement(T.fy8,null),color:"dark"},"Blueprints and architectural decision records")),n.createElement("a",{href:"https://github.com/operate-first/support"},n.createElement(u.z,{leftIcon:n.createElement(T.fy8,null),color:"dark"},"Get support"))),n.createElement(c.D,{order:2,my:"md"},"Clusters"),n.createElement(W,{withBorder:!0,radius:"md",className:r.card},n.createElement(s.Z,{position:"apart"},n.createElement(i.x,{className:r.title},"Services"),n.createElement(R.e,{size:"xs",color:"dimmed",sx:{lineHeight:1}},"...")),n.createElement(M.M,{cols:3,mt:"md"},f)),n.createElement(c.D,{order:2,my:"md"},"Workloads"),n.createElement("iframe",{src:"https://grafana-public.operate-first.cloud/d-solo/opf-overview/workload-overview?orgId=1&var-datasource=default&var-cluster=moc/smaug&var-namespace=All&theme=light&panelId=4",width:"1200",height:"400",frameBorder:"0"}),n.createElement("iframe",{src:"https://grafana-public.operate-first.cloud/d-solo/opf-overview/workload-overview?orgId=1&var-datasource=default&var-cluster=moc/infra&var-namespace=All&theme=light&panelId=4",width:"1200",height:"400",frameBorder:"0"}),n.createElement("iframe",{src:"https://grafana-public.operate-first.cloud/d-solo/opf-overview/workload-overview?orgId=1&var-datasource=default&var-cluster=emea/balrog&var-namespace=All&theme=light&panelId=4",width:"1200",height:"400",frameBorder:"0"})),n.createElement(a.$,null))}}}]);
//# sourceMappingURL=component---src-pages-community-cloud-js-f5636832082af92e6ad6.js.map