import welcome from "../../assets/Frame 123.png";
import { Link } from "react-router-dom";

function WelcomeResident() {
  return (
    <section id="welcomeResident" className="hero  bg-base-100 p-3">
      <div className="hero-content flex-col  lg:flex-row-reverse ">
        <img
          className="lg:max-h-[44rem] pt-14 min-w-[35rem] hidden lg:block border-primary  "
          src={welcome}
          alt="foto edificio"
        />
        <div className="m-10">
          <h1 className="text-5xl font-bold font-libre">
            Bienvenido <span className="text-primary">residente</span>
          </h1>
          <p className="py-6 ">
            ¡Bienvenido a Building Hub, la solución integral para la
            administración eficiente de tu comunidad! Nuestra aplicación está
            diseñada para facilitar todas las tareas relacionadas con la gestión
            de edificios. Entre sus múltiples funcionalidades, encontrarás un
            sistema intuitivo para la reserva de espacios comunes y un módulo de
            comunicación que permite enviar anuncios y mensajes a todos los
            residentes. Además, podrás registrar y hacer seguimiento de las
            solicitudes de mantenimiento y utilizar la Sala de Negocios para
            compartir anuncios y novedades con la comunidad. Building Hub está
            aquí para simplificar tu vida y mejorar la calidad de tu entorno
            residencial.
          </p>

          <Link
            className="btn m-2 font-bold bg-secondary"
            to="/welcome-navigation"
          >
            Empezar recorrido
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WelcomeResident;
