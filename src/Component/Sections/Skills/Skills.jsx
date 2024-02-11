import { Backend_skill, Frontend_skill, Full_stack, Other_skill } from "../../../constants/projectFile"
import StartCanvas from "../../Background/StartCanvas"
import SkillsDataProvider from "./SkillsDataProvider"
import videoSkills from '../../../assets/skills/cards-video.webm'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from "../../../utils/motion"
import { SparklesIcon } from "lucide-react"

const Skills=()=>{
    return(
        <section
            id="skills"
            className="bg-[#030014] border border-borderGrey rounded-md flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden p-5"
        >

            <motion.div
                initial='hidden'
                animate='visible' className="w-full h-auto flex flex-col items-center justify-center">
                <motion.div
                    variants={slideInFromTop}
                    className='flex Welcome-box py-[15px] px-[4px] border border-[#7042f88b] opacity-[0.9] my-4'>
                        <SparklesIcon className='text-[#b49bff] h-5 w-5 mr-[10px]'/>
                        <h1 className='Welcome-text text-[#b49bff]'>Making Apps with modern Technologies</h1>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.8)}
                    className='text-[28px] text-white font-medium my-1 text-center'>
                        Let's Make some creative using these Tech.
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(1.0)}
                    className=' cursive text-[18px] text-white font-medium my-1 text-center'>
                        Never miss a task deadline or idea
                </motion.div>
            </motion.div>

            <div className="flex flex-row justify-around flex-wrap mt-4 gap-7 items-center">
                {
                    Frontend_skill.map((skill,index)=>{
                        return(
                            <SkillsDataProvider
                                key={index}
                                src={skill.Image}
                                height={skill.height}
                                width={skill.width}
                                index={index}
                            />
                        )
                    })
                }
            </div>

            <div className="flex flex-row justify-around flex-wrap mt-4 gap-7 items-center">
                {
                    Backend_skill.map((skill,index)=>{
                        return(
                            <SkillsDataProvider
                                key={index}
                                src={skill.Image}
                                height={skill.height}
                                width={skill.width}
                                index={index}
                            />
                        )
                    })
                }
            </div>

            <div className="flex flex-row justify-around flex-wrap mt-4 gap-7 items-center">
                {
                    Full_stack.map((skill,index)=>{
                        return(
                            <SkillsDataProvider
                                key={index}
                                src={skill.Image}
                                height={skill.height}
                                width={skill.width}
                                index={index}
                            />
                        )
                    })
                }
            </div>

            <div className="flex flex-row justify-around flex-wrap mt-4 gap-7 items-center">
                {
                    Other_skill.map((skill,index)=>{
                        return(
                            <SkillsDataProvider
                                key={index}
                                src={skill.Image}
                                height={skill.height}
                                width={skill.width}
                                index={index}
                            />
                        )
                    })
                }
            </div>


            <div className="w-full h-full absolute">
                    <div className="w-full h-full opacity-30 absolute flex items-center justify-center bg-cover">
                        <video
                            preload="false"
                            playsInline
                            loop
                            className="w-full h-full"
                            muted
                            autoPlay
                            src={videoSkills}
                        />
                    </div>
            </div>

            <StartCanvas/>

        </section>
    )
}

export default Skills;