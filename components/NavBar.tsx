import React, {useEffect, useRef, useState} from 'react';
import { RiSearchLine } from 'react-icons/ri';

const NavBar = () => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const prevScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;

            if (scrollTop > 0) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > prevScrollY.current) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
            prevScrollY.current = currentScrollY;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <nav
            className={`bg-white z-10 px-2 flex justify-between h-16 duration-700 transition-all w-full ${hasScrolled ? 'shadow-xl' : ''} 
            ${isScrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100 sticky top-0'}`}
        >
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
                    <RiSearchLine size={20} className={'text-white rotate-90'} />
                </div>
                <div className={'border border-gray-800 rounded-full py-2 px-4 text-sm cursor-pointer'}>
                    Menu
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
