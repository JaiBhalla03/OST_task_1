import React from 'react';
import coverImage from '../images/hero1.jpg'
import coverImage1 from '../images/hero2.jpg'
import Image from 'next/image'
import {AiOutlineArrowRight, AiOutlinePlus, AiOutlineSwapRight} from "react-icons/ai";


const Hero = () => {
    return (
        <main className={'pt-20 px-10 text-gray-800'}>
            <div className={'w-full flex gap-8'}>
                <div className={'flex flex-col gap-8 w-[70%]'}>
                    <div className={'flex flex-col gap-4'}>
                        <div className={'flex gap-4'}>
                            <h1 className={'font-normal text-6xl italic'}>
                                Best of the week
                            </h1>
                            <div className={'flex flex-col justify-end'}>
                                <div className={'flex gap-1 group hover:gap-2 duration-500 transition-all cursor-pointer'}>
                                    <div className={'pt-4 text-md italic group-hover:tracking-[1px] duration-500 transition-all'}>
                                        See all posts
                                    </div>
                                    <div className={'flex items-center mt-3 pt-1'}>
                                        <AiOutlineSwapRight size={25} className={''}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'relative'}>
                        <Image src={coverImage} alt={''} className={'w-full rounded-[40px]'}/>
                        <div className={'absolute flex items-center justify-center bottom-6 end-6 bg-white w-10 h-10 rounded-full cursor-pointer hover:-translate-y-1 duration-500 transition-all'}>
                            <AiOutlineArrowRight size={25} className={'font-bold text-gray-800 -rotate-45'}/>
                        </div>
                        <div className={'absolute text-md w-32 font-bold flex flex-col gap-2 items-center justify-center top-6 start-6'}>
                            <div className={'bg-white p-1 rounded-full text-center w-full'}>
                                15 Jun, 2023
                            </div>
                            <li className={'bg-black bg-opacity-40 font-extralight decoration-1 border p-1 rounded-full text-center border-white text-white w-full'}>
                                Job
                            </li>
                        </div>
                        <div className={'bg-opacity-40 absolute bg-white text-md py-4 px-6 font-semibold top-6 end-6 rounded-[40px] text-4xl'}>
                            Find your dream<br/> job in with <br/>OST placement search.
                        </div>
                    </div>
                </div>
                <div className={'w-[30%] flex flex-col gap-8'}>
                    <div className={'relative h-1/2 w-full bg-gray-300 rounded-[40px]'}>
                        <div className={'absolute flex items-center justify-center top-6 end-6 bg-white w-10 h-10 rounded-full cursor-pointer hover:-translate-y-1 duration-500 transition-all'}>
                            <AiOutlinePlus size={25} className={'font-bold text-gray-800'}/>
                        </div>
                        <li className={'flex items-center justify-center absolute bg-opacity-30 decoration-1 top-6 start-6 text-black border border-black rounded-full w-16 text-sm'}>
                            ADS
                        </li>
                        <div className={'absolute bottom-6 end-6 underline text-gray-800 flex items-center justify-center font-bold text-sm'}>
                            Learn more
                        </div>
                    </div>
                    <div className={'h-1/2 w-full bg-gray-300 rounded-[40px] relative'}>
                        <Image src={coverImage1} alt={''} className={'w-full rounded-[40px]'}/>
                        <div className={'absolute flex font-bold text-white items-center justify-center top-6 end-6 border border-white w-10 h-10 rounded-full'}>
                            100
                        </div>
                        <div className={'absolute bottom-6 items-center start-1/2 flex gap-1 -translate-x-1/2 bg-white rounded-full p-4 font-bold cursor-pointer hover:-translate-y-1 duration-500 transition-all'}>
                            Sell all picks <AiOutlineSwapRight/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Hero;