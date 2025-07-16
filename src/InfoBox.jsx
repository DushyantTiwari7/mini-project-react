import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const IMAGE_URLS = {
    sunny: "https://images.unsplash.com/photo-1622278647429-71bc97e904e8?w=1200&auto=format&fit=crop&q=60",
    rainy: "https://plus.unsplash.com/premium_photo-1671229652411-4468b946b787?w=1200&auto=format&fit=crop&q=60",
    cloudy: "https://plus.unsplash.com/premium_photo-1671229652411-4468b946b787?w=1200&auto=format&fit=crop&q=60",
    snowy: "https://images.unsplash.com/photo-1480775292373-5175d0634811?w=1200&auto=format&fit=crop&q=60",
    windy: "https://images.unsplash.com/photo-1480775292373-5175d0634811?w=1200&auto=format&fit=crop&q=60",
    thunderstorm: "https://plus.unsplash.com/premium_photo-1673278171340-99b4dbf0418f?w=1200&auto=format&fit=crop&q=60",
    default: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1200&auto=format&fit=crop&q=60"
  };

  const getWeatherImage = (weatherInfo) => {
    if (!weatherInfo || !weatherInfo.weather) return IMAGE_URLS.default;
    const weather = weatherInfo.weather.toLowerCase();
    if (weather.includes('rain') || weather.includes('drizzle')) return IMAGE_URLS.rainy;
    if (weather.includes('sun') || weather.includes('clear')) return IMAGE_URLS.sunny;
    if (weather.includes('cloud')) return IMAGE_URLS.cloudy;
    if (weather.includes('snow') || weather.includes('ice')) return IMAGE_URLS.snowy;
    if (weather.includes('wind') || weather.includes('breeze')) return IMAGE_URLS.windy;
    if (weather.includes('thunder') || weather.includes('storm')) return IMAGE_URLS.thunderstorm;
    if (weatherInfo.temp > 30) return IMAGE_URLS.sunny;
    if (weatherInfo.temp < 10) return IMAGE_URLS.snowy;
    return IMAGE_URLS.default;
  };

  return (
    <div className="InfoBox">
      <h1>Weather Info - {info?.weather || "Unknown"}</h1>
      <div className="cardContainer">
        <div 
  className="background-image" 
  style={{
    backgroundImage: `url(${getWeatherImage(info)})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1
  }}
></div>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5">{info?.city || "Unknown Location"}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Temperature = {info?.temp || "N/A"}°C
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Humidity = {info?.humidity || "N/A"}%
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Min Temp = {info?.tempMin || "N/A"}°C
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Max Temp = {info?.tempMax || "N/A"}°C
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              The weather can be described as <i>{info?.weather || "unknown"}</i> and feels like {info?.feelsLike || "N/A"}°C
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
