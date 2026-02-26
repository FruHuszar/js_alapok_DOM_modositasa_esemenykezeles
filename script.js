window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
    esemenyKezeles1();
    esemenyKezeles2();
    esemenyKezeles3();
    esemenyKezeles4();
});

function elemekElerese1() {
   const ELEM = document.querySelectorAll("section h2")[0];
   let kiirni = ELEM.innerHTML;
   console.log(kiirni);
}

function elemekElerese2() {
   let idElem = document.getElementById("ide");
   idElem.innerHTML="<p>Jó reggelt!</p>";
}

function elemekElerese3() {
   let classElem = document.getElementsByClassName("ide")[0];
   classElem.innerHTML="<p>Jó reggelt!</p>";
}

function elemekElerese4() {
   let listaElem = document.getElementsByClassName("lista")[0];
   let szoveg = "<ol>";

    for (let index = 0; index < 5; index++) {
        let szam = Math.floor(Math.random()*30)
        szoveg += `<li> {$szam} </li>`;
    }

   szoveg += "</ol>";
   listaElem.innerHTML=szoveg;
   console.log(szoveg)
}

function elemekFormazasa1() {
    let listaElem = document.getElementsByClassName("lista")[0];
    listaElem.classList.add("formazott")
}

function esemenyKezeles1() {
    //...
}

function esemenyKezeles2() {
    //...
}

function esemenyKezeles3() {
    //...
}

function esemenyKezeles4() {
    //...
}

