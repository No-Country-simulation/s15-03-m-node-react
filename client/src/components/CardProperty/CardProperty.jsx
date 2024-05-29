import React from "react";

// Componente Card reutilizable
function Card({ image, title, description }) {
  return (
    <div className="card w-64 bg-base-100 shadow-xl mr-6">
      <figure>
        <img className="h-40" src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
}

function CardProperty() {
  // Datos de las tarjetas
  const cards = [
    {
      image:
        "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
      title: "Registro verificado",
      description:
        "Todos los perfiles son verificados por tu administración antes de ser publicados en la plataforma para garantizar una experiencia segura.",
    },
    {
      image:
        "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
      title: "Sala de negocios",
      description:
        "Conecta con otros residentes y descubre los servicios que tiene para ofrecer.",
    },
    {
      image:
        "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
      title: "Reserva tus espacios",
      description:
        "Gestiona la reserva de tus zonas sociales, gimnasio, piscina, y los espacios sociales con los que cuenta tu unidad.",
    },
    {
      image:
        "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
      title: "Servicios de votación",
      description:
        "Buen vecino te ahorra gastos adicionales a tu unidad residencial y permite el servicio de votación en asambleas de copropietarios.",
    },
  ];

  return (
    <div className="text-center m-1">
      <h2 className="text-5xl font-bold m-1 p-2">Principales caracteristicas</h2>

      <div className="flex justify-center space-x-4 m-10 p-4 ">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default CardProperty;
