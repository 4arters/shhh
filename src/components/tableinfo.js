import mockData from "@/constants/mockData";
import data from "@/constants/utilities/my.json";
import React from "react";

export default function Table() {
  return (
    <>
    <table className="w-full">
        <th className=" "><tr className="grid grid-cols-6 w-full text-white text-left">
            <th className="px-6 py-3" scope="col">name</th>
            <th className="px-6 py-3" scope="col">age</th>
            <th className="px-6 py-3" scope="col">gender</th>
            <th className="px-6 py-3" scope="col">alive?</th>
            <th className="px-6 py-3" scope="col">occupation</th>
            <th className="px-6 py-3" scope="col">stuff</th>
            

            </tr>
        </th>
        <tbody>
        {
            data.map((e) => {
              return(<tr className="text-white grid grid-cols-6">
                <td className="px-6 py-4">{e.name}</td>
                <td className="px-6 py-4 ">{e.age}</td>
                <td className="px-6 py-4">{e.gender}</td> 
                <td className="px-6 py-2">{e.alive ? "yes ":"no"}</td>
                <td className="px-6 py-2">{e.job}</td>
                <td className="px-6 py-2">
                {
                e.items.map((i) => {
                    return(
                        <div>{i.name}</div>

                    )
                })}
                </td>
                
                </tr>
              )

            })
          }
        </tbody>
    </table>
      {/* <div className="text-2xl text-white col-span-4 text-center">
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
      </div> */}
    </>
  );
}
