import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState , git push -u origin mainuseEffect } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Bengaluru",
    feelsLike: 26.47,
    humidity: 73,
    temp: 25.92,
    tempMax: 25.92,
    tempMin: 25.92,
    weather: "overcast clouds"
  });

  const getWeatherImage = (weather) => {
    const IMAGE_URLS = {
      sunny: "https://images.unsplash.com/photo-1622278647429-71bc97e904e8?w=1200",
      rainy: "https://plus.unsplash.com/premium_photo-1671229652411-4468b946b787?w=1200",
      cloudy: "https://plus.unsplash.com/premium_photo-1671229652411-4468b946b787?w=1200",
      snowy: "https://images.unsplash.com/photo-1480775292373-5175d0634811?w=1200",
      windy: "https://images.unsplash.com/photo-1480775292373-5175d0634811?w=1200",
      thunderstorm: "https://plus.unsplash.com/premium_photo-1673278171340-99b4dbf0418f?w=1200",
      default: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1200"
    };

    const desc = weather.toLowerCase();
    if (desc.includes("rain") || desc.includes("drizzle")) return IMAGE_URLS.rainy;
    if (desc.includes("sun") || desc.includes("clear")) return IMAGE_URLS.sunny;
    if (desc.includes("cloud")) return IMAGE_URLS.cloudy;
    if (desc.includes("snow") || desc.includes("ice")) return IMAGE_URLS.snowy;
    if (desc.includes("wind") || desc.includes("breeze")) return IMAGE_URLS.windy;
    if (desc.includes("thunder") || desc.includes("storm")) return IMAGE_URLS.thunderstorm;
    return IMAGE_URLS.default;
  };

  //  Change background image on weatherInfo change
  useEffect(() => {
    const imageUrl = getWeatherImage(weatherInfo.weather || "");
    document.body.style.backgroundImage = `url(${imageUrl})`;
  }, [weatherInfo]);

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
