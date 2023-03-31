/* eslint-disable jsx-a11y/anchor-is-valid */

const Header = () => {

    return (
        <div className="">
            <header>
                <nav className="md:flex md:justify-between shadow-lg hidden">
                    <p className="text-3xl mx-10 py-4 flex items-center font-bold">
                        Oly
                    </p>
                    <div className="flex">
                        <ul className="flex mr-28 font-semibold">
                            <li className="flex"><a className="px-4 py-4 text-xl hover:text-cyan-600 hover:underline underline-offset-8  w-full text-slate-900" href="#">About</a></li>
                            <li className="flex"><a className="px-4 py-4 text-xl hover:text-cyan-600 hover:underline underline-offset-8  w-full text-slate-900" href="#">Home</a></li>
                            <li className="flex"><a className="px-4 py-4 text-xl hover:text-cyan-600 hover:underline underline-offset-8  w-full text-slate-900" href="#">Skills</a></li>
                            <li className="flex"><a className="px-4 py-4 text-xl hover:text-cyan-600 hover:underline underline-offset-8  w-full text-slate-900" href="#">Works</a></li>
                            <li className="flex"><a className="px-4 py-4 text-xl hover:text-cyan-600 hover:underline underline-offset-8  w-full text-slate-900" href="#">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header