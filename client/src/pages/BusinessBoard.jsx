import axios from "axios";
import ButtonModalNews from "../components/ButtonModalNews/ButtonModalNews";
import CardIncidentsAndNews from "../components/CardIncidentsAndNews/CardIncidentsAndNews";
import { useEffect, useState } from "react";

const BusinessBoard = () => {
  const [newsList, setNewsList] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const URL = "https://api-test.brangerbriz.com/api";

  const getNewsList = async () => {
    try {
      const response = await axios.get(URL + "/anuncio/list");
      const newsListData = await response.data;
      setNewsList(newsListData);
      if (newsListData.length === 0) setMessage("No hay anuncios");
    } catch (error) {
      setMessage("Error al cargar los anuncios");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNewsList();
  }, []);

  return (
    <section className="px-10 min-h-screen pb-8 md:w-[90%] md:mx-auto md:py-6 xl:py-10">
      <h2 className=" font-libre font-bold py-3 text-2xl xl:text-4xl">
        Sala de <span className=" text-primary">negocios</span>
      </h2>
      <p className="text-sm text-base-300">
        Este espacio está diseñado para fomentar el espíritu emprendedor y la
        colaboración entre los residentes, brindando una plataforma donde pueden
        promocionar sus servicios, productos y eventos especiales, así como
        mantenerse informados sobre las iniciativas locales.
      </p>
      <section className=" py-6 space-y-5 lg:space-y-0 grid md:grid-cols-3 gap-8">
        <section className="col-span-2 border space-y-4 border-primary rounded-2xl p-5 bg-base-200">
          <div className=" space-y-3 md:flex items-center justify-between md:space-y-0">
            <h4 className="font-semibold">Anuncios y novedades</h4>
            <ButtonModalNews getNewsList={getNewsList} />
          </div>
          <div className="space-y-5">
            {loading ? (
              <div className=" flex justify-center">
                <p className="loading loading-bars loading-lg text-primary"></p>
              </div>
            ) : message ? (
              <p className=" text-lg text-center font-medium">{message}</p>
            ) : (
              newsList.map((item) => {
                const { id, mensaje, fecha } = item;
                return (
                  <div key={id}>
                    <CardIncidentsAndNews
                      reportTitle={
                        "Cambiar esto por el nombre de quien lo crea"
                      }
                      description={mensaje}
                      date={fecha}
                    />
                  </div>
                );
              })
            )}
          </div>
        </section>
        <section className="border space-y-4 border-[#FF9337] rounded-2xl p-5 bg-[#FFF7ED]">
        <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Negocios</h2>
                    <button className="bg-[#FF9337] text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">Agregar negocio</button>
                </div>
                <div className="flex flex-col justify-items-center space-y-4 rounded-2xl bg-[#F5F6FA] max-w-sm mx-auto">
                    <div className="pb-4">
                        <img src="https://placehold.co/300x200.png" alt="Churros caseros rellenos con dulce de leche y crema pastelera" className="w-full mt-2"/>
                        <h3 className="font-semibold">La Churrería</h3>
                        <p className="text-sm">Hago churros caseros rellenos de dulce de leche, crema pastelera, manjar, membrillo o nutella.</p>
                        <p className="text-sm">Departamento: 5A</p>
                        <p className="text-sm">Contacto: +54 9 2333482373</p>
                    </div>
                    <div>
                        <img src="https://placehold.co/300x200.png" alt="Técnico reparando un dispositivo electrónico" className="w-full mt-2"/>
                        <h3 className="font-semibold">Tech Reparaciones</h3>
                        <p className="text-sm">Reparo celulares, tablets, notebooks, etc.</p>
                        <p className="text-sm">Departamento: 3C</p>
                        <p className="text-sm">Contacto: +54 9 245987372</p>
                    </div>
                </div>
        </section>
      </section>
    </section>
  );
};

export default BusinessBoard;
