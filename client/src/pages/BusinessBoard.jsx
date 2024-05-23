const BusinessBoard = () => {
  const anunciosPrueba = [
    {
      id: 100,
      name: "Juanito",
      message:
        "Oferta de churros rellenos de marroc, envío no incluído en el cargo",
    },
    { id: 101, name: "Pepe", message: "3x2 en venta de libros usados" },
    {
      id: 102,
      name: "Juana",
      message: "A partir de la próxima semana puedo reparar celulares",
    },
  ];

  const negociosPrueba = [
    {
      id: 200,
      name: "La Churrería",
      description:
        "Hago churros caseros rellenos de dulce de leche, pastelera, marroc, membrillo o nutela.",
      address: "3A",
      contact: "233348273",
    },
    {
      id: 201,
      name: "Tech Reparaciores",
      description: "Reparo celulares, tablets, notebooks, etc.",
      address: "5B",
      contact: "249582732",
    },
  ];

  return (
    <div className="flex">
      <section className="w-3/5">
        <h2 className="text-2x1">Anuncios/Novedades</h2>
        {anunciosPrueba.map((anuncio) => (
          <div key={anuncio.id}>
            <h4>{anuncio.name}</h4>
            <p>{anuncio.message}</p>
          </div>
        ))}
      </section>
      <section className="w-2/5 ">
        <h2 className="text-2x1">Negocios Registrados</h2>
        {negociosPrueba.map((negocio) => (
          <div key={negocio.id}>
            <h3>{negocio.name}</h3>
            <p>{negocio.description}</p>
            <p>{negocio.address}</p>
            <p>{negocio.contact}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BusinessBoard;
