import React from 'react'
// importar componentes

import NavBar from '../components/NavBar/NavBar'
import PostThumbnail from '../components/PostThumbnail/PostThumbnail'
import PostAboutUs from '../components/PostAboutUs/PostAboutUs'
import CarouselClient from '../components/CarouselClient/CarouselClient'
import OurPlants from '../components/OurPlans/OurPlans'
import CardProperty from '../components/CardProperty/CardProperty'
import Testimonials from '../components/Testimonials/Testimonials'
import ContactForms from '../components/ContactForms/ContactForms'
import Footer from '../components/Footer/Footer'




export default function Home() {
  return (
    <>
    <main>
      <NavBar />
      <PostThumbnail />
      <CarouselClient />
      <CardProperty />
      <PostAboutUs />
      <OurPlants />
      <Testimonials />
      <ContactForms />
      <Footer />

     </main>
  </>
  )
}

//export default Home;
