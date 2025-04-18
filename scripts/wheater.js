const temperature = 29; // Temp en °C
const windSpeed =2; // Velocidad del viento en km/h


document.getElementById('temperature').textContent += `${temperature} °C`;
document.getElementById('windSpeed').textContent += `${windSpeed} km/h`;


function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

function displayWindChill() {
    let windChill;

    
    if (temperature <= 10 && windSpeed > 4.8) {
        windChill = calculateWindChill(temperature, windSpeed).toFixed(2); // Redondear a dos decimales
    } else {
        windChill = "N/A"; // No aplicable si no se cumplen las condiciones
    }

    document.getElementById('windChill').textContent += `${windChill}`;
}

window.onload = displayWindChill;