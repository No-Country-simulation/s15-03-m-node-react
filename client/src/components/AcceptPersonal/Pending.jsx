import { FaCheck } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import OlderPersonal from "./OlderPersonal";
import Rejected from "./Rejected";
import Acepted from "./Acepted";

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

function Pending() {
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
        <div role="tabpanel" className="tab-content p-10">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 mt-10">
            <div className="overflow-x-auto">
              <div className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Nombre
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Edificio
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Apartamento
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data &&
                      data.map((item) => (
                        <tr key={item.id} className="hover">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
                            {item.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                            {item.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                            {item.building}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                            {item.apartment}
                          </td>
                          <td>
                            <span className="flex items-center">
                              <span className="mr-2 btn btn-outline btn-success btn-sm mt-2">
                                <FaCheck size={20} />
                              </span>
                              <span className="btn btn-outline btn-error btn-sm mt-2">
                                <IoCloseOutline size={20} />
                              </span>
                            </span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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
          <OlderPersonal data={data} />
        </div>
      </div>
    </>
  );
}

export default Pending;
