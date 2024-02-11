import { Bars3Icon } from "@heroicons/react/24/solid";

const SideNavigation=()=>{
    return(
        <div>
            <button className="border border-borderGrey rounded-md p-1">
                <Bars3Icon className="h-5 w-5 text-mainGrey"/>
            </button>
        </div>
    )
}
export default SideNavigation;