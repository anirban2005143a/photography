import React from 'react'

const MasterPiece = () => {
    return (
        <div id='master-piece' className='w-full overflow-auto py-16'>
            <div className="slider flex w-[200%] items-center">
                <div className='imgCollection1 flex justify-center items-center mx-24'>
                    <div className="img1 max-w-[300px]  translate-y-10  relative border-2 border-separate border-[#E5D9F2]">
                        <img src="/a/alex-shuper-5DU0Wlm41Zw-unsplash.jpg" alt="" className='hover:scale-105 transition-all ease-linear relative p-1 bg-black w-full ' />
                    </div>
                    <div className="img2 max-w-[350px]  -translate-y-8 -translate-x-7 relative border-2 border-separate border-[#FF8A8A]">
                        <img src="/public/a/pxfuel (4).jpg" alt="" className='hover:scale-105 transition-all ease-linear relative p-1 bg-black w-full ' />
                    </div>
                </div>
                <div className="video max-w-[600px] border-2 border-separate border-[#c7f69c] relative">
                    <video src="/1.mp4" className=' relative p-4 bg-black' autoPlay={true} loop controls={false}></video>
                </div>
                <div className="imgCollection2 flex items-center mx-36">
                    <div className=' col'>
                        <div className="img relative max-w-[300px] border-2 border-separate border-[#91DDCF] m-2 -rotate-[10deg] translate-y-5 -translate-x-8">
                            <img src="/public/a/vincentiu-solomon-ln5drpv_ImI-unsplash.jpg" alt="" className='hover:scale-105 transition-all ease-linear bg-black p-2 relative z-10 w-full' />
                        </div>
                        <div className="img relative max-w-[300px] border-2 border-separate border-[#F7F9F2] m-2 translate-x-5 z-10">
                            <img src="/public/a/erik-karits-dfu_dcXT6FM-unsplash - Copy.jpg" alt="" className='hover:scale-105 transition-all ease-linear bg-black p-2 relative z-10 w-full' />
                        </div>
                    </div>
                    <div className=' col'>
                        <div className="img relative max-w-[300px] border-2 border-separate border-[#E8C5E5]  rotate-[8deg] -translate-x-3 z-0">
                            <img src="/public/a/arthur-arias-QAZCk9QzOrU-unsplash.jpg" alt="" className='hover:scale-105 transition-all ease-linear bg-black p-2 relative z-10 w-full' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MasterPiece