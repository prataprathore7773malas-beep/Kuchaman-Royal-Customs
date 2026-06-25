/*=========================================
        KUCHAMAN ROYAL CUSTOM
            script.js
            PART - 1
=========================================*/



/*=========================================
            LOADER
=========================================*/

window.addEventListener("load",function(){

const loader=document.querySelector(".loader");

setTimeout(()=>{

loader.style.opacity="0";

loader.style.visibility="hidden";

},1800);

});





/*=========================================
            STICKY NAVBAR
=========================================*/

const header=document.getElementById("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("sticky");

}

else{

header.classList.remove("sticky");

}

});





/*=========================================
            MOBILE MENU
=========================================*/

const menuBtn=document.getElementById("menuBtn");

const navbar=document.getElementById("navbar");

menuBtn.onclick=()=>{

navbar.classList.toggle("showMenu");

menuBtn.classList.toggle("active");

};





/*=========================================
        CLOSE MENU AFTER CLICK
=========================================*/

document.querySelectorAll("#navbar a").forEach(link=>{

link.onclick=()=>{

navbar.classList.remove("showMenu");

menuBtn.classList.remove("active");

};

});





/*=========================================
            SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});





/*=========================================
        ACTIVE NAVIGATION
=========================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("#navbar ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-180;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});





/*=========================================
            SCROLL REVEAL
=========================================*/

const revealElements=document.querySelectorAll(

".about,.story,.services,.why,.process,.featured-builds,.gallery,.reviews,.counter,.faq,.contact"

);

function revealSections(){

const trigger=window.innerHeight-120;

revealElements.forEach(section=>{

const top=section.getBoundingClientRect().top;

if(top<trigger){

section.classList.add("show");

}

});

}

window.addEventListener("scroll",revealSections);

revealSections();





/*=========================================
        HERO PARALLAX EFFECT
=========================================*/

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

let value=window.scrollY;

hero.style.backgroundPositionY=value*0.35+"px";

});





/*=========================================
        HERO TITLE ANIMATION
=========================================*/

const heroTitle=document.querySelector(".hero-content h1");

setInterval(()=>{

heroTitle.animate([

{

transform:"scale(1)",

letterSpacing:"8px"

},

{

transform:"scale(1.03)",

letterSpacing:"11px"

},

{

transform:"scale(1)",

letterSpacing:"8px"

}

],{

duration:2200

});

},2400);





/*=========================================
        BUTTON HOVER EFFECT
=========================================*/

document.querySelectorAll(".btn,.btn-outline")

.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-6px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px)";

});

});





/*=========================================
        TRUST CARD EFFECT
=========================================*/

document.querySelectorAll(".trust-card")

.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});





/*=========================================
        CONSOLE MESSAGE
=========================================*/

console.log(

"KUCHAMAN ROYAL CUSTOM LOADED SUCCESSFULLY"

);/*=========================================
      KUCHAMAN ROYAL CUSTOM
          script.js
          PART - 2
=========================================*/


/*=========================================
        COUNTER ANIMATION
=========================================*/

const counters=document.querySelectorAll(".count");

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.getAttribute("data-target");

let count=0;

const speed=target/120;

function updateCounter(){

count+=speed;

if(count<target){

counter.innerHTML=Math.ceil(count);

requestAnimationFrame(updateCounter);

}

else{

if(target==100){

counter.innerHTML=target+"%";

}

else{

counter.innerHTML=target+"+";

}

}

}

updateCounter();

counterObserver.unobserve(counter);

}

});

},

{

threshold:.5

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});





/*=========================================
        FAQ ACCORDION
=========================================*/

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question=item.querySelector(".faq-question");

const answer=item.querySelector(".faq-answer");

const icon=question.querySelector("span");

question.addEventListener("click",()=>{

faqItems.forEach(other=>{

if(other!==item){

other.querySelector(".faq-answer").style.display="none";

other.querySelector(".faq-question span").innerHTML="+";

}

});

if(answer.style.display==="block"){

answer.style.display="none";

icon.innerHTML="+";

}

else{

answer.style.display="block";

icon.innerHTML="−";

}

});

});





/*=========================================
        GALLERY LIGHTBOX
=========================================*/

const galleryImages=document.querySelectorAll(".gallery-container img");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

const lightbox=document.createElement("div");

lightbox.className="lightbox";

lightbox.innerHTML=`

<img src="${img.src}" alt="">

`;

document.body.appendChild(lightbox);

lightbox.onclick=()=>{

lightbox.remove();

};

});

});





/*=========================================
        SCROLL TO TOP
=========================================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>600){

topBtn.style.display="flex";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};





/*=========================================
        CONTACT FORM
=========================================*/

const form=document.getElementById("contactForm");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank You! We will contact you soon.");

form.reset();

});

}





/*=========================================
        FLOATING BUTTON EFFECT
=========================================*/

const whatsapp=document.querySelector(".whatsapp");

if(whatsapp){

setInterval(()=>{

whatsapp.animate([

{

transform:"translateY(0)"

},

{

transform:"translateY(-10px)"

},

{

transform:"translateY(0)"

}

],

{

duration:1400

});

},1700);

}





/*=========================================
        CALL BUTTON EFFECT
=========================================*/

const callBtn=document.querySelector(".call-btn");

if(callBtn){

setInterval(()=>{

callBtn.animate([

{

boxShadow:"0 0 0 rgba(255,45,45,.7)"

},

{

boxShadow:"0 0 25px rgba(255,45,45,.9)"

},

{

boxShadow:"0 0 0 rgba(255,45,45,.7)"

}

],

{

duration:1800

});

},1900);

}





/*=========================================
        IMAGE FADE-IN
=========================================*/

const images=document.querySelectorAll("img");

const imageObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="scale(1)";

}

});

});

images.forEach(img=>{

img.style.opacity="0";

img.style.transform="scale(.95)";

img.style.transition=".8s";

imageObserver.observe(img);

});





/*=========================================
        LIGHTBOX CSS
=========================================*/

const style=document.createElement("style");

style.innerHTML=`

.lightbox{

position:fixed;

left:0;

top:0;

width:100%;

height:100%;

background:rgba(0,0,0,.95);

display:flex;

justify-content:center;

align-items:center;

z-index:999999;

cursor:pointer;

}

.lightbox img{

max-width:90%;

max-height:90%;

border-radius:15px;

box-shadow:0 20px 50px rgba(255,45,45,.35);

animation:zoom .4s ease;

}

@keyframes zoom{

from{

transform:scale(.8);

opacity:0;

}

to{

transform:scale(1);

opacity:1;

}

}

`;

document.head.appendChild(style);





/*=========================================
        RED GLOW EFFECT
=========================================*/

setInterval(()=>{

document.querySelectorAll(".btn,.btn-outline")

.forEach(btn=>{

btn.animate([

{

boxShadow:"0 0 10px rgba(255,45,45,.4)"

},

{

boxShadow:"0 0 30px rgba(255,45,45,.9)"

},

{

boxShadow:"0 0 10px rgba(255,45,45,.4)"

}

],

{

duration:2200

});

});

},2400);





/*=========================================
        FINISHED
=========================================*/

console.log("🔥 KUCHAMAN ROYAL CUSTOM WEBSITE READY");
