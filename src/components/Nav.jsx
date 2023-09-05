import './Nav.css'
import { Link } from "react-router-dom";
import React,{ useState } from 'react';
import { FcCommandLine } from "react-icons/fc";
import { FcElectronics } from "react-icons/fc";
import { FcPuzzle } from "react-icons/fc";

function NavComponent() {
    const [active,setActive] = useState('intro');
    let btnClass = 'bg-gray-800 rounded text-white font-semibold';
    function changeActive(navName) {
        setActive(navName)
    }
    function setClass(navName){
        if(navName === active) return btnClass
        return null
    }
    return(
        <div className="m-5 nav-btn w-40">
            <div label="title">
                <p className='text-lg font-bold'>GET STARTED</p>
            </div>
            <Link to="/">
                <div className={`${setClass('intro')} p-2`}
                    onClick={() => changeActive('intro')} >
                    <FcCommandLine />
                   <p>Introduction</p>
                </div>
            </Link>
            <Link to="/control">
                <div className={`${setClass('control')} p-2`} onClick={() => changeActive('control')} >
                    <FcElectronics />Controller
                </div>
            </Link>
            <Link to="/template">
                <div className={`${setClass('temp')} p-2`}  onClick={() => changeActive('temp')}>
                    <FcPuzzle />Template
                </div>
            </Link>
            <div className='text-gray-400 p-2' onClick={() => changeActive('api')}>
                {'Api(Pending)'}
            </div>
        </div>
    )
}
export default NavComponent