import React from 'react'
import '../../index.css'

const MasterPiece = (props) => {


    return (
        <div id='master-piece' className='w-full overflow-auto py-16 bg-[#D2E0FB]'>
            <div className="title text-[#000000] text-center">
                <span className='border-b-[1px] border-black font-semibold text-4xl uppercase cormorant-garamond-font mx-auto'>masterpiece</span> 
                <p className=' md:w-7/12 sm:w-9/12 w-10/12 mx-auto dancing-script-font my-6 text-lg text-center'>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ullam nemo deserunt iusto fugit totam suscipit harum debitis minus sit cupiditate corporis laborum consequuntur veniam assumenda! Tempore est quo nesciunt!"</p>
            </div>

            <div className='gallery w-full md:p-2 p-[2px]'>
                <div className="row  flex md:flex-row flex-col ">
                    <div className="col flex md:flex-col flex-row md:w-2/3 sm:m-1 m-[1px]">
                        <div className="row md:h-full md:p-2 p-[2px] sm:border-2 border-black sm:my-1 my-[1px]"><img src="/a/alex-shuper-5DU0Wlm41Zw-unsplash.jpg" alt="" className='w-full h-full object-cover cursor-pointer object-center'/></div>
                        <div className="row md:h-full md:p-2 p-[2px] sm:border-2 border-black sm:my-1 my-[1px]"><img src="/a/boliviainteligente-G-pd6z_ZdSw-unsplash.jpg" alt="" className='w-full h-full object-cover cursor-pointer object-center'/></div>
                    </div>
                    <div className="col flex flex-col md:w-1/3  sm:m-1 m-[1px]">
                        <div className="row md:p-2 p-[2px] sm:border-2 border-black sm:my-1 my-[1px]"><video src="/fashion.mp4" className=' w-full object-cover cursor-pointer object-center' autoPlay={true} loop muted style={{aspectRatio:"4/6"}}></video></div>
                        <div className="row md:h-full md:p-2 p-[2px] sm:border-2 border-black sm:my-1 my-[1px]"><img src="/a/clark-van-der-beken-Tk0B3Dfkf_4-unsplash.jpg" alt="" className=' w-full h-full object-cover cursor-pointer object-center' /></div>
                    </div>
                </div>
                <div className="row flex flex-row ">
                    <div className="col w-3/5  md:p-2 p-[2px] sm:border-2 border-black sm:m-1 m-[1px]"><video src="/1.mp4" className='w-full object-cover cursor-pointer object-center ' autoPlay={true} loop muted style={{aspectRatio:`${window.innerWidth < 768 ? "16/13" : "16/9"}`}}></video></div>
                    <div className="col w-2/5  md:h-full md:p-2 p-[2px] sm:border-2 border-black sm:m-1 m-[1px]"><img src="/a/jakub-neskora-Qeyljff0tkA-unsplash.jpg"  alt=""  className='w-full h-full object-cover cursor-pointer object-center'  style={{aspectRatio:"32/27"}} /></div>
                </div>
                <div className="row  flex md:flex-row ">
                    <div className="col w-5/12  md:p-2 p-[2px] sm:border-2 border-black sm:m-1 m-[1px]"><img src="/a/pexels-pixabay-268533.jpg" alt="" className=' object-center object-cover cursor-pointer w-full' style={{aspectRatio:"80/91"}} /></div>
                    <div className="col w-7/12  md:p-2 p-[2px] sm:border-2 border-black sm:m-1 m-[1px]"><video src="/product.mp4" className=' w-full object-cover cursor-pointer object-center' autoPlay={true} loop muted  style={{aspectRatio:"16/13"}}></video></div>
                </div>
            </div>
        </div>
    )
}

export default MasterPiece