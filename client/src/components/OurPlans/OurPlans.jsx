import React from 'react'
import CardOurPlans from '../CardOurPlans/CardOurPlans'

const OurPlans = () => {
    return (
        <section className='py-6 px-3 text-center space-y-3 bg-[#171925] border-b-[#483AE7] border-b-[1rem]'>
            <div className='lg:w-[90%] mx-auto'>
                <div className='md:w-[75%] md:mx-auto'>
                    <h2 className=' text-2xl pb-2 font-medium text-[#EEF2FF] lg:text-3xl xl:text-4xl'>Nuestros planes</h2>
                    <p className=' text-sm text-[#EEF2FF] lg:pb-4 xl:text-base'>Selecciona el plan que mejor se ajusta a la cantidad de apartamentos o unidades en el edificio o barrio privado que habítas</p>
                </div>
                <div className=' space-y-5 md:flex justify-center flex-wrap md:pt-8 md:space-y-0 md:gap-4 py-5'>
                    <CardOurPlans
                        title={'Gratuito'}
                        lists={[
                            'Gestión de Perfiles de Residentes',
                            'Envió de mensajes  y anuncios a los residentes',
                            'Foro Comunitario',
                            'Reservas de Áreas Comunes (gimnasio, salón de eventos, etc)',
                            'Solicitudes de Mantenimiento'
                        ]}
                    />
                    <CardOurPlans
                        title={'Pro'}
                        lists={[
                            'Todas las Funcionalidades de Plan Gratuito',
                            'Notificaciones push y correos electrónicos automatizados',
                            'Planificación y programación de tareas de mantenimientos preventivo',
                            'Historial de reparaciones y mantenimiento realizado'
                        ]}
                    />
                    <CardOurPlans
                        title={'Premium'}
                        lists={[
                            'Todas las Funcionalidades de Plan Pro',
                            'Portal de Proveedores',
                            'Registro y Gestion de proveedores de servicios',
                            'Solicitud de cotizaciones',
                            'Notificaciones en tiempo real',
                        ]}
                    />
                </div>
            </div>

        </section>
    )
}

export default OurPlans