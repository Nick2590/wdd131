// Footer Year + Last Modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Weather Data (Static Example)
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

// Wind Chill Function (°F, mph)
function calculateWindChill(t, w) {
  return (
    35.74 +
    0.6215 * t -
    35.75 * Math.pow(w, 0.16) +
    0.4275 * t * Math.pow(w, 0.16)
  ).toFixed(1);
}

// Conditions Check
let windchill = "N/A";
if (temp <= 50 && wind > 3) {
  windchill = calculateWindChill(temp, wind) + " °F";
}

document.getElementById("windchill").textContent = windchill;
