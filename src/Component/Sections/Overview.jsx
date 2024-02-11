import { PencilIcon } from "@heroicons/react/24/outline";
import Details from "../TopPage/Details";
import {motion} from 'framer-motion'
import { Brush, CodeSquare, Database, FileCode } from "lucide-react";
import { slideInFromLeft, slideInFromTop } from "../../utils/motion";
import StartCanvas from "../Background/StartCanvas";
const PinnedItem=({title,Icon})=>{
    return(
        <div className="border button-primary rounded-md items-center border-borderGrey w-[32%] sm:text-base text-xs flex text-white p-2 justify-center gap-5">
                        <Icon className='text-borderGrey h-5 w-5'/>
                        <h1>{title}</h1>
        </div>
    )
}

const Overview=()=>{
    return(
        <div className="h-full w-full">
            <div className="bg-[#030014] border border-borderGrey rounded-md relative">
                <div className="text-white p-4 px-6 text-xs flex justify-between">
                        <h4>deepkamboj07 / README.md</h4>
                        <PencilIcon className="h-4 w-4"/>
                </div>
                <Details/>
                <StartCanvas/>
            </div>

            {/* <motion.div
            animate='visible'
            initial='hidden'
             className="mt-10 mb-4">
                <h2 className="text-white text-sm">Pinned</h2>
                <motion.div 
                    variants={slideInFromLeft(1.0)}
                    className="flex flex-wrap my-4 gap-2">
                    <PinnedItem Icon={CodeSquare} title={'HTML'}/>
                    <PinnedItem Icon={Brush} title={'CSS'}/>
                    <PinnedItem Icon={FileCode} title={'Javascript'}/>
                </motion.div>
                <motion.div 
                    variants={slideInFromLeft(1.0)}
                    className="flex flex-wrap my-4 gap-2">
                    <PinnedItem Icon={FileCode} title={'Nodejs'}/>
                    <PinnedItem Icon={Brush} title={'Tailwind'}/>
                    <PinnedItem Icon={FileCode} title={'Java'}/>
                </motion.div>
                <div className="flex flex-wrap my-4 gap-2">
                    <PinnedItem Icon={Database} title={'MongoDB'}/>
                    <PinnedItem Icon={FileCode} title={'React Native'}/>
                    <PinnedItem Icon={FileCode} title={'Android'}/>
                </div>
                <div className="flex flex-wrap my-4 gap-2">
                    <PinnedItem Icon={Database} title={'My Sql'}/>
                    <PinnedItem Icon={FileCode} title={'AWS'}/>
                    <PinnedItem Icon={FileCode} title={'ReactJs'}/>
                </div>
                <div className="flex flex-wrap my-4 gap-2">
                    <PinnedItem Icon={FileCode} title={'NextJs'}/>
                    <PinnedItem Icon={FileCode} title={'C/C++'}/>
                    <PinnedItem Icon={FileCode} title={'Data Structure'}/>
                </div>
            </motion.div> */}
        </div>
    )
}

export default Overview;