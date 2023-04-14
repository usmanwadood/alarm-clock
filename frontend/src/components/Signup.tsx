import React from 'react'
import { instance } from '../../config/axios.config'
import { useNavigate } from 'react-router-dom'

export const Signup = () => {

    const navigate = useNavigate()

    const [email, setEmail] = React.useState('')
    const [name, setName] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleClick = () => {
        console.log({
            name: name,
            email: email,
            password: password
        });

        instance.post("/users/create-user", {
            name: name,
            email: email,
            password: password
        }).then((res: any) => {
            alert(res.data)
            navigate("/")

        }).catch((err: any) => {
            console.log(err);
            alert("Signup Unsuccessful")

        })
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left ml-5">
                    <h1 className="text-5xl font-bold">Sign Up!</h1>
                    <p className="py-6">Yes, very excessive for an alarm clock, but im quirky like that</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered" onChange={(e) => setName(e.target.value)} />
                        </div>
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
                                <a href="/login" className="label-text-alt link link-hover">Login</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" onClick={handleClick}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
