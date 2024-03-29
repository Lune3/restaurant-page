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
    createLi(ul,'E-mail','pajeetSwadishKhana@gmail.com');
    createLi(ul,'Google map','https://maps.app.goo.gl/yVAkMvW1YLRbyJxCA');
    const li = document.createElement("li");
    li.className = "contactImgs"
    const srcArr = ["https://www.svgrepo.com/show/452229/instagram-1.svg","https://www.svgrepo.com/show/303113/facebook-icon-logo.svg","https://www.svgrepo.com/show/448234/linkedin.svg","https://www.svgrepo.com/show/349391/google-maps-old.svg","https://www.svgrepo.com/show/475689/twitter-color.svg"];
    insertImg(li,srcArr);
    ul.append(li);
    contactDiv.append(ul);
    return contactDiv;
}

export {createContact} 