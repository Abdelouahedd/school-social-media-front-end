import React, {useEffect} from 'react'
import SideBar from "../shared/Side-bar/SideBar";
import Index from "../index/Index";


export default function Home() {

    return (
        <div id="colorlib-page">
            <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i/></a>
            <SideBar/>
            <div id="colorlib-main">
                <Index/>
            </div>
        </div>
    )
}
