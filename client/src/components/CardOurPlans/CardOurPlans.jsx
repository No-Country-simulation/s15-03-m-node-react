import React from 'react'

const CardOurPlans = ({ title, lists, paragraph }) => {
    return (
        <div className="bg-[#DFE6FF] space-y-6 rounded-lg md:w-72 shadow-lg lg:w-72">
            <div className="card-body px-0 py-0 ">
                <h2 className="card-title rounded-t-lg p-3 text-[#F5F6FA] bg-[#483AE7] lg:text-2xl">{title}</h2>
                <p className='text-start px-4 pt-2 text-sm'>Incluye:</p>
                <ul className=' text-start py-1 text-sm space-y-4 md:h-56 lg:h-60 list-disc px-8'>
                    {lists && lists.map((list) => {
                        return (
                            <>
                                <li>{list}</li>
                            </>
                        )
                    })}
                </ul>
                <p className='text-sm'>{paragraph}</p>
            </div>
            <div className='pb-4 px-3'>
                <button className='text-[#F5F6FA] rounded-md py-1 w-full bg-[#483AE7]'>Comenzar</button>
            </div>
        </div>
    )
}

export default CardOurPlans