import Pending from "../../components/AcceptPersonal/Pending";
import Acepted from "../../components/AcceptPersonal/Acepted";
import Rejected from "../../components/AcceptPersonal/Rejected";
import OlderPersonal from "../../components/AcceptPersonal/OlderPersonal";
import BarTitle from "../../components/AcceptPersonal/BarTitle";

const data = [
  {
    id: 1,
    apartment: "401 A",
    type: "Inquilino",
    contact: "Miguel",
  },
  {
    id: 2,
    apartment: "401 A",
    type: "Inquilino",
    contact: "Carlos",
  },
  {
    id: 3,
    apartment: "401 A",
    type: "Inquilino",
    contact: "Lina",
  },
  {
    id: 4,
    name: "Ignacio",
    apartment: "401 A",
    type: "Inquilino",
    contact: "Facundo",
  },
  {
    id: 5,
    apartment: "401 A",
    type: "Inquilino",
    contact: "Franco",
  },
  {
    id: 6,
    apartment: "401 A",
    type: "Inquilino",
    contact: "Edivaldo",
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
