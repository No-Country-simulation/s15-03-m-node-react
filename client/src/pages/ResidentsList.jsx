import React from "react";

function ResidentsList() {
  return (
    <div>
        {/*Botones categorías bases de datos */}
      <div class="flex justify-center items-center bg-gray-100">
        <div class="bg-white p-4 rounded-2xl shadow-lg">
          <div class="flex space-x-4">
            <button class="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none">
              Pendientes por aprobar
            </button>
            <button class="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none">
              Usuarios denegados
            </button>
            <button class="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none">
              Ex residentes
            </button>
          </div>
        </div>
      </div>

      {/*Filtro de búsqueda*/}
      <div class="flex items-center bg-blue-100 rounded-md mb-4">
        <span class="text-gray-500 ml-4"><i class="fas fa-search"></i></span>
        <input class="bg-blue-100 outline-none p-2 rounded-md w-full" type="text" placeholder="Buscar"/>
      </div>

      {/*Tabla bases de datos residentes activos */}
      <table class="min-w-full">
          <thead>
            <tr class="text-left bg-blue-200">
              <th class="px-4 py-2">Apartamento</th>
              <th class="px-4 py-2">Tipo</th>
              <th class="px-4 py-2">Contacto primario</th>
              <th class="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            <tr class="border-b">
              <td class="px-4 py-2">401 A</td>
              <td class="px-4 py-2">Inquilino</td>
              <td class="px-4 py-2">Carlos Andrés Ramírez</td>
              <td class="px-4 py-2">
                <button class="text-blue-500 hover:text-blue-600 focus:outline-none mr-2"><i class="fas fa-edit"></i> Modificar</button>
                <button class="text-red-500 hover:text-red-600 focus:outline-none"><i class="fas fa-trash-alt"></i> Eliminar</button>
              </td>
            </tr>
            <tr class="border-b">
              <td class="px-4 py-2">401 A</td>
              <td class="px-4 py-2">Inquilino</td>
              <td class="px-4 py-2">Carlos Andrés Ramírez</td>
              <td class="px-4 py-2">
                <button class="text-blue-500 hover:text-blue-600 focus:outline-none mr-2"><i class="fas fa-edit"></i> Modificar</button>
                <button class="text-red-500 hover:text-red-600 focus:outline-none"><i class="fas fa-trash-alt"></i> Eliminar</button>
              </td>
            </tr>
            <tr class="border-b">
              <td class="px-4 py-2">401 A</td>
              <td class="px-4 py-2">Inquilino</td>
              <td class="px-4 py-2">Carlos Andrés Ramírez</td>
              <td class="px-4 py-2">
                <button class="text-blue-500 hover:text-blue-600 focus:outline-none mr-2"><i class="fas fa-edit"></i> Modificar</button>
                <button class="text-red-500 hover:text-red-600 focus:outline-none"><i class="fas fa-trash-alt"></i> Eliminar</button>
              </td>
            </tr>
            <tr class="border-b">
              <td class="px-4 py-2">401 A</td>
              <td class="px-4 py-2">Inquilino</td>
              <td class="px-4 py-2">Carlos Andrés Ramírez</td>
              <td class="px-4 py-2">
                <button class="text-blue-500 hover:text-blue-600 focus:outline-none mr-2"><i class="fas fa-edit"></i> Modificar</button>
                <button class="text-red-500 hover:text-red-600 focus:outline-none"><i class="fas fa-trash-alt"></i> Eliminar</button>
              </td>
            </tr>
            <tr class="">
              <td class="px-4 py-2">401 A</td>
              <td class="px-4 py-2">Inquilino</td>
              <td class="px-4 py-2">Carlos Andrés Ramírez</td>
              <td class="px-4 py-2">
                <button class="text-blue-500 hover:text-blue-600 focus:outline-none mr-2"><i class="fas fa-edit"></i> Modificar</button>
                <button class="text-red-500 hover:text-red-600 focus:outline-none"><i class="fas fa-trash-alt"></i> Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  );
}

export default ResidentsList;
