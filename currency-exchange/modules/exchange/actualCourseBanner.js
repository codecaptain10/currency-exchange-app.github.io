/*Module to update actual course in banner */

//Elements from Banner
export const currencyFromBanner = document.querySelector('#currencyFromBanner');
export const currencyCourseBanner = document.querySelector('#currencyCourseBanner');
export const currencyToBanner = document.querySelector('#currencyToBanner');


/*----- Functions ------ */

//Function to update banner with actual course
export function updateBannerWithActualCourse(currencyFrom, actualCourse, currencyTo) {
    //Update first currency
    if (currencyFrom === "euro") {
        currencyFromBanner.textContent = " Eüro "
    } else if (currencyFrom === "zloty") {
        currencyFromBanner.textContent = " Złoty "
    } else if (currencyFrom === "dollar") {
        currencyFromBanner.textContent = " Dollar "
    } else if (currencyFrom === "pfund") {
        currencyFromBanner.textContent = " Pfund "
    }

    //Update course
    currencyCourseBanner.textContent = " " + actualCourse + " ";

    //Update second currency
    if (currencyTo === "euro") {
        currencyToBanner.textContent = " Eüro "
    } else if (currencyTo === "zloty") {
        currencyToBanner.textContent = " Złoty "
    } else if (currencyTo === "dollar") {
        currencyToBanner.textContent = " Dollar "
    } else if (currencyTo === "pfund") {
        currencyToBanner.textContent = " Pfund "
    }
}