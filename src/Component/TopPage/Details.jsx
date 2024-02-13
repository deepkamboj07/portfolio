import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '../../utils/motion';
import {SparklesIcon} from '@heroicons/react/24/solid'
import mainIcon from '../.././../assets/mainIconsdark.svg' 
const Details=()=>{
    return(
        <motion.div
        initial='hidden'
        animate='visible'
        className='flex flex-row items-center justify-center sm:px-20 px-5 my-10 w-full z-[20]'>
            <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
                <motion.div
                    variants={slideInFromTop}
                    className='flex Welcome-box py-[15px] px-[4px] border border-[#7042f88b] opacity-[0.9]'>
                        <SparklesIcon className='text-[#b49bff] h-5 w-5 mr-[10px]'/>
                        <h1 className='Welcome-text text-[#b49bff]'>Full Stack Developer</h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 sm:text-6xl text-3xl font-bold text-white max-w-[600px] w-auto h-auto">
                         <span>
                            Providing
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            the best{" "}
                            </span>
                            project exprience
                        </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-5 max-w-[600px]"
                    >
                    I&apos;m a Full Stack Software Engineer with experience in Website,
                    Mobile, and Software development. Check out my projects and skills.
                </motion.p>

                <motion.a
                variants={slideInFromLeft(1)}
                className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                >
                Learn More!
                </motion.a>
            </div>


            <motion.div
                    variants={slideInFromRight(0.8)}
                    className="w-full h-full sm:flex hidden justify-center items-center"
                >
                    <img
                    src={mainIcon}
                    alt="work icons"
                    height={650}
                    width={650}
                    />
            </motion.div>

        </motion.div>
    )
}
export default Details;