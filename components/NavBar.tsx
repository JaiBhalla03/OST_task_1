import React from 'react';

const NavBar = () => {
    return (
        <nav className={'flex justify-between h-16'}>
            <div className={'flex'}>
                <div className={'flex items-center text-2xl mx-4 cursor-pointer text-gray-800 font-bold italic'}>
                    OST Blogs.
                </div>
                <ul className={'flex gap-2'}>
                    <li className={'flex items-center text-gray-800 font-bold text-md pt-2'}>
                        New Feeds
                    </li>
                    <li className={'flex items-center text-gray-800 font-bold text-md pt-2'}>
                        Events
                    </li>
                    <li className={'flex items-center text-gray-800 font-bold text-md pt-2'}>
                        Jobs
                    </li>
                    <li className={'flex items-center text-gray-800 font-bold text-md pt-2'}>
                        Talk to us
                    </li>
                </ul>
            </div>
            <div className={'flex'}>
                <div>

                </div>
                <div>
                    menu
                </div>
            </div>
        </nav>
    );
};

export default NavBar;