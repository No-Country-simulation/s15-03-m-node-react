import { useState } from "react";
import TableAdmin from "../../components/AcceptPersonal/TableAdmin";

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
  const [tabState, setTabState] = useState(0);
  const array = [
    <TableAdmin data={data} key={0} status="Pending" />,
    <TableAdmin data={data} key={1} status="Acepted" />,
    <TableAdmin data={data} key={2} status="Rejected" />,
    <TableAdmin data={data} key={3} status="OlderPersonal" />,
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-start justify-center mt-8">
        <div
          role="tablist"
          className="tabs tabs-boxed w-[20rem] md:w-[43rem] h-15 shadow-xl flex flex-col md:flex-row items-center justify-center border-primary border p-0 md:p-[1.5rem]"
        >
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Pendentes por aprobar"
            onClick={() => setTabState(0)}
          />

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Aceptados"
            onClick={() => setTabState(1)}
            checked
          />

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Usuarios denegados"
            onClick={() => setTabState(2)}
          />

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Ex residentes"
            onClick={() => setTabState(3)}
          />
        </div>
      </div>

      <div className="p-10 overflow-x-visible md:overflow-none w-[26rem] md:w-[51.2rem]">
        {array[tabState]}
      </div>
    </div>
  );
}

export default AceptManagment;
