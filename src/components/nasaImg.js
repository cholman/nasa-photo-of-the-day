import React from "react";
import NasaCard from "./NasaCard";
import styled from "styled-components";

const NasaImg = (props) => {
    const Img = styled.img`
    width: 80%;
    height: auto;
    margin: auto;
    `;
    if (!props.nasaData.url) return <h3>Waiting for NASA Photo of the Day API...</h3>;
    return (
        <>
            <Img src={props.nasaData.url}></Img>
        </>
    )
}

export default NasaImg;