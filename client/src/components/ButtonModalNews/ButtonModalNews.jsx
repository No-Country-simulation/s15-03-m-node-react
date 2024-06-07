import React from 'react'

const ButtonModalNews = () => {
    return (
        <>
            <button className={`py-1 px-4 rounded-md bg-primary text-sm text-[#fff]`} onClick={() => document.getElementById('my_modal_4').showModal()}>Publicar anuncio</button>
            <dialog id="my_modal_4" className={`modal`}>
                <div className={`modal-box bg-base-200`}>
                    <h3 className='font-libre font-bold py-3 text-xl xl:text-3xl'>Publicar <span className={`text-primary`}>anuncio</span></h3>
                    <form method="dialog">
                        <button className="btn btn-sm text-primary btn-ghost absolute right-2 top-2">✕</button>
                        <div className=' space-y-4'>
                            <div>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text flex items-center justify-evenly gap-1">
                                            Mensaje:
                                        </span>
                                    </div>
                                    <textarea autoComplete='off' className='textarea bg-base-100 border-primary textarea-md w-full resize-none' rows={4}>
                                    </textarea>
                                </label>
                            </div>
                            <div className=' flex justify-end'>
                                <input className={`py-1 px-4 rounded-md bg-primary text-sm text-[#fff]`} type="submit" value='Publicar' />
                            </div>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    )
}

export default ButtonModalNews