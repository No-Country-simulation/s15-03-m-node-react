import { useContext, useEffect, useState } from "react";
import CardNeigbor from "../components/CardNeigbor";
import Context from "../context/Context";

const NeigborGroup = () => {
  const [search, setSearch] = useState("");
  const [neigbors, setNeigbors] = useState([]);
  const [originNeigbors, setOriginNeigbors] = useState([]);

  const { users, getUsers } = useContext(Context);

  useEffect(() => {
    getUsers();
    setNeigbors(users);
    setOriginNeigbors(users);
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);

    if (value === "") {
      setNeigbors(originNeigbors);
    } else {
      const filteredNeigbors = originNeigbors.filter(
        (neigbor) =>
          neigbor.nombre.toLowerCase().includes(search.toLowerCase()) ||
          neigbor.apellido.toLowerCase().includes(search.toLowerCase())
      );
      setNeigbors(filteredNeigbors);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-[80vh] ">
      <h1 className="text-4xl font-libre font-bold">
        Grupo de <span className="text-primary">vecinos</span>
      </h1>
      <p className="w-3/5">
        La sección de grupo de vecinos de nuestra aplicación permite a los
        residentes conocerse mejor, acceder a datos de contacto y enviarse
        mensajes entre sí. Este espacio facilita la comunicación y colaboración,
        ayudando a construir una comunidad más unida y coordinada dentro del
        edificio.
      </p>
      <div>
        <label className="form-control flex items-center gap-2 input-primary my-6 w-96">
          <input
            type="text"
            className="input input-bordered input-primary w-full"
            placeholder="Busca a un vecino por nombre"
            onChange={handleChange}
            value={search}
          />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg> */}
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {!neigbors ? (
          <div className="flex justify-center items-center w-full min-h-[40vh]">
            <span className="loading loading-bars w-16 h-16"></span>
          </div>
        ) : (
          neigbors.map((neigbor) => (
            <CardNeigbor
              key={neigbor.id}
              name={neigbor.nombre + " " + neigbor.apellido}
              dpto={neigbor.tipo}
              phone={neigbor.telefono}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default NeigborGroup;
