import { IoCloseOutline } from "react-icons/io5";
import SearchInput from "./Search";
import { FaCheck, FaEdit, FaEye } from "react-icons/fa";
import { useContext } from "react";
import { Context } from "../../context/Context";

function TableAdmin({ data, status }) {
  const { userCreated } = useContext(Context);
  console.log(userCreated);

  return (
    <>
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full bg-base-200 shadow-md rounded-xl overflow-x-auto md:overflow-none border-primary border">
          <SearchInput />
          <table className="w-full  divide-y divide-gray-200 rounded-xl bg-base-200 overflow-x-auto md:overflow-none">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider"
                ></th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider"
                >
                  Apartamento
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider"
                >
                  Tipo
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider"
                >
                  Contacto primario
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider"
                >
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data &&
                data.map((item) => (
                  <tr key={item.id} className="hover">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
                      <input
                        type="checkbox"
                        defaultChecked={true}
                        className="checkbox checkbox-sm checkbox-primary"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                      {item.apartment}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      {item.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm  text-center">
                      {item.contact}
                    </td>

                    <td className="text-center">
                      {status === "Acepted" && (
                        <span className="btn btn-outline btn-error btn-sm mt-2">
                          <IoCloseOutline size={20} />
                        </span>
                      )}
                      {status === "Pending" && (
                        <>
                          <span className="mr-2 btn btn-outline btn-success btn-sm">
                            <FaCheck size={20} />
                          </span>
                          <span className="btn btn-outline btn-error btn-sm mr-2">
                            <IoCloseOutline size={20} />
                          </span>
                        </>
                      )}

                      {status === "Rejected" && (
                        <>
                          <span className="mr-2 btn btn-outline btn-success btn-sm ">
                            <FaCheck size={20} />
                          </span>
                          <span className="mr-2 btn btn-outline btn-info btn-sm ">
                            <FaEdit size={20} />
                          </span>
                          <span className="btn btn-outline btn-error btn-sm mr-2">
                            <IoCloseOutline size={20} />
                          </span>
                        </>
                      )}
                      {status === "OlderPersonal" && (
                        <span className="btn btn-outline btn-warning btn-sm mt-2">
                          <FaEye size={20} />
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TableAdmin;
