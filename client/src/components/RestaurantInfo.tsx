import { IRestaurant } from "../utils";

export default function RestaurantInfo({restaurant}: {restaurant: IRestaurant}) {
    return <div>
        <h3>{restaurant.name}</h3>
        <p>{restaurant.type} | {restaurant.cuisine}</p>
        <p>{restaurant.notes}</p>
        <p>{restaurant.phoneNumber}</p>
        <p>{restaurant.rating}</p> 
        {restaurant.url && <a href={restaurant.url}>Website</a>}
        <p>{restaurant.hours?.toString()}</p>    
    </div>
}