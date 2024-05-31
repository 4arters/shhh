import mockData from "@/constants/mockData";
import data from "@/constants/utilities/my.json";
import React from "react";

export default function SelectHero() {
  return (
    <>
      <div className="text-2xl text-white col-span-4 text-center">
        Select your hero!
      </div>
      <div className="grid grid-cols-4 gap-4 w-full">
      <select>

      {
        data.filter((e => e.age > 16 && e.gender === "boy")).map((e) => {
          return(
            <option>
              {e.name}
            </option>
          )
        })
      }
      
      </select>
        <div className="w-full aspect-square rounded border border-white p-2 mix-blend-luminosity hover:mix-blend-normal transition-all ease-in-out duration-500">
          {
            data.map((e) => {
              return(
                <div className="text-white">{e.age},{e.name},{e.gender}</div>
              
              )

            })
          }
          <img
            src={mockData[0].img}
            alt={mockData[0].name}
            className="object-fit"
          />
        </div>
      </div>
    </>
  );
}
