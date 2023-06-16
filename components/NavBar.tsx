import React, { useEffect, useRef, useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';

const NavBar = () => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav
            className={`bg-white z-10 px-2 flex justify-between h-16 duration-700 transition-all w-full ${
                hasScrolled ? 'shadow-xl' : ''
            } ${isScrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100 sticky top-0'}`}
        >
            <div className="flex">
                <div className="flex items-center text-2xl mr-4 cursor-pointer text-gray-800 font-bold italic">
                    <Link href="/">OST Blogs.</Link>
                </div>
                <ul className="hidden md:flex gap-8 pt-2 font-bold text-gray-800 text-sm">
                    <li className="relative hover:underline duration-75 cursor-pointer transition-all flex items-center">
                        <span>New Feeds</span>
                        <div className="absolute text-gray-400 top-3 -end-6 font-bold text-[10px]">(89)</div>
                    </li>
                    <li className="relative hover:underline duration-75 cursor-pointer transition-all flex items-center">
                        <span>Events</span>
                        <div className="absolute text-gray-400 top-3 -end-6 font-bold text-[10px]">(18)</div>
                    </li>
                    <li className="relative hover:underline duration-75 cursor-pointer transition-all flex items-center">
                        <span>Jobs</span>
                        <div className="absolute text-gray-400 top-3 -end-6 font-bold text-[10px]">(340)</div>
                    </li>
                    <li className="relative hover:underline duration-75 cursor-pointer transition-all flex items-center">
                        <span>Talk to us</span>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-4">
                <div className="hidden md:block">
                    <div className="bg-gray-800 h-10 w-10 p-1 rounded-full flex items-center justify-center cursor-pointer">
                        <RiSearchLine size={20} className="text-white rotate-90" />
                    </div>
                </div>
                <div className="md:hidden">
                    <div
                        className="h-10 w-10 p-1 rounded-full flex items-center justify-center cursor-pointer"
                        onClick={handleMobileMenuToggle}
                    >
                        {isMobileMenuOpen ? (
                            <FiX size={30} className="text-gray-800" />
                        ) : (
                            <FiMenu size={30} className="text-gray-800" />
                        )}
                    </div>
                </div>
            </div>
            {isMobileMenuOpen && (
                <ul
                    className="pt-10 bg-white text-4xl italic absolute top-16 left-0 w-full h-screen shadow-lg flex flex-col items-center"
                >
                    <li className="py-4 w-full flex justify-center items-center py-2 px-4 hover:bg-gray-100 cursor-pointer">
                        <span>New Feeds</span>
                    </li>
                    <li className="py-4 w-full flex justify-center items-center py-2 px-4 hover:bg-gray-100 cursor-pointer">
                        <span>Events</span>
                    </li>
                    <li className="py-4 w-full flex justify-center items-center py-2 px-4 hover:bg-gray-100 cursor-pointer">
                        <span>Jobs</span>
                    </li>
                    <li className="py-4 w-full flex justify-center items-center py-2 px-4 hover:bg-gray-100 cursor-pointer">
                        <span>Talk to us</span>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default NavBar;
