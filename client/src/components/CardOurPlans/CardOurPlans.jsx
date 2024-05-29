import React from "react";

const CardOurPlans = ({ title, lists, scale }) => {
  return (
    <div
      className={`bg-[#DFE6FF] space-y-6 rounded-lg md:w-72 shadow-lg lg:w-64 ${scale} xl:w-72`}
    >
      <div className="card-body p-0 ">
        <h2 className=" text-xl font-medium rounded-t-lg p-3 text-[#F5F6FA] bg-[#483AE7] lg:text-2xl">
          {title}
        </h2>
        <p className="text-start px-4 pt-2 text-sm">Incluye:</p>
        <ul className=" text-start py-1 text-sm space-y-2 md:h-72 lg:h-80 list-disc px-8">
          {lists &&
            lists.map((list, index) => {
              return (
                <>
                  <span key={index}>
                    <li>{list}</li>
                  </span>
                </>
              );
            })}
        </ul>
      </div>
      <div className="pb-4 px-3">
        <button className="text-[#171925] text-sm font-semibold rounded-md py-2 w-full bg-[#FF9337]">
          Comenzar
        </button>
      </div>
    </div>
  );
};

export default CardOurPlans;
