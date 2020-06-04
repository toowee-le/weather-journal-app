const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&appid=2d11d5d06fde9eec74cf187fb75aaca2';

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
    e.preventDefault();
    const form = document.forms["journalForm"]["feelings"].value;
    if (form == "") {
        alert("Please describe your mood today.");
        return false;
    } else {
        const city = document.getElementById('city').value;
        const journalEntry = document.getElementById('feelings').value;
        getWeather(baseURL, city, apiKey)
        .then(data => {
            console.log(data);
            postData('/addEntry', { data });
            //updateUI();
        });
    };
    clearResults();
};
 
const getWeather = async (baseURL, city, key) => {
    const response = await fetch(baseURL+city+key);
    const data = await response.json();
    try {
        return {
            city: data.name,
            country: data.sys.country,
            temp: data.main.temp,
            description: data.weather[0].description,
            icon: data.weather[0].icon
        };
    } catch (error) {
        console.log("Error", error);
    };
};

const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    try {
        const getData = await response.json();
        return getData;
    } catch (error) {
        console.log("Error:", error);
    };
};

// Update UI
// const updateUI = async () => {
//     const request = await fetch('/all');
//     try {
//         const data = await request.json();
//         const { city, country, temp, description, mood } = data[0];
//         console.log(data[0]);
//         document.querySelector('.name').textContent = `${city}, ${country}`;
//     } catch (error) {
//         console.log("Error", error);
//     }
// }

function clearResults() {
    const form = document.forms["journalForm"];
    form.reset();
};