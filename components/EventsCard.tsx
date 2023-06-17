import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AiOutlineArrowRight } from 'react-icons/ai';
import {StaticImageData} from "next/image";

interface EventsCardProps {
    imag: StaticImageData;
    eventDate: string;
    eventName: string;
    eventDescription: string;
}

const EventsCard: React.FC<EventsCardProps> = ({ imag, eventDate, eventName, eventDescription }) => {
    return (
        <motion.div className={'min-w-full md:min-w-[60%] h-full rounded-[20px] md:rounded-[40px] select-none relative'}>
            <Image src={imag} alt={''} className={'object-cover select-none w-full h-full rounded-[20px] md:rounded-[40px]'} />
            <div className={'absolute rounded-[20px] md:rounded-[40px] top-0 h-full w-full backdrop-blur-[2px] hover:backdrop-blur-0 duration-500 transition-all'}></div>
            <div className={'absolute flex items-center justify-center bottom-6 end-6 bg-white w-10 h-10 rounded-full cursor-pointer hover:-translate-y-1 duration-500 transition-all'}>
                <AiOutlineArrowRight size={25} className={'font-bold text-gray-800 -rotate-45'} />
            </div>
            <div className={'absolute text-md font-bold flex flex-col gap-2 items-center justify-center top-auto end-auto bottom-6 start-6 md:top-6 md:end-6 md:start-auto md:bottom-auto'}>
                <div className={'bg-white p-1 rounded-full text-center w-full'}>{eventDate}</div>
                <div className={'bg-black bg-opacity-40 font-extralight border p-1 rounded-full text-center border-white text-white w-full'}>{eventName}</div>
            </div>
            <motion.div className={'bg-opacity-40 absolute bg-white text-md md:text-2xl lg:text-4xl py-4 px-6 font-semibold top-0 start-0 md:top-6 md:start-6 rounded-[20px] md:rounded-[40px] w-full md:w-1/2'} initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2 }}>
                {eventDescription}
            </motion.div>
        </motion.div>
    );
};

export default EventsCard;
