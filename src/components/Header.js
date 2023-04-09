/* eslint-disable jsx-a11y/anchor-is-valid */
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Home from "./Home";

const Header = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [classHidden, setClassHidden] = useState("hidden md:flex md:justify-between md:flex-row  flex-col md:bg-white bg-slate-900 md:text-slate-900 text-white");
    const [iconName, setIconName] = useState(faBars);

    const toggleNav = (event) => {
        event.preventDefault();
        const setClass = () => {
            const setTrue = () => {
                setIsOpen(true);
            }
            const setFalse = () => {
                setIsOpen(false);
            }
            const setBar = () => {
                setIconName(faBars);
            }
            const setCross = () => {
                setIconName(faXmark)
            }
            if(isOpen === false) {
                setClassHidden("flex md:flex md:justify-between  md:flex-row  flex-col justify-start py-10 md:py-0 items-center md:bg-white bg-slate-900 md:text-slate-900 text-white min-h-screen w-full md:min-h-0 absolute transition-opacity duration-1000 md:static");
                setCross();
                setTrue();
                props.setHide();
            }
            else if(isOpen === true){
                setClassHidden("hidden  md:flex md:justify-between  md:flex-row  flex-col md:bg-white min-h-screen bg-slate-900 md:text-slate-900 text-white md:min-h-0 absolute transition-opacity duration-1000 delay-1000 md:static");
                setBar();
                setFalse();
            }
        };

        
        setClass();

        
    }

    return (
        <div className="">
            <header className="md:shadow-lg">
                <div className="md:hidden font-bold text-2xl py-1 px-1 absolute text-white" onClick={toggleNav}>
                    <FontAwesomeIcon icon={iconName} />
                </div>
                <div className="md:hidden flex justify-end items-center font-bold text-3xl md:py-0 md:pr-0 pr-4 py-1 bg-slate-900 text-white logo pb-1">
                    Oly
                </div>
                <nav className={classHidden}>
                    <p className="logo-lg hidden md:flex md:text-3xl md:mx-10 md:py-4  md:items-center md:font-bold">
                        OLY
                    </p>
                    <div className="md:flex">
                        <ul className="md:flex md:mr-28 md:font-semibold md:flex-row flex flex-col justify-center items-center  md:justify-between  md:bg-white bg-slate-900 md:text-slate-900 text-white md:text-xl text-xl">
                            <li className="flex"><a className="md:px-4 py-2  md:py-4 md:text-xl md:hover:text-cyan-600 md:hover:underline md:underline-offset-8  md:w-full md:text-slate-900" href="#">Home</a></li>
                            <li className="flex"><a className="md:px-4 py-2 md:py-4 md:text-xl md:hover:text-cyan-600 md:hover:underline md:underline-offset-8  md:w-full md:text-slate-900" href="#">About</a></li>
                            <li className="flex"><a className="md:px-4 py-2 md:py-4 md:text-xl md:hover:text-cyan-600 md:hover:underline md:underline-offset-8  md:w-full md:text-slate-900" href="#">Skills</a></li>
                            <li className="flex"><a className="md:px-4 py-2 md:py-4 md:text-xl md:hover:text-cyan-600 md:hover:underline md:underline-offset-8  md:w-full md:text-slate-900" href="#">Works</a></li>
                            <li className="flex"><a className="md:px-4 py-2 md:py-4 md:text-xl md:hover:text-cyan-600 md:hover:underline md:underline-offset-8  md:w-full md:text-slate-900" href="#">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
            <Home isOpen={isOpen} />
        </div>
    )
}

export default Header