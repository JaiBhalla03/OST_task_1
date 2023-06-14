import React from 'react';
import {AiOutlineSearch} from "react-icons/ai";

const NavBar = () => {
    return (
        <nav className={'bg-white z-10 px-2 flex justify-between h-16 fixed w-full shadow-xl'}>
            <div className={'flex'}>
                <div className={'flex items-center text-2xl mx-4 cursor-pointer text-gray-800 font-bold italic'}>
                    OST Blogs.
                </div>
                <ul className={'flex gap-8 pt-2 font-bold text-gray-800 text-sm'}>
                    <li className={'relative hover:underline duration-75 cursor-pointer transition-all flex items-center'}>
                        New Feeds
                        <div className={'absolute text-gray-400 top-3 -end-6 font-bold text-[10px]'}>
                            (89)
                        </div>
                    </li>
                    <li className={'relative hover:underline duration-75 cursor-pointer transition-all flex items-center'}>
                        Events
                        <div className={'absolute text-gray-400 top-3 -end-6 font-bold text-[10px]'}>
                            (18)
                        </div>
                    </li>
                    <li className={'relative hover:underline duration-75 cursor-pointer transition-all flex items-center'}>
                        Jobs
                        <div className={'absolute text-gray-400 top-3 -end-6 font-bold text-[10px]'}>
                            (340)
                        </div>
                    </li>
                    <li className={'relative hover:underline duration-75 cursor-pointer transition-all flex items-center'}>
                        Talk to us
                    </li>
                </ul>
            </div>
            <div className={'flex items-center gap-4'}>
                <div className={'bg-gray-800 h-10 w-10 p-1 rounded-full flex items-center justify-center cursor-pointer'}>
                    <AiOutlineSearch size={20} className={'text-white'}/>
                </div>
                <div className={'border border-gray-800 rounded-full py-2 px-4 text-sm cursor-pointer'}>
                    Menu
                </div>
            </div>
        </nav>
    );
};

export default NavBar;