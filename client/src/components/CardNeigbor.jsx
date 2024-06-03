const CardNeigbor = ({ name, image, dpto, phone, members, pets }) => {
  return (
    <div className="bg-base-200 shadow-xl w-[24rem] h-[30rem] border rounded-l-3xl border-primary ">
      <div className="bg-primary w-full h-1/3 rounded-tl-2xl flex items-end justify-center">
        <img
          className="w-32 h-32 rounded-full border-base-100 border-2 "
          src={image}
          alt="Imagen de perfil"
        />
      </div>
      <div className="p-6 text-xl h-[calc(100%-33%)] flex flex-col justify-between">
        <div>
          <h3 className="text-center text-2xl mb-1">{name}</h3>
          <p>
            <span className="text-primary"> Departamento: </span> {dpto}{" "}
          </p>
          <p>
            <span className="text-primary"> Telefono: </span> {phone}
          </p>
          <p>
            <span className="text-primary"> Miembros: </span>{" "}
            {members ? members : "No"}
          </p>
          <p>
            <span className="text-primary"> Mascotas: </span>
            {pets ? pets : "No"}
          </p>
        </div>
        <div className="flex justify-end">
          <button className="btn btn-secondary">Contactar</button>
        </div>
      </div>
    </div>
  );
};

export default CardNeigbor;
