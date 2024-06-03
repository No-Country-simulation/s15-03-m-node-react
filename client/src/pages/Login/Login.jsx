import React from 'react';
import { Link } from 'react-router-dom';
import adminImg from '../../assets/Frame 28.png';
import {useForm} from 'react-hook-form'


const Login = () => {

  const{register,handleSubmit}=useForm()

  const onSubmit= handleSubmit((data)=>{
    console.log(data)
  })

  return (
    <div className="bg-base-100 py-8 flex justify-between gap-6 md:w-[90%] md:mx-auto lg:w-full lg:py-12 flex-row lg:pl-0">
      <div className="min-w-[27.25rem] hidden lg:block ">
        <img src={adminImg} alt="Edificio" className="lg:max-h-[40rem] lg:w-full pt-2 " />
      </div>
      <section className="w-1/2 px-3">
        <h1 className="text-3xl pb-2 font-semibold lg:text-4xl">Bienvenido</h1>
        <p className="text-sm pb-6 lg:text-base">
          Por favor, complete la siguiente información para iniciar sesión en su cuenta.
        </p>
        <form onSubmit={onSubmit}className="flex flex-col gap-9">
          <div className="flex flex-col gap-5 pb-3">
            <div>
              <label htmlFor="email" className="block text-gray-700 font-bold">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="ejemplo@ejemplo.com"
                className="w-3/4 mt-1 px-4 py-2 bg-base-200 border border-primary rounded-md focus:outline-none focus:border-primary"
                {...register("email",{required:true})}
              />
              
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700 font-bold">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="********"
                className="w-3/4 mt-1 px-4 py-2 bg-base-200 border border-primary rounded-md focus:outline-none focus:border-primary"
                {...register("password",{required:true})}
              />
            </div>
          </div>
          <div className="text-sm text-l mt-4">
            <a className="text-sm mr-px" href="#">
              ¿Olvidó su contraseña?
            </a>
          </div>
          <div className="flex justify-end gap-4 items">
            <Link className="btn bg-transparent border-[#FF9337]" to="/">
              Cancelar
            </Link>
            <button type="submit" className="btn bg-[#FF9337] font-semibold text-[#000]">
              Iniciar sesión
            </button>
          </div>
          <div className="text-sm text-center mt-4">
            ¿No tienes una cuenta?{' '}
            <Link className="text-sm mx-2" to="/register-admin">
              Registro
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
