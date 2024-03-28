import {createP, createh1,createimg,createH2} from './create.js';

function createLi(ul,contact,contactDetail){
    const li = document.createElement("li");
    const heading = createH2(`${contact}`);
    const detail = createP(`${contactDetail}`);
    li.append(heading,detail);
    ul.append(li);
}

function insertImg(li,src){
    for(let i = 0;i < src.length;i++){
        const img = new Image();
        img.src = `${src[i]}`;
        li.append(img);
    }
}

function createContact(){
    const contactDiv = document.createElement("div");
    const ul = document.createElement("ul");
    createLi(ul,'Phone Number','+91-9847257314');
    createLi(ul,'E-mail','xyz@gmail.com');
    createLi(ul,'Google map','https://maps.app.goo.gl/yVAkMvW1YLRbyJxCA');
    const li = document.createElement("li");
    const srcArr = ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png?20200512141346","https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/640px-Facebook_icon_2013.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Linkedln-icon-voltrans.png/640px-Linkedln-icon-voltrans.png","https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/640px-Google_Maps_icon_%282020%29.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Web-icon-voltrans.png/640px-Web-icon-voltrans.png"];
    insertImg(li,srcArr);
    ul.append(li);
    contactDiv.append(ul);
    return contactDiv;
}

export {createContact} 