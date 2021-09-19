


// or
import OpenWeatherMap from 'openweathermap-ts';
import {WordsCollection} from "../../patterns/iterator";
const collection = new WordsCollection();

const openWeather = new OpenWeatherMap({
    apiKey: '919947247447c728e0406c2abce9e8b1'
});
export async function sendResponse() {
    const weather = await openWeather.getThreeHourForecastByCityName({
        cityName: 'Dhaka',
        countryCode: 'BD'
    });
    collection.addItem(weather);
    const weather1 = await openWeather.getThreeHourForecastByCityName({
        cityName: 'Khulna',
        countryCode: 'BD'
    });
    collection.addItem(weather1);
    console.log('Weather1 object is', weather1);

    const weather2 = await openWeather.getThreeHourForecastByCityName({
        cityName: 'Chittagong',
        countryCode: 'BD'
    });
    collection.addItem(weather2);
    console.log('Weather object is', weather);

// or async await example
    try {
        const weather = await openWeather.getThreeHourForecastByCityName({
            cityName: 'Dhaka',
            countryCode: 'BD'
        });
        collection.addItem(weather.toString());
        console.log('Weather object is', weather);

        const reverseIterator = collection.getReverseIterator();
        while (reverseIterator.valid()) {
            console.log(reverseIterator.next());
        }

    } catch (error) {
        console.error('Error is ', error);
    }



}


