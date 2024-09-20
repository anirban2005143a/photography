import React, { useState } from 'react'

const Wedding = (props) => {


    return (
        <div id='wedding' className={` transition-all duration-200 ease-in-out overflow-hidden bg-[#FEFAE0] `}>
            <div className="part1 flex md:flex-row flex-col justify-between md:p-4 p-2 py-6 items-center ">
                <div className={`quote md:w-6/12 sm:w-10/12 w-full md:mx-6 sm:mx-3 mx-0 text-black  `}>
                    <p className={`${props.isWeddingVisible ? " opacity-100 translate-x-0 " : " opacity-0 -translate-x-24 "} transition-all duration-700 ease-in-out playfair-display-font md:text-[5rem] text-[4rem] uppercase md:text-start text-center`}>couple</p>
                    <p className={`${props.isWeddingVisible ? " opacity-100 translate-x-0 " : " opacity-0 -translate-x-24 "} transition-all duration-[1200ms] ease-in-outtext-xl dancing-script-font md:text-start text-center font-extrabold`}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe totam vero animi rerum molestias tenetur reprehenderit. Odit consectetur sapiente, quisquam quod rerum atque in aliquid magnam veniam iste ea natus?"</p>
                </div>
                <div className={`img ${props.isWeddingVisible ? " opacity-100 translate-y-0 " : " opacity-0 -translate-y-36 "} transition-all duration-[1200ms] ease-in-out md:w-5/12 sm:w-8/12 w-full my-6`}>
                    <img src="/wedding7.jpeg" className=' bg-[#A1D6B2] w-full mx-auto ' alt="" />
                </div>
            </div>
            <div className="part2 flex md:flex-row flex-col-reverse items-center justify-between md:p-4 p-2 ">
                <div className={`img ${props.weddingPart2 ? " opacity-100 translate-x-0 " : " opacity-0 -translate-x-24 "} transition-all duration-[1000ms] ease-in-out md:w-7/12 sm:w-9/12 w-full md:mx-6 sm:mx-3 mx-0 my-3`}>
                    <img src="/wedding3.jpeg" className=' w-full object-cover' alt="" />
                </div>
                <div className="text font-extrabold  md:w-5/12 w-full text-center flex flex-col items-center justify-center my-4">
                    <p className={`${props.weddingPart2 ? " opacity-100 translate-x-0 " : " opacity-0 translate-x-24 "} transition-all duration-[700ms] delay-300 ease-in-out dancing-script-font text-xl`}>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus tempore consectetur pariatur doloribus, aliquam eaque eligendi accusamus a ab "</p>
                    <div className=' py-6 cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out'>
                        <div className=' dancing-script-font  cursor-pointer text-red-700 text-xl '>Explore</div>
                        <div className=' -translate-y-2 text-red-700 font-normal' style={{letterSpacing : "-3px"}}>{`------------------------>`}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wedding