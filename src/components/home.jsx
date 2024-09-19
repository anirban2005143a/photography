import React, { useEffect, useState } from 'react'
import Wedding from './utiles/wedding'
import HeroSection from './utiles/HeroSection'
import MasterPiece from './utiles/marterPiece'
import Navbar from './navbar'

const home = () => {

    const [isWeddingVisible, setisWeddingVisible] = useState(true)


    return (
        <>
            <div id='homePage' className=' '>
                <Navbar/>
                <HeroSection />
                <MasterPiece />

                <Wedding isWeddingVisible={isWeddingVisible} />


                {/* {isWeddingVisible && <section id='cenematic-shot' className='my-32 relative'>
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
                </section>}

                {isWeddingVisible && <section id='public' className=' mb-10'>
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