import React from "react";
// importar componentes
import PostThumbnail from "../components/PostThumbnail/PostThumbnail";
import PostAboutUs from "../components/PostAboutUs/PostAboutUs";
import CarouselClient from "../components/CarouselClient/CarouselClient";
import OurPlants from "../components/OurPlans/OurPlans";
import CardProperty from "../components/CardProperty/CardProperty";
import Testimonials from "../components/Testimonials/Testimonials";
import ContactForms from "../components/ContactForms/ContactForms";

export default function Home() {
  return (
    <>
      <main>
        
       <PostThumbnail />
       <OurPlants />
       <Testimonials />
       <ContactForms />
       
      </main>
    </>
  );
}
