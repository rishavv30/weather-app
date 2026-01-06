const btn = document.getElementById("search-btn");
const input = document.getElementById("city-input");

const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');

async function getData(cityName) {
    const promise = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=188edc78e24a4fa9954194714260601&q=${cityName}&aqi=yes`
    );
    return await promise.json()
}


btn.addEventListener("click", async () => {
    const value = input.value;
    const result = await getData(value)
    cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = `${result.current.temp_c}°C`;

    

})

const toggle = document.getElementById("theme-toggle");


if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");
    toggle.textContent = isLight ? "☀️" : "🌙";

    localStorage.setItem("theme", isLight ? "light" : "dark");
});
