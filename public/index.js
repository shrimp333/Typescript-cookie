import { Cookie } from './modules/Cookie.js';
import { Colours } from './modules/Colours.js';
let cookieList = [];
let first = true;
init();
function init() {
    cookieList.push(new Cookie("Cookie1", Colours.Pink, 11, Colours.Brown));
    cookieList.push(new Cookie("Cookie2", Colours.Pink, 7, Colours.Blue));
    let input = document.querySelector('#cookieColour-inp');
    input.value = cookieList[0].colour;
    updateDisplay();
}
function drawCookies() {
    let cookieDiv = document.getElementById("cookiesDiv");
    cookieDiv.innerHTML = "";
    let selector = document.querySelector("#cookieSelector");
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
    let selector = document.querySelector("#cookieSelector");
    let selected = selector.options[selector.selectedIndex].innerHTML;
    for (let i = 0; i < cookieList.length; i++) {
        if (selected === cookieList[i].name) {
            cookieList[i].colour = document.querySelector('#cookieColour-inp').value;
        }
    }
    updateDisplay();
}
document.getElementById("changeSprinkleColour-btn").addEventListener("click", changeSprinkleColour);
function changeSprinkleColour() {
    let selector = document.querySelector("#cookieSelector");
    let selected = selector.options[selector.selectedIndex].innerHTML;
    for (let i = 0; i < cookieList.length; i++) {
        if (selected === cookieList[i].name) {
            cookieList[i].sprinkleColour = document.querySelector('#cookieColour-inp').value;
        }
    }
    updateDisplay();
}
document.getElementById("addChocolateChip-btn").addEventListener("click", addChocolateChip);
function addChocolateChip() {
    let selector = document.querySelector("#cookieSelector");
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
    let colourSelector = document.querySelector("#creationColour");
    let colour = colourSelector.options[colourSelector.selectedIndex].innerHTML;
    let sprinkleSelector = document.querySelector("#creationSprinkleColour");
    let sprinkleColour = sprinkleSelector.options[sprinkleSelector.selectedIndex].innerHTML;
    let name = document.querySelector('#creationName').value;
    let sprinkleInput = document.querySelector('#creationSprinkleNumber');
    let sprinkleAmount = parseInt(sprinkleInput.value);
    cookieList.push(new Cookie(name, colour, sprinkleAmount, sprinkleColour));
    updateDisplay();
}
