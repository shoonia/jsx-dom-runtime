let e=(t,n)=>{Array.isArray(n)?n.some((n=>e(t,n))):null!=n&&!1!==n&&t.append(n)},t=new Map,n=new Set(["ref","children","__ns"]),l=new Set(["value"]),r=(r,s)=>{let a,c,i=s.__ns?document.createElementNS("http://www.w3.org/2000/svg",r):document.createElement(r);for(a in s)if(!n.has(a))if(c=s[a],t.has(a))t.get(a)(i,c);else if("style"===a)if("string"==typeof c)i.style.cssText=c;else for(a in c)a.startsWith("--")?i.style.setProperty(a,c[a]):i.style[a]=c[a];else l.has(a)||a.startsWith("on")&&a in i?i[a]=c:null==c||"boolean"==typeof c&&"-"!==a[4]?c&&i.setAttribute(a,""):i.setAttribute(a,c);return e("template"===r?i.content:i,s.children),c=s.ref,c&&("function"==typeof c?c(i):c.current=i),i},s=e=>Object.seal({current:e});const a=({text:e})=>{const t=s();return r("li",{ref:t,class:"_EvwSY",children:[e,r("button",{type:"button",class:"_uTamu",onclick:()=>{t.current.remove()},"aria-label":"remove",children:r("svg",{width:"24",height:"24",fill:"#8e21b1","aria-hidden":!0,children:r("path",{d:"M17 17a3 3 0 01-3 3H9a3 3 0 01-3-3V7H5V6h13v1h-1v10zM9 9h1v7H9V9zm2 0h1v7h-1V9zm2 0h1v7h-1V9zm-6 8a2 2 0 002 2h5a2 2 0 002-2V7H7v10zm6-11V5h-3v1H9V5a1 1 0 011-1h3a1 1 0 011 1v1h-1z",__ns:1}),__ns:1})})]})};document.body.append((()=>{const e=s(),t=s(),n=()=>{const n=e.current;""!==n.value&&(t.current.prepend(a({text:n.value})),n.value="")};return r("div",{class:"_r3nQD",children:[r("fieldset",{class:"_UfnpS",children:r("div",{class:"_VptNa",children:[r("input",{ref:e,type:"text",class:"_emwF7",onkeyup:e=>{"Enter"===e.key&&n()},autofocus:"",maxLength:255,placeholder:"typing something"}),r("button",{type:"button",class:"_FGwlY",onclick:n,children:"Add Item"})]})}),r("ul",{ref:t,class:"_07RFT",children:a({text:"Hello and welcome"})})]})})());