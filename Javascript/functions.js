let search_input = document.getElementById("search_input");

export function fetcher() {
  let upper = search_input.value.charAt(0).toUpperCase() + search_input.value.slice(1);

  fetch(`https://lobster-app-kps4x.ondigitalocean.app/api/weather/${search_input.value}`)
    .then((response) => response.json())
    .then((data) => {
      let celsius = document.getElementById("celsius");
      celsius.innerHTML = `${data.currentTemp}&deg;`;

      let city_name = document.getElementById("city_name");
      city_name.textContent = upper;

      let current_time = document.getElementById("current_time");
      let now = new Date();
      let time_string = now.toLocaleTimeString();
      let day_month_string = now.getDate();
      let year_string = now.getFullYear();

      current_time.innerHTML = `${
        time_string +
        " - " +
        data.day +
        ", " +
        day_month_string +
        " " +
        data.month +
        " " +
        year_string
      }`;

      let weather_icon = document.getElementById("weather_icon");
      switch (true) {
        case data.currentWeatherDesc.includes("cloudy"):
          weather_icon.src = "./Icons/Cloudy_Icon.png";
          document.body.style.background =
            "url(./Mobile_Assets/Cloudy.jpg) no-repeat";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundPosition = "center";
          break;

        case data.currentWeatherDesc.includes("cloudy rain"):
          weather_icon.innerHTML = `<i class="weather_icon fa-solid fa-cloud-rain"></i>`;
          document.body.style.background = "url(./Mobile_Assets/Cloudy_Rain.jpg) no-repeat"
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundPosition = "center";

        case data.currentWeatherDesc.includes("rain"):
          weather_icon.innerHTML = `<i class="weather_icon fa-solid fa-umbrella"></i>`;
          document.body.style.background = "url(./Mobile_Assets/Rain.jpg) no-repeat"
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundPosition = "center";
          
        case data.currentWeatherDesc.includes("sunny"):
          weather_icon.innerHTML = `<i class="weather_icon fa-solid fa-sun"></i>`;
          document.body.style.background =
            "url(./Mobile_Assets/Sunny.png) no-repeat";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundPosition = "center";
          break;

        case data.currentWeatherDesc.includes("snow"):
          weather_icon.innerHTML = `<i class="weather_icon fa-solid fa-snowflake"></i>`;
          document.body.style.background =
            "url(./Mobile_Assets/Snow.jpg) no-repeat";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundPosition = "center";
          break;

        default:
          weather_icon.src = "";
          break;
      }

      let weather_condition = document.getElementById("weather_condition");
      weather_condition.textContent = data.currentWeatherDesc;

      let temp_max = document.getElementById("temp_max");
      temp_max.textContent = data.maxTemp;

      let temp_min = document.getElementById("temp_min");
      temp_min.textContent = data.minTemp;

      let humadity = document.getElementById("humadity");
      humadity.textContent = `${data.humidity + "%"}`;

      let cloudy = document.getElementById("cloudy");
      cloudy.textContent = `${data.visibility + "%"}`;

      let Wind = document.getElementById("Wind");
      Wind.textContent = `${data.windSpeed + "km/h"}`;
    });

    search_input.value = "";
}
