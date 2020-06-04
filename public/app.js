const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&appid=2d11d5d06fde9eec74cf187fb75aaca2';

document.getElementById('generate').addEventListener('click', performAction);

function performAction() {
    console.log('clicked');
    const city = document.getElementById('city').value;
    const journalEntry = document.getElementById('feelings').value;
    getWeather(baseURL, city, apiKey);
    console.log(journalEntry);
}

const getWeather = async (baseURL, city, key) => {
    let response = await fetch(baseURL+city+key);
    let data = await response.json();
    try {
        console.log(data);
        return data;
    } catch (error) {
        console.log("Error", error);
    };
};