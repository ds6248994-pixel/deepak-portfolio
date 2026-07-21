document.getElementById("btn").addEventListener("click", function () {

    window.open("https://wa.me/918750476209","_blank");

});

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeBtn.innerHTML="☀️ Light Mode";
    }else{
        themeBtn.innerHTML="🌙 Dark Mode";
    }

});

window.addEventListener("load", function(){

    const excel = document.querySelector(".excel");
    const word = document.querySelector(".word");
    const sheet = document.querySelector(".sheet");

    console.log(excel, word, sheet);

    if(excel) excel.style.width = "95%";
    if(word) word.style.width = "90%";
    if(sheet) sheet.style.width = "85%";

});
const topBtn = document.getElementById("topBtn");

window.addEventListener("DOMContentLoaded", function () {

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});