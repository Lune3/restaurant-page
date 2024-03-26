import './styleSheet.css';
import {createHome} from './home.js';

const content = document.querySelector("#content");

const homeButton = document.querySelector(".homeButton");
const menuButton = document.querySelector(".menuButton");
const aboutButton = document.querySelector(".aboutButton");

homeButton.addEventListener("click",() => {
    const home = createHome();
    content.append(home);
})
