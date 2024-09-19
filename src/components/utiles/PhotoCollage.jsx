import React from 'react'
import '../../index.css'

const PhotoCollage = () => {
    return (
        <div id='PhotoCollage'>
            <div className="collection flex items-center mx-36">
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
            <div className="content"></div>
        </div>
    )
}

export default PhotoCollage