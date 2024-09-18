import React , {useEffect , useState} from 'react'
import '../../index.css'

const HeroSection = () => {

    const [isSelected, setisSelected] = useState(true)

    const animate = () => {
        const btns = Array.from(document.querySelectorAll(".BTN"))
        const slides = Array.from(document.querySelectorAll(".slide"))

        slides && btns ? (() => {
            btns.forEach((btn, index) => {
                btn.addEventListener("click", () => {
                    btns.forEach((item, ind) => {
                        ind != index ? (() => {
                            item.classList.remove("bg-white")
                            item.classList.add("bg-black")
                        })() : (() => {
                            item.classList.add("bg-white")
                            item.classList.remove("bg-black")
                        })()
                    })
                    slides.forEach((slide, i) => {
                        i != index ? (() => {
                            slide.classList.remove("h-full")
                            slide.classList.add("h-0")
                        })() : ""
                    })
                    slides[index].classList.add("h-full")
                    slides[index].classList.remove("h-0")
                })
            })
        })() : ""
    }

    useEffect(() => {
        animate()
    }, [])

    return (
        <section id='hero-section' className='z-0 relative overflow-hidden pb-4' style={{ height: `${window.innerHeight -20}px` }}>
            <div className='bg-slate-600 relative slides' >
                <div className="slide transition-all duration-1000 ease-in-out w-full h-full"><img className=' w-full h-full object-cover hover:scale-110 transition-all duration-[2000ms] ease-linear' src="/bg.jpeg" alt="" /></div>
                <div className="slide transition-all duration-1000 ease-in-out w-full h-0"><img className=' w-full h-full object-cover hover:scale-110 transition-all duration-[2000ms] ease-linear' src="/bg1.jpeg" alt="" /></div>
                <div className="slide transition-all duration-1000 ease-in-out w-full h-0"><img className=' w-full h-full object-cover hover:scale-110 transition-all duration-[2000ms] ease-linear' src="/bg2.avif" alt="" /></div>
                <div className="slide transition-all duration-1000 ease-in-out w-full h-0"><img className=' w-full h-full object-cover hover:scale-110 transition-all duration-[2000ms] ease-linear' src="/bg3.jpg" alt="" /></div>
                <div className="slide transition-all duration-1000 ease-in-out w-full h-0"><img className=' w-full h-full object-cover hover:scale-110 transition-all duration-[2000ms] ease-linear' src="/bg4.webp" alt="" /></div>
            </div>
            <div className="waves absolute bottom-0 z-10 w-full ">
                <div className=' relative'>
                    <img src="/wave-haikei (2).png" className=' w-full object-cover' alt="" />
                </div>
            </div>
            <div className="dots z-20 absolute bottom-0 flex gap-4 justify-center items-center w-full pb-4">
                <div className={`BTN transition-all duration-300 ease-linear rounded-full border-[1px] border-white bg-white cursor-pointer w-4 h-4`}></div>
                <div className={`BTN transition-all duration-300 ease-linear rounded-full border-[1px] border-white bg-black cursor-pointer w-4 h-4`}></div>
                <div className={`BTN transition-all duration-300 ease-linear rounded-full border-[1px] border-white bg-black cursor-pointer w-4 h-4`}></div>
                <div className={`BTN transition-all duration-300 ease-linear rounded-full border-[1px] border-white bg-black cursor-pointer w-4 h-4`}></div>
                <div className={`BTN transition-all duration-300 ease-linear rounded-full border-[1px] border-white bg-black cursor-pointer w-4 h-4`}></div>
            </div>
            <div className="heading  z-10 text-white absolute w-full h-full font-thin top-0 left-0">
                <div className=' w-full h-full flex flex-col items-start justify-center px-10'>
                    <div className="title uppercase text-6xl my-6 dosis-font">photography</div>
                    <div className="content text-xl w-8/12 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dignissimos dolorem voluptate hic, aut maxime nisi </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection