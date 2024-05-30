import { useState } from 'react';
import ReservationsCard from "../components/ReservationsCard";
import { zonesdb } from '../data/zonesdb'

function Reservation() {
 const [data, setData] = useState(zonesdb)



  return (
    <div className="">
      <div className="px-[120px] pt-24 pb-10">
        <h1 className="font-libre text-5xl font-bold py-3">Espacios <span className="text-primary">comunes</span></h1>
        <p className="font-worksans text-xl">
          Gestiona y reserva las áreas comunes de manera rápida y eficiente. Con
          solo unos clics, puede ver la disponibilidad en tiempo real y hacer
          sus reservas de manera rápida y conveniente, asegurando un uso
          organizado y equitativo de las instalaciones compartidas
        </p>
      </div>
      <div className="px-[120px] grid grid-cols-3 gap-6 justify-center pb-32">
        {data.map((zone) =>(
          <ReservationsCard 
          key={zone.id}
          zone={zone}
          />
        ))}
                
      </div>
    </div>
  );
}

export default Reservation;
