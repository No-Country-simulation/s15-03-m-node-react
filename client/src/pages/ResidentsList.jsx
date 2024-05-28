import React from "react";

function ResidentsList() {
  return (
    <div className="bg-gray-100 h-screen">
      {/*Botones categorías bases de datos */}
      <div className="flex justify-center items-center bg-gray-100 pt-12 pb-9">
        <div className="bg-[#EEF2FF] py-[52px] px-[99px] rounded-2xl border border-1 border-indigo-600">
          <div className="flex space-x-4 text-xl gap-6">
            <button className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg focus:outline-none shadow-xl w-[282px]">
              Pendientes por aprobar
            </button>
            <button className=" bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg focus:outline-none shadow-xl w-[282px]">
              Usuarios denegados
            </button>
            <button className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg focus:outline-none shadow-xl w-[282px]">
              Ex residentes
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#EEF2FF] rounded-2xl border border-1 border-indigo-600 w-[1092px] mx-auto pb-[100px]">
        {/*Filtro de búsqueda*/}
        <div className="relative top-0 left-20 pt-12">
          <input
            type="search"
            placeholder="Buscar"
            className="bg-white pl-10 p-4 py-4 border rounded-full text-sm outline-none focus:border-indigo-600 w-[666px] h-[45px]"
          />
          <div className="absolute top-12 left-0 mt-2 ml-3 text-blue-500">
            <i className="fas fa-search text-2xl"></i>
          </div>
        </div>

        <div className="p-10">
          {/*Tabla bases de datos residentes activos */}
          <table className="w-full">
            <thead>
              <tr className="text-center text-base">
                <th className="px-6 py-3 border-b-2 border-indigo-600">
                  Apartamento
                </th>
                <th className="px-6 py-3 border-b-2 border-indigo-600">Tipo</th>
                <th className="px-6 py-3 border-b-2 border-indigo-600">
                  Contacto primario
                </th>
                <th className="px-6 py-3 border-b-2 border-indigo-600">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="text-center text-xl">
              <tr className="border-b">
                <td className="px-6 py-3 border-b-2 border-indigo-600">
                  401 A
                </td>
                <td className="px-6 py-3 border-b-2 border-indigo-600">
                  Inquilino
                </td>
                <td className="px-6 py-3 border-b-2 border-indigo-600">
                  Carlos Andrés Ramírez
                </td>
                <td className="px-6 py-3 border-b-2 border-indigo-600">
                  <button className="text-blue-500 hover:text-blue-600 focus:outline-none mr-2">
                    <i className="fas fa-edit"></i> Modificar
                  </button>
                  <button className="text-red-500 hover:text-red-600 focus:outline-none">
                    <i className="fas fa-trash-alt"></i> Eliminar
                  </button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-3 border-b-2 border-indigo-600">
                  401 A
                </td>
                <td className="px-6 py-3 border-b-2 border-indigo-600">
                  Inquilino
                </td>
                <td className="px-6 py-3 border-b-2 border-indigo-600">
                  Carlos Andrés Ramírez
                </td>
                <td className="px-6 py-3 border-b-2 border-indigo-600">
                  <button className="text-blue-500 hover:text-blue-600 focus:outline-none mr-2">
                    <i className="fas fa-edit"></i> Modificar
                  </button>
                  <button className="text-red-500 hover:text-red-600 focus:outline-none">
                    <i className="fas fa-trash-alt"></i> Eliminar
                  </button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-3 border-b-2 border-indigo-600">
                  401 A
                </td>
                <td className="px-6 py-3 border-b-2 border-indigo-600">
                  Inquilino
                </td>
                <td className="px-6 py-3 border-b-2 border-indigo-600">
                  Carlos Andrés Ramírez
                </td>
                <td className="px-6 py-3 border-b-2 border-indigo-600">
                  <button className="text-blue-500 hover:text-blue-600 focus:outline-none mr-2">
                    <i className="fas fa-edit"></i> Modificar
                  </button>
                  <button className="text-red-500 hover:text-red-600 focus:outline-none">
                    <i className="fas fa-trash-alt"></i> Eliminar
                  </button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-3 border-b-2 border-indigo-600">
                  401 A
                </td>
                <td className="px-6 py-3 border-b-2 border-indigo-600">
                  Inquilino
                </td>
                <td className="px-6 py-3 border-b-2 border-indigo-600">
                  Carlos Andrés Ramírez
                </td>
                <td className="px-6 py-3 border-b-2 border-indigo-600">
                  <button className="text-blue-500 hover:text-blue-600 focus:outline-none mr-2">
                    <i className="fas fa-edit"></i> Modificar
                  </button>
                  <button className="text-red-500 hover:text-red-600 focus:outline-none">
                    <i className="fas fa-trash-alt"></i> Eliminar
                  </button>
                </td>
              </tr>
              <tr className="">
                <td className="px-6 py-3 border-b-2 border-indigo-600">
                  601 A
                </td>
                <td className="px-6 py-3 border-b-2 border-indigo-600">
                  Inquilino
                </td>
                <td className="px-6 py-3 border-b-2 border-indigo-600">
                  Carlos Andrés Ramírez
                </td>
                <td className="px-6 py-3 border-b-2 border-indigo-600">
                  <button className="text-blue-500 hover:text-blue-600 focus:outline-none mr-2">
                    <i className="fas fa-edit"></i> Modificar
                  </button>
                  <button className="text-red-500 hover:text-red-600 focus:outline-none">
                    <i className="fas fa-trash-alt"></i> Eliminar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ResidentsList;
