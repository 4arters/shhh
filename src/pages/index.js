import GameBoard from "@/components/gameBoard";
import Head from "next/head";
import React from "react";
import WeatherInfo from "@/components/weather";
import Home from "./api/apif d";
import Api from "../components/weather_api";


export default function Index() {
  return (
    <>
      <Head>
        <title>Component tutorial</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-full bg-slate-900 py-20 px-20">
        <div className="text-3xl text-white font-bold text-center uppercase">
          Weather
        </div>
        <Api/>
      </div>
    </>
  );
}