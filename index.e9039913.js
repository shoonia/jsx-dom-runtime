var e,t,n,r,l,a,s,c;const i="http://www.w3.org/2000/svg",h=new Set(["value"]),o=new Set(["_","children","ref"]),u=new Map([["style",(e,t,n)=>{if("string"==typeof t)e.setAttribute(n,t);else for(n in t)n.startsWith("--")?e.style.setProperty(n,t[n]):e.style[n]=t[n]}]]),d=(e,t)=>{Array.isArray(e)?e.some(e=>d(e,t)):!1!==e&&null!=e&&t.append(e)},p=(e,t)=>{let n,r,l=t._?document.createElementNS(t._,e):document.createElement(e);for(n in t)!o.has(n)&&(r=t[n],u.has(n)?u.get(n)(l,r,n):h.has(n)||n.startsWith("on")?l[n]=r:null!=r&&("boolean"!=typeof r||"-"===n[4])?l.setAttribute(n,r):r&&l.setAttribute(n,""));return d(t.children,"template"===e?l.content:l),(n=t.ref)&&("function"==typeof n?n(l):n.current=l),l},v=e=>({current:e});e="_r3nQD",t="_UfnpS",n="_VptNa",r="_emwF7",l="_07RFT",a="_FGwlY",s="_EvwSY",c="_uTamu";const m=({text:e})=>{let t=v();return p("li",{ref:t,class:s,children:[e,p("button",{type:"button",class:c,onclick:()=>{t.current.remove()},"aria-label":"remove",children:p("svg",{width:"24",height:"24",fill:"#8e21b1","aria-hidden":"true",children:p("path",{d:"M17 17a3 3 0 01-3 3H9a3 3 0 01-3-3V7H5V6h13v1h-1v10zM9 9h1v7H9V9zm2 0h1v7h-1V9zm2 0h1v7h-1V9zm-6 8a2 2 0 002 2h5a2 2 0 002-2V7H7v10zm6-11V5h-3v1H9V5a1 1 0 011-1h3a1 1 0 011 1v1h-1z",_:i}),_:i})})]})};document.body.append((()=>{let s=v(),c=v(),i=()=>{let e=s.current;""!==e.value&&(c.current.prepend(m({text:e.value})),e.value="")};return p("div",{class:e,children:[p("fieldset",{class:t,children:p("div",{class:n,children:[p("input",{ref:s,type:"text",class:r,onkeyup:e=>{"Enter"===e.key&&i()},autofocus:"",maxlength:255,placeholder:"typing something"}),p("button",{type:"button",class:a,onclick:i,children:"Add Item"})]})}),p("ul",{ref:c,class:l,children:m({text:"Hello and welcome"})})]})})({}));