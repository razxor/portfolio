import React from 'react'
import Navbar from '../components/shared/Navbar'
const Home = () => {
    return (
        <div className="grid grid-cols-8">
            <div className="col-span-1 ">
                <div className="vertical-text">
                    D
                    E
                    V
                    E
                    L
                    O
                    P
                    E
                    R
                </div>
            </div>
            <div className="col-span-7">
                <div className="grid grid-cols-1">
                    <Navbar />
                </div>
                <div className="grid grid-cols-2 h-screen">
                    <div className="col-span-1 pl-3 flex flex-col justify-center">
                        <div className='text-3xl font-bold'>Hi, I am</div>
                        <div className='text-8xl font-bold'>Raz Ahamed</div>
                        <p>
                        Shot what able cold new see hold.Friendly as an betrayed formerly he. Morning because as to society behaved moments.
                        </p>
                        <div className='flex gap-5 mt-6'>
                        <button className='bg-orange-500 px-6 py-4 rounded text-white text-lg font-bold' >Downlaod Resume</button>
                        <button className='bg-orange-500 px-10 py-4 rounded text-white text-lg font-bold'>Contact</button>
                        </div>
                    </div>
                    <div className="col-span-1"></div>
                </div>
            </div>
        </div>
    )
}

export default Home;
