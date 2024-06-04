import React from 'react'
import CardIncidentReport from '../../components/CardIncidentReport/CardIncidentReport'
import incidentReport from '../../utils/incidentReport'
import useCustomForm from '../../hooks/useCustomForm'
import InputField from '../../components/InputField'
import { VALIDATIONS_FORM } from '../../configs/constants'

const IncidentReport = () => {

    const { register, handleSubmit, errors, onSubmit } = useCustomForm({})

    return (
        <section className='px-3 pb-8 md:w-[90%] md:mx-auto md:py-6 xl:py-10'>
            <h2 className=' font-libre font-bold py-3 text-2xl xl:text-4xl'>Reporte de <span className=' text-primary'>incidentes</span></h2>
            <p className=' text-sm text-base-300'>La herramienta de reporte de incidentes está diseñada para mantener tu edificio en óptimas condiciones y garantizar la satisfacción y seguridad de todos los residentes. Esta funcionalidad permite a los residentes informar sobre fallos técnicos, problemas de mantenimiento, y cualquier otra situación que requiera atención inmediata. Los reportes se pueden enviar directamente desde la aplicación, adjuntando fotos y descripciones detalladas para una mejor evaluación.</p>
            <section className=' my-5 border space-y-4 border-primary rounded-md p-5 bg-base-200'>
                <div className=' space-y-3 md:flex items-center justify-between md:space-y-0'>
                    <div className=' flex items-center space-x-3 md:space-y-0'>
                        <label className='text-sm font-semibold' htmlFor="date">Ordenar por fecha:</label>
                        <select className='py-1 text-sm px-5 border border-primary rounded-md font-semibold select-primary bg-base-100' name="date" id="date">
                            <option value="Más recientes">Más recientes</option>
                            <option value="Más recientes">Más antiguos</option>
                        </select>
                    </div>
                    <button className="py-1 px-4 rounded-md bg-primary text-sm text-[#fff]" onClick={() => document.getElementById('my_modal_3').showModal()}>Reportar incidentes</button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box bg-base-200">
                            <h3 className='font-libre font-bold py-3 text-xl xl:text-3xl'>Reportar <span className=' text-primary'>incidente</span></h3>
                            <form method="dialog">
                                <button className="btn btn-sm text-primary btn-ghost absolute right-2 top-2">✕</button>
                                <div className=' space-y-4'>
                                    <div className='text-black'>
                                        <InputField
                                            text="Título:"
                                            type="text"
                                            name="reportTitle"
                                            register={register}
                                            error={errors.reportTitle}
                                            validation={VALIDATIONS_FORM.reportTitle}
                                        />
                                    </div>
                                    <div>
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text flex items-center justify-evenly gap-1">
                                                    Mensaje:
                                                </span>
                                            </div>
                                            <textarea autoComplete='off' className='textarea bg-base-200 border-primary textarea-md w-full resize-none' rows={4}>
                                            </textarea>
                                        </label>
                                    </div>
                                    <div className=' flex justify-end'>
                                        <input className='py-1 px-4 rounded-md bg-primary text-sm text-[#fff]' type="submit" value="Reportar" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </dialog>
                </div>
                <div className=' space-y-5'>
                    {
                        incidentReport && incidentReport.map((report, index) => {
                            const { residentName, profileImage, reportTitle, description, apartament, date } = report
                            return (
                                <div key={index}>
                                    <CardIncidentReport
                                        residentName={residentName}
                                        profileImage={profileImage}
                                        reportTitle={reportTitle}
                                        description={description}
                                        apartament={apartament}
                                        date={date}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </section>
    )
}

export default IncidentReport