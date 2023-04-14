import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { update } from '../redux/actions/user'
import { instance } from '../../config/axios.config'

export const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [users, setUsers] = useState([])

    const handleClick = () => {
        console.log({
            email: email,
            password: password
        });

        dispatch(update({
            email: email,
            password: password
        }))

        instance.post("/users/login", {
            email: email,
            password: password
        }).then((res: any) => {
            alert(res.data)
            navigate("/dashboard")

        }).catch((err: any) => {
            console.log(err);
            alert("Login Unsuccessful")

        })

        setEmail('')
        setPassword('')
    }

    // useEffect(() => {

    //     instance.get("/users/").then((res: any) => {
    //         console.log(res.data)
    //         setUsers(res.data)

    //     }).catch((err: any) => {
    //         console.log(err);

    //     })

    // }, [])


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left ml-5">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Yes, very excessive for an alarm clock, but im quirky like that</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Your Email" className="input input-bordered" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Your Password" className="input input-bordered" onChange={(e) => setPassword(e.target.value)} />
                            <label className="label">
                                <a href="/sign-up" className="label-text-alt link link-hover">Sign Up</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" onClick={handleClick}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
