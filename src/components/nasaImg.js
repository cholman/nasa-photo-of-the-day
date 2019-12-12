import React from "react";
import NasaCard from "./NasaCard";

const NasaImg = (props) => {
    if (!props.nasaData.url) return <h3>Loading...</h3>;
    return (
        <>
            <img src={props.nasaData.url}></img>
        </>
    )
}

export default NasaImg;