import React from 'react'
import CardOurPlans from '../CardOurPlans/CardOurPlans'

const OurPlans = () => {
    return (
        <section className='py-5 px-3 text-center space-y-3'>
            <div className='md:w-[75%] md:mx-auto'>
                <h2 className=' text-xl pb-2 font-medium md:text-2xl lg:text-3xl'>Nuestros planes</h2>
                <p className=' text-sm'>Selecciona plan que mejor se ajusta a la cantidad de apartamentos o unidades en el edificio o barrio privado que habítas</p>
            </div>
            <div className=' space-y-5 md:flex justify-around flex-wrap md:pt-2 lg:mx-auto lg:w-[75%] md:space-y-0 md:gap-6'>
                <CardOurPlans
                    title={'Gratuito'}
                    subTitle={'El plan Pro amplía las capacidades de gestión, ofreciendo funcionalidades avanzadas para una administración más eficiente'}
                    lists={[
                        'Gestión de Perfiles de Residentes',
                        'Envió de mensajes  y anuncios a los residentes',
                        'Reservas de áreas comunes',
                        'Solicitudes de mantenimiento'
                    ]}
                    paragraph={'Este plan es perfecto para edificios medianos y grandes que buscan una gestión más robusta y eficiente'}
                />
                <CardOurPlans
                    title={'Pro'}
                    subTitle={'El plan Pro amplía las capacidades de gestión, ofreciendo funcionalidades avanzadas para una administración más eficiente'}
                    lists={[
                        'Gestión de Perfiles de Residentes',
                        'Envió de mensajes  y anuncios a los residentes',
                        'Reservas de áreas comunes',
                        'Solicitudes de mantenimiento'
                    ]}
                    paragraph={'Este plan es perfecto para edificios medianos y grandes que buscan una gestión más robusta y eficiente'}
                />
                <CardOurPlans
                    title={'Premium'}
                    subTitle={'El plan Pro amplía las capacidades de gestión, ofreciendo funcionalidades avanzadas para una administración más eficiente'}
                    lists={[
                        'Gestión de Perfiles de Residentes',
                        'Envió de mensajes  y anuncios a los residentes',
                        'Reservas de áreas comunes',
                        'Solicitudes de mantenimiento'
                    ]}
                    paragraph={'Este plan es perfecto para edificios medianos y grandes que buscan una gestión más robusta y eficiente'}
                />
            </div>
        </section>
    )
}

export default OurPlans