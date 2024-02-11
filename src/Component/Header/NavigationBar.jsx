import { BookOpenIcon, BookmarkIcon, CubeIcon, Square2StackIcon, StarIcon } from "@heroicons/react/24/outline";
import NavigationItem from "./NavigationItem";

const NavigationBar=({setTab,tab})=>{
    return(
        <div className=" flex flex-row px-3 gap-1">
            <NavigationItem Icon={BookOpenIcon} title={"Overview"} selected={tab==0 ? true : false} onclick={()=>{setTab(0)}}/>
            <NavigationItem Icon={BookmarkIcon} title={"Skills"} selected={tab==1 ? true : false} onclick={()=>{setTab(1)}}/>
            <NavigationItem Icon={Square2StackIcon} title={"Projects"} selected={tab==2 ? true : false} onclick={()=>{setTab(2)}}/>
            {/* <NavigationItem Icon={CubeIcon} title={"Packages"} selected={tab==3 ? true : false} onclick={()=>{setTab(3)}}/>
            <NavigationItem Icon={StarIcon} title={"Stars"} selected={tab==4 ? true : false} onclick={()=>{setTab(4)}}/> */}
        </div>
    )
}

export default NavigationBar;