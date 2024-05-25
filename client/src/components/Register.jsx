import Section from "../components/Section";
import InputField from "../components/InputField";
import { VALIDATIONS_FORM } from "../configs/constants";
import useCustomForm from "../hooks/useCustomForm";
import { Link } from "react-router-dom";
import buildingImg from "../assets/Frame 28.png";

const Register = () => {
  const { register, handleSubmit, watch, errors, onSubmit } = useCustomForm();

  return (
    <div className="container flex justify-between gap-16">
      <div className="min-w-[27.25rem]">
        <img src={buildingImg} alt="Edificio" className="h-full"/>
      </div>
      <div className="min-w-[53.75rem]">
        <h1 className="text-5xl font-semibold">
          Bienvenido <span className="text-primary">administrador</span>
        </h1>
        <p className="text-[1.25rem]">Complete los datos y empiece a disfrutar de los beneficios de una gestión eficiente en su edificio.</p>
        <form className="flex flex-col gap-9" onSubmit={handleSubmit(onSubmit)}>
          <Section title="Datos de ingreso a la plataforma">
            <InputField
              text="Correo electrónico"
              type="email"
              name="email"
              placeholder="ejemplo@ejemplo.com"
              register={register}
              error={errors.email}
              validation={VALIDATIONS_FORM.email}
            />
            <div className="w-full flex gap-5 pb-3 flex-col md:flex-row">
              <InputField
                text="Contraseña"
                type="password"
                name="password"
                placeholder="juan1232"
                register={register}
                error={errors.password}
                validation={VALIDATIONS_FORM.password}
              />

              <InputField
                text="Repetir Contraseña"
                type="password"
                name="confirmPassword"
                placeholder="juan1232"
                register={register}
                error={errors.confirmPassword}
                validation={{
                  required: "Repetir la contraseña es requerido",
                  validate: (value) =>
                    value === watch("password") ||
                    "Las contraseñas no coinciden",
                }}
              />
            </div>
          </Section>
          <Section title="Datos del Administrador">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-3">
              <InputField
                text="Nombres:"
                type="text"
                name="firstName"
                placeholder="Juan Pablo"
                register={register}
                error={errors.firstName}
                validation={VALIDATIONS_FORM.firstName}
              />
              <InputField
                text="Apellidos:"
                type="text"
                name="lastName"
                placeholder="Perez Parra"
                register={register}
                error={errors.lastName}
                validation={VALIDATIONS_FORM.lastName}
              />
              <InputField
                text="Teléfono:"
                type="tel"
                name="personalPhone"
                placeholder="111-111-1111"
                register={register}
                error={errors.personalPhone}
                validation={VALIDATIONS_FORM.phone}
              />
              <InputField
                text="Cedula/DNI:"
                type="number"
                name="documentNumber"
                placeholder="12345678"
                register={register}
                error={errors.documentNumber}
                validation={VALIDATIONS_FORM.documentNumber}
              />
            </div>
          </Section>
          <Section title="Informacion General de la Unidad:">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-3">
              <InputField
                text="Nombre de la unidad:"
                type="text"
                name="compoundName"
                placeholder="Lote 22"
                register={register}
                error={errors.compoundName}
                validation={VALIDATIONS_FORM.compoundName}
              />
              <InputField
                text="Nit/CUIL/CUIT:"
                type="number"
                name="nitOrCuit"
                placeholder="11-11111111-1"
                register={register}
                error={errors.nitOrCuit}
                validation={VALIDATIONS_FORM.nitOrCuit}
              />
              <InputField
                text="Dirección:"
                type="text"
                name="address"
                placeholder="Gral. Pablo Iglesias 123"
                register={register}
                error={errors.address}
                validation={VALIDATIONS_FORM.address}
              />
              <InputField
                text="Teléfono:"
                type="tel"
                name="compoundPhone"
                placeholder="12345678"
                register={register}
                error={errors.compoundPhone}
                validation={VALIDATIONS_FORM.phone}
              />
              <InputField
                text="Cant. de torres/edificios:"
                type="number"
                name="towers"
                placeholder="5"
                register={register}
                error={errors.towers}
                validation={VALIDATIONS_FORM.towers}
              />
              <InputField
                text="Cant. de dptos por torre/edificio:"
                type="number"
                name="departments"
                placeholder="4"
                register={register}
                error={errors.departments}
                validation={VALIDATIONS_FORM.departments}
              />
              <InputField
                text="Cant. de pisos por torres/edificios:"
                type="number"
                name="floors"
                placeholder="3"
                register={register}
                error={errors.floors}
                validation={VALIDATIONS_FORM.floors}
              />
            </div>
          </Section>
          <Section>
            <div>
              <div className="form-control max-w-xs">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    className={`checkbox checkbox-primary ${
                      errors.terms ? "checkbox-error" : ""
                    }`}
                    name="terms"
                    {...register("terms", VALIDATIONS_FORM.terms)}
                  />
                  <span
                    className={`label-text ${
                      errors.terms ? "text-red-500" : ""
                    }`}
                  >
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
              <Link className="btn btn-outline btn-accent" to="/">
                Cancelar
              </Link>
              <button type="submit" className="btn btn-accent">
                Registrarse
              </button>
            </div>
          </Section>
        </form>
      </div>
    </div>
  )
}

export default Register