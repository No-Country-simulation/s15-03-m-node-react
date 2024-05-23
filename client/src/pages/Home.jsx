import React from "react";
import NavBar from "../components/NavBar";
import Feature from "../components/Feature";
import CarouselClient from "../components/CarouselClient";
import Feature2 from "../components/Feature2";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <main>
        <NavBar />
        <Feature />
        <CarouselClient />
        <Card />
       <Feature2 />
         
          
        
      </main>
    </>
  );
}
