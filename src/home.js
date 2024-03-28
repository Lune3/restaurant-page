import image from './Images/andy-hay-ZN-TT10kf4o-unsplash.jpg';

function createHome(){
    const homeDiv = document.createElement("div");
    const restaurantDescription = document.createElement("div");
    restaurantDescription.innerHTML = `
    <div>
    <h1 class="name">Restaurant Name</h1>
    <p>Savor the authentic tastes of India, crafted with love and served with a side of warmth and hospitality.</p>
    </div>
    <div>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe eligendi labore quod quam laboriosam vero cupiditate .</p>
    <button class="reservation">Reservation</button>
    </div>`;



    const restaurantImg = document.createElement("div");
    const img = new Image();
    img.src = "https://statics.vinpearl.com/Indian-Restaurants-In-Phu-Quoc-01_1702657085.jpg";
    
    restaurantImg.append(img);

    homeDiv.append(restaurantDescription,restaurantImg);
    
    return homeDiv;
}

export {createHome};