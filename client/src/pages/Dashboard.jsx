import React from "react";
import NavbarAdmin from "../components/NavbarAdmin";

const Dashboard = () => {
  return (
    <>
      <NavbarAdmin />

      {/*Sección Datos Unidad Residencial y Administración*/}
      <div className="w-screen mx-auto p-10 shadow-md text-xl mt-12">
        <div className="flex justify-between items-center mb-4">
          <div className="rounded-tl-3xl p-2">
            <h2 className="text-4xl font-semibold">
              Datos perfil Unidad Residencial
            </h2>
          </div>
          <div className="rounded-tr-3xl bg-gray-200 p-2"></div>
        </div>
        <div className="border-2 rounded-3xl grid grid-cols-2 gap-4 p-8">
          <div>
            <p className="py-3">
              <span className="font-semibold">Nombre:</span> UNIDAD RESIDENCIAL
              SANTA CLARA
            </p>
            <p className="py-3">
              <span className="font-semibold">Ciudad:</span> Cali - Valle del
              Cauca
            </p>
            <p className="py-3">
              <span className="font-semibold">Dirección:</span> Cra 102 # 54-96
              - Barrio El Ingenio
            </p>
            <p className="py-3">
              <span className="font-semibold">Teléfono:</span> 3215784586
            </p>
          </div>
          <div>
            <p className="py-3">
              <span className="font-semibold">Administración:</span> ABIGAIL
              RUEDA
            </p>
            <p className="py-3">
              <span className="font-semibold">Teléfono:</span> 3185478569
            </p>
            <p className="py-3">
              <span className="font-semibold">E-mail:</span>{" "}
              abigailrueda@gmail.com
            </p>
            <p className="py-3">
              <span className="font-semibold">Cantidad Unidades:</span> 160
              apartamentos
            </p>
          </div>
        </div>
      </div>

      {/*Sección últimos residentes registrados y torta suscritos*/}
      <div className="p-10 grid grid-cols-2 gap-4">
        <div className="overflow-x-auto">
          <h2 className="text-4xl font-semibold mb-12">
            Listado de últimos residentes aprobados
          </h2>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Tipo</th>
                <th>Fecha creación</th>
                <th>Habeas Data</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Carlos Pérez</div>
                      <div className="text-sm opacity-50">401-2</div>
                    </div>
                  </div>
                </td>
                <td>Inquilino</td>
                <td>Mayo 21 - 2024</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
              {/* row 2 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://img.daisyui.com/tailwind-css-component-profile-3@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Cintya Correa</div>
                      <div className="text-sm opacity-50">901-4</div>
                    </div>
                  </div>
                </td>
                <td>Propietario</td>
                <td>Mayo 19 - 2024</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
              {/* row 3 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://img.daisyui.com/tailwind-css-component-profile-4@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Magaly Diaz</div>
                      <div className="text-sm opacity-50">703-2</div>
                    </div>
                  </div>
                </td>
                <td>Inquilino</td>
                <td>Mayo 15 - 2024</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
              {/* row 4 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://img.daisyui.com/tailwind-css-component-profile-5@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Patricia Rivera</div>
                      <div className="text-sm opacity-50">101-3</div>
                    </div>
                  </div>
                </td>
                <td>Propietario</td>
                <td>Mayo 11 - 2024</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-4xl font-semibold mb-8">
            Relación cantidad de residentes suscritos y aprobados
          </h2>
          <img
            className="mx-auto w-2/5"
            src="https://c8.alamy.com/compes/j87dya/azul-grafico-tortas-pasteles-tartas-porcentaje-grafico-blanco-azul-calculo-grafico-j87dya.jpg"
            alt="imagen relación suscritos"
          />
        </div>
      </div>
      {/*Sección resumen de actividad*/}
      <h2 className="text-4xl font-semibold mb-12 text-center pt-10">
        Resúmen Actividad
      </h2>
      <div className="grid grid-cols-3 justify-center">
        <div className="bg-green border-2 rounded-md p-8 m-12 text-center gap-x-10">
          <p className="">Aprobaciones</p>
          <p>Pendientes</p>
          <p>15</p>
        </div>

        <div className="bg-green border-2 rounded-md p-8 m-12 text-center gap-x-10">
          <p className="">Publicaciones</p>
          <p>Board de negocios</p>
          <p>180</p>
        </div>

        <div className="bg-green border-2 rounded-md p-8 m-12 text-center gap-x-10">
          <p className="">Total residentes</p>
          <p>Suscritos</p>
          <p>120</p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
