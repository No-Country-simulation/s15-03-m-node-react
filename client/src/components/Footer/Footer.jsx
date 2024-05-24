import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer px-3 py-12 bg-[#EEF2FF] border-b-[1rem] border-[#483AE7]">
            <section className=' md:w-[90%] md:mx-auto space-y-8'>
                <div className='text-[#000] font-bold space-y-3 md:flex md:items-center md:space-y-0 md:space-x-4'>
                    <h6>Características</h6>
                    <h6>Sobre nosotros</h6>
                    <h6>Planes</h6>
                    <h6>Contacto</h6>
                </div>
                <div className=' font-medium space-y-3 md:flex md:items-center md:space-y-0 md:space-x-4'>
                    <img src="" alt="Logo" />
                    <div className='space-y-3 text-[#171925] text-xs md:flex md:items-center md:space-y-0 md:space-x-3'>
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
            </section>

        </footer>
    )
}

export default Footer