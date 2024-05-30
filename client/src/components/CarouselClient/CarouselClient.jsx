import React from "react";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import Image1 from "../../assets/Group 8.png";
import Image2 from "../../assets/Group 9.png";
import Image3 from "../../assets/Group 10.png";
import Image4 from "../../assets/Group 8.png";
import Image5 from "../../assets/Group 9.png";

const CarouselClient = () => {
  const images = [Image1, Image2, Image3, Image4, Image5];

  return (
    <section className="bg-base-300  border-b-primary border-b-[1rem]" >
      <div
        id="carouselclient"
        className="container mx-auto p-4  bg-base-300 text-base-100 w-full py-6 px-3 text-center  lg:pb-12 "
      >
        <h1 className="text-3xl font-libre font-bold text-center mb-4">
          Clientes que confian en nosotros
        </h1>
        <p className="p-2 font-bold font-worksans text-center text-sm">
          Los administradores de edificios de ultima generacionestan acelerando
          el crecimiento de sus <br /> comunidades al tomar decisiones
          estrategicas con ayuda de Building Hub.
        </p>
        <ImageCarousel images={images} />
      </div>
    </section>
  );
};

export default CarouselClient;
