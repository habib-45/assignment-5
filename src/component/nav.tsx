
import { useState } from 'react';
import logo from '../assets/logo-text.png';
import { IoMenu } from "react-icons/io5";
import Navmanu from './navmanu';

const Nav = () => {

    const [active, setActive] = useState('Home');
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        'Home',
        'Technologies',
        'Projects',
        'About',
        'Contact'
    ];

    return (
        <nav className="fixed top-0 left-0 z-50 w-full bg-white px-5 md:px-15 p-3 border-b">

            <div className="container mx-auto grid grid-cols-12 items-center">

                
                <div className="col-span-2 md:hidden">
                    <IoMenu
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-3xl text-gray-500 cursor-pointer"
                    />
                </div>

            
                <div className="col-span-6 flex justify-center md:col-span-3 md:justify-start">
                    <img
                        className="w-32"
                        src={logo}
                        alt="Logo"
                    />
                </div>
                <ul className="hidden md:flex gap-5 justify-center items-center text-[15px] cursor-pointer font-bold md:col-span-6">

                    {menuItems.map((item) => (
                        <li
                            key={item}
                            onClick={() => setActive(item)}
                            className={`cursor-pointer ${
                                active === item
                                    ? 'text-pink-600'
                                    : 'text-slate-600'
                            }`}
                        >
                            {item}
                        </li>
                    ))}

                </ul>

                <div className="col-span-4 flex items-center justify-end gap-1 md:col-span-3 md:gap-2 text-[13px] md:text-[15px]">

                    <button className="whitespace-nowrap py-2 font-bold rounded-2xl">
                        Sign In
                    </button>

                    <button className="whitespace-nowrap btn btn-secondary rounded-3xl text-white">
                        Sign Up
                    </button>

                </div>

            </div>

            <Navmanu
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                menuItems={menuItems}
            />

        </nav>
    );
};

export default Nav;
