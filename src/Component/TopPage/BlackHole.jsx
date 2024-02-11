import blackholeVideo from '../../assets/blackhole.webm' 
const BlackHole=()=>{
    return(
            <div className='absolute w-full h-full top-0 z-0'>
                <video
                autoPlay
                muted
                loop
                className="rotate-180 h-full w-full z-0 opacity-20 object-cover">
                <source src={blackholeVideo} type="video/webm"/>
                </video>
            </div>
    )
}

export default BlackHole;