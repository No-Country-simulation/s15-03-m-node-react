import CardOurPlans from "../CardOurPlans/CardOurPlans";
import data from "./data";

const OurPlans = () => {
  return (
    <section
      id="plans"
      className="py-6 px-3 text-center space-y-3 bg-[#171925] border-b-[#483AE7] border-b-[1rem] lg:pb-12"
    >
      <div className="lg:w-[90%] mx-auto">
        <div className="md:w-[75%] md:mx-auto">
          <h2 className=" text-3xl pb-2 font-medium text-[#EEF2FF] xl:text-4xl">
            Nuestros planes
          </h2>
          <p className=" text-sm text-[#EEF2FF] lg:pb-4 xl:text-base">
            Selecciona el plan que mejor se ajusta a la cantidad de apartamentos
            o unidades en el edificio o barrio privado que habítas
          </p>
        </div>
        <div className=" space-y-5 py-5 md:flex justify-center flex-wrap md:pt-8 md:space-y-0 md:gap-4  lg:gap-8">
          <CardOurPlans data={data[0]} />
          <CardOurPlans scale={"lg:scale-110"} data={data[1]} />

          <CardOurPlans data={data[2]} />
        </div>
      </div>
    </section>
  );
};

export default OurPlans;
