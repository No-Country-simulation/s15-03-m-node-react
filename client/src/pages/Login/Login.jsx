import React from "react";

function Login() {
  return (
    <div className="grid grid-cols-4 h-screen">
      {/* Columna izquierda para la imagen de la empresa */}
      <div
        className="bg-cover col-span-2"
        style={{
          backgroundImage: `url("https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg")`,
        }}
      ></div>

      {/* Columna derecha para el contenido */}
      <div className="col-span-2 bg-gray-100 flex flex-col justify-center items-center">
        {/* Logo de la empresa */}
        <img
          src=""
          alt="Logo Empresa"
          className="w-24 h-24 mb-4 mt-4"
        />

        {/* Título "Inicio de sesión" */}
        <h2 className=" text-2xl  font-semibold mb-4">
          Iniciar de sesión 
        </h2>

        {/* Formulario de inicio de sesión */}
        <form className="w-full max-w-sm">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700  font-bold"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-70 font-poppins font-bold"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="text-sm text-l mt-[1.6rem]">
            <a
              className="text-sm  mr-px "
              href="#"
            >
              ¿olvido contraseña?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-[#0f0f0f] hover:bg-[#d8d8d8] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          >
            Iniciar sesión
          </button>
          <div className="text-sm text-center mt-[1.6rem">
            ¿No tienes una cuenta?
            <a
              className="text-sm mx-2"
              href="#"
            >
              registro
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
