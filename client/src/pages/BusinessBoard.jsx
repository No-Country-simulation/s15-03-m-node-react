import PrivacyPolicy from "../components/Modals/Privacy-policy";

const BusinessBoard = () => {
  const anunciosPrueba = [
    {
      id: 100,
      name: "Juanito",
      message:
        "Oferta de churros rellenos de marroc, envío no incluído en el cargo",
      date: "18/05/2024",
    },
    {
      id: 101,
      name: "Pepe",
      message: "3x2 en venta de libros usados",
      date: "18/05/2024",
    },
    {
      id: 102,
      name: "Juana",
      message: "A partir de la próxima semana puedo reparar celulares",
      date: "19/05/2024",
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
    <div>
      <h1 className="text-xl bg-blue-400 text-white text-center">
        Aquí puedes revisar los anuncios y negocios de tus vecinos, o puedes
        crear nuevos!
      </h1>

      <div className="flex">
        <section className="w-2/3">
          <h2 className="text-xl font-bold text-center">Anuncios/Novedades</h2>
          <button className="bg-blue-400 border text-black py-1 pl-1 pr-2 my-3 mx-2">
            Publicar nuevo anuncio
          </button>
          <div>
            {anunciosPrueba.map((anuncio) => (
              <div
                className="border rounded-2xl bg-slate-300 text-black py-1 pl-1 pr-2 my-3 mx-2"
                key={anuncio.id}
              >
                <h4 className="text-lg">{anuncio.name}</h4>
                <p>{anuncio.date}</p>
                <p>{anuncio.message}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="w-1/3">
          <h2 className="text-xl font-bold text-center">
            Negocios Registrados
          </h2>
          <button className="bg-yellow-400 border text-black py-1 pl-1 pr-2 my-3 mx-2">
            Agregar tu negocio
          </button>
          <div>
            {negociosPrueba.map((negocio) => (
              <div
                className="border border bg-slate-300 text-black py-1 pl-1 pr-2 my-3 mx-2"
                key={negocio.id}
              >
                <h3 className="text-center font-bold text-lg">
                  {negocio.name}
                </h3>
                <p>{negocio.description}</p>
                <p>Dirección: {negocio.address}</p>
                <p>Contacto: {negocio.contact}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="flex items-center">
        <input type="checkbox" className="mr-1"></input>
        <PrivacyPolicy />
      </div>
    </div>
  );
};

export default BusinessBoard;