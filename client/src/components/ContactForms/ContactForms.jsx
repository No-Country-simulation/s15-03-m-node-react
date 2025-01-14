import useCustomForm from "../../hooks/useCustomForm";
import { URL, VALIDATIONS_FORM } from "../../configs/constants";
import Image from "./assets/image-contact-form.png";
import InputField from "../InputField";

const ContactForms = () => {
  const { register, handleSubmit, errors, onSubmit } = useCustomForm({
    urlApi: `${URL}/api/contact`,
  });

  return (
    <section id="contactForm" className=" bg-[#F5F6FA] pt-4 pb-9 lg:pb-16">
      <div className="lg:flex items-center md:mx-auto lg:space-x-5 lg:pl-12 xl:pl-20">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-3 md:w-[70%] md:mx-auto"
        >
          <h2 className="text-center font-libre text-[#171925] text-3xl font-medium pt-7 pb-3 xl:text-4xl lg:text-start">
            Contáctate con nosotros
          </h2>
          <p className=" text-center text-sm lg:text-start text-[#000]">
            Si sos Administrador/Propietario/Inquilino y necesitas ayuda. Por
            favor, completa el formulario y nos pondremos en contacto a la
            brevedad.
          </p>
          <section className="py-5 space-y-2">
            <div className=" text-sm space-y-1 text-[#000]">
              <div className=" flex flex-col">
                <InputField
                  text="Nombre"
                  type="text"
                  name="firstName"
                  register={register}
                  error={errors.firstName}
                  validation={VALIDATIONS_FORM.firstName}
                />
              </div>
              <div className=" flex flex-col">
                <InputField
                  text="Teléfono"
                  type="tel"
                  name="phone"
                  register={register}
                  error={errors.phone}
                  validation={VALIDATIONS_FORM.phone}
                />
              </div>
              <div className=" flex flex-col">
                <InputField
                  text="Email"
                  type="email"
                  name="email"
                  register={register}
                  error={errors.email}
                  validation={VALIDATIONS_FORM.email}
                />
              </div>
              <div className=" flex flex-col">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text flex items-center justify-evenly gap-1">
                      Mensaje
                    </span>
                  </div>
                  <textarea
                    className="textarea textarea-primary border-primary bg-base-200 textarea-md w-full resize-none"
                    rows={5}
                  ></textarea>
                </label>
              </div>
            </div>
            <div>
              <input
                className="py-2 mt-2 px-4 btn btn-secondary"
                type="submit"
                value="Enviar mensaje"
              />
            </div>
          </section>
        </form>
        {/* <figure className='hidden lg:block w-50%'>
                    <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
                        alt="Imagen del formulario de contacto" />
                </figure> */}
        <figure className="hidden lg:block">
          <img
            className="lg:max-h-[44rem] pt-14 border-b-[1rem] border-[#483AE7]"
            src={Image}
            alt="Mujer con auriculares"
          />
        </figure>
      </div>
    </section>
  );
};

export default ContactForms;
