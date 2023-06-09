(()=>{"use strict";const e=function(){const e=document.getElementById("content"),t=document.createElement("h3");t.textContent="Embark on a Taste Journey to Italy!",e.appendChild(t);const n=document.createElement("p");n.textContent="Savor Italy's culinary artistry at Ristorante Santini. Taste the passion in every bite, as our master chefs create edible masterpieces. From handmade pasta to wood-fired pizzas, experience the heart and soul of Italian cuisine. Buon appetito!",e.appendChild(n)};function t(){const e=document.getElementById("content");for(;e.firstChild;)e.removeChild(e.firstChild)}(function(){const e=document.querySelector("body");document.body.style.backgroundImage="url('../pasta2.jpg')";const t=document.createElement("div");t.id="headerDiv";const n=document.createElement("h1");n.textContent="Ristorante Santini",t.appendChild(n);const d=document.createElement("div");d.id="tabs",t.appendChild(d);const o=document.createElement("button");o.id="homeTab",o.textContent="Home",d.appendChild(o);const c=document.createElement("button");c.id="menuTab",c.textContent="Menu",d.appendChild(c);const a=document.createElement("button");a.id="contactTab",a.textContent="Contact",d.appendChild(a),e.insertBefore(t,e.childNodes[0])})(),e(),document.getElementById("homeTab").addEventListener("click",(()=>{t(),e()})),document.getElementById("menuTab").addEventListener("click",(()=>{t(),function(){const e=document.getElementById("content"),t=document.createElement("h1");t.textContent="Our Menu",e.appendChild(t);const n=document.createElement("div");e.appendChild(n);const d=document.createElement("h3");d.textContent="Beverages",n.appendChild(d);const o=document.createElement("ul");n.appendChild(o);const c=document.createElement("li"),a=document.createElement("li"),i=document.createElement("li");o.appendChild(c),c.textContent="Soda",o.appendChild(a),a.textContent="Lemonade",o.appendChild(i),i.textContent="Wine";const l=document.createElement("div");e.appendChild(l);const m=document.createElement("h3");m.textContent="Sides",l.appendChild(m);const p=document.createElement("ul");l.appendChild(p);const r=document.createElement("li"),s=document.createElement("li"),u=document.createElement("li");p.appendChild(r),r.textContent="Breadsticks",p.appendChild(s),s.textContent="Mozerella Sticks",p.appendChild(u),u.textContent="Salad";const C=document.createElement("div");e.appendChild(C);const h=document.createElement("h3");h.textContent="Main Dishes",C.appendChild(h);const E=document.createElement("ul");C.appendChild(E);const x=document.createElement("li"),y=document.createElement("li"),b=document.createElement("li");E.appendChild(x),x.textContent="Lasagna",E.appendChild(y),y.textContent="Spaghetti & Meatballs",E.appendChild(b),b.textContent="Margherita Pizza"}()})),document.getElementById("contactTab").addEventListener("click",(()=>{t(),function(){const e=document.getElementById("content"),t=document.createElement("h1");t.textContent="Contact Us",e.appendChild(t);const n=document.createElement("h3");n.textContent="Marco Santini",e.appendChild(n);const d=document.createElement("p");d.textContent="Manager",e.appendChild(d);const o=document.createElement("p");o.textContent="(480) 123-4567",e.appendChild(o);const c=document.createElement("p");c.textContent="santini.M@yahoo.com",e.appendChild(c)}()}))})();