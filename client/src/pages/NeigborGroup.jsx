import { useEffect, useState } from "react";
import CardNeigbor from "../components/CardNeigbor";

const NeigborGroup = () => {
  const [search, setSearch] = useState("");
  const [neigbors, setNeigbors] = useState([]);
  const [originNeigbors, setOriginNeigbors] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => {
        setNeigbors(data.results);
        setOriginNeigbors(data.results);
      });
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);

    if (value === "") {
      setNeigbors(originNeigbors);
    } else {
      const filteredNeigbors = originNeigbors.filter(
        (neigbor) =>
          neigbor.name.first.toLowerCase().includes(search.toLowerCase()) ||
          neigbor.name.last.toLowerCase().includes(search.toLowerCase())
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
        <label className="input input-bordered input-primary mb-4 flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Busca a un vecino por nombre"
            onChange={handleChange}
            value={search}
          />
          <svg
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
          </svg>
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {neigbors.map((neigbor) => (
          <CardNeigbor
            key={neigbor.login.uuid}
            name={neigbor.name.first + " " + neigbor.name.last}
            image={neigbor.picture.large}
            dpto={neigbor.location.state}
            phone={neigbor.phone}
          />
        ))}
      </div>
    </div>
  );
};

export default NeigborGroup;
