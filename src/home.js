import image from './Images/andy-hay-ZN-TT10kf4o-unsplash.jpg';

function createHome(){
    const homeDiv = document.createElement("div");
    const restaurantDescription = document.createElement("div");
    restaurantDescription.innerHTML = `
    <h1 class="name">Restaurant Name</h1>
    <h1>Authentic, Fresh and delicious food delivered to your doorstep</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe eligendi labore quod quam laboriosam vero cupiditate .</p>
    <button>Reservation</button>`;

    const restaurantImg = document.createElement("img");
    restaurantImg.src = image;

    homeDiv.append(restaurantDescription,restaurantImg);
    
    return homeDiv;
}

export {createHome};