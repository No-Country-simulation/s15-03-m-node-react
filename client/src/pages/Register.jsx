import Section from "../components/Section";
import InputField from "../components/InputField";
import { URL, VALIDATIONS_FORM } from "../configs/constants";
import useCustomForm from "../hooks/useCustomForm";
import { Link, useParams } from "react-router-dom";
import adminImg from "../assets/Frame 28.png";
import residentImg from "../assets/Frame 29.png";
import Select from "../components/Select";
import PrivacyPolicy from "../components/Modals/Privacy-policy";
import { useEffect, useState } from "react";
import axios from "axios";
// import Alert from "../components/Alert";

const Register = ({ isAdmin }) => {
  const { code } = useParams();

  const [residencia, setResidencia] = useState({});
  const [optionsApartamento, setOptionsApartamento] = useState(null);
  const [apartamento, setApartamento] = useState({});

  const {
    register,
    handleSubmit,
    watch,
    errors,
    onSubmit,
    // errorsBackend,
    loading,
  } = useCustomForm({
    urlApi: `${URL}/usuarios/register`,
    sendTo: "/login",
  });

  const handleChange = (e) => {
    const { value } = e.target;
    setOptionsApartamento(value);
  };

  const getResidencia = async () => {
    try {
      const response = await axios.get(
        `${URL}/residencias/getResidenciaByCode/${code}`
      );
      console.log(response);
      setResidencia(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getApartamentos = async () => {
    try {
      const response = await axios.get(
        `${URL}/residencias/getApartamentosByEdificio/${optionsApartamento}`
      );
      console.log(response);
      setApartamento(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (code) {
      getResidencia();
    }
  }, [code]);

  useEffect(() => {
    if (optionsApartamento) {
      getApartamentos();
    }
  }, [optionsApartamento]);

  return (
    <>
      <div
        className={` py-8 flex justify-between gap-16 md:w-[90%] md:mx-auto lg:w-full lg:py-12 ${
          isAdmin ? "flex-row lg:pl-0" : "flex-row-reverse lg:pl-20"
        }`}
      >
        <div className="min-w-[27.25rem] hidden lg:block">
          <img
            src={isAdmin ? adminImg : residentImg}
            alt="Edificio"
            className="h-full"
          />
        </div>
        <section className="w-full px-3">
          <h1 className="text-3xl pb-2 font-libre font-semibold lg:text-4xl">
            Bienvenido{" "}
            <span className="text-primary">
              {isAdmin ? "Administrador" : "Residente"}
            </span>
          </h1>
          <p className=" text-sm pb-6 lg:text-base">
            {isAdmin
              ? "Complete los datos y empiece a disfrutar de los beneficios de una gestión en su edificio."
              : "Por favor, complete la siguiente información para registrar su residencia en el edificio."}
          </p>
          <form
            className="flex flex-col gap-9"
            onSubmit={handleSubmit(onSubmit)}
          >
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
            <Section title="Datos del representante legal">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-3">
                <InputField
                  text="Nombres:"
                  type="text"
                  name="nombre"
                  placeholder="Juan Pablo"
                  register={register}
                  error={errors.firstName}
                  validation={VALIDATIONS_FORM.firstName}
                />
                <InputField
                  text="Apellidos:"
                  type="text"
                  name="apellido"
                  placeholder="Perez Parra"
                  register={register}
                  error={errors.lastName}
                  validation={VALIDATIONS_FORM.lastName}
                />
                <InputField
                  text="Teléfono:"
                  type="tel"
                  name="telefono"
                  placeholder="111-111-1111"
                  register={register}
                  error={errors.personalPhone}
                  validation={VALIDATIONS_FORM.phone}
                />
                <InputField
                  text="Cedula/DNI:"
                  type="text"
                  name="dni"
                  placeholder="12345678"
                  register={register}
                  error={errors.documentNumber}
                  validation={VALIDATIONS_FORM.documentNumber}
                />
              </div>
            </Section>
            {isAdmin && (
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
                    name="cuit"
                    placeholder="11-11111111-1"
                    register={register}
                    error={errors.nitOrCuit}
                    validation={VALIDATIONS_FORM.nitOrCuit}
                  />
                  <InputField
                    text="Dirección:"
                    type="text"
                    name="direccion"
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
                    name="cantidad_edificios"
                    placeholder="5"
                    register={register}
                    error={errors.towers}
                    validation={VALIDATIONS_FORM.towers}
                  />
                  <InputField
                    text="Cant. de dptos por piso:"
                    type="number"
                    name="cantidad_apartamentos_por_piso"
                    placeholder="4"
                    register={register}
                    error={errors.departments}
                    validation={VALIDATIONS_FORM.departments}
                  />
                  <InputField
                    text="Cant. de pisos por torres/edificios:"
                    type="number"
                    name="cant_pisos"
                    placeholder="3"
                    register={register}
                    error={errors.floors}
                    validation={VALIDATIONS_FORM.floors}
                  />
                </div>
              </Section>
            )}
            {!isAdmin && (
              <Section title="Dirección de residencia">
                <div className="flex flex-col md:flex-row gap-5">
                  <Select
                    title="Edificio"
                    options={residencia.edificios}
                    handleChange={handleChange}
                    register={register}
                    name="edificio"
                  />
                  {apartamento && (
                    <Select
                      title="Numero de apartamento o unidad"
                      options={apartamento}
                      register={register}
                      handleChange={handleChange}
                      name="id_apartamento"
                    />
                  )}
                </div>
              </Section>
            )}
            <Section>
              <div className="pb-6">
                <div className="form-control">
                  <div className="cursor-pointer flex items-center font-semibold space-x-2">
                    <input
                      type="checkbox"
                      className={`checkbox checkbox-primary ${
                        errors.terms ? "checkbox-error" : ""
                      }`}
                      name="terms"
                      {...register("terms", VALIDATIONS_FORM.terms)}
                    />
                    <PrivacyPolicy />
                  </div>
                </div>
                <p className="text-sm text-slate-700 ml-2">
                  Sus datos se almacenarán hasta que elimine su cuenta o ejerza
                  el derecho de borrar sus datos.
                </p>
              </div>
              <div className="flex justify-end gap-4 items">
                <Link
                  className="btn btn-outline md:hidden bg-accent btn-secondary"
                  to="/"
                >
                  Cancelar
                </Link>
                <button
                  type="submit"
                  className="btn btn-secondary font-semibold"
                  disabled={loading}
                >
                  {loading ? "Enviando..." : "Registrarme"}
                </button>
              </div>
            </Section>
          </form>
        </section>
      </div>
      {/* {errorsBackend && <Alert text={errorsBackend} />} */}
    </>
  );
};

export default Register;
