import * as chartsData from "./chartsData.js";
import * as chartsView from "./chartsView.js"

//Buttons
export const euroButton = document.querySelector("#euroButton");
export const zlotyButton = document.querySelector("#zlotyButton");
export const dollarButton = document.querySelector("#dollarButton");
export const pfundButton = document.querySelector("#pfundButton");
export const buttons = [euroButton, zlotyButton, dollarButton, pfundButton];


//Functions
export function removeClassFromButton() {
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains('checkedButton')) {
            buttons[i].classList.remove('checkedButton');
        }
    }
}

export function addClassToButton(chosenCurrency) {
    if (chosenCurrency === "euro") {
        euroButton.classList.add('checkedButton');
    } else if (chosenCurrency === "zloty") {
        zlotyButton.classList.add('checkedButton');
    } else if (chosenCurrency === "dollar") {
        dollarButton.classList.add('checkedButton');
    } else if (chosenCurrency === "pfund") {
        pfundButton.classList.add('checkedButton');
    }
}

export function clickedButton(chosenCurrency) {
    removeClassFromButton();
    addClassToButton(chosenCurrency);
}

//Events
/*
euroButton.addEventListener('click', function() {
    console.log("Chosen Euro!");
    clickedButton("euro");
    chartsView.changeToEuro();
});
zlotyButton.addEventListener('click', function() {
    console.log("Chosen Zloty!");
    clickedButton("zloty");
    chartsView.changeToZloty();

});

dollarButton.addEventListener('click', function() {
    console.log("Chosen Dollar!");
    clickedButton("dollar");
    chartsView.changeToDollar();
});
pfundButton.addEventListener('click', function() {
    console.log("Chosen Pfund!");
    clickedButton("pfund");
    chartsView.changeToPfund();
});
*/