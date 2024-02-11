import SideNavigation from "./SideNavigation";
import deepLogo from '../../assets/logo1.jpg'
import deepProfile from '../../assets/profile.jpg'
import { ChevronRightIcon, InboxStackIcon, MagnifyingGlassIcon, PlusIcon, StopCircleIcon } from "@heroicons/react/24/solid";
import SearchBar from "./SearchBar";

const HeaderBar=()=>{
    return(
        <div className=" flex flex-row p-4 justify-between">
            <div className="flex gap-5 items-center">
                <SideNavigation/>
                <img src={deepLogo} className="h-8 w-8 object-contain"/>
                <h3 className="text-white sm:block hidden">Deepanshu Kamboj</h3>
                <h3 className="text-white block sm:hidden">Deepanshu..</h3>
            </div>
            <div className="flex gap-3 items-center">           
                <SearchBar/>      
                <div className="sm:block hidden bg-borderGrey h-5 w-[0.1px]"></div>
                <div className=" sm:flex hidden border p-1 items-center justify-between gap-2 border-borderGrey bg-transparent rounded-md focus:outline-none">
                   <PlusIcon className="h-4 w-4 text-mainGrey"/>
                </div>
                <div className="sm:flex hidden border p-1 items-center justify-between gap-2 border-borderGrey bg-transparent rounded-md focus:outline-none">
                   <StopCircleIcon className="h-4 w-4 text-mainGrey"/>
                </div>
                <div className="border p-1 items-center flex justify-between gap-2 border-borderGrey bg-transparent rounded-md focus:outline-none">
                   <InboxStackIcon className="h-4 w-4 text-mainGrey"/>
                </div>
                <img src={deepProfile} className="h-8 w-8 object-contain rounded-full border border-borderGrey"/>
            </div>
        </div>
    )
}

export default HeaderBar;