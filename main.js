window.addEventListener("DOMContentLoaded",function () {
    let gg = document.getElementById("gg");
let hp = 0;
let ph = 0;
let ENG = document.getElementById("ENG");
let brus = document.getElementById("button");
let lrus = document.getElementById("blerinacapuchino");
if (localStorage.getItem("ENG"))
{
    hp = parseInt( localStorage.getItem("ENG"))
    ENG.innerHTML = hp
} 
if (localStorage.getItem("MLRS"))
{
    ph = parseInt( localStorage.getItem("MLRS"))
    lrus.innerHTML = ph
} 
    gg.addEventListener("click",function (){
    hp += 1+ph
    localStorage.setItem("ENG",hp)
        ENG.innerHTML = hp+ph

    })
    brus.addEventListener("click",function (){
    ph += 1
    hp-=1000
    localStorage.setItem("MLRS",ph)
    localStorage.setItem("ENG",hp)
        lrus.innerHTML = ph
        ENG.innerHTML = hp

    })
})

