import { useState } from "react";
import useCustomForm from "../../hooks/useCustomForm";
import InputField from "../InputField";

const DinamicForm = ({ type }) => {
  const types = {
    members: {
      url: "/users",
      name: "Miembro",
      input1: "Nombre",
      input2: "Apellido",
      input3: "Identificación (DNI, Pasaporte, etc.)",
      input4: "Telefono",
    },
    pets: {
      url: "/pets",
      name: "Mascota",
      input1: "Nombre",
      input2: "Especie",
      input3: "Raza",
    },
    cars: {
      url: "/cars",
      name: "Vehiculo",
      input1: "Marca",
      input2: "Modelo",
      input3: "Patente",
      input4: "Color",
    },
  };

  const currentType = types[type];

  const { register, errors } = useCustomForm({ urlApi: currentType.url });

  const [extras, setExtras] = useState([]);

  const addExtra = (data) => {
    setExtras([...extras, data]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    addExtra(data);
    e.target.reset();
  };

  return (
    <>
      {extras.map((e, i) => (
        <div key={i}>
          <p className="font-bold">
            {currentType.name} {i + 1}
          </p>
          <form
            className="lg:grid lg:grid-cols-2 gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <InputField
              text={currentType.input1}
              type="text"
              name="firstName"
              register={register}
              errors={errors}
              value={e.firstName}
            />
            <InputField
              text={currentType.input2}
              type="text"
              name="lastName"
              register={register}
              errors={errors}
              value={e.lastName}
            />
            <InputField
              text={currentType.input3}
              type="text"
              name="dni"
              register={register}
              errors={errors}
              value={e.dni}
            />
            {(type === "members" || type === "cars") && (
              <InputField
                text={currentType.input4}
                type="text"
                name="phone"
                register={register}
                errors={errors}
                value={e.phone}
              />
            )}
            <div className="flex justify-end gap-4 col-span-2 mt-4 lg:mt-0">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setExtras(extras.filter((_, j) => j !== i));
                }}
                className="btn btn-secondary btn-outline"
              >
                Cancelar
              </button>
              <button type="submit" className="btn btn-secondary">
                Aceptar
              </button>
            </div>
          </form>
        </div>
      ))}
      <p className="font-bold">{currentType.name}</p>
      <form
        className="lg:grid lg:grid-cols-2 lg:gap-6 mt-6"
        onSubmit={handleSubmit}
      >
        <InputField
          text={currentType.input1}
          type="text"
          name="firstName"
          register={register}
          errors={errors}
        />
        <InputField
          text={currentType.input2}
          type="text"
          name="lastName"
          register={register}
          errors={errors}
        />
        <InputField
          text={currentType.input3}
          type="text"
          name="dni"
          register={register}
          errors={errors}
        />
        {(type === "members" || type === "cars") && (
          <InputField
            text={currentType.input4}
            type="text"
            name="phone"
            register={register}
            errors={errors}
          />
        )}
        <div className="flex justify-end gap-4 col-span-2 mt-4 lg:mt-0">
          <button type="submit" className="btn btn-primary">
            Agregar
          </button>
        </div>
      </form>
    </>
  );
};

export default DinamicForm;
