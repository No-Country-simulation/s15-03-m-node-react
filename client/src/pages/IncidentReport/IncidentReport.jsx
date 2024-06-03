import React from 'react'
import CardIncidentReport from '../../components/CardIncidentReport/CardIncidentReport'

const IncidentReport = () => {
    return (
        <section className='px-3 pb-8 md:w-[90%] md:mx-auto md:py-6 xl:py-10'>
            <h2 className=' font-libre font-bold py-3 text-2xl xl:text-4xl'>Reporte de <span className=' text-primary'>incidentes</span></h2>
            <p className=' text-sm text-base-300'>La herramienta de reporte de incidentes está diseñada para mantener tu edificio en óptimas condiciones y garantizar la satisfacción y seguridad de todos los residentes. Esta funcionalidad permite a los residentes informar sobre fallos técnicos, problemas de mantenimiento, y cualquier otra situación que requiera atención inmediata. Los reportes se pueden enviar directamente desde la aplicación, adjuntando fotos y descripciones detalladas para una mejor evaluación.</p>
            <section className=' my-5 border h-[32rem] overflow-scroll space-y-4 border-primary rounded-md p-5 bg-base-200 xl:h-[60rem]'>
                <div className=' space-y-3 md:flex items-center justify-between md:space-y-0'>
                    <div className=' flex items-center space-x-3 md:space-y-0'>
                        <label className='text-sm font-semibold' htmlFor="date">Ordenar por fecha:</label>
                        <select className='py-1 text-sm px-5 border border-primary rounded-md font-semibold select-primary bg-base-100' name="date" id="date">
                            <option value="Más recientes">Más recientes</option>
                            <option value="Más recientes">Más antiguos</option>
                        </select>
                    </div>
                    <button className=' py-1 px-4 rounded-md bg-primary text-sm text-[#fff]'>Reportar incidentes</button>
                </div>
                <div className=' space-y-5'>
                    <CardIncidentReport />
                    <CardIncidentReport />
                    <CardIncidentReport />
                </div>
            </section>
        </section>
    )
}

export default IncidentReport