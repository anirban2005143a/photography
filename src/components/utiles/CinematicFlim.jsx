import React, { useEffect } from 'react'
import "../../index.css"

const CinematicFlim = () => {

  const hoverVideo = () => {
    const videos = Array.from(document.querySelectorAll("#cinematicFlim .videoCard"))
    const layouts = Array.from(document.querySelectorAll("#cinematicFlim .videoCard .layout"))
    videos.forEach((item, index) => {
      item.addEventListener('mouseover', () => {
        layouts[index].classList.add("top-0")
        layouts[index].classList.remove("top-full")
      })
      item.addEventListener('mouseleave', () => {
        layouts[index].classList.remove("top-0")
        layouts[index].classList.add("top-full")
      })
    })
  }

  useEffect(() => {
    hoverVideo()
  }, [])
  

  return (
    <section id='cinematicFlim' className='bg-[#D8EFD3] py-16'>
      <div>
        <div className="title playfair-display-font text-light px-5 py-3 text-center text-4xl uppercase">Bring Moments to Film</div>
        <div className="text dancing-script-font text-xl font-light text-center md:w-8/12 sm:w-9/12 w-11/12 mx-auto py-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem ea repellendus tempora consectetur nemo voluptates aut, enim alias ducimus deserunt facere corporis, laboriosam magnam ab, suscipit</div>
        <div className="video relative">
          <div className=' relative w-full flex flex-wrap justify-center items-center'>
            <div className=' videoCard relative md:w-[45%] w-full m-2 overflow-hidden cursor-pointer'>
              <video src="/fashion.mp4" className=' w-full h-auto object-center object-cover z-0 ' style={{ aspectRatio: "16/9" }} autoPlay loop muted></video>
              <div className="category absolute w-full h-full top-0 left-0 flex justify-start items-end bg-top" style={{backgroundImage : "linear-gradient(to top , black 0% , transparent)" , backgroundSize : "100% 150%"}}>
                <p className=' capitalize cormorant-garamond-font font-semibold px-5 py-3 text-4xl text-white z-[10]'> Fashion</p>
              </div>
              <div className={`layout absolute w-full h-full top-full left-0 bg-[#0000005e] flex justify-center items-center transition-all duration-500 ease-in-out z-[5]`}>
                <div className="playIcon"><img src="/play.png" alt="" className=' w-16' /></div>
              </div>
            </div>
            <div className=' videoCard relative md:w-[45%] w-full m-2 overflow-hidden cursor-pointer'>
              <video src="/public/1.mp4" className=' w-full h-auto object-center object-cover z-0 ' style={{ aspectRatio: "16/9" }} autoPlay loop muted></video>
             <div className="category absolute w-full h-full top-0 left-0 flex justify-start items-end bg-top" style={{backgroundImage : "linear-gradient(to top , black 0% , transparent)" , backgroundSize : "100% 150%"}}>
              <p className=' capitalize cormorant-garamond-font font-semibold px-5 py-3 text-4xl text-white z-[10]'> Nature</p>
             </div>
              <div className={`layout absolute w-full h-full top-full left-0 bg-[#0000005e] flex justify-center items-center transition-all duration-500 ease-in-out z-[5]`}>
                <div className="playIcon"><img src="/play.png" alt="" className=' w-16' /></div>
              </div>
            </div>
            <div className=' videoCard relative md:w-[45%] w-full m-2 overflow-hidden cursor-pointer'>
              <video src="/public/product.mp4" className=' w-full h-auto object-center object-cover z-0 ' style={{ aspectRatio: "16/9" }} autoPlay loop muted></video>
              <div className="category absolute w-full h-full top-0 left-0 flex justify-start items-end bg-top" style={{backgroundImage : "linear-gradient(to top , black 0% , transparent)" , backgroundSize : "100% 150%"}}>
                <p className=' capitalize cormorant-garamond-font font-semibold px-5 py-3 text-4xl text-white z-[10]'> Product</p>
              </div>
              <div className={`layout absolute w-full h-full top-full left-0 bg-[#0000005e] flex justify-center items-center transition-all duration-500 ease-in-out z-[5]`}>
                <div className="playIcon"><img src="/play.png" alt="" className=' w-16' /></div>
              </div>
            </div>
            <div className=' videoCard relative md:w-[45%] w-full m-2 overflow-hidden cursor-pointer'>
              <video src="/public/party.mp4" className=' w-full h-auto object-center object-cover z-0 ' style={{ aspectRatio: "16/9" }} autoPlay loop muted></video>
              <div className="category absolute w-full h-full top-0 left-0 flex justify-start items-end bg-top" style={{backgroundImage : "linear-gradient(to top , black 0% , transparent)" , backgroundSize : "100% 150%"}}>
                <p className=' capitalize cormorant-garamond-font font-semibold px-5 py-3 text-4xl text-white z-[10]'> Party</p>
              </div>
              <div className={`layout absolute w-full h-full top-full left-0 bg-[#0000005e] flex justify-center items-center transition-all duration-500 ease-in-out z-[5]`}>
                <div className="playIcon"><img src="/play.png" alt="" className=' w-16' /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CinematicFlim