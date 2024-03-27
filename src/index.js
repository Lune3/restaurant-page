import './styleSheet.css';
import {createHome} from './home.js';
import {createMenu} from './menu.js';
import {createContact} from './contact.js';

const content = document.querySelector("#content");

const homeButton = document.querySelector(".homeButton");
const menuButton = document.querySelector(".menuButton");
const contactButton = document.querySelector(".aboutButton");

const home = createHome();
const menu = createMenu();
const contact = createContact();

let flag = 1;
home.className = "homeTab";
content.append(home);


homeButton.addEventListener("click",() => {
    if(flag != 1){
        content.textContent = "";
        home.className = "homeTab";
        content.append(home);
        flag = 1;
    }
})

menuButton.addEventListener("click" , () =>{
    if(flag != 2){
        content.textContent = "";
        menu.className = "menuTab";
        content.append(menu);
        flag = 2;
    }
})

contactButton.addEventListener("click",() => {
    if(flag != 3){
        content.textContent = "";
        // contact.className = "contactTab";
        content.append(contact);
        flag = 3;

    }
})
