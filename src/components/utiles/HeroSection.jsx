import React, { useEffect, useState } from 'react'
import herobg from '/wedding.jpeg'
import '../../index.css'

const HeroSection = () => {

    const [isSelected, setisSelected] = useState(true)
    const [slideNo, setslideNo] = useState(0)


    const changeopacity = () => {
        const bgimg = document.querySelector("#hero-section .bgImg")
        setTimeout(() => {
            bgimg ?
                (() => {
                    bgimg.classList.remove("opacity-0")
                    bgimg.classList.add("opacity-100")
                })() : ""
        }, 10);
    }

    const slideLeft = () => {
        const slider = document.querySelector("#hero-section .slider")
        slider && slideNo >= 0 && slideNo < 3 ? (() => {
           
            const w0 = slider.querySelectorAll("img")[0].clientWidth
            const w1 = slider.querySelectorAll("img")[1].clientWidth + w0
            const w2 = slider.querySelectorAll("img")[2].clientWidth + w1
            const w3 = slider.querySelectorAll("img")[3].clientWidth + w2
            const w  = [w0 , w1 ,w2 , w3]
            slider.style.transform = `translateX(-${w[slideNo]}px)`
            setslideNo(slideNo + 1)
        })() : ""
    }

    const slideRight = () => {
        const slider = document.querySelector("#hero-section .slider")
        slider && slideNo > 0 && slideNo <= 3 ? (() => {
            slider.style.transform = `translateX(-${25 * (slideNo - 1)}%)`
            setslideNo(slideNo - 1)
        })() : ""
    }

    useEffect(() => {
        changeopacity()
    }, [])

    console.log(slideNo)

    return (
        <section id='hero-section' className='z-0 relative overflow-hidden w-full' style={{ height: `${window.innerHeight}px` }}>
            <div className={`bgImg relative overflow-hidden w-full h-full opacity-0`}>
                <div className="slider w-[400%] h-full flex justify-center items-center transition-all duration-700 ease-in-out">
                    <img src="/wedding.jpeg" alt="" className='w-1/4 md:h-auto h-full object-center object-cover ' />
                    <img src="/wedding5.jpeg" alt="" className='w-1/4 md:h-auto h-full object-center object-cover ' />
                    <img src="/wedding3.jpeg" alt="" className='w-1/4 md:h-auto h-full object-center object-cover ' />
                    <img src="/wedding4.jpeg" alt="" className='w-1/4 md:h-auto h-full object-center object-cover ' />
                </div>
            </div>

            <div className="heading  z-10 text-white absolute w-full h-full font-thin top-0 left-0">
                <div className=' w-full h-full flex flex-col items-center justify-end pb-20'>
                    <div className="title uppercase text-5xl my-4 dosis-font font-light">photography</div>
                    <div className="content text-lg md:w-5/12 sm:w-7/12 w-11/12 font-light dancing-script-font text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dignissimos dolorem voluptate hic, aut maxime nisi </div>
                </div>
            </div>

            <div className="absolute sliddingArrow w-full h-full top-0 left-0 flex justify-between items-center ">
                <svg onClick={() => {
                    slideNo >= 0 ? slideRight() : ''
                }} className={` ${slideNo === 0 ? " opacity-0 cursor-default " : " opacity-100 cursor-pointer "} leftBtn relative z-10`} version="1.1" xmlns="http://www.w3.org/2000/svg" width="80px" viewBox="0 0 710 487">
                    <path d="M0 0 C234.3 0 468.6 0 710 0 C710 160.71 710 321.42 710 487 C475.7 487 241.4 487 0 487 C0 326.29 0 165.58 0 0 Z" fill="none" transform="translate(0,0)" />
                    <path fill="#ffffff" d="M0 0 C1.32 0.33 2.64 0.66 4 1 C4 9.91 4 18.82 4 28 C105.97 28 207.94 28 313 28 C313 35.59 313 43.18 313 51 C211.03 51 109.06 51 4 51 C4 60.24 4 69.48 4 79 C-0.95204572 79 -1.98826434 78.78154776 -5.96484375 76.39453125 C-6.91866943 75.82959961 -7.87249512 75.26466797 -8.85522461 74.68261719 C-9.87237549 74.06547852 -10.88952637 73.44833984 -11.9375 72.8125 C-12.99783447 72.18118164 -14.05816895 71.54986328 -15.15063477 70.89941406 C-17.35562177 69.58588842 -19.5579906 68.26795844 -21.7578125 66.94580078 C-25.72201728 64.56668089 -29.70320137 62.2172594 -33.68725586 59.87158203 C-35.51043709 58.79660913 -37.33159351 57.71819418 -39.15063477 56.63623047 C-43.45758101 54.07470387 -47.77766759 51.5498201 -52.15234375 49.10546875 C-52.95164307 48.65333008 -53.75094238 48.20119141 -54.57446289 47.73535156 C-56.06797422 46.89278484 -57.56819051 46.06195453 -59.07592773 45.24511719 C-61.0546875 44.12109375 -61.0546875 44.12109375 -64 42 C-64 40.68 -64 39.36 -64 38 C-62 36.3515625 -62 36.3515625 -59 34.625 C-58.43385986 34.29322754 -57.86771973 33.96145508 -57.28442383 33.61962891 C-55.96242093 32.84736471 -54.63629084 32.08214206 -53.30712891 31.32226562 C-50.74039872 29.85121687 -48.18815413 28.35679095 -45.63671875 26.859375 C-40.52129064 23.86066102 -35.39681222 20.87780713 -30.26953125 17.89941406 C-24.73983831 14.68697298 -19.21332075 11.46909576 -13.6875 8.25 C-12.66164795 7.65364746 -11.6357959 7.05729492 -10.57885742 6.44287109 C-9.62857666 5.88937988 -8.6782959 5.33588867 -7.69921875 4.765625 C-6.86221436 4.27868164 -6.02520996 3.79173828 -5.1628418 3.29003906 C-3.41024043 2.24469019 -1.69794655 1.13196437 0 0 Z" transform="translate(211,201)" />
                </svg>
                <svg onClick={() => {
                    slideNo >= 0 ? slideLeft() : ''
                }} className={`${slideNo === 3 ? " opacity-0 cursor-default " : " opacity-100 cursor-pointer "} rightBtn relative z-10`} version="1.1" xmlns="http://www.w3.org/2000/svg" width="80px" viewBox="0 0 710 487">
                    <path d="M0 0 C234.3 0 468.6 0 710 0 C710 160.71 710 321.42 710 487 C475.7 487 241.4 487 0 487 C0 326.29 0 165.58 0 0 Z " fill="none" transform="translate(0,0)" />
                    <path fill="#ffffff" d="M0 0 C5.62077151 0 5.62077151 0 8.94921875 2.09765625 C10.0777124 2.79387085 10.0777124 2.79387085 11.22900391 3.50415039 C12.04030762 4.01840576 12.85161133 4.53266113 13.6875 5.0625 C15.47901493 6.16902393 17.27206296 7.27306846 19.06640625 8.375 C20.02305176 8.96410156 20.97969727 9.55320313 21.96533203 10.16015625 C27.29550178 13.39170567 32.714146 16.4686613 38.125 19.5625 C48.52971147 25.53099929 58.8122845 31.66887448 69 38 C67.49629441 42.14877807 65.18193056 43.32796435 61.375 45.375 C60.09798404 46.07635393 58.82202297 46.77963054 57.546875 47.484375 C56.82951172 47.87818359 56.11214844 48.27199219 55.37304688 48.67773438 C50.74870792 51.25442365 46.19269678 53.94963474 41.625 56.625 C39.55990684 57.82944595 37.49480246 59.03387267 35.4296875 60.23828125 C31.03196114 62.80710974 26.64267976 65.38975675 22.2578125 67.98046875 C21.16774902 68.62226074 20.07768555 69.26405273 18.95458984 69.92529297 C16.85613394 71.16108942 14.76000741 72.40085189 12.66650391 73.64501953 C11.71952637 74.2017334 10.77254883 74.75844727 9.796875 75.33203125 C8.96510742 75.82421143 8.13333984 76.3163916 7.27636719 76.82348633 C5.14749719 77.92376781 3.36455536 78.63680168 1 79 C0.67 78.67 0.34 78.34 0 78 C0 69.09 0 60.18 0 51 C-101.97 51 -203.94 51 -309 51 C-309 43.41 -309 35.82 -309 28 C-207.03 28 -105.06 28 0 28 C0 18.76 0 9.52 0 0 Z " transform="translate(451,175)" />
                </svg>
            </div>

        </section>
    )
}

export default HeroSection