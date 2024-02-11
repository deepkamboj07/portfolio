import {motion} from 'framer-motion'
import { Brush, Chrome, CodeSquare, Database, FileCode, GithubIcon, Link, Link2, Projector } from "lucide-react";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "../../utils/motion";
import StartCanvas from '../Background/StartCanvas';
const ProjectItem=({name,links,github,detail,image,index})=>{
    const animationDelay = 0.7;
    return(
                    <div className=' opacity-60 sm:w-[48%] w-full h-60 relative z-[9999999999]'>
                        <motion.div
                        variants={index%2===0 ? slideInFromRight(index*animationDelay) : slideInFromLeft(index*animationDelay)} 
                        custom={index}
                        className={`projectContainer border bg-[#030014] overflow-hidden flex justify-end items-end border-borderGrey w-full h-full rounded-md bg-cover`} style={{backgroundImage:`url(${image})`}}>
                        <div className="overlayImage overflow-hidden backdrop-brightness-[0.2] w-full sm:h-[20%] h-[25%] cursor-pointer p-3 rounded-md">
                            <h2 className="text-white font-medium sm:text-base text-sm">{name}</h2>
                            <div className="content hidden h-[80%] pt-2 justify-between flex-col">
                                <p className="text-white text-xs">{detail}</p>
                                <div className="flex items-end gap-4">
                                    {github && <div className="text-gray-300">
                                        <a><GithubIcon/></a>
                                    </div>}
                                    <div className="text-gray-300 flex gap-3">
                                        {
                                            links.map((link,index)=>{
                                                return (<a href={link} target='_blank' key={index}><Link/></a>)
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    </div>
    )
}

export default ProjectItem;