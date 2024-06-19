const CardOurPlans = ({ data, scale }) => {
  return (
    <div
      className={`bg-[#DFE6FF] space-y-6 rounded-lg md:w-72 shadow-lg lg:w-64 ${scale} xl:w-72`}
    >
      <div className="card-body p-0 ">
        <h2 className=" text-xl font-medium rounded-t-lg p-3 text-[#F5F6FA] bg-[rgb(72,58,231)] lg:text-2xl">
          {data.title}
        </h2>
        <p className="text-start px-4 pt-2 text-sm font-semibold">Incluye:</p>
        <ul className=" text-start py-1 text-sm space-y-2 md:h-72 lg:h-80 list-disc px-8">
          {data.content &&
            data.content.map((item) => {
              return (
                <span key={item.id}>
                  <li className="pt-2">{item.text}</li>
                </span>
              );
            })}
        </ul>
      </div>
      <div className="pb-4 px-3">
        <button className="btn btn-secondary w-full">Comenzar</button>
      </div>
    </div>
  );
};

export default CardOurPlans;
