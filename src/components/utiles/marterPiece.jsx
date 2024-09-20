import React , {useState , useEffect} from 'react'
import '../../index.css'

const MasterPiece = (props) => {

    const [masterPiece, setmasterPiece] = useState(false)


    const animateMaterPiece = () => {
        const elem = document.querySelector("#master-piece .title")
        // console.log(elem)
        elem ? (() => {
            console.log(h)
            const h = elem.clientHeight
            window.scrollY >= (h + 50) ? setmasterPiece(true) : setmasterPiece(false)
            console.log(h)
        }) : console.log("byugby")
    }

    useEffect(() => {
        // animateWedding()
        // animateMaterPiece()
    }, [])

    window.addEventListener('scroll', () => {
        // animateWedding()
        // animateMaterPiece()
    })
    return (
        <div id='master-piece' className='w-full overflow-auto py-16 bg-[#e0e5e5]'>
            <div className="title text-center text-[#000000]">
                <span className='border-b-[1px] border-black font-semibold text-5xl uppercase cormorant-garamond-font'>masterpiece</span> 
                <p className=' md:w-7/12 sm:w-9/12 w-11/12 mx-auto dancing-script-font my-6 text-lg'>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ullam nemo deserunt iusto fugit totam suscipit harum debitis minus sit cupiditate corporis laborum consequuntur veniam assumenda! Tempore est quo nesciunt!"</p>
            </div>
            <div className="gallery max-w-[650px] mx-auto translate-x-0 px-4">
                <div className={`row1 ${props.masterPiece ? " translate-x-2.5 opacity-100 " : " -translate-x-40 opacity-0 "} w-full flex justify-center items-end transition-all duration-700 ease-in-out delay-0`}>
                    <div className="col1 img relative translate-y-0">
                        <img src="/a/boliviainteligente-2XVqBh3sXgY-unsplash.jpg" alt="" className='' />
                    </div>
                    <div className="col2 imgbw  p-1">
                        <img src="/a/colin-watts-_rt4VIG9rDQ-unsplash.jpg" alt="" className='' />
                    </div>
                </div>
                <div className={`row2 ${props.masterPiece ? " -translate-x-2.5 opacity-100 " : " translate-x-40 opacity-0 "} w-full flex justify-center items-start transition-all duration-700 ease-in-out delay-200`}>
                    <div className="col1 imgbw relative">
                        <img src="/a/alex-shuper-5DU0Wlm41Zw-unsplash.jpg" alt="" className='' />
                    </div>
                    <div className="col2 img -translate-y-6 p-1">
                        <img src="/a/arthur-arias-QAZCk9QzOrU-unsplash.jpg" alt="" className='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MasterPiece