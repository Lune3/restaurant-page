import image from './Images/andy-hay-ZN-TT10kf4o-unsplash.jpg';

function createHome(){
    const homeDiv = document.createElement("div");
    const restaurantDescription = document.createElement("div");
    restaurantDescription.innerHTML = `
    <h1 class="name">Restaurant Name</h1>
    <h1>Savor the authentic tastes of India, crafted with love and served with a side of warmth and hospitality.</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe eligendi labore quod quam laboriosam vero cupiditate .</p>
    <button>Reservation</button>`;



    const restaurantImg = document.createElement("div");
    const img = new Image();
    img.src = "https://statics.vinpearl.com/Indian-Restaurants-In-Phu-Quoc-01_1702657085.jpg";
    
    restaurantImg.append(img);

    homeDiv.append(restaurantDescription,restaurantImg);
    
    return homeDiv;
}

export {createHome};