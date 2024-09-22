import React from 'react'
import '../../index.css'

const MeetTheArtist = () => {
  return (
    <div id='meetTheArtist' className=' bg-[#D2E0FB] py-24'>
        <div className='flex md:flex-row flex-col-reverse justify-center items-center md:w-7/12 mx-auto'>
            <div className="img md:w-1/3 sm:mx-4 mx-2 my-10"><img src="/a/seb-dean-yOSEqRsOAnE-unsplash.jpg" alt="" className=' w-full object-cover object-center' style={{aspectRatio:"1/1"}} /></div>
            <div className="content md:w-2/3 ">
                <div className="heading capitalize playfair-display-font w-10/12 mx-auto text-3xl sm:text-start text-center"><span className='border-b-[1px] border-black'>meet the artist</span></div>
                <div className="text-base  cormorant-garamond-font font-normal w-10/12 mx-auto py-6 ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi esse, cum ipsa quibusdam ducimus nam obcaecati <br/><br/> eveniet ea sequi consequuntur aliquid eius aspernatur nesciunt quaerat fugiat error repellendus distinctio eum?
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi esse, cum ipsa quibusdam ducimus nam obcaecati eveniet ea sequi consequuntur aliquid eius aspernatur nesciunt quaerat fugiat error repellendus distinctio eum?
                </div>
            </div>
        </div>
    </div>
  )
}

export default MeetTheArtist