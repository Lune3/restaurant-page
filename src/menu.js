// import Image from './Images'

function createDishes(fragment){
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const img = document.createElement("img");
    fragment.append(h2,p,img);
}

function createMenu(){
    const menuDiv = document.createElement("div");
    const ul = document.createElement("ul");
    menuDiv.append(ul);
    for(let i = 0;i < 5;i++){
        const liFragment = new DocumentFragment();
        const li = document.createElement("li");
        createDishes(liFragment);
        li.append(liFragment);
        ul.append(li);
    }
    return menuDiv;
}

export {createMenu};