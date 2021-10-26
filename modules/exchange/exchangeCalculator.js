/*Module to currency exchange calculator*/

//Import Class Currency
import {
    Currency
} from './currencyClass.js';


/* ----- Currency objects ----- */
//EURO: Euro:1, Złoty: 4.58, Dollar: 1.16, Pfund:0.85
export let Euro = new Currency(1, 4.58, 1.16, 0.85);

//ZŁOTY: Euro:0.22, Złoty: 1, Dollar: 0.25, Pfund:0.19
export let Zloty = new Currency(0.22, 1, 0.25, 0.19);

//DOLLAR: Euro:0.86, Złoty: 3.94, Dollar: 1, Pfund:0.73
export let Dollar = new Currency(0.86, 3.94, 1, 0.73);

//PFUND: Euro:1.18, Złoty: 5.39, Dollar: 1.37, Pfund:1
export let Pfund = new Currency(1, 5.39, 1.37, 1);


/* ----- Values ----- */

//input value and output value
export const valueInput = document.querySelector('.howMuchFrom');
export const valueOutput = document.querySelector('.howMuchTo');
//actual course
export let actualCourse;
//firtst currency and second currency
export const currencyFrom = document.querySelector('#currencyFrom');
export const currencyTo = document.querySelector('#currencyTo');


/* ----- Functions ----- */

//Function to update exchange resultat
export function exchange() {

    valueOutput.value = parseInt(valueInput.value) * actualCourse;

    if (valueInput.value === "") {
        valueOutput.value = "0";
    }
}

//Function to give exchange result
export function giveExchangeResult() {
    if (currencyFrom.value === "euro") {
        if (currencyTo.value === "euro") {
            actualCourse = Euro.courseToEuro;
        } else if (currencyTo.value === "zloty") {
            actualCourse = Euro.courseToZloty;
        } else if (currencyTo.value === "dollar") {
            actualCourse = Euro.courseToDollar;
        } else if (currencyTo.value === "pfund") {
            actualCourse = Euro.courseToPfund;
        }
    } else if (currencyFrom.value === "zloty") {
        if (currencyTo.value === "euro") {
            actualCourse = Zloty.courseToEuro;
        } else if (currencyTo.value === "zloty") {
            actualCourse = Zloty.courseToZloty;
        } else if (currencyTo.value === "dollar") {
            actualCourse = Zloty.courseToDollar;
        } else if (currencyTo.value === "pfund") {
            actualCourse = Zloty.courseToPfund;
        }

    } else if (currencyFrom.value === "dollar") {
        if (currencyTo.value === "euro") {
            actualCourse = Dollar.courseToEuro;
        } else if (currencyTo.value === "zloty") {
            actualCourse = Dollar.courseToZloty;
        } else if (currencyTo.value === "dollar") {
            actualCourse = Dollar.courseToDollar;
        } else if (currencyTo.value === "pfund") {
            actualCourse = Dollar.courseToPfund;
        }
    } else if (currencyFrom.value === "pfund") {
        if (currencyTo.value === "euro") {
            actualCourse = Pfund.courseToEuro;
        } else if (currencyTo.value === "zloty") {
            actualCourse = Pfund.courseToZloty;
        } else if (currencyTo.value === "dollar") {
            actualCourse = Pfund.courseToDollar;
        } else if (currencyTo.value === "pfund") {
            actualCourse = Pfund.courseToPfund;
        }
    }

    exchange();
}