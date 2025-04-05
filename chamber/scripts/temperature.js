const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/0f1b74c939e0422a3b2081ee431fc9c5';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            // displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`; // `main.temp` contiene la temperatura actual
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`; // `weather[0].icon` contiene el código del ícono
    let desc = data.weather[0].description; // `weather[0].description` contiene la descripción del clima
    weatherIcon.setAttribute('src', iconsrc); // Establece la fuente del ícono
    weatherIcon.setAttribute('alt', desc); // Establece el texto alternativo como la descripción del clima
    captionDesc.textContent = `${desc}`; // Muestra la descripción del clima
}