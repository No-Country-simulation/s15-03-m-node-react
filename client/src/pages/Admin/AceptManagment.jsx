import Pending from "../../components/AcceptPersonal/Pending";
import Acepted from "../../components/AcceptPersonal/Acepted";
import Rejected from "../../components/AcceptPersonal/Rejected";
import OlderPersonal from "../../components/AcceptPersonal/OlderPersonal";
import BarTitle from "../../components/AcceptPersonal/BarTitle";

export const data = [
  {
    id: 1,
    name: "Lina",
    email: "lina@gmail.com",
    building: "T1",
    apartment: "A-12",
  },
  {
    id: 2,
    name: "Edivaldo",
    email: "edivaldo@gmail.com",
    building: "T2",
    apartment: "A-13",
  },
  {
    id: 3,
    name: "Franco",
    email: "franco@gmail.com",
    building: "T3",
    apartment: "A-14",
  },
  {
    id: 4,
    name: "Ignacio",
    email: "ignacio@gmail.com",
    building: "T4",
    apartment: "A-15",
  },
  {
    id: 5,
    name: "Sebastián",
    email: "sebastián@gmail.com",
    building: "T5",
    apartment: "A-16",
  },
  {
    id: 6,
    name: "Facundo",
    email: "facundo@gmail.com",
    building: "T6",
    apartment: "A-17",
  },
];

function AceptManagment() {
  return (
    <>
      <div role="tablist" className="tabs tabs-bordered">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Pendentes"
        />
        <div role="tabpanel" className="tab-content p-5">
          <BarTitle title={`Listado de pendentes`} />
          <Pending data={data} />
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Aceptados"
          checked
        />
        <div role="tabpanel" className="tab-content p-10">
          <BarTitle title={`Listado de aceptados`} />

          <Acepted data={data} />
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Denegados"
        />
        <div role="tabpanel" className="tab-content p-10">
          <BarTitle title={`Listado de Denegados`} />

          <Rejected data={data} />
        </div>
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Antiguos"
        />
        <div role="tabpanel" className="tab-content p-10">
          <BarTitle title={`Listado de ex-residentes`} />
          <OlderPersonal data={data} />
        </div>
      </div>
    </>
  );
}

export default AceptManagment;
