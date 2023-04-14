import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Ticker } from './Ticker'
import { Stats } from './Stats'
import { instance } from '../../config/axios.config'
import { Alarm } from './Alarm'


export const Dashboard = () => {
  const user = useSelector((state: any) => state.user.value)
  const [alarms, setAlarms] = React.useState([])

  const handleDelete = (alarm: any) => {
    
    instance.delete(`/alarms/delete-alarm/${alarm._id}`).then((res) => {
      console.log(res.data);
      setAlarms(alarms.filter((curr: any) => curr._id !== alarm._id))

    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {

    instance.get("/alarms").then((res) => {
      console.log(res.data);
      setAlarms(res.data);

    }).catch((err) => {
      console.log(err);
    }
    )



  }, [])

  return (
    <div>
      <h1 className='text-center font-semibold text-3xl mt-5'>Dashboard</h1>
      <div className='grid grid-cols-3 gap-4'>
        {alarms?.map((alarm: any, key: any) => {
          return <Alarm key={key} name={alarm.name} time={alarm.time} onDelete={() => handleDelete(alarm)} />
        })}
      </div>
    </div>
  )
}
