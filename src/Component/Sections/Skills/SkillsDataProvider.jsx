import { useInView } from "framer-motion"
import {motion} from 'framer-motion'

const SkillsDataProvider=({src,width,height,index})=>{
    const {ref,inView} = useInView({triggerOnce:false});

    const imageVariants={
        hidden:{opacity:0},
        visible:{opacity:1}
    }

    const animationDelay = 0.3;


    return(
        <motion.div
            ref={ref}
            initial='hidden'
            variants={imageVariants}
            animate={!inView?"visible":"hidden"}
            custom={index}
            transition={{delay:index*animationDelay}}
        >
            <img src={src} width={width} height={height} alt="Skills"/>
        </motion.div>
    )
}

export default SkillsDataProvider;