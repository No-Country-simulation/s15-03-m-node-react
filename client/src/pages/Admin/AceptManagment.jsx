import Pending from "../../components/AcceptPersonal/Pending";
import Acepted from "../../components/AcceptPersonal/Acepted";
import Rejected from "../../components/AcceptPersonal/Rejected";
import OlderPersonal from "../../components/AcceptPersonal/OlderPersonal";

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
      <div className="flex items-center justify-center h-screen">
        <div role="tablist" className="tabs tabs-boxed w-100 h-15 shadow-xl">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Pendentes por aprobar"
          />
          <div role="tabpanel" className="tab-content p-5">
            {/*  <BarTitle title={`Listado de pendentes`} />*/}
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
            {/* <BarTitle title={`Listado de aceptados`} /> */}

            <Acepted data={data} />
          </div>
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Usuarios denegados"
          />
          <div role="tabpanel" className="tab-content p-10">
            {/* <BarTitle title={`Listado de Denegados`} />*/}

            <Rejected data={data} />
          </div>
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Ex residentes"
          />
          <div role="tabpanel" className="tab-content p-10">
            {/* <BarTitle title={`Listado de ex-residentes`} />*/}
            <OlderPersonal data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default AceptManagment;
