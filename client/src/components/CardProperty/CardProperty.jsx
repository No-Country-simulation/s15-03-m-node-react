import React from "react";
import image6 from "../../assets/Frame 9.png";
import image7 from "../../assets/Frame 10.png";
import image8 from "../../assets/Frame 11.png";
import image9 from "../../assets/Frame 12.png";
import image10 from "../../assets/Frame 9.png";
import image11 from "../../assets/Frame 10.png";

function CardProperty() {
  return (
    <section className='text-center '>
        <h1 className='text-3xl font-libre font-bold text-center mb-4 mt-20' >Caracteristicas principales</h1>
      
      <div className="carousel rounded-box p-9 space-x-4  bg-base-100">
        <div className="carousel-item w-1/4">
          <img src={image6} alt="icon" />
        </div>
        <div className="carousel-item w-1/4">
          <img src={image7} alt="icon" />
        </div>
        <div className="carousel-item w-1/4">
          <img src={image8} alt="icon" />
        </div>
        <div className="carousel-item w-1/4">
          <img src={image9} alt="icon" />
        </div>
        <div className="carousel-item w-1/4">
          <img src={image10} alt="icon" />
        </div>
        <div className="carousel-item w-1/4">
          <img src={image11} alt="icon" />
        </div>
        <div className="carousel-item w-1/4">
          <img src={image6} alt="icon" />
        </div>
      </div>
    </section>
  );
}

export default CardProperty;
