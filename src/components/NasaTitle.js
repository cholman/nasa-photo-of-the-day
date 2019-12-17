import React from "react";
import NasaCard from "./NasaCard";

const NasaTitle = (props) => {
    console.log(props);
    return (
        <>
            <h1>{props.nasaData.title}</h1>
        </>
    )
}

export default NasaTitle;