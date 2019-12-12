import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaImg from "./nasaImg";
import NasaText from "./nasaText";
import NasaTitle from "./NasaTitle";
import styled from "styled-components";

const NasaCard = () => {
  const [nasaData, setNasaData] = useState([]);
  const CardContainer = styled.div`

  max-width: 400px;
  height: auto;
  display: flex;
  background: lightgray;
  border-radius: 10px;
  flex-direction: column;
  align-content: center;
  `;
  const Title = styled.div`

  `;



useEffect(() => {
  axios
    .get("https://api.nasa.gov/planetary/apod?api_key=0Uu4s9ZFIY8Mdl81nCQQtavA14CK9WlzuooieehJ")
     .then((res) => {console.log(res); setNasaData(res.data);
  })
     .catch(err => console.error(err));

}, []); return (
      <CardContainer>   
      <Title>
      <NasaTitle nasaData={nasaData}/>
      </Title>
        <NasaImg nasaData={nasaData} />
        <NasaText nasaData={nasaData} />
      </CardContainer>)
}
export default NasaCard; 