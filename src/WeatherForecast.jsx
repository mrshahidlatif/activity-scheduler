import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import { Typography, Box } from "@mui/material";
import axios from "axios";

const WeatherForecast = () => {
    const [currentTemperature, setCurrentTemperature] = useState(0);
    const [weatherForecast, setWeatherForecast] = useState({
        temperature: [],
        rain: [],
    });
    const url =
        "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&hourly=precipitation_probability&current_weather=true&forecast_days=2";

    useEffect(() => {
        axios
            .get(url)
            .then((res) => res.data)
            .then((weatherData) => {
                const currentHour = new Date().getHours();
                setCurrentTemperature(weatherData.current_weather.temperature);
                setWeatherForecast({
                    temperature: weatherData.hourly.temperature_2m.slice(
                        currentHour,
                        currentHour + 12
                    ),
                    rain: weatherData.hourly.precipitation_probability.slice(
                        currentHour,
                        currentHour + 12
                    ),
                });
            })
            .catch((err) => {
                throw err;
            });
    }, []);

    return (
        <Stack spacing={2}>
            <Typography variant="h5">{currentTemperature}&deg;</Typography>
            <Typography variant="caption">
                Forecast of Temperature & Precipitation for next 12 Hours. The forecast is shown for
                the city of BERLIN.
            </Typography>
            <Stack direction={"row"} spacing={1}>
                {weatherForecast.temperature.map((_, idx) => (
                    <Box key={idx} sx={{ width: 50 }}>
                        {(idx + new Date().getHours()) % 24}
                    </Box>
                ))}
            </Stack>
            <Stack direction={"row"} spacing={1}>
                {weatherForecast.temperature.map((temperature, idx) => (
                    <Box key={idx} sx={{ width: 50 }}>
                        {temperature}&deg;
                    </Box>
                ))}
            </Stack>
            <Stack direction={"row"} spacing={1}>
                {weatherForecast.rain.map((rain, idx) => (
                    <Box key={idx} sx={{ width: 50 }}>
                        {rain}
                    </Box>
                ))}
            </Stack>
        </Stack>
    );
};

export default WeatherForecast;
