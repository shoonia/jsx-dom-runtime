var e=function e(t,n){Array.isArray(n)?n.forEach((function(n){e(t,n)})):null!=n&&!1!==n&&t.appendChild(n.nodeType>0?n:document.createTextNode(n))},t=function(t){var n=document.createDocumentFragment();return e(n,t.children),n},n=new Set(["innerHTML","textContent","value","htmlFor"]),r=function(t,r){if("function"==typeof t)return t(r);var l,a="string"==typeof t?document.createElement(t):t;for(var o in r)if("ref"!==o&&"children"!==o)if(l=r[o],"className"===o)a.setAttribute("class",Array.isArray(l)?l.filter(Boolean).join(" "):l);else if(n.has(o))a[o]=l;else if("style"===o)if("string"==typeof l)a.style.cssText=l;else for(o in l)"-"===o[0]?a.style.setProperty(o,l[o]):a.style[o]=l[o];else"o"===o[0]&&"n"===o[1]?(o=o.toLowerCase())in a&&(a[o]=l):null!=l?"boolean"!=typeof l||/^(ari|dat)a-/.test(o)?a.setAttribute(o,l):l?a.setAttribute(o,""):a.removeAttribute(o):a.removeAttribute(o);return e("TEMPLATE"===a.tagName?a.content:a,r.children),null!=(l=r.ref)&&("function"==typeof l?l(a):l.current=a),a};r(document.documentElement,{lang:"en"}),r(document.head,{children:r("style",{children:"\n  .wrapper {\n    font-family: sans-serif;\n    padding: 25px;\n  }\n"})}),r(document.body,{className:"wrapper",children:r((()=>{const e={current:null},n={current:null},l=({target:e})=>{e.closest("[data-item]").remove()},a=()=>{const t=e.current;""!==t.value&&(r(n.current,{children:r("li",{"data-item":!0,className:"_VrCvP",children:[t.value,r("button",{type:"button",className:"_1Pz2d",onClick:l,children:"Remove"})]})}),t.value="",t.focus())};return r(t,{children:[r("fieldset",{style:"border: 0; padding: 0;",children:r("div",{className:"_3QowC",children:[r("input",{ref:e,type:"text",className:"_3KR0D",onKeyPress:e=>{"Enter"===e.key&&a()}}),r("button",{type:"button",className:"_1Pz2d",onClick:a,children:"Add Item"})]})}),r("ul",{ref:n,className:"_uhdz0"})]})}),{})});