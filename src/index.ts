// Imports
import { Cookie } from './modules/Cookie.js';

// Create a array/list of cookies named cookies
let cookieList = [];

// create an init() function
// init() will create two cookies called Cookie1 and Cookie2, and add them to the array of cookies
let first = true;
init();
function init() {
    //TODO: add code here
    // create the two cookies
    // add them to the array
    // add them as options in the select/dropdown (cookieSelector) element
    cookieList.push(new Cookie("Cookie1", "darkred", 1));
    cookieList.push(new Cookie("Cookie2", "darkblue", 2));

    // initialise the cookieColour-inp to the colour of the first cookie created
    let input: HTMLInputElement = document.querySelector<HTMLInputElement>('#cookieColour-inp');
    input.value = cookieList[0].colour;
    updateDisplay();
}

//TODO: this function needs to go through the list of cookies and draw them to cookiesDiv
// create the cookies as divs with the class name of cookie - see style.css
// number of chocolatechips needs to be shown on the cookie
function drawCookies() {
    
    let cookieDiv = document.getElementById("cookiesDiv");
    cookieDiv.innerHTML = "";
    let selector:HTMLSelectElement = document.querySelector<HTMLSelectElement>("#cookieSelector");
    let tempIndex = selector.value;
    selector.innerHTML = "";
    for(let i = 0; i < cookieList.length; i++) {
        let cookieToAdd = document.createElement('div');
        cookieToAdd.className = 'cookie';
        cookieToAdd.innerHTML = cookieList[i].chocolateChipAmount;
        cookieToAdd.style.backgroundColor = cookieList[i].colour;
        cookieToAdd.id = cookieList[i].name;
        cookieDiv.appendChild(cookieToAdd);
        let optionAdd = document.createElement('option');
        optionAdd.innerHTML = cookieList[i].name;
        selector.appendChild(optionAdd);
    }
    if(!first){
        selector.value = tempIndex;
    }
    first = false;
}

//TODO: this fuction needs to be triggered by button changeColour-btn
// upon pressing the button it should change the colour of the cookie selected in the dropdown to the colour typed in the input element (cookieColour-inp)
document.getElementById("changeColour-btn").addEventListener("click", changeColour);
function changeColour() {
    let selector:HTMLSelectElement = document.querySelector<HTMLSelectElement>("#cookieSelector");
    let selected = selector.options[selector.selectedIndex].innerHTML;
    for(let i = 0; i < cookieList.length; i++) {
        if(selected === cookieList[i].name) {
            cookieList[i].colour = document.querySelector<HTMLInputElement>('#cookieColour-inp').value;
        }
    }
    
    updateDisplay();
}

//TODO: this fuction needs to be triggered by button addChocolateChip-btn
// upon pressing the button it should add a chocolate chip to cookies selected from the dropdown
document.getElementById("addChocolateChip-btn").addEventListener("click", addChocolateChip);
function addChocolateChip() {
    let selector:HTMLSelectElement = document.querySelector<HTMLSelectElement>("#cookieSelector");
    let selected = selector.options[selector.selectedIndex].innerHTML;
    for(let i = 0; i < cookieList.length; i++) {
        if(selected === cookieList[i].name) {
            cookieList[i].chocolateChipAmount++;
        }
    }
    updateDisplay();
}

function updateDisplay() {

    drawCookies();
}