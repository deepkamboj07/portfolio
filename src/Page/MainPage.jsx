import { PencilIcon } from "@heroicons/react/24/outline";
import Header from "../Component/Header/Header";
import ProfileBar from "../Component/ProfileBar/ProfileBar";
import BlackHole from "../Component/TopPage/BlackHole"
import Details from "../Component/TopPage/Details";
import Footer from "../Component/Footer/Footer";
import Overview from "../Component/Sections/Overview";
import { useState } from "react";
import Projects from "../Component/Sections/Project";
import StartCanvas from "../Component/Background/StartCanvas";
import Skills from "../Component/Sections/Skills/Skills";
const MainPage=()=>{

    const [tab,setTab] = useState(0);

    return(
        <div className="w-full h-full">
            <Header setTab={setTab} tab={tab}/>
            <div className="flex justify-center sm:p-10 p-5">
                <div className="flex justify-between sm:w-[90%] w-full sm:flex-row flex-col">
                    <div className="sm:w-[30%] w-full">
                        <ProfileBar/>
                    </div>
                    <div className="sm:w-[70%] w-full">
                        {tab === 0 && <Overview/>}
                        {tab === 2 && <Projects/>}
                        {tab === 1 && <Skills/>}
                    </div>
                </div>
            </div>


            <Footer/>
            {/* <div className="flex flex-col h-full">
                <BlackHole/>
                <Details/>
            </div> */}
        </div>
    )
}

export default MainPage;