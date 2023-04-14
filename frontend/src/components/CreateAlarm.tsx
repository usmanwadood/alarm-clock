import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { instance } from '../../config/axios.config';
import { useDispatch, useSelector } from 'react-redux';

export const CreateAlarm = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [time, setTime] = useState('');


    const createAlarm = () => {

        instance.post("/alarms/create-alarm", {
            name: name,
            time: time
        }).then((res) => {
            console.log(res.data);
            navigate("/dashboard");
        }).catch((err) => {
            console.log(err);
        })

        console.log("Alarm Created");

    }



    return (
        <div>
            <h1 className='text-center font-semibold text-3xl mt-5'>Create Alarm</h1>
            <div className='flex justify-center mt-5'>
                <div className='w-1/2'>
                    <div className='flex justify-evenly'>
                        <div className='w-1/2 m-5'>
                            <label className='text-xl'>Alarm Name</label>
                            <input type='text' required className='w-full border-2 border-gray-300 p-2 rounded-md outline-none focus:border-blue-400' onChange={(e)=> setName(e.target.value)} />
                        </div>
                        <div className='w-1/2 m-5'>
                            <label className='text-xl'>Alarm Time</label>
                            <input type='time' required className='w-full border-2 border-gray-300 p-2 rounded-md outline-none focus:border-blue-400' onChange={(e)=> {setTime(e.target.value)}} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                {(name=='' || time=='')?<button className='bg-gray-500 text-white px-4 py-2 rounded-md'>Create Alarm</button>:<button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={createAlarm}>Create Alarm</button>}
            </div>

        </div>
    )
}
