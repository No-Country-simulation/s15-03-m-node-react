import React from "react";

function CardProperty() {
  return (
    <div className="flex justify-center space-x-4  m-10 p-4 ">
      <div className="card w-64 bg-base-100 shadow-xl">
        <figure>
          <img className="h-40"
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">Registro verificado</h2>
          <p>Todos los perfiles son verificados por tu administración antes de ser
             publicados en la plataforma para garantizar una experiencia segura.</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <div className=" card w-64 bg-base-100 shadow-xl">
        <figure>
          <img className="h-40"
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">Sala de negocios</h2>
          <p>Conecta con otros residentes y descubre los servicios que tiene para ofrecer.</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <div className=" card w-64 bg-base-100 shadow-xl">
        <figure>
          <img className="h-40"
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">Reserva tus espacios</h2>
          <p>Gestiona la reserva de tus zonas sociales, gimnasio, piscina, y los espacios sociales con los que cuenta tu unidad.</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <div className=" card w-64 bg-base-100 shadow-xl">
        <figure>
          <img className="h-40"
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">Servicios de votación</h2>
          <p>Buen vecino te ahorra gastos adicionales a tu unidad residencial y permite el servicio de votación en asambleas de copropietarios.</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
}

export default CardProperty;
