import { useEffect, useState } from "react";
import TableAdmin from "../../components/AcceptPersonal/TableAdmin";
import { useContext } from "react";
import { Context } from "../../context/Context";

function AceptManagment() {
  const { users, getApartments, apartments, getUsers } = useContext(Context);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    getApartments();
    getUsers();
  }, []);

  const [completeUser, setCompleteUser] = useState([]);
  useEffect(() => {
    if (users.length > 0 && apartments.length > 0) {
      const combinedData = users.map((user) => {
        const userApartment = apartments.find(
          (apartment) => apartment.id === user.id_apartment
        );
        return {
          ...user,
          apartment: userApartment || null, // Si no se encuentra el apartamento, se establece como null
        };
      });
      setCompleteUser(combinedData);
    }
  }, [users, apartments]);

  const [tabState, setTabState] = useState(0);
  const array = [
    <TableAdmin data={completeUser} key={0} status="Pending" />,
    <TableAdmin data={completeUser} key={1} status="Acepted" />,
    <TableAdmin data={completeUser} key={2} status="Rejected" />,
    <TableAdmin data={completeUser} key={3} status="OlderPersonal" />,
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
            defaultChecked={isChecked}
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
