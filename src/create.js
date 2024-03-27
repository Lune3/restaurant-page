function createP(text,className = ""){
    const p = document.createElement("p");
    p.textContent = `${text}`;
    if(className !== "")
    p.className = `${className}`;
    return p;
}

function createh1(text,className = ""){
    const p = document.createElement("h1");
    p.textContent = `${text}`;
    if(className !== "")
    p.className = `${className}`;
    return p;
}

function createH2(text,className = ""){
    const p = document.createElement("h2");
    p.textContent = `${text}`;
    if(className !== "")
    p.className = `${className}`;
    return p;
}

function createimg(src){
    const img = new Image();
    img.src = src;
    return img;
}

export {createP, createh1,createimg,createH2};