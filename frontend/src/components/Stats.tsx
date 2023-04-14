import React from 'react'
import { useSelector } from 'react-redux'

export const Stats = () => {

    const user = useSelector((state: any) => state.user.value)
    const [uncover, setUncover] = React.useState(false)

    return (
        <div className="stats stats-vertical lg:stats-horizontal shadow">

            <div className="stat cursor-pointer">
                <div className="stat-title">Email</div>
                <div className="stat-value">{user.email}</div>
            </div>

            <div className="stat cursor-pointer" onClick={()=> setUncover(!uncover)}>
                <div className="stat-title">Password</div>
                <div className="stat-value">{uncover?user.password:`***`}</div>
            </div>

        </div>
    )
}
