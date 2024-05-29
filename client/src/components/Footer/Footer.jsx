import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from './assets/Logo-Building.png'

const Footer = () => {
    return (
        <footer className="footer px-3 py-12 bg-[#EEF2FF] border-b-[1rem] border-[#483AE7]">
            <section className=' md:w-[90%] md:mx-auto space-y-6 lg:flex lg:justify-between md:space-y-0'>
                <div>
                    <div className='text-[#000] font-semibold space-y-3 flex flex-col md:flex-row md:items-center md:space-y-0 md:space-x-4' >
                        <a>Características</a>
                        <a>Sobre nosotros</a>
                        <a href='#plans'>Planes</a>
                        <a href='#contactForm'>Contacto</a>
                    </div>
                    <div className='font-medium md:flex md:items-center'>
                        <img className=' w-52 mr-32 mt-8 md:ml-14' src={Logo} alt="Logo" />
                        <div className='space-y-2 text-[#171925] text-xs md:flex md:items-center md:space-y-0 md:space-x-3 lg:-ml-6'>
                            <p>© 2024 - All right reserved</p>
                            <div className="space-x-3 flex items-center">
                                <p>Síguenos en:</p>
                                <div className='flex text-[#483AE7] space-x-3 text-lg'>
                                    <FaFacebookSquare />
                                    <FaSquareInstagram />
                                    <FaLinkedin />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' text-[#171925] font-medium'>
                    <h6>Suscríbete a nuestro informativo</h6>
                    <p className='text-xs'>Estate a atento a las últimas novedades y actuallizaciones de nuestra plataforma.</p>
                    <form className='relative pt-4'>
                        <input className='placeholder:font-semibold p-1 pr-8 placeholder:text-[#171925] outline-none bg-transparent rounded-md border border-[#483AE7]' type="email" name="email" id="email" required autoComplete='off' placeholder='Email' />
                        <MdEmail className='absolute top-6 left-44 text-[#483AE7]'/>
                    </form>
                </div>
            </section>
        </footer>
    )
}

export default Footer