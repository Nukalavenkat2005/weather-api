const apiKey = "7f2ba62ff5a8247bbd86fa207ef95a34";

async function getWeather() {
    const city = document.getElementById("city").value;
    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();

        document.getElementById("location").innerText = `${data.name}, ${data.sys.country}`;
        document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById("description").innerText = `Condition: ${data.weather[0].description}`;
    } catch (error) {
        alert(error.message);
    }
}
