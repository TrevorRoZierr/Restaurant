var lunch = document.querySelector(".time #lunch");
var wine = document.querySelector(".time #winny");
var dinner = document.querySelector(".time #active");
var offer = document.querySelector(".offer");
var date = document.querySelector(".headDetails");
var first = document.querySelector(".firMenu");
var second = document.querySelector(".secMenu");
var third = document.querySelector(".thirdMenu");
var firstPara = document.querySelector(".menu #firsPara");
var secondPara = document.querySelector(".menu #secondPara");
var thirdPara = document.querySelector(".menu #thirdPara");
var desert = document.querySelector(".menu .gapmenu");
var desertPara = document.querySelector(".menu #desertPara");
const reservationBtn = document.getElementById("reserve");
const reloadPage = document.querySelector(".reloadPage");
const reservationDetails = document.querySelector(".reservation");
const main = document.querySelector(".main");
const upBtn = document.querySelector(".btnUP");
const goback = document.querySelector(".gobackBtn");
const eve = document.querySelector(".eve");
const events = document.querySelector(".events");
const gobackButton = document.querySelector(".gobackButton");
const menusone = document.querySelector(".menusone");
const aboutone = document.querySelector(".aboutone");
const peopleone = document.querySelector(".peopleone");


function forEvents() {
    main.remove();
    upBtn.remove();
    reloadPage.style.fontSize = "0.8rem";
    reloadPage.style.fontWeight = "500";
    reloadPage.style.textDecoration = "underline";
    events.style.display="flex";
    eve.style.textDecoration="none";
    eve.style.fontSize="1rem";
    reservationDetails.style.display="none";
    menusone.remove();
    aboutone.remove();
    peopleone.remove();
}

function forReservation() {
    main.remove();
    upBtn.remove();
    reloadPage.style.fontSize = "0.8rem";
    reloadPage.style.fontWeight = "500";
    reloadPage.style.textDecoration = "underline";
    eve.style.fontSize = "0.8rem";
    eve.style.fontWeight = "500";
    eve.style.textDecoration = "underline";
    reservationDetails.style.display="flex";
    events.style.display="none";
    menusone.remove();
    aboutone.remove();
    peopleone.remove();
}


function lunchRemoveMenu(){
    offer.remove();
    date.remove();
    first.remove();
    firstPara.remove();
    second.innerHTML="Lunch's Menu";
    third.remove();
}

function wineRemoveMenu(){
    offer.remove();
    date.remove();
    third.remove();
    desert.remove();
    desertPara.remove();
}

function wineChangeMenu() {
    first.innerHTML="Sparkling";
    firstPara.innerHTML="<p>DIVELLA 'BLANC DE BLANCS'<br>$96<br><br>BURGERHOF MESSNER 'INSEKT'<br>$112<br><br>LA VISCIOLA 'CUPELLA'<br>$126</p>";
    firstPara.style.fontSize="1em";
    second.innerHTML="White";
    secondPara.innerHTML="<p>DIVELLA 'BLANC DE BLANCS'<br>$96<br><br>BURGERHOF MESSNER 'INSEKT'<br>$112<br><br></p>";
    secondPara.style.fontSize="1em";
    
}

function dinnerColor() {
    dinner.style.color="#ececec";
    dinner.style.backgroundColor="#1a1a1a";
}
function lunchColor() {
    lunch.style.color="#ececec";
    lunch.style.backgroundColor="#1a1a1a";
}

function wineColor() {
    wine.style.color="#ececec";
    wine.style.backgroundColor="#1a1a1a";
}

function dinnerColorRemoval() {
    dinner.style.color="#1a1a1a";
    dinner.style.backgroundColor="#ececec";
}

function lunchColorRemoval() {
    lunch.style.color="#1a1a1a";
    lunch.style.backgroundColor="#ececec";
}

function wineColorRemoval() {
    wine.style.color="#1a1a1a";
    wine.style.backgroundColor="#ececec";
}

function dinnerBtn() {
    dinnerColor();
    lunchColorRemoval();
    wineColorRemoval();
    location.reload();
}

function lunchBtn() {
    lunchColor();
    dinnerColorRemoval();
    wineColorRemoval();
    lunchRemoveMenu();
}

function wineBtn() {
    wineColor();
    lunchColorRemoval();
    dinnerColorRemoval();
    wineRemoveMenu();
    wineChangeMenu();
}

function home() {
    location.reload();
}

dinner.addEventListener("click",dinnerBtn);
lunch.addEventListener("click",lunchBtn);
wine.addEventListener("click",wineBtn);
reservationBtn.addEventListener("click",forReservation);
eve.addEventListener("click",forEvents);
reloadPage.addEventListener("click",home);
goback.addEventListener("click",function () {
    location.reload();
});
gobackButton.addEventListener("click",function () {
    location.reload();
});


