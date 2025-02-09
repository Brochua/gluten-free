import { ChangeEvent, useEffect, useState } from "react";
import "../styles/Restaurant.css";

export default function Restaurant({name, notes, type, cuisine}: {name: string, notes: string, type: string[], cuisine: string[]}) {
    const [storedValue, setStoredValue] = useState(false);
    const types = type.map((t, i) => <li key={`type-${i}`}>{t}</li>);
    const cuisines = cuisine.map((c, i) => <li key={`cuisine-${i}`}>{c}</li>);
    const restaurantKey = `${name}-checked`;

    useEffect(() => {
        const value = localStorage.getItem(restaurantKey);
        if (value !== null) {
            setStoredValue(value == 'true');
            console.log(`got ${value == 'true'}`)
        }
    }, [restaurantKey]);

    const checkboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.checked;
        console.log('storing ', value)
        localStorage.setItem(`${name}-checked`, `${value}`);
    };

    return <div className="restaurant" >
        <input type="checkbox" name="box" onChange={checkboxChange} defaultChecked={storedValue} />
        <div className="left-side">
            <h2>{name}</h2>
            <p>{notes}</p>
        </div>
        <div className="right-side">
            <ul>{types}</ul>
            <ul>{cuisines}</ul>
        </div>
    </div>
}