import React from 'react'
import '../index.css'

const navbar = () => {
  return (
    <div id='navbar' className='bg-transparent fixed top-0 w-full z-50 overflow-hidden dosis-font font-thin pt-4' style={{backgroundImage:"linear-gradient(to bottom , transparent , transparent)"}}>
        <div className=' flex justify-between items-center'>
            <div className="sign p-3 mx-4"><img src="/1.png" alt="" style={{width:"80px"}} /></div>
            <div className="menu flex justify-center items-center capitalize mx-5 text-[#F6F5F2]" style={{fontFamily:"inherit"}}>
                <div className=' ms-5 transition-all duration-500 hover:underline font-normal cursor-pointer'><a href='#wedding'>wedding</a></div>
                <div className=' ms-5 transition-all duration-500 hover:underline font-normal cursor-pointer'><a href='#cinematicFlim'>flim</a></div>
                <div className=' ms-5 transition-all duration-500 hover:underline font-normal cursor-pointer'><a href='#public'>public</a></div>
                <div className=' ms-5 transition-all duration-500 hover:underline font-normal cursor-pointer'><a href='#'>about me</a></div>
                <div className=' ms-5 transition-all duration-500 hover:underline font-normal cursor-pointer'><a href='#'>contact</a></div>
            </div>
        </div>
    </div>
  )
}

export default navbar