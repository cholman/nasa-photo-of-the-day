import React from "react";
import NasaCard from "./NasaCard";

const NasaText = (props) =>{
    return (
        <>
            <p>{props.nasaData.explanation}</p>
        </>
    )

}

export default NasaText;