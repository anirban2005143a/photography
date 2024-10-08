import React, { useEffect, useState } from 'react'
import Wedding from './utiles/wedding'
import HeroSection from './utiles/HeroSection'
import MasterPiece from './utiles/marterPiece'
import Navbar from './navbar'
import WeddingStory from './utiles/WeddingStory'
import CinematicFlim from './utiles/CinematicFlim'
import MeetTheArtist from './utiles/MeetTheArtist'

const home = () => {

    const [masterPiece, setmasterPiece] = useState(false)
    const [isWeddingVisible, setisWeddingVisible] = useState(false)
    const [weddingPart2, setweddingPart2] = useState(false)
    const [weddingStory, setweddingStory] = useState(false)
    const [bgVideo, setbgVideo] = useState(false)

    const animateMaterPiece = () => {
        window.scrollY >= 150 ? setmasterPiece(true) : setmasterPiece(false)
    }


    const animateWedding = () => {
        const masterPiece = document.querySelector("#homePage #master-piece")
        const wedding = document.querySelector("#homePage #wedding")

        masterPiece && wedding ? (() => {
            const h1 = masterPiece.clientHeight
            const part1H = wedding.querySelector(".part1").clientHeight
            window.scrollY >= (h1 + 250) ? setisWeddingVisible(true) : setisWeddingVisible(false)
            window.scrollY >= (h1 + part1H + 100) ? setweddingPart2(true) : setweddingPart2(false)
        })() : ""
    }

    const animateWeddingStory = () => {
        const masterPiece = document.querySelector("#homePage #master-piece")
        const wedding = document.querySelector("#homePage #wedding")

        masterPiece && wedding ? (() => {
            const h1 = masterPiece.clientHeight
            const h2 = wedding.clientHeight

            window.scrollY >= (h1 + h2 + 200) ? setweddingStory(true) : setweddingStory(false)
        })() : ""
    }

    const isBgVideo = () => {
        const masterPiece = document.querySelector("#homePage #master-piece")
        const wedding = document.querySelector("#homePage #wedding")
        const weddingStory = document.querySelector("#homePage #weddingStory")
        const flim = document.querySelector("#cinematicFlim")

        masterPiece && wedding && weddingStory && flim ? (() => {
            const h1 = masterPiece.clientHeight
            const h2 = wedding.clientHeight
            const h3 = weddingStory.clientHeight
            const top = flim.getBoundingClientRect().top
            window.scrollY > (h1 + h2) ? setbgVideo(true) : setbgVideo(false)
            top <= 0 ? setbgVideo(false) : ""
        })() : ""
    }

    useEffect(() => {
        animateWedding()
        animateMaterPiece()
        animateWeddingStory()
        isBgVideo()
    }, [])

    window.addEventListener('scroll', () => {
        animateWedding()
        animateMaterPiece()
        animateWeddingStory()
        isBgVideo()
    })

    console.log(bgVideo)

    return (
        <>
            <div id='homePage' className=' relative'>
                <Navbar />
                <HeroSection />
                <MasterPiece masterPiece={masterPiece} />
                <Wedding isWeddingVisible={isWeddingVisible} weddingPart2={weddingPart2} />
                <WeddingStory weddingStory={weddingStory} />
                {bgVideo && <div className="fixedVideo z-[-1] fixed top-0 left-0 w-full h-[100vh] overflow-hidden">
                    <video src="/weddingVid.mp4" className=' object-cover md:w-full w-auto h-full object-center' autoPlay loop muted></video>
                </div>}
                <div className="bgvideoDisplay md:h-[80vh] h-[60vh] bg-transparent "></div>
                <CinematicFlim />
                <MeetTheArtist />

                {/* {isWeddingVisible && <section id='public' className=' mb-10'>
                    <div className="images flex justify-center ">
                        <div className="image w-52 h-64  -rotate-12"><img className=' w-full h-full object-cover border-2 border-slate-600 rounded-md' src="/bg3.jpg" alt="" /></div>
                        <div className="image w-52 h-64  rotate-12 translate-y-4"><img className=' w-full h-full object-cover border-2 border-slate-600 rounded-md' src="/bg2.avif" alt="" /></div>
                    </div>
                    <div className="content mt-12">
                        <div className=' w-7/12 text-center text-base mx-auto text-violet-100 font-thin'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, odio voluptate consequuntur quaerat beatae impedit nisi ipsum voluptatibus repudiandae quod laboriosam dolore, architecto quidem ut doloribus labore, est ex expedita?
                        </div>
                    </div>
                </section>} */}
                {/* <div className=' bg-slate-500'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nulla sed saepe dolorem ullam velit repellendus nostrum! Ullam, at. Mollitia delectus autem repellat ex minus quod accusantium eaque quam placeat.
                Eligendi expedita eveniet suscipit reprehenderit eius doloremque iure similique ad quasi, omnis vel fugit! Dolores vel repellat voluptatem adipisci vero asperiores debitis corrupti unde possimus, a non libero, ipsa sunt?
                Laborum inventore quam optio, aliquam, reiciendis aliquid accusantium iste sed ad, quod facere quasi eos totam earum temporibus ea? Molestias facere porro voluptas reprehenderit fuga excepturi exercitationem vero nam voluptatibus!
                Aliquid necessitatibus quibusdam maxime tempore autem quasi quas voluptates fuga incidunt nobis magni vitae, provident sapiente amet et laudantium ea doloribus tenetur iure beatae neque exercitationem? Distinctio quisquam odio laudantium.
                Maiores, similique corporis voluptatem at quae ipsa iste laboriosam placeat architecto quia numquam nobis quam ut possimus distinctio consequatur soluta quas ratione. Doloremque accusamus quisquam eius in, sapiente quas autem.
                Optio, illo incidunt? Possimus ratione minus omnis, eligendi quisquam iusto, ex in recusandae repellat dignissimos nesciunt corrupti neque velit alias delectus aperiam minima vel numquam libero maiores. Alias, aliquid fugiat!
                Autem, exercitationem blanditiis. Corporis exercitationem tempore distinctio totam doloribus enim dicta sit officiis voluptate quae quibusdam nulla, eius iste aliquam? Veniam tempore enim dolorum repellat neque doloremque eos animi optio!
                Quod placeat vitae ut totam illum in quae delectus a aliquid voluptate id dicta alias numquam, ipsa accusamus nesciunt harum beatae eaque blanditiis? Debitis ut eum architecto, soluta quis iusto?
                Sit harum maxime quaerat possimus mollitia explicabo cum quibusdam nobis quia id sed animi perferendis, illo expedita exercitationem quae nostrum, obcaecati, optio voluptates earum repudiandae est? Sequi nihil recusandae modi!
                Nobis rerum asperiores culpa corporis voluptatum quo, sed assumenda eaque vel maxime sit quae molestiae omnis! Quas tempore incidunt, at earum placeat nam commodi, vitae blanditiis dolorem iure sequi aperiam.</div> */}
            </div>

        </>
    )
}

export default home