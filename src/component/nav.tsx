import { useState } from 'react';
import logo from '../assets/logo-text.png';
import { IoMenu } from "react-icons/io5";

const Nav = () => {

    const [active, setActive] = useState('Home');

    const menuItems = [
        'Home',
        'Technologies',
        'Projects',
        'About',
        'Contact'
    ];
    return (
        <nav className="fixed top-0 left-0 z-50 w-full bg-white px-15 p-3 border-b">
            <div className="container mx-auto grid grid-cols-12">

                 <div className="col-span-2 md:hidden">
                    <IoMenu className="text-3xl text-gray-500" />
                </div>

                <div className="col-span-6 flex justify-center md:col-span-3 md:justify-start">
                    <img
                        className="w-32"
                        src={logo}
                        alt="Logo"
                    />
                </div>


                <ul className="gap-5 justify-center items-center text-[15px] cursor-pointer font-bold md:col-span-6 md:flex hidden">

                    {menuItems.map((item) => (
                        <li
                            key={item}
                            onClick={() => setActive(item)}
                            className={`cursor-pointer ${active === item
                                    ? 'text-pink-600'
                                    : 'text-slate-600'
                                }`}
                        >
                            {item}
                        </li>
                    ))}
                </ul>

                <div className='grid-cols-4 flex items-center md:justify-end gap-1 md:col-span-3 md:gap-2 text-[13px] md:text-[15px] sm:gap-3'>
                    <button className="whitespace-nowrap py-2 border-none font-bold rounded-2xl">Sign In</button>
                    <button className="whitespace-nowrap btn btn-secondary rounded-3xl text-white">Sign Up</button>
                </div>


            </div>
        </nav>
    );
};

export default Nav;



// container mx-auto flex items-center justify-between


 