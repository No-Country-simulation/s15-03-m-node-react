import ModalReserva from "./ModalReserva.jsx";
import { Button } from "flowbite-react";
import { useState } from "react";

function ReservationsCard({ zone }) {
  const [openModal, setOpenModal] = useState(false);

  const { id, nombre, image } = zone;

  return (
    <div className="card bg-base-100 shadow-sm border rounded-[32px] rounded-r-lg">
      <figure>
        <img className="w-full" src={`/img/${image}`} alt="zone" />
      </figure>
      <div className="card-body border-[#483AE7] border-t-[10px] bg-[#EEF2FF]">
        <h2 className="card-title text-2xl">{nombre}</h2>

        <div className="card-actions justify-end">
          {/* <button className="btn btn-primary text-xl bg-[#483AE7]">
            Reservar
          </button> */}

          <>
            <Button
              className="btn btn-primary text-xl bg-[#483AE7]"
              onClick={() => setOpenModal(true)}
            >
              Reservar
              
            </Button>

            {openModal && (<ModalReserva/>)}

           
            
          </>
        </div>
      </div>
    </div>
  );
}

export default ReservationsCard;
