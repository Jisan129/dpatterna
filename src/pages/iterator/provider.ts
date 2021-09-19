const MY_APP_ID = "919947247447c728e0406c2abce9e8b1";
import unfetch from "unfetch";
const fetch = require("node-fetch");

export default async function loadJSON(url: string) {
    const fetch = unfetch;
    const response = await fetch(url);
    return response.json();
}

const response =  loadJSON(
    `https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=${MY_APP_ID}`
);
export function sendResponse(){
    return response
}

