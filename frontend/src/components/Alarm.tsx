import React from 'react'

interface AlarmInterface {
    name: string,
    time: string,
    onDelete: any
}

export const Alarm = ({name, time, onDelete}: AlarmInterface) => {
    
    return (
        <div className='m-5'>
            <div className="card w-96 bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{time}</p>
                    <div className="card-actions justify-end">
                        <button className="btn" onClick={onDelete}>Delete Alarm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
