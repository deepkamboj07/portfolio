import {motion} from 'framer-motion'
import {Projector } from "lucide-react";
import { projects } from "../../constants/projectFile";
import ProjectItem from "../Item/ProjectItem";
import StartCanvas from '../Background/StartCanvas';
import BlackHole from '../TopPage/BlackHole';
import videoSkills from '../../assets/skills/cards-video.webm'

const Projects=()=>{
    return(
        <div className="h-full w-full relative">
            <div className="bg-[#030014] border border-borderGrey rounded-md relative overflow-hidden">
                <div className="text-white p-4 px-6 text-xs flex justify-between">
                        <h4>My Projects</h4>
                        <Projector className="h-4 w-4"/>
                </div>
                <motion.div 
                    initial='hidden'
                    animate='visible'
                    className="flex flex-wrap my-10 justify-center p-4 gap-8 z-[99999999]">

                    {
                        projects.map((project,index)=>{
                            return(
                                <ProjectItem key={project.id} 
                                             name={project.name} 
                                             detail={project.detail}
                                             image={project.image}
                                             links={project.links}
                                             github={project.github}
                                             index={index}
                                            />
                            )
                        })
                    }
                    
                </motion.div>

                <StartCanvas/>

            </div>
        </div>
    )
}

export default Projects;