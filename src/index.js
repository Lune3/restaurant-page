import './styleSheet.css';
import {createHome} from './home.js';
import {createMenu} from './menu.js';

const content = document.querySelector("#content");

const homeButton = document.querySelector(".homeButton");
const menuButton = document.querySelector(".menuButton");
const aboutButton = document.querySelector(".aboutButton");

homeButton.addEventListener("click",() => {
    const home = createHome();
    home.className = "homeTab";
    content.append(home);
})

menuButton.addEventListener("click" , () =>{
    const menu = createMenu();
    menu.className = "menuTab";
    content.append(menu);
})
