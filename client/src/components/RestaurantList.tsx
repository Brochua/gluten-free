import { useEffect, useState } from "react";
import Restaurant from "./Restaurant";
import { IRestaurant } from "../utils";
import '../styles/RestaurantList.css';

import RestaurantMap from "./RestaurantMap";

export default function RestaurantList() {
    const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

    useEffect(() => {
        const getRestaurants = async () => {
            const resp = await fetch('/restaurants.json');
            if (resp.ok) {
                const json = await resp.json();
                setRestaurants(json);
            }
        };
        getRestaurants();
    }, []);

    const restaurantElems = restaurants.map((restaurant, i) => <Restaurant name={restaurant.name} notes={restaurant.notes} type={restaurant.type} cuisine={restaurant.cuisine} key={`restaurant-${i}`} />);

    return <RestaurantMap restaurants={restaurants} />

    // return <div className="restaurant-list">
    //     {restaurantElems}
    // </div>
}