import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const ButtonModalNews = ({ getNewsList }) => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const { register, handleSubmit, reset } = useForm()

    const URL = 'https://api-test.brangerbriz.com/api'

    const createNews = async (data) => {
        setLoading(true)
		setError('')
        try {
            const response = await axios.post(URL + '/anuncio/create', data)
            getNewsList()
            reset()
            document.getElementById('my_modal_2').close()
        } catch (error) {
            setError('No se puede publicar el anuncio. Por favor inténtalo más tarde.')
        } finally {
			setLoading(false)
		}
    }

    const onSubmit = (data) => createNews(data)

    return (
        <>
            <button className="py-1 px-4 rounded-md bg-primary text-sm text-[#fff]" onClick={()=>document.getElementById('my_modal_2').showModal()}>Publicar anuncio</button>
            <dialog id="my_modal_2" className="modal">
            <div className={`modal-box bg-base-200`}>
                    <h3 className='font-libre font-bold py-3 text-xl xl:text-3xl'>Publicar <span className={`text-primary`}>anuncio</span></h3>
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                    <p onClick={()=>{document.getElementById('my_modal_2').close()
                        reset()
                        setError('')}} className="btn btn-sm text-primary btn-ghost absolute right-2 top-2">✕</p>
                        <div className=' space-y-4'>
                            <div>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text flex items-center justify-evenly gap-1">
                                            Mensaje:
                                        </span>
                                    </div>
                                    <textarea
                                        name='message'
                                        id='message'
                                        {...register('message', { required: true })}
                                        autoComplete='off'
                                        className='textarea bg-base-100 border-primary textarea-md w-full resize-none' rows={4}>
                                    </textarea>
                                </label>
                                {error && <p className="text-red-500 py-2 text-sm">{error}</p>}
                            </div>
                            <div className="flex justify-end">
                                <button className="py-1 px-4 rounded-md bg-primary text-sm text-[#fff]"  type="submit" >{loading ? <p className="loading loading-bars loading-sm text-[#fff]"></p> : 'Publicar'}</button>
							</div>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    )
}

export default ButtonModalNews