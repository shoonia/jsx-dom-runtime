let e=(t,n)=>{Array.isArray(n)?n.some((n=>e(t,n))):null!=n&&!1!==n&&t.append(n)},t=new Map,n=new Set(["ref","children","__ns"]),r=new Set(["innerHTML","textContent","value"]),s=(s,l)=>{if("function"==typeof s)return s(l);let a,i;for(a in s="string"==typeof s?l.__ns?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s):s,l)if(!n.has(a))if(i=l[a],t.has(a))t.get(a)(s,i);else if("style"===a)if("string"==typeof i)s.style.cssText=i;else for(a in i)a.startsWith("--")?s.style.setProperty(a,i[a]):s.style[a]=i[a];else r.has(a)||a.startsWith("on")&&a in s?s[a]=i:null==i||"boolean"==typeof i&&!/^(ari|dat)a-/.test(a)?i?s.setAttribute(a,""):s.removeAttribute(a):s.setAttribute(a,i);return e("template"===s.localName?s.content:s,l.children),i=l.ref,i&&("function"==typeof i?i(s):i.current=s),s},l=e=>Object.seal({current:e});const a=({text:e})=>{const t=l();return s("li",{ref:t,class:"_EvwSY",children:[e,s("button",{type:"button",class:"_uTamu",onclick:()=>{t.current.remove()},"aria-label":"remove",children:s("svg",{width:"24",height:"24",fill:"#8e21b1","aria-hidden":"true",__ns:1,children:s("path",{d:"M17 17a3 3 0 01-3 3H9a3 3 0 01-3-3V7H5V6h13v1h-1v10zM9 9h1v7H9V9zm2 0h1v7h-1V9zm2 0h1v7h-1V9zm-6 8a2 2 0 002 2h5a2 2 0 002-2V7H7v10zm6-11V5h-3v1H9V5a1 1 0 011-1h3a1 1 0 011 1v1h-1z",__ns:1})})})]})};document.body.append(s((()=>{const e=l(),t=l(),n=()=>{const n=e.current;""!==n.value&&(t.current.insertAdjacentElement("afterbegin",s(a,{text:n.value})),n.value="")};return s("div",{class:"_r3nQD",children:[s("fieldset",{class:"_UfnpS",children:s("div",{class:"_VptNa",children:[s("input",{ref:e,type:"text",class:"_emwF7",onkeyup:e=>{"Enter"===e.key&&n()}}),s("button",{type:"button",class:"_FGwlY",onclick:n,children:"Add Item"})]})}),s("ul",{ref:t,class:"_07RFT"})]})}),{}));