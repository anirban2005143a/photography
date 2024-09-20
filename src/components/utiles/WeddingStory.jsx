import React, { useEffect } from 'react'
import '../../index.css'

const WeddingStory = () => {

    const scaleUpImg = () => {
        const storyCards = Array.from(document.querySelectorAll("#WeddingStory .storyCard"))
        storyCards.forEach((item) => {
            item.addEventListener("mouseover", () => {
                item.querySelector("img").classList.add("scale-110")
                item.querySelector("img").classList.remove("scale-100")
                console.log("enter")
            })
            item.addEventListener("mouseleave", () => {
                item.querySelector("img").classList.add("scale-100")
                item.querySelector("img").classList.remove("scale-110")
                console.log("leave")
            })
        })
    }

    useEffect(() => {
        scaleUpImg()
    }, [])


    return (
        <div id='WeddingStory' className=' py-10 bg-[#e1eeed]'>
            <div className="title uppercase playfair-display-font text-4xl text-black text-center">real wedding story</div>
            <div className="desc dancing-script-font md:w-8/12 sm:w-9/12 w-10/12 mx-auto text-center font-light text-lg py-4 border-b-[1px] border-[#921A40] sm:px-4 px-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis animi recusandae eaque suscipit facere neque pariatur eveniet corporis minus, quaerat quos voluptatum possimus doloribus asperiores, eius quae qui dicta debitis!</div>

            <div className="weddingStory flex flex-wrap justify-center items-center py-6">
                <div className="storyCard md:w-[32%] sm:w-[45%] w-11/12 m-1 relative overflow-hidden cursor-pointer">
                    <div className="img w-full">
                        <img src="/wedding3.jpeg" alt="" className=' w-full object-cover transition-all duration-[5000ms] ease-linear' style={{ aspectRatio: "5/4" }} />
                    </div>
                    <div className=' absolute w-full h-full top-0 left-0 '  style={{backgroundImage:"linear-gradient(to top , #00000097 , transparent)"}}>
                        <div className="relative w-full h-full flex items-end">
                            <div className="text text-white w-10/12 p-4 playfair-display-font capitalize text-2xl">wedding serimony at taj | Ayush + Ankita</div>
                        </div>
                    </div>
                </div>
                <div className="storyCard md:w-[32%] sm:w-[45%] w-11/12 m-1 relative overflow-hidden cursor-pointer">
                    <div className="img w-full">
                        <img src="/wedding4.jpeg" alt="" className=' w-full object-cover transition-all duration-[5000ms] ease-linear' style={{ aspectRatio: "5/4" }} />
                    </div>
                    <div className=' absolute w-full h-full top-0 left-0 '  style={{backgroundImage:"linear-gradient(to top , #00000097 , transparent)"}}>
                        <div className="relative w-full h-full flex items-end">
                            <div className="text text-white w-10/12 p-4 playfair-display-font capitalize text-2xl">wedding serimony at taj | Ayush + Ankita</div>
                        </div>
                    </div>
                </div>
                <div className="storyCard md:w-[32%] sm:w-[45%] w-11/12 m-1 relative overflow-hidden cursor-pointer">
                    <div className="img w-full">
                        <img src="/wedding5.jpeg" alt="" className=' w-full object-cover transition-all duration-[5000ms] ease-linear' style={{ aspectRatio: "5/4" }} />
                    </div>
                    <div className=' absolute w-full h-full top-0 left-0 '  style={{backgroundImage:"linear-gradient(to top , #00000097 , transparent)"}}>
                        <div className="relative w-full h-full flex items-end">
                            <div className="text text-white w-10/12 p-4 playfair-display-font capitalize text-2xl">wedding serimony at taj | Ayush + Ankita</div>
                        </div>
                    </div>
                </div>
                <div className="storyCard md:w-[32%] sm:w-[45%] w-11/12 m-1 relative overflow-hidden cursor-pointer">
                    <div className="img w-full">
                        <img src="/wedding6.jpeg" alt="" className=' w-full object-cover transition-all duration-[5000ms] ease-linear' style={{ aspectRatio: "5/4" }} />
                    </div>
                    <div className=' absolute w-full h-full top-0 left-0 '  style={{backgroundImage:"linear-gradient(to top , #00000097 , transparent)"}}>
                        <div className="relative w-full h-full flex items-end">
                            <div className="text text-white w-10/12 p-4 playfair-display-font capitalize text-2xl">wedding serimony at taj | Ayush + Ankita</div>
                        </div>
                    </div>
                </div>
                <div className="storyCard md:w-[32%] sm:w-[45%] w-11/12 m-1 relative overflow-hidden cursor-pointer">
                    <div className="img w-full">
                        <img src="/wedding4.jpeg" alt="" className=' w-full object-cover transition-all duration-[5000ms] ease-linear' style={{ aspectRatio: "5/4" }} />
                    </div>
                    <div className=' absolute w-full h-full top-0 left-0 '  style={{backgroundImage:"linear-gradient(to top , #00000097 , transparent)"}}>
                        <div className="relative w-full h-full flex items-end">
                            <div className="text text-white w-10/12 p-4 playfair-display-font capitalize text-2xl">wedding serimony at taj | Ayush + Ankita</div>
                        </div>
                    </div>
                </div>
                <div className="storyCard md:w-[32%] sm:w-[45%] w-11/12 m-1 relative overflow-hidden cursor-pointer">
                    <div className="img w-full">
                        <img src="/wedding3.jpeg" alt="" className=' w-full object-cover transition-all duration-[5000ms] ease-linear' style={{ aspectRatio: "5/4" }} />
                    </div>
                    <div className=' absolute w-full h-full top-0 left-0 '  style={{backgroundImage:"linear-gradient(to top , #00000097 , transparent)"}}>
                        <div className="relative w-full h-full flex items-end">
                            <div className="text text-white w-10/12 p-4 playfair-display-font capitalize text-2xl">wedding serimony at taj | Ayush + Ankita</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeddingStory