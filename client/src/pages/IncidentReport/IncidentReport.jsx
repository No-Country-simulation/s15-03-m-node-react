import CardIncidentsAndBusiness from "../../components/CardIncidentsAndNews/CardIncidentsAndNews";
import incidentReport from "../../utils/incidentReport";
import ButtonModalIncidentAndBusiness from "../../components/ButtonModalIncidentAndBusiness/ButtonModalIncidentAndBusiness";

const IncidentReport = () => {
  return (
    <section className="px-3 pb-8 md:w-[90%] md:mx-auto md:py-6 xl:py-10">
      <h2 className=" font-libre font-bold py-3 text-2xl xl:text-4xl">
        Reporte de <span className=" text-primary">incidentes</span>
      </h2>
      <p className=" text-sm text-base-300">
        La herramienta de reporte de incidentes está diseñada para mantener tu
        edificio en óptimas condiciones y garantizar la satisfacción y seguridad
        de todos los residentes. Esta funcionalidad permite a los residentes
        informar sobre fallos técnicos, problemas de mantenimiento, y cualquier
        otra situación que requiera atención inmediata. Los reportes se pueden
        enviar directamente desde la aplicación, adjuntando fotos y
        descripciones detalladas para una mejor evaluación.
      </p>
      <section className=" my-5 border space-y-4 border-primary rounded-md p-5 bg-base-200">
        <div className=" space-y-3 md:flex items-center justify-between md:space-y-0">
          <div className=" flex items-center space-x-3 md:space-y-0">
            <label className="text-sm font-semibold" htmlFor="date">
              Ordenar por fecha:
            </label>
            <select
              className="py-1 text-sm px-5 border border-primary rounded-md font-semibold select-primary bg-base-100"
              name="date"
              id="date"
            >
              <option value="Más recientes">Más recientes</option>
              <option value="Más recientes">Más antiguos</option>
            </select>
          </div>
          <ButtonModalIncidentAndBusiness
            buttonName="Reportar incidente"
            title="Reportar"
            spanTitle="incidente"
            buttonNameSubmit="Reportar"
          />
        </div>
        <div className=" space-y-5">
          {incidentReport &&
            incidentReport.map((report, index) => {
              const {
                residentName,
                profileImage,
                reportTitle,
                description,
                apartament,
                date,
              } = report;
              return (
                <div key={index}>
                  <CardIncidentsAndBusiness
                    residentName={residentName}
                    profileImage={profileImage}
                    reportTitle={reportTitle}
                    description={description}
                    apartament={apartament}
                    date={date}
                  />
                </div>
              );
            })}
        </div>
      </section>
    </section>
  );
};

export default IncidentReport;
