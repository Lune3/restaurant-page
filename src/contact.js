import {createP, createh1,createimg,createH2} from './create.js';

function createLi(ul,contact,contactDetail){
    const li = document.createElement("li");
    const heading = createH2(`${contact}`);
    const detail = createP(`${contactDetail}`);
    li.append(heading,detail);
    ul.append(li);
}

function createContact(){
    const contactDiv = document.createElement("div");
    const ul = document.createElement("ul");
    createLi(ul,'Phone Number','+91-9847257314');
    createLi(ul,'E-mail','xyz@gmail.com');
    createLi(ul,'Google map','https://maps.app.goo.gl/yVAkMvW1YLRbyJxCA');
    contactDiv.append(ul);
    return contactDiv;
}

export {createContact} 