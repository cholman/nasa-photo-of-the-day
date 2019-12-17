import React from "react";
import NasaCard from "./components/NasaCard";
import "./App.css";
import styled from "styled-components";




function App() {
  const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    margin: auto;
  `
  
  return (
    
    <Container>
      <h1>Nasa Photo of the Day</h1>
      <NasaCard />
      
    </Container>
  );
}

export default App;
