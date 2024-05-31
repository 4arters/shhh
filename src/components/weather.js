import mockData from "@/constants/mockData";
import data from "@/constants/utilities/weather.json";
import React from "react";

let date
export default function WeatherInfo() {
    
  return (
    <>
      <div className="text-2xl text-white col-span-4 text-center">
        Ulaan Baatar
      </div>
      <div className="w-full aspect-square rounded border border-white p-2 mix-blend-luminosity hover:mix-blend-normal transition-all ease-in-out duration-500">

      {
        data.filter((e => e.date === "2024-04-27")).map((e) => {
          return(<div className="`bg-{e.img}`">
              {e.temperature}
            </div>
          )
        })
      }
      </div>
      <img
      src="`{}`">

      </img>
      <div className="grid grid-cols-4 gap-4 w-full">
      
        <div className="w-full aspect-square rounded border border-white p-2 mix-blend-luminosity hover:mix-blend-normal transition-all ease-in-out duration-500">
          {
            data.map((e) => {
              return(
                <div className="text-white">{e.date},{e.humidity},{e.wind}</div>
              
              )

            })
          }
        </div>
        
        
      </div>
    </>
  );
}
