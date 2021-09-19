
const MY_APP_ID = "919947247447c728e0406c2abce9e8b1";
import unfetch from "unfetch";

export default async function loadJSON(url: string) {
    const fetch = unfetch;
    const response = await fetch(url);
    return response.json();
}
describe(".open weather map api", () => {
    test("correct url should response with correct json response", async () => {

        const response = await loadJSON(
            `https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=${MY_APP_ID}`
        );
        expect(response.name).toEqual("Dhaka");
    });
});
