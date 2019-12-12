import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaImg from "./nasaImg";
import NasaText from "./nasaText";
import NasaTitle from "./NasaTitle";

const NasaCard = () => {
  const [nasaData, setNasaData] = useState([]);


useEffect(() => {
  axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
     .then((res) => {console.log(res); setNasaData(res.data);
  })
     .catch(err => console.error(err));

}, []); return (
      <div className="cardContainer">
        <NasaTitle nasaData={nasaData}/>
        <NasaImg nasaData={nasaData}/>
        <NasaText nasaData={nasaData}/>
      </div>)
}
export default NasaCard;