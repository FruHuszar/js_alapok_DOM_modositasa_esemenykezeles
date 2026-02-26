window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
    esemenyKezeles1();
    esemenyKezeles2();
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
        szoveg += `<li> ${szam} </li>`;
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
    let listaElem = document.getElementsByClassName("lista")[0];
    let kattElem = document.querySelector(".kattintasutan");
    listaElem.addEventListener("click", belekerul)

    function belekerul(){
        kattElem.innerHTML = listaElem.innerHTML;
    }
}

//ebben a sectionban lévő "feladat" azonosítóval ellátott elembe elhelyez egy gombot. A gombra kattintva pedig ugyanabba a divbe a gomb mellé még hozzáad egy újab divet, amiben egy kép van.
function esemenyKezeles2() {
    let feladatElem = document.querySelector(".feladat");
    feladatElem.innerHTML="<button>KATT</button>"

    let gombElem = document.querySelector(".feladat button");
    gombElem.addEventListener("click", kepBerak);

    function kepBerak(){
        feladatElem.innerHTML+="<div><img src='https://picsum.photos/seed/picsum/200/300' alt='kepalairas'></div>"

        esemenyKezeles3();
    }
}

function esemenyKezeles3() {
    let kepElem = document.querySelector(".feladat img");
    kepElem.addEventListener("mouseover", meretMegvaltozik);

    function meretMegvaltozik(){
        kepElem.classList.add("scale");
    }

    kepElem.addEventListener("mouseout", meretMegvaltozik2);

    function meretMegvaltozik2(){
        kepElem.classList.remove("scale");
    }    

}


//Az event.target utasítás adja vissza annak a eseményt kiváltó elemet.
function esemenyKezeles4() {
    let eredmenyElem = document.querySelector(".megjelenito")
    let szamElemek = document.querySelectorAll(".tarolo div")
    for (let index = 0; index < szamElemek.length; index++) {
        szamElemek[index].addEventListener("click", kiirasok)
    }

    function kiirasok(){
        let szoveg = event.target.innerHTML;
        eredmenyElem.innerHTML = `<p> ${szoveg} </p>`
    }
}

