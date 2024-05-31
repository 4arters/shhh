import React, { useEffect, useState } from "react";
import WeatherData from "@/constants/utilities/test.json";

export default function Api() {
  const today = WeatherData.find((weather) => weather.date === "Monday");
  const [data, setData] = useState(null);

  console.log("data", data);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Ulaanbaatar&appid=b54c363da58b83c8327f53f5ddbc81c0&fbclid=IwAR2d0nph8gX9D5PpKC26AuhgA3qjFofpBfCaBjjB8IBlU-BhzFTMbJx5EzA",
      {
        method: "GET",
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setData(response);
        return response.json();
      })
      .then((protectedData) => {
        setData(protectedData)
        console.log("Protected Data:", protectedData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  console.log("data",data);
  

  return (
    <div className="w-full h-full flex bg-black p-4">
      <div key={today.id} className="w-2/3 h-full mr-4 gap-4 flex flex-col">
        <div className="w-full h-1/3 pl-12 flex items-center justify-between">
          <div className="">
            <p className="text-white text-4xl flex font-semibold">
              
              {data?.base}
            </p>
            <p className="text-white opacity-80">
              Chance of rain: {today.rain}%
            </p>
            <p className="text-white text-6xl flex font-semibold mt-12">
              {today.temperatureAvarage} °C
            </p>
          </div>
          <img src={today.img} alt="Weather Icon" className="w-64 mr-12" />
        </div>
        <div className="w-full h-1/3 bg-slate-800 rounded-md bg-opacity-40 flex flex-col text-white p-4">
          <p className="opacity-80 flex font-semibold">TODAY'S FORECAST</p>
          <div className="flex flex-row">
            {today &&
              today.today.map((today, index) => (
                <>
                  <div
                    key={index}
                    className="w-48 flex flex-col justify-center items-center mt-8 h-full"
                  >
                    <p className="flex font-semibold text-white opacity-80">
                      {today.time}
                    </p>
                    <div className="flex justify-center items-center h-24">
                      <img src={today.weather} alt="" className="w-24" />
                    </div>
                    <p className="text-xl text-white flex font-semibold">
                      {today.temperature} °C
                    </p>
                  </div>
                  <div className="flex w-[1px] h-full opacity-20 bg-white mt-8"></div>
                </>
              ))}
          </div>
        </div>
        <div className="w-full h-1/3 bg-slate-800 rounded-md bg-opacity-40 text-white p-4">
          <p className="opacity-80 font-medium">AIR CONDITIONS</p>
          <div className="grid grid-cols-2 w-full h-full mt-4">
            <div className="flex flex-col">
              <div className="flex flex-row items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 stroke-white opacity-80"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
                <p className="text-lg text-white flex font-meduim opacity-80 ">
                  Real Feel
                </p>
              </div>
              <p className="text-white flex font-semibold ml-4 text-3xl mt-1">
                {today.temperatureAvarage}°C
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 stroke-white opacity-80"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                  />
                </svg>

                <p className="text-lg text-white flex font-meduim opacity-80 ">
                  Wind
                </p>
              </div>
              <p className="text-white flex font-semibold ml-4 text-3xl mt-1">
                {today.wind} km/h
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 stroke-white opacity-80"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75   8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                  />
                </svg>

                <p className="text-lg text-white flex font-meduim opacity-80 ">
                  Chance of Rain
                </p>
              </div>
              <p className="text-white flex font-semibold ml-4 text-3xl mt-1">
                {today.rain}%
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 stroke-white opacity-80"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
                <p className="text-lg text-white flex font-meduim opacity-80">
                  UV Index
                </p>
              </div>
              <p className="text-white flex font-semibold ml-4 text-3xl mt-1">
                {today.UV}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 h-fill p-4 bg-slate-800 rounded-md bg-opacity-40 flex flex-col">
        <p className="opacity-80 text-white font-semibold flex">
          7-DAY FORECAST
        </p>
        <div className="flex flex-col justify-between w-full h-full mt-4">
          {WeatherData.map((weather, index) => (
            <div key={index}>
              <div
                className="w-full justify-between items-center flex flex-row px-4"
                key={index}
              >
                <p className="text-lg text-white items-center flex font-meduim opacity-80">
                  {weather.date}
                </p>
                <div className="flex flex-row items-center">
                  <img src={weather.img} className="w-20" alt="Weather Icon" />
                  <p className="text-white flex font-semibold ml-4 items-center">
                    {weather.weather}
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <p className="text-white items-center">
                    {weather.temperatureHighest}
                  </p>
                  <p className="text-white opacity-80 items-center">
                    /{weather.temperatureLowest}
                  </p>
                </div>
              </div>
              <div className="w-full h-[1px] bg-white opacity-20 flex items-center"></div>
            </div>
          ))}
        </div>
      </div>
      v
    </div>
  );
}