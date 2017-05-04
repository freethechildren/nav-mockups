var menuItems = document.querySelectorAll(".we-mobile-nav-item");
var hamburger = document.querySelector(".hamburger");
var mobileNavMenu = document.querySelector(".we-mobile-menu");
var mobileSubBackBtn = document.querySelectorAll(".we-mobile-subnav-back");
var mobileSubNav = document.querySelectorAll(".we-mobile-subnav");
var mobileLang = document.querySelectorAll(".lang");
var altMenus = document.querySelectorAll(".alt-menus");
var mobileAccordion= document.querySelector(".we-accordion-nav")

function removeAllActive(activeObj) {
  if (NodeList.prototype.isPrototypeOf(activeObj)) {
    activeObj.forEach(function(el){
      removeActive(el);
    });
  }else{
    removeActive(activeObj);
  }
}

function removeAllHidden(activeObj) {
  if (NodeList.prototype.isPrototypeOf(activeObj)) {
    activeObj.forEach(function(el){
      el.classList.remove("hidden");
    });
  }else{
    el.classList.remove("hidden");
  }
}

function removeActive(el){
  el.classList.remove("active");
}

hamburger.onclick = function() {
  hamburger.classList.toggle("active");
  mobileNavMenu.classList.toggle("active");
}

menuItems.forEach(function(el) {
  var subNav = el.getAttribute("data-sub");
  el.onclick = function() {
    removeAllActive(menuItems);
    el.classList.add("active");
    document.querySelector("#" + subNav).classList.add("active");
  }
});
mobileSubBackBtn.forEach(function(el){
  el.onclick = function() {
    removeAllActive(mobileSubNav);
  };
});
mobileLang.forEach(function(el) {
  el.onclick = function() {
    removeAllActive(mobileLang);
    el.classList.add("active");
    langMenuToggle();
  }
});

function langMenuToggle() {
  var myHam;
  removeAllActive(altMenus);
  if (document.querySelector(".lang-en.active")){
    removeAllHidden(altMenus);
    myHam = 0;
    mobileNavMenu = document.querySelector(".we-mobile-menu");
    document.querySelector(".we-accordion-nav").classList.add("hidden");
  }else if(document.querySelector(".lang-fr.active")){
    removeAllHidden(altMenus);
    myHam = 1;
    mobileNavMenu = document.querySelector(".we-accordion-nav");
    document.querySelector(".we-mobile-menu").classList.add("hidden");
  }
  if (mobileNavMenu.classList.contains("not:(active)") && hamburger.classList.contains("active")){
    mobileNavMenu.classList.add("active");
  }
}

// Accordion Stuff
var accordionMenu = document.querySelector(".we-accordion-nav");
var accordionH2El = accordionMenu.getElementsByTagName("h2");
var accordionSize = accordionH2El.length;

for (i = 0; i < accordionSize; i++) {
  var h2Node = accordionH2El[i];
  h2Node.setAttribute("class", "we-accordion-header");
  h2Node.nextElementSibling.setAttribute("class", "we-accordion we-accordion-closed");
  h2Node.onclick = function() {
    var h2 = this;
    if (h2.getAttribute("class") == "we-accordion-header") {
      closeAllTabs();
      h2.classList.add("we-accordion-header-active");
      h2.nextElementSibling.setAttribute("class", "we-accordion we-accordion-open");
    }else{
      closeAllTabs();
      h2.setAttribute("class", "we-accordion-header");
      h2.nextElementSibling.setAttribute("class", "we-accordion we-accordion-closed");
    }
  }
}

function closeAllTabs(){
  for (i = 0; i < accordionSize; i++) {
    var el = accordionH2El[i];
    el.setAttribute("class", "we-accordion-header");
    el.nextElementSibling.classList.add("we-accordion-closed");
  }
}
