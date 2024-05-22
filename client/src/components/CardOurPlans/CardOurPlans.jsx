import React from 'react'

const CardOurPlans = ({ title, subTitle, lists, paragraph }) => {
    return (
        <div className="card bg-blue-300 md:w-72 shadow-lg">
            <div className="card-body px-3">
                <h2 className="card-title mx-auto">{title}</h2>
                <p className=' text-sm font-medium'>{subTitle}</p>
                <ul className=' text-start py-3 text-sm space-y-2 list-disc px-7'>
                    {lists && lists.map((list) => {
                        return (
                            <>
                                <li>{list}</li>
                            </>
                        )
                    })}
                </ul>
                <p className=' text-sm'>{paragraph}</p>
            </div>
        </div>
    )
}

export default CardOurPlans