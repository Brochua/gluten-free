import fs from 'fs/promises';
import path from 'path';

const jsonPath = path.join('..', 'client', 'public', 'restaurants_v2.json');

const json = await fs.readFile(jsonPath);
const content = JSON.parse(json);
console.log(content);



const newJson = content.map(r => {
    const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Susie Sans Gluten&inputtype=textquery&locationbias=circle:30000:45.523082546463826:-73.61442966647277&key=${process.env.GOOGLE_MAPS_API_KEY}`
    // fields=address_components,geometry,adr_address,formatted_address,formatted_phone_number,price_level,rating,photo'
    // https://developers.google.com/maps/documentation/javascript/place-data-fields
});
