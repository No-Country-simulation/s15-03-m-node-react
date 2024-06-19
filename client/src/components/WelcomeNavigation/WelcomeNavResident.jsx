import { Link } from "react-router-dom";
import welcome from "../../assets/Frame 123.png";

function WelcomeNavResident() {
  return (
    <section
      id="welcomeResident"
      className="hero  bg-base-100 p-3 font-worksans"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          className="lg:max-h-[44rem] pt-14 min-w-[35rem] hidden lg:block border-primary  "
          src={welcome}
          alt="foto edificio"
        />
        <div className="flex flex-col gap-4 text-pretty">
          <h1 className="text-5xl font-bold font-libre">
            Bienvenido <span className="text-primary">residente</span>
          </h1>
          <p>
            ¡Bienvenido a Building Hub, la solución integral para la
            administración eficiente de tu comunidad! Nuestra aplicación está
            diseñada para facilitar todas las tareas relacionadas con la gestión
            de edificios.
          </p>
          <div className="flex flex-col">
            <Link className="btn m-2 font-bold btn-secondary" to="/list-admin">
              Conocé a tu grupo de vecino{" "}
            </Link>
            <Link className="btn m-2 font-bold btn-secondary" to="/login">
              Reporta incidentes
            </Link>
            <Link className="btn m-2 font-bold btn-secondary" to="/login">
              Reservar espacios comunes
            </Link>
            <Link className="btn m-2 font-bold btn-secondary" to="/board">
              Ir a la sala de negocios
            </Link>
            <Link className="btn m-2 font-bold btn-secondary" to="/profile">
              Editar tu perfil
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeNavResident;
