import React from 'react'

const Wedding = (props) => {
    return (
        <div id='wedding' className={`bg-[#FEFAE0] transition-all delay-0 duration-1000 ease-in-out ${props.isWeddingVisible ? "opacity-100 " : " opacity-0 "}`}>
            <div className="part1 flex justify-between items-center p-4">
                <div className="quote w-6/12 mx-6 text-black dancing-script-font text-xl">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe totam vero animi rerum molestias tenetur reprehenderit. Odit consectetur sapiente, quisquam quod rerum atque in aliquid magnam veniam iste ea natus?"
                </div>
                <div className="img w-3/12">
                    <img src="/a/8machine-_-Jw7p2A369As-unsplash.jpg" className=' bg-[#A1D6B2]' alt="" />
                </div>
            </div>
            <div className="part2 flex justify-between p-4 ">
                <div className="img md:w-8/12 mx-6 -translate-y-[7rem]">
                    <img src="/a/alex-shuper-D5LVMChT3PU-unsplash.jpg" className=' w-full object-cover' alt="" />
                </div>
                <div className="text font-extrabold w-4/12 text-center    ">
                    <p className='playfair-display-font text-[5rem] uppercase'>couple</p>
                    <p className='dancing-script-font text-xl'>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus tempore consectetur pariatur doloribus, aliquam eaque eligendi accusamus a ab "</p>
                </div>
            </div>
        </div>
    )
}

export default Wedding