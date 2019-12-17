import React from "react";
import NasaCard from "./NasaCard";
import styled from "styled-components";

const NasaText = (props) =>{
    const P = styled.p`
    width: 80%;
    margin: auto;
    margin-top: 1%;
    margin-bottom: 5%;
    `
    return (
        <>
            <P>{props.nasaData.explanation}</P>
        </>
    )

}

export default NasaText;