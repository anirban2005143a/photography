import React from 'react'
import '../../index.css'

const MasterPiece = () => {
    return (
        <div id='master-piece' className='w-full overflow-auto py-16 bg-[#e0e5e5]'>
            <div className="title  text-center  text-[#000000]">
                <span className='border-b-[1px] border-black font-semibold text-5xl uppercase cormorant-garamond-font'>masterpiece</span> 
                <p className=' md:w-7/12 sm:w-9/12 w-11/12 mx-auto dancing-script-font my-6 text-lg'>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ullam nemo deserunt iusto fugit totam suscipit harum debitis minus sit cupiditate corporis laborum consequuntur veniam assumenda! Tempore est quo nesciunt!"</p>
            </div>
            <div className="gallery max-w-[650px] mx-auto translate-x-0 px-4">
                <div className="row1 w-full flex justify-center items-end translate-x-2.5">
                    <div className="col1 img translate-y-6 z-20">
                        <img src="/a/boliviainteligente-2XVqBh3sXgY-unsplash.jpg" alt="" className='' />
                    </div>
                    <div className="col2 imgbw  p-1">
                        <img src="/a/colin-watts-_rt4VIG9rDQ-unsplash.jpg" alt="" className='' />
                    </div>
                </div>
                <div className="row2 w-full flex justify-center items-start -translate-x-2.5 ">
                    <div className="col1 imgbw z-10">
                        <img src="/a/alex-shuper-5DU0Wlm41Zw-unsplash.jpg" alt="" className='' />
                    </div>
                    <div className="col2 img -translate-y-6 p-1">
                        <img src="/a/arthur-arias-QAZCk9QzOrU-unsplash.jpg" alt="" className='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MasterPiece