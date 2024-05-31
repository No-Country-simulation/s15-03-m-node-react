import { FaCheck, FaEdit } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

function Rejected({ data }) {
  return (
    <>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 primary">
        <div className="overflow-x-auto">
          <div className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
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
              <tbody className="bg-white divide-y divide-gray-200">
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
                        <span className="mr-2 btn btn-outline btn-success btn-sm ">
                          <FaCheck size={20} /> Aceptar
                        </span>
                        <span className="mr-2 btn btn-outline btn-info btn-sm ">
                          <FaEdit size={20} /> Editar
                        </span>
                        <span className="btn btn-outline btn-error btn-sm mr-2">
                          <IoCloseOutline size={20} /> Eliminar
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
