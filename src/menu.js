// import Image from './Images'
import {createP, createh1,createimg,createH2} from './create.js'

function createLi(ul,name,text,src){
    const container = document.createElement("div");
    container.className = "dish";
    const li = document.createElement("li");
    const p = createP(text);
    const h2 = createH2(name);
    container.append(h2,p);
    const div = document.createElement('div');
    div.className = "dishImg";
    const img = createimg(src);
    div.append(img);
    li.append(container,div);
    ul.append(li);
}

function createMenu(){
    const menuDiv = document.createElement("div");
    const ul = document.createElement("ul");
    menuDiv.append(ul);
    createLi(ul,'Dal Makhani',"Dal makhani is a popular North Indian dish made with black lentils, lots of butter, cream and it is mildly spiced. It is one of the popular lentil dishes that you'll find in any North Indian restaurant or dhaba (roadside stalls).","https://images1.livehindustan.com/uploadimage/library/2020/07/01/16_9/16_9_1/punjabi_dhaba_style_dal_makhani_1593592001.jpg");
    createLi(ul,"Panner butter masala",`Perhaps one of the premium north Indian or Punjabi curries if not the king of the paneer curries. 
    It is known for its mildly sweet and spicy taste with the goodness of fresh cream and butter topping with moist paneer.`,`https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x375.jpg`);
    createLi(ul,`Butter roti`,`Tandoori roti are unleavened whole wheat flat breads. Traditionally these are made in a tandoor, which is a pot-shaped clay oven and not on a skillet or flat pan.`,`https://spicesnflavors.com/wp-content/uploads/2020/06/tandoori-roti-2-1-300x300.jpg`);
    createLi(ul,`Vegetable raita`,`Vegetable Raita is one of the most common accompaniments that is often served with Indian meals. It is primarily a thick and creamy curd-based sauce which complements our meals in flavor, texture and also adds more nutrition to it.`,`https://1.bp.blogspot.com/-hkoOpfsbQbA/XaW6J0SisdI/AAAAAAAABrw/vOwpuV8z0hs3aozEZOBaFmBDs0DsZLePwCLcBGAsYHQ/s1600/Mix%2BVeg%2BRaita%2BRecipe.jpg`);
    return menuDiv;
}

export {createMenu};