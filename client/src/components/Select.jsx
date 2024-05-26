const Select = ({ title }) => {
  return (
    <div className="form-control w-full">
      <p>{title}</p>
      <select className="select border-primary bg-base-100 w-full">
        <option disabled selected></option>
        <option>Game of Thrones</option>
        <option>Lost</option>
        <option>Breaking Bad</option>
        <option>Walking Dead</option>
      </select>
    </div>
  );
};

export default Select;
