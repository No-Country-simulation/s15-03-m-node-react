import CardOurPlans from "../CardOurPlans/CardOurPlans";

const OurPlans = () => {
  return (
    <section
      id="plans"
      className="py-6 px-3 text-center space-y-3 bg-[#171925] border-b-[#483AE7] border-b-[1rem] lg:pb-12"
    >
      <div className="lg:w-[90%] mx-auto">
        <div className="md:w-[75%] md:mx-auto">
          <h2 className=" text-3xl pb-2 font-medium text-[#EEF2FF] xl:text-4xl">
            Nuestros planes
          </h2>
          <p className=" text-sm text-[#EEF2FF] lg:pb-4 xl:text-base">
            Selecciona el plan que mejor se ajusta a la cantidad de apartamentos
            o unidades en el edificio o barrio privado que habítas
          </p>
        </div>
        <div className=" space-y-5 py-5 md:flex justify-center flex-wrap md:pt-8 md:space-y-0 md:gap-4  lg:gap-8">
          <CardOurPlans
            title={"Gratuito"}
            lists={[
              "Gestión de Perfiles de Residentes",
              "Registro y administración de información básica de los residentes",
              "Envió de mensajes y anuncios a los residentes",
              "Foro Comunitario",
              "Reservas de Áreas Comunes (gimnasio, salón de eventos, etc)",
              "Registro y seguimiento básico de solicitudes de mantenimiento",
            ]}
          />
          <CardOurPlans
            scale={"lg:scale-110"}
            title={"Premium"}
            lists={[
              "Todas las Funcionalidades de Plan Pro",
              "Portal de Proveedores",
              "Registro y Gestión de proveedores de servicios",
              "Solicitud de cotizaciones y comparación de servicios",
              "Aplicación Móvil",
              "Acceso y gestión de la plataforma desde cualquier lugar",
              "Notificaciones en tiempo real",
            ]}
          />
          <CardOurPlans
            title={"Pro"}
            lists={[
              "Todas las Funcionalidades de Plan Gratuito",
              "Generación y envío de facturas",
              "Informes financieros detallados",
              "Notificaciones push y correos electrónicos automatizados",
              "Planificación y programación de tareas de mantenimientos preventivo",
              "Historial de reparaciones y mantenimiento realizado",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default OurPlans;
