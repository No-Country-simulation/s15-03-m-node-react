import { useState } from "react";

const AdminRegister = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    personalPhone: "",
    documentNumber: "",
    compoundName: "",
    nitOrCuit: "",
    address: "",
    compoundPhone: "",
    towers: "",
    departments: "",
    floors: "",
    terms: false,
  });

  // const [error, setError] = useState({
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  //   firstName: "",
  //   lastName: "",
  //   personalPhone: "",
  //   documentNumber: "",
  //   compoundName: "",
  //   nitOrCuit: "",
  //   address: "",
  //   compoundPhone: "",
  //   towers: "",
  //   departments: "",
  //   floors: "",
  //   terms: false
  // });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setForm({ ...form, [name]: e.target.checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="container text-white">
      <h1 className="m-8 text-lg font-semibold">Registro de administrador</h1>
      <form className="flex flex-col gap-9" onSubmit={handleSubmit}>
        {/* BoxAdminRegister */}
        <div className="flex flex-col gap-2 px-4 md:px-10 py-6 bg-slate-500 w-full min-h-32 rounded-lg">
          <p>Datos de ingreso a la plataforma</p>
          <div className="form-control w-full">
            <div className="label">
              <span className="label-text">
                Correo electrónico del administrador:
              </span>
            </div>
            <input
              type="text"
              placeholder="ejemplo@ejemplo.com"
              autoComplete="off"
              className="input input-bordered w-full"
              onChange={handleChange}
              name="email"
              value={form.email}
            />
          </div>
          <div className="w-full flex gap-5 pb-3">
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text">Contraseña:</span>
              </div>
              <input
                type="text"
                placeholder="juan1232"
                className="input input-bordered w-full"
                onChange={handleChange}
                name="password"
                value={form.password}
              />
            </div>
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text">Repetir Contraseña:</span>
              </div>
              <input
                type="text"
                placeholder="juan1232"
                className="input input-bordered w-full"
                onChange={handleChange}
                name="confirmPassword"
                value={form.confirmPassword}
              />
            </div>
          </div>
        </div>
        {/* BoxAdminRegister */}
        <div className="flex flex-col gap-2 px-4 md:px-10 py-6 bg-slate-500 w-full min-h-32 rounded-lg">
          <p>Datos del Administrador:</p>
          <div className="grid grid-cols-2 gap-5 pb-3">
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text">Nombres:</span>
              </div>
              <input
                type="text"
                placeholder="Juan Pablo"
                className="input input-bordered w-full"
                onChange={handleChange}
                name="firstName"
                value={form.firstName}
              />
            </div>
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text">Apellidos:</span>
              </div>
              <input
                type="text"
                placeholder="Perez Parra"
                className="input input-bordered w-full"
                onChange={handleChange}
                name="lastName"
                value={form.lastName}
              />
            </div>
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text">Telefono:</span>
              </div>
              <input
                type="tel"
                placeholder="111-111-1111"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                className="input input-bordered w-full"
                onChange={handleChange}
                name="personalPhone"
                value={form.personalPhone}
              />
            </div>
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text">Cedula/DNI:</span>
              </div>
              <input
                type="number"
                placeholder="12345678"
                className="input input-bordered w-full"
                onChange={handleChange}
                name="documentNumber"
                value={form.documentNumber}
              />
            </div>
          </div>
        </div>
        {/* BoxAdminRegister */}
        <div className="flex flex-col gap-2 px-4 md:px-10 py-6 bg-slate-500 w-full min-h-32 rounded-lg">
          <p>Informacion general:</p>
          <div className="grid grid-cols-2 gap-5 pb-3">
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text">Nombre de la unidad:</span>
              </div>
              <input
                type="text"
                placeholder="Lote 22"
                className="input input-bordered w-full"
                onChange={handleChange}
                name="compoundName"
                value={form.compoundName}
              />
            </div>
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text">Nit/CUIL/CUIT:</span>
              </div>
              <input
                type="text"
                placeholder="11-11111111-1"
                className="input input-bordered w-full"
                onChange={handleChange}
                name="nitOrCuit"
                value={form.nitOrCuit}
              />
            </div>
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text">Direccion:</span>
              </div>
              <input
                type="text"
                placeholder="Gral. Pablo Iglesias 123"
                autoComplete="off"
                className="input input-bordered w-full"
                onChange={handleChange}
                name="address"
                value={form.address}
              />
            </div>
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text">Telefono:</span>
              </div>
              <input
                type="tel"
                placeholder="12345678"
                className="input input-bordered w-full"
                onChange={handleChange}
                name="compoundPhone"
                value={form.compoundPhone}
              />
            </div>
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text">Cant. de torres/edificios:</span>
              </div>
              <input
                type="number"
                placeholder="5"
                className="input input-bordered w-full"
                onChange={handleChange}
                name="towers"
                value={form.towers}
              />
            </div>
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text">
                  Cant. de Dptos por torre/edificio:
                </span>
              </div>
              <input
                type="number"
                placeholder="4"
                className="input input-bordered w-full"
                onChange={handleChange}
                name="departments"
                value={form.departments}
              />
            </div>
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text">
                  Cant. de pisos por torres/edificios:
                </span>
              </div>
              <input
                type="number"
                placeholder="3"
                className="input input-bordered w-full"
                onChange={handleChange}
                name="floors"
                value={form.floors}
              />
            </div>
          </div>
        </div>
        {/* BoxAdminRegister */}
        <div className="flex flex-col gap-2 px-4 md:px-10 py-6 bg-slate-500 w-full min-h-32 rounded-lg mb-6"> {/* sacar el margin bottom del final jaja queria ver como se ve XD */}
          <div>
            <div className="form-control max-w-xs">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  name="terms"
                  onChange={handleChange}
                />
                <span className="label-text">
                  He leído y aceptado las Políticas de Privacidad
                </span>
              </label>
            </div>
            <p className="text-sm text-slate-700 ml-2">
              Sus datos se almacenarán hasta que elimine su cuenta o ejerza el
              derecho de borrar sus datos.
            </p>
          </div>
          <div className="flex justify-end gap-4 items">
            <button className="btn btn-neutral">Cancelar</button>
            <button type="submit" className="btn btn-primary">
              Registrarse
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminRegister;
