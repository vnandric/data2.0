import { getWeather } from "@/app/api/data";
import Image from "next/image";

export default async function Api() {
  const data = await getWeather();

  const date = new Date(data.dt * 1000);
  const time = date.toDateString();

  const temp = (data.main.temp - 273.15).toFixed(2).toString() + " °C";

  return (
    <>
      <div className="text-white">
        <div>{time}</div>
        <div>
          <Image
            alt={data.weather[0].description}
            id={data.weather[0].id}
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
            width={100}
            height={100}
          ></Image>
        </div>
        <div>{temp}</div>
      </div>
    </>
  );
}
