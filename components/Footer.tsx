import React, {useEffect} from 'react';
import Image from 'next/image';
import footerImage from '../images/footerImage.jpg';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from "react-intersection-observer";

const Footer = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const footerVariant = {
        visible: {opacity: 1, x: 0, transition: {duration: 1}},
        hidden: {opacity: 0, x:-500}
    }
    useEffect(()=>{
        console.log('in view', inView)
        if(inView){
            controls.start("visible");
        }
    }, [controls, inView])
    return (
        <footer ref={ref} className={'p-10'}>
            <motion.div
                className={'relative'}
                animate={controls}
                variants={footerVariant}
                initial='hidden'
            >
                <Image src={footerImage} alt={''} className={'w-full rounded-[40px]'}/>
                <div className={'flex flex-col items-center justify-around absolute top-0 rounded-[40px] backdrop-blur-sm w-full h-full'}>
                    <div className={'text-5xl font-normal text-white'}>
                        JOIN NOW
                    </div>
                    <form className={'flex w-[70%] justify-around'}>
                        <input className={'focus:outline-none p-1 bg-white bg-opacity-[15%] text-center border border-white rounded-full text-white placeholder-white h-16 w-72'} placeholder={'Your name'} type={'text'}/>
                        <input className={'focus:outline-none p-1 bg-white bg-opacity-[15%] text-center border border-white rounded-full text-white placeholder-white h-16 w-72'} placeholder={'Your email'} type={'text'}/>
                        <button className={'p-1 h-16 rounded-full bg-black text-white w-28'}>Submit</button>
                    </form>
                    <div className={'flex justify-between w-full mx-auto w-[90%] border-t border-white pt-4'}>
                        <div className={'font-bold text-gray-800'}>
                            This will be a good experience
                        </div>
                        <div className={'flex gap-4'}>
                            <div className={'cursor-pointer px-1 bg-white font-thin rounded-full h-10 flex items-center'}>
                                Got any Questions?
                            </div>
                            <div className={'cursor-pointer px-1 bg-black text-white font-thin rounded-full h-10 flex items-center'}>
                                Contact Us
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;