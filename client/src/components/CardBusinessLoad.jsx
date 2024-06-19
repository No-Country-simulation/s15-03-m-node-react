function CardBusinessLoad(item) {

    const { id, titulo, mensaje } = item.item; 

  return (
    <div className=" bg-[#F5F6FA] rounded-3xl">
      <img
        src={`/img/image_3${id}.jpg`}
        alt="Churros caseros rellenos con dulce de leche y crema pastelera"
        className="w-full rounded-tl-3xl"
      />
      <div className="p-4 rounded-br-3xl">
        <h3 className="font-semibold">{titulo}</h3>
        <p className="text-sm">
         {mensaje}
        </p>
        {/* <p className="text-sm py-2">Departamento: 5A</p>
        <p className="text-sm">Contacto: +54 9 2333482373</p> */}
      </div>
    </div>
  );
}

export default CardBusinessLoad;
