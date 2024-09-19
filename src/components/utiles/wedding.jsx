import React from 'react'

const Wedding = (props) => {
    return (
        <div id='wedding' className={`bg-[#FEFAE0] transition-all delay-0 duration-1000 ease-in-out ${props.isWeddingVisible ? "opacity-100 " : " opacity-0 "}`}>
            <div className="part1 flex md:flex-row flex-col justify-between md:p-4 p-2 py-6 items-center ">
                <div className="quote md:w-6/12 sm:w-8/12 w-full md:mx-6 sm:mx-3 mx-0 text-black  ">
                    <p className='playfair-display-font md:text-[5rem] text-[4rem] uppercase md:text-start text-center'>couple</p>
                    <p className='text-xl dancing-script-font'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe totam vero animi rerum molestias tenetur reprehenderit. Odit consectetur sapiente, quisquam quod rerum atque in aliquid magnam veniam iste ea natus?"</p>
                </div>
                <div className="img md:w-4/12 sm:w-5/12 w-full my-6">
                    <img src="/wedding2.jpeg" className=' bg-[#A1D6B2] w-full mx-auto ' alt="" />
                </div>
            </div>
            <div className="part2 flex md:flex-row flex-col-reverse items-center justify-between md:p-4 p-2 ">
                <div className="img md:w-8/12 w-full md:mx-6 sm:mx-3 mx-0 my-3">
                    <img src="/wedding1.jpeg" className=' w-full object-cover' alt="" />
                </div>
                <div className="text font-extrabold  md:w-4/12 sm:w-5/12 w-full text-center my-4">
                    <p className='dancing-script-font text-xl'>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus tempore consectetur pariatur doloribus, aliquam eaque eligendi accusamus a ab "</p>
                </div>
            </div>
        </div>
    )
}

export default Wedding