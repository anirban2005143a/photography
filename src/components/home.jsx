import React, { useEffect, useState } from 'react'

const home = () => {

    const [isSelected, setisSelected] = useState(true)

    const animate = () => {
        const btns = Array.from(document.querySelectorAll(".BTN"))
        const slides = Array.from(document.querySelectorAll(".slide"))

        slides && btns ? (() => {
            btns.forEach((btn, index) => {
                btn.addEventListener("click", () => {
                    btns.forEach((item, ind) => {
                        ind != index ? (() => {
                            item.classList.remove("bg-purple-800")
                            item.classList.add("bg-cyan-500")
                        })() : (() => {
                            item.classList.add("bg-purple-800")
                            item.classList.remove("bg-cyan-500")
                        })()
                    })
                    slides.forEach((slide, i) => {
                        i != index ? (() => {
                            slide.classList.remove("h-full")
                            slide.classList.add("h-0")
                        })() : ""
                    })
                    slides[index].classList.add("h-full")
                    slides[index].classList.remove("h-0")
                })
            })
        })() : ""
    }

    useEffect(() => {
        animate()
    }, [])



    return (
        <>
            <section id='hero-section' className='z-0 relative'>
                <div className='bg-slate-600 relative slides' style={{ height: `${window.innerHeight * 0.9}px` }}>
                    <div className="slide transition-all duration-1000 ease-in-out w-full h-full"><img className=' w-full h-full object-cover' src="/bg.jpeg" alt="" /></div>
                    <div className="slide transition-all duration-1000 ease-in-out w-full h-0"><img className=' w-full h-full object-cover' src="/bg1.jpeg" alt="" /></div>
                    <div className="slide transition-all duration-1000 ease-in-out w-full h-0"><img className=' w-full h-full object-cover' src="/bg2.avif" alt="" /></div>
                    <div className="slide transition-all duration-1000 ease-in-out w-full h-0"><img className=' w-full h-full object-cover' src="/bg3.jpg" alt="" /></div>
                    <div className="slide transition-all duration-1000 ease-in-out w-full h-0"><img className=' w-full h-full object-cover' src="/bg4.webp" alt="" /></div>
                </div>
                <div className="waves relative z-10 w-full ">
                    <div className=' relative'>
                        {/* <div className="wave3 absolute w-full" style={{ bottom: "-80px" }}>
                            <svg id="visual" className=' w-full' viewBox="0 0 960 540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                                <rect x="0" y="0" fill="none"></rect>
                                <path d="M0 308L22.8 310.8C45.7 313.7 91.3 319.3 137 332.5C182.7 345.7 228.3 366.3 274 363.7C319.7 361 365.3 335 411.2 323.3C457 311.7 503 314.3 548.8 333.8C594.7 353.3 640.3 389.7 686 394.5C731.7 399.3 777.3 372.7 823 360.2C868.7 347.7 914.3 349.3 937.2 350.2L960 351L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z" fill="#63089c" opacity="0.4" stroke-linecap="round" stroke-linejoin="miter"></path>
                            </svg>
                        </div>
                        <div className="wave2 absolute w-full" style={{ bottom: "-80px" }}>
                            <svg id="visual" className=' w-full' viewBox="0 0 960 540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                                <rect x="0" y="0" fill="none"></rect>
                                <path d="M0 348L22.8 346.2C45.7 344.3 91.3 340.7 137 358C182.7 375.3 228.3 413.7 274 432.8C319.7 452 365.3 452 411.2 438C457 424 503 396 548.8 387.3C594.7 378.7 640.3 389.3 686 403.8C731.7 418.3 777.3 436.7 823 430.5C868.7 424.3 914.3 393.7 937.2 378.3L960 363L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z" fill="#2c0969" opacity="0.7" stroke-linecap="round" stroke-linejoin="miter"></path>
                            </svg>
                        </div> */}
                        <div className="wave1 absolute w-full" style={{ bottom: "-50px" }}>
                            <svg id="visual" className=' w-full' viewBox="0 0 960 540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                                <rect x="0" y="0" fill="none"></rect>
                                <path d="M0 439L22.8 436.2C45.7 433.3 91.3 427.7 137 426.7C182.7 425.7 228.3 429.3 274 436.7C319.7 444 365.3 455 411.2 462.2C457 469.3 503 472.7 548.8 459.7C594.7 446.7 640.3 417.3 686 417C731.7 416.7 777.3 445.3 823 446C868.7 446.7 914.3 419.3 937.2 405.7L960 392L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z" fill="#000000" opacity="1" stroke-linecap="round" stroke-linejoin="miter"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="dots z-20 absolute top-full flex gap-4 justify-center items-center w-full">
                    <div className={`BTN transition-all duration-300 ease-linear rounded-full bg-purple-800  cursor-pointer w-4 h-4`}></div>
                    <div className={`BTN transition-all duration-300 ease-linear rounded-full bg-cyan-500  cursor-pointer w-4 h-4`}></div>
                    <div className={`BTN transition-all duration-300 ease-linear rounded-full bg-cyan-500  cursor-pointer w-4 h-4`}></div>
                    <div className={`BTN transition-all duration-300 ease-linear rounded-full bg-cyan-500  cursor-pointer w-4 h-4`}></div>
                    <div className={`BTN transition-all duration-300 ease-linear rounded-full bg-cyan-500  cursor-pointer w-4 h-4`}></div>
                </div>
                <div className="heading z-20 text-white absolute w-full h-full font-thin top-0 left-0">
                    <div className=' w-full h-full flex flex-col items-start justify-center px-10'>
                        <div className="title uppercase text-6xl my-6">photography</div>
                        <div className="content text-xl w-8/12 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dignissimos dolorem voluptate hic, aut maxime nisi </div>
                    </div>
                </div>
            </section>

            <section id='wedding' className=' px-16 py-20  ' style={{ paddingTop: "180px" }}>
                <div className="heading text-center uppercase font-serif text-orange-100 text-7xl py-10 raleway-font" style={{ letterSpacing: "5px" }}>Weddings</div>
                <div class="gallery w-full  flex justify-center items-center gap-3 text-yellow-50 font-thin ">
                    <div className="column w-full  flex flex-col justify-center items-center gap-3">
                        <div className="image my-4 rounded-md overflow-hidden w-full md"><img className=' w-full h-auto ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiI76D9VIJtd-mUicPtv07vgr1ZcKobACqyg&s" alt="" /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illum, fuga quo natus necessitatibus nulla quisquam consequuntur quas vitae </p></div>
                        <div className="image my-4 rounded-md overflow-hidden w-full tall"><img className=' w-full h-auto ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7sKEuv_9IFjIeqO-zqhWo3LbsFyCztRer4A&s" alt="" /><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur nisi provident, aperiam rerum magnam? Dicta consequatur </p></div>
                        {/* <div className="image rounded-md overflow-hidden w-full sm"><img className=' w-full h-auto ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&s" alt="" /></div> */}
                    </div>
                    <div className="column w-full  flex flex-col justify-center items-center gap-3">
                        {/* <div className="image rounded-md overflow-hidden w-full mid"><img className=' w-full h-auto ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiI76D9VIJtd-mUicPtv07vgr1ZcKobACqyg&s" alt="" /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illum, fuga quo natus necessitatibus nulla quisquam consequuntur quas vitae </p></div> */}
                        <div className="image my-4 rounded-md overflow-hidden w-full tall"><img className=' w-full h-auto ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7sKEuv_9IFjIeqO-zqhWo3LbsFyCztRer4A&s" alt="" /><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur nisi provident, aperiam rerum magnam? Dicta consequatur </p></div>
                        <div className="image my-4 rounded-md overflow-hidden w-full sm"><img className=' w-full h-auto ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&s" alt="" /></div>
                    </div>
                    <div className="column w-full  flex flex-col justify-center items-center gap-3">
                        <div className="image my-4 rounded-md overflow-hidden w-full mid"><img className=' w-full h-auto ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiI76D9VIJtd-mUicPtv07vgr1ZcKobACqyg&s" alt="" /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illum, fuga quo natus necessitatibus nulla quisquam consequuntur quas vitae </p></div>
                        <div className="image my-4 rounded-md overflow-hidden w-full tall"><img className=' w-full h-auto ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7sKEuv_9IFjIeqO-zqhWo3LbsFyCztRer4A&s" alt="" /><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur nisi provident, aperiam rerum magnam? Dicta consequatur </p></div>
                        {/* <div className="image rounded-md overflow-hidden w-full sm"><img className=' w-full h-auto ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&s" alt="" /></div> */}
                    </div>
                </div>
            </section>

            <section id='cenematic-shot' className='my-32 relative'>
                <div className="title w-10/12 mx-auto  text-center">
                    <p className=' uppercase text-7xl raleway-font'>cinematic videos</p>
                    <div className='content font-sans text-white text-center font-thin py-12 text-lg'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam quisquam praesentium voluptate eligendi voluptates ratione minus consectetur, reiciendis sed molestias nam dignissimos autem vitae minima, quaerat ut ipsam aut? Quod.
                    </div>
                </div>
                <div id="videos" className=' relative -mt-24 px-10'>
                    <div className=" my-28 flex justify-between items-center ">
                        <div className="video relative w-5/12">
                            <video className=' rounded-lg' src="/1.mp4" autoPlay loop muted></video>
                        </div>
                        <div className=" w-6/12 content text-3xl font-thin font-sans text-orange-50 abril-fatface-regular" style={{ letterSpacing: "1px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet earum eum sit, iste neque esse </div>
                    </div>
                    <div className=" my-28 flex flex-row-reverse justify-between items-center ">
                        <div className="video relative w-5/12">
                            <video className=' rounded-lg' src="/1.mp4" autoPlay loop muted></video>
                        </div>
                        <div className=" w-6/12 content text-3xl font-thin font-sans text-orange-50 abril-fatface-regular" style={{ letterSpacing: "1px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet earum eum sit, iste neque esse </div>
                    </div>
                </div>
            </section>

            <section id='public' className=' mb-10'>
                <div className="images flex justify-center ">
                    <div className="image w-52 h-64  -rotate-12"><img className=' w-full h-full object-cover border-2 border-slate-600 rounded-md' src="/bg3.jpg" alt="" /></div>
                    <div className="image w-52 h-64  rotate-12 translate-y-4"><img className=' w-full h-full object-cover border-2 border-slate-600 rounded-md' src="/bg2.avif" alt="" /></div>
                </div>
                <div className="content mt-12">
                    <div className=' w-7/12 text-center text-base mx-auto text-violet-100 font-thin'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, odio voluptate consequuntur quaerat beatae impedit nisi ipsum voluptatibus repudiandae quod laboriosam dolore, architecto quidem ut doloribus labore, est ex expedita?
                    </div>
                </div>
            </section>
        </>
    )
}

export default home