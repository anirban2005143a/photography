import React from 'react'
import '../../index.css'

const MeetTheArtist = () => {
  return (
    <section id='contact'>
    <div id='meetTheArtist' className=' bg-[#D2E0FB] py-24'>
        <div className='md:flex md:flex-row flex-none justify-center  md:w-7/12 mx-auto px-4'>
            <div className="img w-1/3 sm:mx-4 mr-3 md:my-16 mt-6 mb-3 md:float-none float-left "><img src="/a/seb-dean-yOSEqRsOAnE-unsplash.jpg" alt="" className=' w-full object-cover object-center' style={{aspectRatio:"1/1"}} /></div>
            <div className="content md:w-2/3  ">
                <div className="heading capitalize playfair-display-font md:w-10/12 mx-auto md:text-3xl text-2xl text-start py-4"><span className='border-b-[1px] border-black'>meet the artist</span></div>
                <div className="text-base  cormorant-garamond-font font-normal md:w-10/12 mx-auto md:py-6 ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi esse, cum ipsa quibusdam ducimus nam obcaecati eveniet ea sequi consequuntur aliquid eius aspernatur nesciunt quaerat fugiat error repellendus distinctio eum?<br/>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi esse, cum ipsa quibusdam ducimus nam obcaecati eveniet ea sequi consequuntur aliquid eius aspernatur nesciunt quaerat fugiat error repellendus distinctio eum?
                </div>
                <div className="contact md:w-10/12 mx-auto flex md:justify-start justify-center my-6">
                  <button className='playfair-display-font outline-none border-none bg-[#0b5658] hover:bg-[#0b3f3f] transition-all duration-300 ease-in-out text-white px-4 py-2 text-sm font-semibold' style={{letterSpacing:"2px"}}>   Contact</button>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default MeetTheArtist