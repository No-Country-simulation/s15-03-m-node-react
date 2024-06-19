import { Link } from "react-router-dom";
import adminImg from "../../assets/Frame 125.png";
import { useForm } from "react-hook-form";
import Context from "../../context/Context";
import { useContext } from "react";

const Login = () => {
  const { loginUser } = useContext(Context);

  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const { email, password } = data;
    try {
      await loginUser(email, password);
      console.log("Se inicio sesion correctamente!!!");
    } catch (error) {
      console.log("error", error);
    }
  });

  return (
    <div className="bg-base-100 py-8 flex justify-between gap-6 md:w-[90%] md:mx-auto lg:w-full lg:py-12 flex-row lg:pl-0">
      <section className=" md:w-full lg:w-1/2 px-3 ">
        <h1 className="text-3xl pb-2 font-semibold font-libre lg:text-4xl">
          Bienvenido usuario de <br />
          <span className="text-primary">Building Hub</span>
        </h1>
        <p className="text-sm pb-6 lg:text-base font-worksans">
          Inicie sesión en su cuenta para aprovechar todas las <br />{" "}
          funcionalidades de la plataforma.
        </p>
        <p className="font-bold font-worksans">Datos de inicio </p>
        <form onSubmit={onSubmit} className="flex flex-col gap-9">
          <div className="flex flex-col gap-5 pb-3">
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-worksans"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="ejemplo@ejemplo.com"
                className="w-11/12 mt-1 px-4 py-2 bg-base-200 border border-primary rounded-md focus:outline-none focus:border-primary"
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 font-worksans"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="********"
                className="w-11/12 mt-1 px-4 py-2 bg-base-200 border border-primary rounded-md focus:outline-none focus:border-primary"
                {...register("password", { required: true })}
              />
              <div className="text-sm mt-2"></div>
            </div>
          </div>
          <a className="text-sm text-l  text-end -m-10 mr-10" href="#">
            ¿Olvidó su contraseña?
          </a>
          <div className="flex flex-col gap-4">
            <div className="flex justify-start gap-4 items-center">
              <button
                type="submit"
                className="btn bg-secondary font-semibold text-[#000]"
              >
                Iniciar sesión
              </button>
              <div className="text-sm text-center mt-8 ml-4">
                ¿No tienes una cuenta?{" "}
                <Link
                  className="text-sm mx-2 text-primary"
                  to="/register-admin"
                >
                  Registro
                </Link>
              </div>
            </div>
          </div>
        </form>
      </section>
      <div className="min-w-[27.25rem] hidden lg:block">
        <img
          src={adminImg}
          alt="Edificio"
          className="lg:max-h-[40rem] lg:w-full pt-2"
        />
      </div>
    </div>
  );
};

export default Login;
