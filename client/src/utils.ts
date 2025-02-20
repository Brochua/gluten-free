interface IRestaurant {
    name: string;
    notes: string;
    type: string[];
    cuisine: string[];
    coordinates: [number, number];
    area?: string;
    address: string;
    phoneNumber: string;
    rating: number;
    url: string;
    hours?: Record<string, string>;
    website?: string;
    price?: number;
}


export type {IRestaurant};