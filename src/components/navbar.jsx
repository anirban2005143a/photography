import React from 'react'

const navbar = () => {
  return (
    <div id='navbar' className='bg-transparent absolute top-0 w-full z-10'>
        <div className=' flex justify-between items-center'>
            <div className="sign p-3 mx-4"><img src="/1.png" alt="" style={{width:"80px"}} /></div>
            <div className="menu flex justify-center items-center capitalize mx-5 text-orange-200" style={{fontFamily:"inherit"}}>
                <div className=' ms-3 hover:underline font-normal cursor-pointer'><a href='#wedding'>wedding</a></div>
                <div className=' ms-3 hover:underline font-normal cursor-pointer'><a href='#cenematic-shot'>shots</a></div>
                <div className=' ms-3 hover:underline font-normal cursor-pointer'><a href='#public'>public</a></div>
                <div className=' ms-3 hover:underline font-normal cursor-pointer'><a href='#'>about me</a></div>
                <div className=' ms-3 hover:underline font-normal cursor-pointer'><a href='#'>contact</a></div>
            </div>
        </div>
    </div>
  )
}

export default navbar