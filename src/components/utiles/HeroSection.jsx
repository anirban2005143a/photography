import React, { useEffect, useState } from 'react'
import herobg from '/wedding.jpeg'
import '../../index.css'

const HeroSection = () => {

    const [isSelected, setisSelected] = useState(true)


    const changeopacity = ()=>{
        const bgimg = document.querySelector("#hero-section .bgImg img")

        setTimeout(() => {
             bgimg ?
            (() => {
                bgimg.classList.remove("opacity-0")
                bgimg.classList.add("opacity-100")
            })() : ""
        }, 10);
    }

    useEffect(() => {
        changeopacity()
    }, [])

    return (
        <section id='hero-section' className='z-0 relative overflow-hidden w-full' style={{ height: `${window.innerHeight}px` }}>
            <div className={`bgImg relative slides w-full overflow-hidden  h-full`}>
                <img src="/wedding.jpeg" alt="" className='md:w-full md:h-auto h-full opacity-0 object-cover ' />
            </div>
           
            <div className="heading  z-10 text-white absolute w-full h-full font-thin top-0 left-0">
                <div className=' w-full h-full flex flex-col items-center justify-end pb-20'>
                    <div className="title uppercase text-5xl my-4 dosis-font font-light">photography</div>
                    <div className="content text-lg md:w-5/12 sm:w-7/12 w-11/12 font-light dancing-script-font text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dignissimos dolorem voluptate hic, aut maxime nisi </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection