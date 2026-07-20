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

    document.querySelector(".excel").style.width="95%";
    document.querySelector(".word").style.width="90%";
    document.querySelector(".sheet").style.width="85%";

});