import React from 'react'
// importar componentes

import NavBar from '../components/NavBar/NavBar'
import PostThumbnail from '../components/PostThumbnail/PostThumbnail'
import CarouselClient from '../components/CarouselClient/CarouselClient'
import CardProperty from '../components/CardProperty/CardProperty'



export default function Home() {
  return (
    <>
    <main>
      <NavBar />
      <PostThumbnail />
      <CarouselClient />
      <CardProperty />
      <h1 className="text-3xl text-center font-bold">C15-03-m-node-react</h1>
      <button className="btn btn-primary">Click me</button>
    </main>
  </>
  )
}

//export default Home;
