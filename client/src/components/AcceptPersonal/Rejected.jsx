import { FaCheck, FaEdit } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

function Rejected({ data }) {
  return (
    <>
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
                    APARTAMENTO
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    TIPO
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    CONTACTO PRIMARIO
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
                        {item.apartment}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                        {item.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                        {item.contact}
                      </td>
                      <td>
                        <span className="flex items-center">
                          <span className="mr-2 btn btn-outline btn-success btn-sm mt-2">
                            <FaCheck size={20} />
                          </span>
                          <span className="mr-2 btn btn-outline btn-info btn-sm mt-2">
                            <FaEdit size={20} />
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
    </>
  );
}

export default Rejected;
