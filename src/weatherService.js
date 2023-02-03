const API_KEY="9ba94aa98e2a91b5e41a2bbd9d15ee3b";

const makeIconURL= (iconId)=> `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const formatWeatherData = async(city, units = 'metric') => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
    const data = await fetch(URL).then((res)=> res.json()).then((data)=> data);

    const {weather,
        main: {temp, feels_like, temp_min, temp_max, pressure, humidity}, 
        wind: {speed},
        sys:{country},
        name,
    } = data;

        const {description, icon} = weather[0];

        return {
            description,
            iconURL: makeIconURL(icon),
            temp, 
            feels_like,
            temp_min,
            temp_max,
            pressure,
            humidity,
            speed,
            country,
            name
        };
}

export {formatWeatherData};