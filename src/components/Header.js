/* eslint-disable jsx-a11y/anchor-is-valid */
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [classHidden, setClassHidden] = useState("hidden md:flex md:justify-between md:flex-row  flex-col md:bg-white bg-slate-900 md:text-slate-900 text-white");
    const [iconName, setIconName] = useState(faBars);

    const scrollHandler = (event) => {
        event.preventDefault();
    }

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
            if (isOpen === false) {
                setClassHidden("mobilenav flex md:flex md:justify-between  md:flex-row  flex-col justify-start py-10 md:py-0 items-center md:bg-white bg-slate-900 md:text-slate-900 text-white w-full md:min-h-0  transition-opacity duration-1000 md:static z-10 overscroll-y-none overflow-y-hidden min-h-screen z-20");
                setCross();
                setTrue();
            }
            else if (isOpen === true) {
                setClassHidden("hidden   md:flex md:justify-between  md:flex-row  flex-col md:bg-white  bg-slate-900 md:text-slate-900 text-white md:min-h-0 absolute transition-opacity duration-1000 delay-1000 md:static");
                setBar();
                setFalse();
            }
        };


        setClass();

    }

    const navHider = () => {
        setClassHidden("hidden   md:flex md:justify-between  md:flex-row  flex-col md:bg-white  bg-slate-900 md:text-slate-900 text-white md:min-h-0 absolute transition-opacity duration-1000 delay-1000 md:static");
        setIconName(faBars);
    }

   
    return (
        <div>
            <header className="md:shadow-lg">
                <div>
                    <div className="md:hidden font-bold text-3xl py-2 px-3 absolute text-white" onClick={toggleNav}>
                        <FontAwesomeIcon icon={iconName} />
                    </div>
                    <div className="md:hidden flex justify-end items-center font-bold text-3xl md:py-0 md:pr-0 pr-4 py-1 bg-slate-900 text-white logo pb-2 m-0">
                        Oly
                    </div>
                </div>
                <nav className={classHidden}>
                    <p className="logo-lg hidden md:flex md:text-3xl md:mx-10 md:py-4  md:items-center md:font-bold">
                        OLY
                    </p>
                    <div className="md:flex" onScroll={scrollHandler}>
                        <ul className="md:flex md:mr-28 md:font-semibold md:flex-row flex flex-col justify-center items-center  md:justify-between  md:bg-white bg-slate-900 md:text-slate-900 text-white md:text-xl text-xl">
                            <li className="flex"><a className="md:px-4 py-2  md:py-4 md:text-xl md:hover:text-cyan-600 md:hover:underline md:underline-offset-8  md:w-full md:text-slate-900" href="#">Home</a></li>
                            <li className="flex"><a className="md:px-4 py-2 md:py-4 md:text-xl md:hover:text-cyan-600 md:hover:underline md:underline-offset-8  md:w-full md:text-slate-900" href="#about" onClick={navHider}>About</a></li>
                            <li className="flex"><a className="md:px-4 py-2 md:py-4 md:text-xl md:hover:text-cyan-600 md:hover:underline md:underline-offset-8  md:w-full md:text-slate-900" href="#">Skills</a></li>
                            <li className="flex"><a className="md:px-4 py-2 md:py-4 md:text-xl md:hover:text-cyan-600 md:hover:underline md:underline-offset-8  md:w-full md:text-slate-900" href="#">Works</a></li>
                            <li className="flex"><a className="md:px-4 py-2 md:py-4 md:text-xl md:hover:text-cyan-600 md:hover:underline md:underline-offset-8  md:w-full md:text-slate-900" href="#">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header