import React from "react";

function Feature() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
          className="w-2/4 rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">
            La solucion integral para la gestion eficiente de tu edificio
          </h1>
          <p className="py-6">
            Con nuestra plataforma intuitiva y poderosa, poderosa gestionar
            todas las tareas del dia a dia con facilidad.Ahora tiempo, reduce
            costos y mejora la calidad de vida en tu comunidad con una solucion
            que esta diseñada para hacer la gestion mas eficiente y efectiva que
            nunca.
          </p>
          <button className="btn btn-primary">¡Pruevalo gratis ahora!</button>
        </div>
      </div>
    </div>
  );
}

export default Feature;
