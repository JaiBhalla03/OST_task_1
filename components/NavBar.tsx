import React, {useEffect, useRef, useState} from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isEventsOpen, setIsEventsOpen] = useState(false);
    const [isJobsOpen, setIsJobsOpen] = useState(false);
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

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleEventsToggle = () => {
        setIsEventsOpen(!isEventsOpen);
        setIsJobsOpen(false);
    };

    const handleJobsToggle = () => {
        setIsJobsOpen(!isJobsOpen);
        setIsEventsOpen(false);
    };

    const otherClicks = () =>{
        setIsEventsOpen(false);
        setIsJobsOpen(false);
    }

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
                    <li onClick={otherClicks} className="relative hover:underline duration-75 cursor-pointer transition-all flex items-center">
                        <span>New Feeds</span>
                        <div className="absolute text-gray-400 top-3 -end-6 font-bold text-[10px]">(89)</div>
                    </li>
                    <li className="relative hover:underline duration-75 cursor-pointer transition-all flex items-center" onClick={handleEventsToggle}>
                        <span>Events</span>
                        {isEventsOpen && (
                            <motion.div
                                initial={{y:-100,scale:0, opacity:0}}
                                animate={{y:0, scale: 1,opacity:1, transition:{duration: 0.3}}}
                                className="absolute top-10 -start-5 w-48 bg-white shadow shadow-gray-400 text-sm rounded-xl py-2  mt-2"
                            >
                                <ul className={'flex flex-col'}>
                                    <li className={'flex items-center justify-center py-2 w-full hover:bg-gray-200 text-md duration-300 transition-all'}>Event-1</li>
                                    <li className={'flex items-center justify-center py-2 w-full hover:bg-gray-200 text-md duration-300 transition-all'}>Event-2</li>
                                    <li className={'flex items-center justify-center py-2 w-full hover:bg-gray-200 text-md duration-300 transition-all'}>Event-3</li>
                                </ul>
                            </motion.div>
                        )}
                    </li>
                    <li className="relative hover:underline duration-75 cursor-pointer transition-all flex items-center" onClick={handleJobsToggle}>
                        <span>Jobs</span>
                        {isJobsOpen && (
                            <motion.div
                                initial={{y:-100,scale:0, opacity:0}}
                                animate={{y:0, scale: 1,opacity:1, transition:{duration: 0.3}}}
                                className="absolute top-10 -start-5 w-48 bg-white shadow shadow-gray-400 text-sm rounded-xl py-2  mt-2"
                            >
                                <ul className={'flex flex-col'}>
                                    <li className={'flex items-center justify-center py-2 w-full hover:bg-gray-200 text-md duration-300 transition-all'}>Job-1</li>
                                    <li className={'flex items-center justify-center py-2 w-full hover:bg-gray-200 text-md duration-300 transition-all'}>Job-2</li>
                                    <li className={'flex items-center justify-center py-2 w-full hover:bg-gray-200 text-md duration-300 transition-all'}>Job-3</li>
                                    <li className={'flex items-center justify-center py-2 w-full hover:bg-gray-200 text-md duration-300 transition-all'}>Job-4</li>
                                    <li className={'flex items-center justify-center py-2 w-full hover:bg-gray-200 text-md duration-300 transition-all'}>Job-5</li>
                                </ul>
                            </motion.div>
                        )}
                    </li>
                    <li onClick={otherClicks} className="relative hover:underline duration-75 cursor-pointer transition-all flex items-center">
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
                    <div className="h-10 w-10 p-1 rounded-full flex items-center justify-center cursor-pointer" onClick={handleMobileMenuToggle}>
                        {isMobileMenuOpen ? (
                            <FiX size={30} className="text-gray-800" />
                        ) : (
                            <FiMenu size={30} className="text-gray-800" />
                        )}
                    </div>
                </div>
            </div>
            {isMobileMenuOpen && (
                <ul className="pt-10 w-full bg-white text-4xl italic absolute top-16 left-0 w-full h-screen shadow-lg flex flex-col items-center">
                    <li onClick={otherClicks} className="py-4 w-full flex justify-center items-center py-2 px-4 hover:bg-gray-100 cursor-pointer">
                        <span>New Feeds</span>
                    </li>
                    <li className="py-4 w-full flex flex-col justify-center items-center py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={handleEventsToggle}>
                        <span>Events</span>
                        {isEventsOpen && (
                            <div className="bg-gray-100 text-sm px-2 py-1 rounded mt-2">
                                <p>Event 1</p>
                                <p>Event 2</p>
                                <p>Event 3</p>
                            </div>
                        )}
                    </li>
                    <li className="py-4 w-full flex flex-col justify-center items-center py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={handleJobsToggle}>
                        <span>Jobs</span>
                        {isJobsOpen && (
                            <div className="bg-gray-100 text-sm px-2 py-1 rounded mt-2">
                                <p>Job 1</p>
                                <p>Job 2</p>
                                <p>Job 3</p>
                                <p>Job 4</p>
                            </div>
                        )}
                    </li>
                    <li onClick={otherClicks} className="py-4 w-full flex justify-center items-center py-2 px-4 hover:bg-gray-100 cursor-pointer">
                        <span>Talk to us</span>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default NavBar;
