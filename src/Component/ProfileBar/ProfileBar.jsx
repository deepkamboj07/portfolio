import { EyeDropperIcon, LinkIcon, MapPinIcon } from '@heroicons/react/24/outline';
import profile from '../../../assets/profile.jpg'
import achive from '../../../assets/achive.png'
import { Linkedin } from 'lucide-react';
const ProfileBar=()=>{
    return(
        <div className="sm:px-5 px-2">
            <div className='flex sm:gap-0 justify-around sm:flex-col flex-row'>
                <div className='flex justify-center items-center'>
                    <div className='sm:h-72 h-20 w-20 sm:w-72 border-2 border-borderGrey rounded-full'>
                        <img src={profile} className='sm:h-72 h-20 w-20 sm:w-72 rounded-full object-cover'/>
                    </div>
                </div>

                <div className='sm:p-2 p-0 text-white'>
                    <h1 className='sm:text-2xl text-xl font-bold'>Deepanshu Kamboj</h1>
                    <h4 className='text-mainGrey sm:text-base text-sm'>Full Stack Developer</h4>

                    <button className='bg-[#30363D] text-white focus:outline-none p-1 text-sm rounded-md w-full my-4 border border-white'>follow</button>
                </div>
            </div>

            <div className='flex flex-col gap-3 sm:my-0 my-2'>
                <div className='text-white flex items-center gap-2 text-sm'>
                    <MapPinIcon className='text-borderGrey h-4 w-5'/>
                    <h2>India</h2>
                </div>
                <div className='text-white flex items-center gap-2 text-sm'>
                    <EyeDropperIcon className='text-borderGrey h-4 w-5'/>
                    <h2>Full Stack Developer @DevTown</h2>
                </div>
                <div className='text-white flex items-center gap-2 text-sm'>
                    <EyeDropperIcon className='text-borderGrey h-4 w-5'/>
                    <h2>Completed 15+ Projects</h2>
                </div>
                <div className='text-white flex items-center gap-2 text-sm'>
                    <Linkedin className='text-borderGrey h-4 w-5'/>
                    <h2 className='hover:text-blue-500'><a target='_blank' href='https://www.linkedin.com/in/deepanshu-kamboj-5aa74019a/'>https://www.linkedin.com/in/deepanshu-kamboj-5aa74019a/</a></h2>
                </div>
                <div className='text-white flex items-center gap-2 text-sm'>
                    <LinkIcon className='text-borderGrey h-4 w-5'/>
                    <h2 className='hover:text-blue-500'><a target='_blank' href='https://leetcode.com/deepkamboj07/'>https://leetcode.com/deepkamboj07/</a></h2>
                </div>
            </div>

            <div className=' w-full h-[1px] bg-borderGrey my-7'></div>

            <div className='sm:block hidden'>
                <h2 className='text-white'>Achievements</h2>
                <div className='my-2 flex gap-2'>
                    <img src={achive} className='w-16 h-16 rounded-full'/>
                </div>
                <div className='flex gap-2 my-2 items-center'>
                <span className='p-1 px-2 text-green-400 border w-auto border-green-400 rounded-lg text-[10px]'>Beta</span>
                <h6 className='text-blue-400 text-[10px]'>send feedback</h6>
                </div>

            </div>
        </div>
    )
}

export default ProfileBar;