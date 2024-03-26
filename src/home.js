import image from './Images/andy-hay-ZN-TT10kf4o-unsplash.jpg';

function createHome(){
    const restaurantDescription = document.createElement("div");
    restaurantDescription.innerHTML = `
    <h1 class="name">Restaurant Name</h1>
    <h1>Authentic, Fresh and delicious food delivered to your doorstep</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati labore doloremque ad neque dolorem </p>
    <button>Reservation</button>`;

    const restaurantImg = document.createElement("img");
    restaurantImg.src = image;
    
    return [restaurantDescription,restaurantImg];
}

export {createHome};