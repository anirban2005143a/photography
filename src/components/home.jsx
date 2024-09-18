import React, { useEffect, useState } from 'react'
import Wedding from './utiles/wedding'
import HeroSection from './utiles/HeroSection'
import MasterPiece from './utiles/marterPiece'

const home = () => {

    const [isWeddingVisible, setisWeddingVisible] = useState(false)

    const horizontalScroll = () => {
        const hero = document.querySelector("#hero-section")
        const scrollDiv = document.querySelector("#master-piece .slider")

        hero && scrollDiv ? (() => {
            const h1 = hero.clientHeight
            const h2 = scrollDiv.parentElement.clientHeight

            window.scrollY >= (h2) ? (() => {
                setisWeddingVisible(true)
                // document.body.style.overflowY = "hidden"
                document.addEventListener('wheel' , (e)=>{
                    scrollDiv.scrollLeft = e.deltaY *10
                    console.log(e.deltaY)
                })
           
            })() : (() => {
                setisWeddingVisible(false)
            })()

        })() : (() => {

        })()
    }

    useEffect(() => {
        horizontalScroll()
    }, [])

    window.addEventListener('scroll', () => {
        horizontalScroll()
    })


    return (
        <>

            <HeroSection />
            <MasterPiece />

            <Wedding isWeddingVisible={isWeddingVisible} />


    {isWeddingVisible && <section id='cenematic-shot' className='my-32 relative'>
        <div className="title w-10/12 mx-auto  text-center">
            <p className=' uppercase text-7xl raleway-font'>cinematic videos</p>
            <div className='content font-sans text-white text-center font-thin py-12 text-lg'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam quisquam praesentium voluptate eligendi voluptates ratione minus consectetur, reiciendis sed molestias nam dignissimos autem vitae minima, quaerat ut ipsam aut? Quod.
            </div>
        </div>
        <div id="videos" className=' relative -mt-24 px-10'>
            <div className=" my-28 flex justify-between items-center ">
                <div className="video relative w-5/12">
                    <video className=' rounded-lg' src="/1.mp4" autoPlay loop muted></video>
                </div>
                <div className=" w-6/12 content text-3xl font-thin font-sans text-orange-50 abril-fatface-regular" style={{ letterSpacing: "1px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet earum eum sit, iste neque esse </div>
            </div>
            <div className=" my-28 flex flex-row-reverse justify-between items-center ">
                <div className="video relative w-5/12">
                    <video className=' rounded-lg' src="/1.mp4" autoPlay loop muted></video>
                </div>
                <div className=" w-6/12 content text-3xl font-thin font-sans text-orange-50 abril-fatface-regular" style={{ letterSpacing: "1px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet earum eum sit, iste neque esse </div>
            </div>
        </div>
    </section>}

            {isWeddingVisible && <section id='public' className=' mb-10'>
                <div className="images flex justify-center ">
                    <div className="image w-52 h-64  -rotate-12"><img className=' w-full h-full object-cover border-2 border-slate-600 rounded-md' src="/bg3.jpg" alt="" /></div>
                    <div className="image w-52 h-64  rotate-12 translate-y-4"><img className=' w-full h-full object-cover border-2 border-slate-600 rounded-md' src="/bg2.avif" alt="" /></div>
                </div>
                <div className="content mt-12">
                    <div className=' w-7/12 text-center text-base mx-auto text-violet-100 font-thin'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, odio voluptate consequuntur quaerat beatae impedit nisi ipsum voluptatibus repudiandae quod laboriosam dolore, architecto quidem ut doloribus labore, est ex expedita?
                    </div>
                </div>
            </section>}
        </>
    )
}

export default home