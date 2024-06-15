import React from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Login = () => {
    const handleLoginSubmit = () => {

    }
    useGSAP(() => {
        let t = gsap.timeline();
        t.from(".heading", {

            x: -200,
            duration: 1,
            delay: 0.2,
            opacity: 0
        })
        t.from(".form", {
            x: -200,
            duration: 1,

            opacity: 0
        })
        t.from(".button", {
            x: 400,
            duration: 1,

            opacity: 0
        }, "-=1")
        t.from(".register", {
            opacity: 0,
            duration: 1
        })

    })
    return (
        <div className="mt-4 h-screen ">
            <div className="h-full flex flex-col justify-start gap-10  items-center">
                <h1 className="heading text-4xl text-center mb-4">Login</h1>
                <form className=" max-w-md mx-auto" onSubmit={handleLoginSubmit}>
                    <input className='form' type="email"
                        placeholder="your@email.com"
                    //    value={email}
                    //    onChange={ev => setEmail(ev.target.value)} />
                    />
                    <input className='form' type="password"
                        placeholder="password"
                    //    value={password}
                    //    onChange={ev => setPassword(ev.target.value)} />
                    />
                    <button className="primary button">Login</button>
                    <div className="register text-center py-2 text-gray-500">
                        Don't have an account yet? <Link className="underline text-black" to={'/register'}>Register now</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login