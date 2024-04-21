"use strict";

const navbar = document.querySelector(".nav");
const navList = document.querySelector(".nav-list");

// navList.addEventListener('click', (e)=>{
//    e.preventDefault();

//    const target =e.targer;
// if(target.)

// })
const container = document.querySelector(".container");
const loader = document.querySelector(".loader");
const html = document.querySelector("html");

function hideLoader() {
  loader.style.display = "none";
  container.style.display = "block";
}
window.addEventListener("load", hideLoader);
