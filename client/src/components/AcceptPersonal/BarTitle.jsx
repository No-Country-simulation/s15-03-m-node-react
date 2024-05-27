function BarTitle({ title }) {
  return (
    <div className="card w-100 h-15 mt-3 bg-gray-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  );
}

export default BarTitle;
