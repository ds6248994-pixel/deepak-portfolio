document.getElementById("btn").addEventListener("click", function () {

window.open("https://wa.me/918750476209","_blank");

}

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeBtn.innerHTML="☀️ Light Mode";
    }else{
        themeBtn.innerHTML="🌙 Dark Mode";
    }

});