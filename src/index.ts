
import { Cookie } from './modules/Cookie.js';
import { Colours } from './modules/Colours.js'

let cookieList = [];
let first = true;

init();

function init() {
    cookieList.push(new Cookie("Cookie1", Colours.Pink, 11, Colours.Brown));
    cookieList.push(new Cookie("Cookie2", Colours.Pink, 7, Colours.Blue));

    let input: HTMLInputElement = document.querySelector<HTMLInputElement>('#cookieColour-inp');
    input.value = cookieList[0].colour;
    updateDisplay();
}

function drawCookies() {

    let cookieDiv = document.getElementById("cookiesDiv");
    cookieDiv.innerHTML = "";
    let selector: HTMLSelectElement = document.querySelector<HTMLSelectElement>("#cookieSelector");
    let tempIndex = selector.value;
    selector.innerHTML = "";
    for (let i = 0; i < cookieList.length; i++) {
        let cookieToAdd = document.createElement('div');
        cookieToAdd.className = 'cookie';
        cookieToAdd.innerHTML = cookieList[i].chocolateChipAmount;
        cookieToAdd.style.backgroundColor = cookieList[i].colour;
        cookieToAdd.style.color = cookieList[i].sprinkleColour;
        cookieToAdd.id = cookieList[i].name;
        cookieDiv.appendChild(cookieToAdd);
        let optionAdd = document.createElement('option');
        optionAdd.innerHTML = cookieList[i].name;
        selector.appendChild(optionAdd);
    }
    if (!first) {
        selector.value = tempIndex;
    }
    first = false;
}

document.getElementById("changeColour-btn").addEventListener("click", changeColour);
function changeColour() {
    let selector: HTMLSelectElement = document.querySelector<HTMLSelectElement>("#cookieSelector");
    let selected = selector.options[selector.selectedIndex].innerHTML;
    for (let i = 0; i < cookieList.length; i++) {
        if (selected === cookieList[i].name) {
            cookieList[i].colour = document.querySelector<HTMLInputElement>('#cookieColour-inp').value;
        }
    }

    updateDisplay();
}

document.getElementById("changeSprinkleColour-btn").addEventListener("click", changeSprinkleColour);
function changeSprinkleColour() {
    let selector: HTMLSelectElement = document.querySelector<HTMLSelectElement>("#cookieSelector");
    let selected = selector.options[selector.selectedIndex].innerHTML;
    for (let i = 0; i < cookieList.length; i++) {
        if (selected === cookieList[i].name) {
            cookieList[i].sprinkleColour = document.querySelector<HTMLInputElement>('#cookieColour-inp').value;
        }
    }
    updateDisplay();
}

document.getElementById("addChocolateChip-btn").addEventListener("click", addChocolateChip);
function addChocolateChip() {
    let selector: HTMLSelectElement = document.querySelector<HTMLSelectElement>("#cookieSelector");
    let selected = selector.options[selector.selectedIndex].innerHTML;
    for (let i = 0; i < cookieList.length; i++) {
        if (selected === cookieList[i].name) {
            cookieList[i].chocolateChipAmount++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    drawCookies();
}

document.getElementById("makeCookie-btn").addEventListener("click", createNewCookie);
function createNewCookie() {
    let colourSelector: HTMLSelectElement = document.querySelector<HTMLSelectElement>("#creationColour");
    let colour:Colours = <Colours>colourSelector.options[colourSelector.selectedIndex].innerHTML;
    let sprinkleSelector: HTMLSelectElement = document.querySelector<HTMLSelectElement>("#creationSprinkleColour");
    let sprinkleColour:Colours = <Colours>sprinkleSelector.options[sprinkleSelector.selectedIndex].innerHTML;
    let name = document.querySelector<HTMLInputElement>('#creationName').value;
    let sprinkleInput:HTMLInputElement = document.querySelector<HTMLInputElement>('#creationSprinkleNumber');
    let sprinkleAmount:number = parseInt(sprinkleInput.value);
    cookieList.push(new Cookie(name, colour, sprinkleAmount, sprinkleColour));
    updateDisplay();
}