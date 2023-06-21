(()=>{"use strict";const e=function(){const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("inner-content"),e.appendChild(t);const n=document.createElement("h3");n.textContent="Embark on a Taste Journey to Italy!",t.appendChild(n);const a=document.createElement("img");a.src="../images/chef.jpg",a.width=300,a.style.borderRadius="80px",t.appendChild(a);const d=document.createElement("p");d.textContent="Savor Italy's culinary artistry at Ristorante Santini. Taste the passion in every bite, as our master chefs create edible masterpieces. From handmade pasta to wood-fired pizzas, experience the heart and soul of Italian cuisine. Buon appetito!",t.appendChild(d)};function t(e,t){const n=document.createElement("div");n.classList.add("group-div");const a=document.createElement("h3");a.textContent=e,a.className="item-group-header",n.appendChild(a);const d=document.createElement("div");return d.classList.add("items-div"),t.forEach((e=>{const t=function(e,t,n){const a=document.createElement("li");a.classList.add("card");const d=document.createElement("div");d.classList.add("img-container"),a.appendChild(d);const i=document.createElement("img");i.src=t,i.classList.add("menu-image"),d.appendChild(i);const c=document.createElement("h2");c.textContent=e,c.classList.add("card-title"),a.appendChild(c);const o=document.createElement("p");return o.textContent=n,o.classList.add("card-description"),a.appendChild(o),a}(e.name,e.imageUrl,e.description);d.appendChild(t)})),n.appendChild(d),n}const n=function(){const e=document.getElementById("content"),n=document.createElement("div");n.id="inner-content";const a=document.createElement("h1");a.textContent="Our Menu",n.appendChild(a);const d=t("Beverages",[{name:"Soda",imageUrl:"../images/soda2.jpg",description:"Cool and refreshing."},{name:"Lemonade",imageUrl:"../images/lemonade.jpg",description:"Sweet and tangy."},{name:"Wine",imageUrl:"../images/wine.jpg",description:"Elegant and sophisticated."}]);n.appendChild(d);const i=t("Sides",[{name:"Breadsticks",imageUrl:"../images/breadsticks.jpg",description:"Crunchy and delicious."},{name:"Mozzarella Sticks",imageUrl:"../images/mozarellasticks.jpg",description:"Cheesy and filling."},{name:"Salad",imageUrl:"../images/salad.jpg",description:"Light and healthy."}]);n.appendChild(i);const c=t("Main Dishes",[{name:"Lasagna",imageUrl:"../images/lasagna.jpg",description:"Rich and flavorful."},{name:"Spaghetti & Meatsauce",imageUrl:"../images/spaghetti.jpg",description:"Classic and hearty."},{name:"Margherita Pizza",imageUrl:"../images/pizza.jpg",description:"Simple and delicious."}]);n.appendChild(c),e.appendChild(n)},a=function(){const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("inner-content"),e.appendChild(t);const n=document.createElement("h1");n.textContent="Contact Us",t.appendChild(n);const a=document.createElement("h3");a.textContent="Marco Santini",t.appendChild(a);const d=document.createElement("p");d.textContent="Manager",t.appendChild(d);const i=document.createElement("p");i.textContent="(480) 123-4567",t.appendChild(i);const c=document.createElement("p");c.textContent="santini.M@yahoo.com",t.appendChild(c)};function d(e){const t=document.getElementById("content");t.classList.add("fade-out"),setTimeout((()=>{!function(){const e=document.getElementById("content");for(;e.firstChild;)e.removeChild(e.firstChild)}(),e(),t.classList.remove("fade-out")}),500)}(function(){const e=document.querySelector("body");document.body.style.backgroundImage="url('..pasta3.jpg')";const t=document.createElement("div");t.id="headerDiv";const n=document.createElement("h1");n.textContent="Ristorante Santini",t.appendChild(n);const a=document.createElement("div");a.id="tabs",t.appendChild(a);const d=document.createElement("button");d.id="homeTab",d.textContent="Home",a.appendChild(d);const i=document.createElement("button");i.id="menuTab",i.textContent="Menu",a.appendChild(i);const c=document.createElement("button");c.id="contactTab",c.textContent="Contact",a.appendChild(c),e.insertBefore(t,e.childNodes[0])})(),d(e),document.getElementById("homeTab").addEventListener("click",(()=>d(e))),document.getElementById("menuTab").addEventListener("click",(()=>d(n))),document.getElementById("contactTab").addEventListener("click",(()=>d(a)))})();