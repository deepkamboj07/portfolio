import HeaderBar from "./HeaderBar";
import NavigationBar from "./NavigationBar";

const Header=({setTab,tab})=>{
    return(
        <div className=" bg-[#010409] w-full h-auto">
            <HeaderBar/>
            <NavigationBar setTab={setTab} tab={tab}/>
        </div>
    )
}

export default Header;