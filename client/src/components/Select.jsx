const Select = ({ title, options, handleChange, register, name }) => {
  const nombre = name === "id_apartamento" ? "Apartamento" : "Edificio";

  return (
    <div className="form-control w-full">
      <p>{title}</p>
      <select
        name={name}
        {...register(name, { required: true })}
        className="select select-primary bg-base-200 w-full"
      >
        <option disabled selected></option>
        {options &&
          options.length > 0 &&
          options.map((option) => (
            <option
              onClick={handleChange}
              value={option.id}
              key={option.id}
            >{`${nombre} ${option.numero}`}</option>
          ))}
      </select>
    </div>
  );
};

export default Select;
