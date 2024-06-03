import React from "react";
import image6 from "../../assets/Frame 9.png";
import image7 from "../../assets/Frame 10.png";
import image8 from "../../assets/Frame 11.png";
import image9 from "../../assets/Frame 12.png";

function CardProperty() {
  return (
    <section id="cardProperty" className="text-center">
      <h1 className="text-3xl font-libre font-bold text-center mb-4 mt-20">
        Características principales
      </h1>
      
      <div className="flex flex-col lg:flex-row justify-center lg:space-x-3 p-9 bg-base-100 w-9/12 mx-auto">
        <div className="w-full lg:w-1/4 mb-3 lg:mb-0">
          <img src={image6} alt="icon" className="rounded-box mx-auto" />
        </div>
        <div className="w-full lg:w-1/4 mb-3 lg:mb-0">
          <img src={image7} alt="icon" className="rounded-box mx-auto" />
        </div>
        <div className="w-full lg:w-1/4 mb-3 lg:mb-0">
          <img src={image8} alt="icon" className="rounded-box mx-auto" />
        </div>
        <div className="w-full lg:w-1/4 mb-3 lg:mb-0">
          <img src={image9} alt="icon" className="rounded-box mx-auto" />
        </div>
      </div>
    </section>
  );
}

export default CardProperty;

