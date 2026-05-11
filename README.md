# Weather App

A modern, responsive weather application built with vanilla JavaScript, featuring a beautiful seasonal gradient UI and real-time weather data from the WeatherAPI.

## Features

- **Real-time Weather Data**: Fetch current weather conditions for any city
- **Beautiful UI**: Gradient background representing the four seasons (Winter → Spring → Summer → Fall)
- **Search Functionality**: Search for weather by city name using the search bar or Enter key
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Location Information**: Displays city name, region, and country
- **Weather Details**: Shows temperature, "feels like" temperature, wind speed, and humidity
- **Weather Condition Icon**: Displays an icon representing the current weather condition

## Technology Stack

- **JavaScript (ES6+)**: Core functionality
- **HTML5**: Structure
- **CSS3**: Styling with gradients and animations
- **Webpack**: Module bundler
- **WeatherAPI.com**: Weather data provider
- **Outfit Font**: Custom typography with multiple weights

## Project Structure

```
weather-app/
├── src/
│   ├── css/
│   │   ├── fonts.css          # Font face definitions
│   │   └── style.css          # Main styles
│   ├── fonts/
│   │   └── Outfit-*.woff2     # Outfit font files (various weights)
│   ├── html/
│   │   └── index.html         # HTML template
│   ├── model/
│   │   ├── condition.js       # Condition model (weather data)
│   │   └── location.js        # Location model (city data)
│   └── scripts/
│       └── controller/
│           └── index.js       # Main controller & search logic
├── webpack.common.js          # Webpack configuration
├── package.json               # Dependencies
└── README.md                  # This file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/EmpyreanBreaker/weather-app.git
cd weather-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The app will be available at `http://localhost:8080` (or the port configured in your webpack setup).

### Build for Production

```bash
npm run build
```

## Usage

1. **Search for a City**: Enter a city name in the search bar
2. **Submit Search**: Either click the "Search" button or press Enter
3. **View Weather**: The app displays the current weather conditions for the selected location

## Styling

### Typography

- **City Name**: Outfit ExtraBold (800), wide letter spacing
- **Temperature**: Outfit ExtraLight (200)
- **Labels** (Feels Like, Wind, Humidity): Outfit Medium (500)
- **Location Details** (Region, Country): Outfit Regular (400)

### Color Scheme

The app features a seasonal gradient background:

- **Winter**: Soft blues (top-left)
- **Spring**: Fresh greens (middle)
- **Summer**: Warm yellows (center-right)
- **Fall**: Peachy tans (bottom-right)

## Models

### Location Model

- `create(country, name, region)` - Initialize location data
- `getName()` - Get city name
- `getRegion()` - Get region/state
- `getCountry()` - Get country
- `getData()` - Get all location data

### Condition Model

- `create(condition, feelslike, humidity, icon, temp, wind)` - Initialize weather data
- `getCondition()` - Get weather condition text
- `getIcon()` - Get weather icon URL
- `getTemp()` - Get temperature in Fahrenheit
- `getFeelslike()` - Get "feels like" temperature
- `getWind()` - Get wind speed in MPH
- `getHumidity()` - Get humidity percentage
- `getData()` - Get all weather data

## API

This app uses the [WeatherAPI.com](https://www.weatherapi.com/) API to fetch weather data.

**Endpoint**: `http://api.weatherapi.com/v1/forecast.json`

**Parameters**:

- `key`: API key
- `q`: Location query (city name)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Hourly forecast display
- [ ] 5-day forecast
- [ ] Weather alerts
- [ ] Local storage for recent searches
- [ ] Dark mode toggle
- [ ] Multiple location comparison
- [ ] Weather maps integration

## License

This project is open source and available under the MIT License.

## Author
Fidel Ojimba
Created as a weather app learning project.

## Acknowledgments

- Built as part of [The Odin Project](https://www.theodinproject.com/) JavaScript Weather App project
- Weather data provided by [WeatherAPI.com](https://www.weatherapi.com/)
- Outfit font by Rodrigo Fuenzalida