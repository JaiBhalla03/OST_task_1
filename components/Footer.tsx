import React, {useEffect} from 'react';
import Image from 'next/image';
import footerImage from '../images/footerImage.jpg';
import footerImage1 from '../images/footerImage1.jpg';
import footerImage2 from '../images/footerImage2.jpg';
import footerImage3 from '../images/footerImage3.jpg';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from "react-intersection-observer";
import {AiOutlineArrowRight} from "react-icons/ai";

const Footer = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const footerVariant = {
        visible: {opacity: 1, x: 0, transition: {duration: 1}},
        hidden: {opacity: 0, x:-500}
    }
    const footerVariant1 = {
        visible: {opacity: 1, y:0, transition: {delay: 0.25}},
        hidden: {opacity: 0, y: -200}
    }
    const footerVariant2 = {
        visible: {opacity: 1, y:0, transition: {delay: 0.5}},
        hidden: {opacity: 0, y: -200}
    }
    const footerVariant3 = {
        visible: {opacity: 1, y:0, transition: {delay: 0.75}},
        hidden: {opacity: 0, y: -200}
    }
    const footerVariant4 = {
        visible: {opacity: 1, y:0, transition: {delay: 1}},
        hidden: {opacity: 0, y: -200}
    }
    useEffect(()=>{
        console.log('in view', inView)
        if(inView){
            controls.start("visible");
        }
    }, [controls, inView])
    return (
        <footer ref={ref} className={'p-2 flex flex-col items-center gap-8 md:p-10 overflow-hidden'}>
            <div className={'flex flex-col gap-8 justify-center items-center'}>
                <h1 className={'text-3xl md:text-6xl italic tracking-tighter text-gray-800'}>Be the part of our broadcast</h1>
                <div className={'flex gap-8'}>
                    <motion.div className={'w-14 h-10 md:w-36 md:h-24 rounded-full relative'}
                                animate={controls}
                                variants={footerVariant1}
                                initial='hidden'
                    >
                      <Image src={footerImage1} alt={''} className={'w-full h-full rounded-full'}/>
                        <div className={'absolute flex flex-col items-center justify-center top-0 h-full w-full rounded-full backdrop-blur-[1px]'}>
                            <div className={'select-none text-3xl md:text-5xl pt-5 font-extrabold text-white flex flex-col items-center justify-center'}>^</div>
                        </div>
                    </motion.div>
                    <motion.div className={'w-14 h-10 md:w-36 md:h-24 rounded-full relative'}
                                animate={controls}
                                variants={footerVariant2}
                                initial='hidden'
                    >
                        <Image src={footerImage2} alt={''} className={'w-full h-full rounded-full'}/>
                        <div className={'absolute flex flex-col items-center justify-center top-0 h-full w-full rounded-full backdrop-blur-[1px]'}>
                            <div className={'select-none text-3xl md:text-6xl pb-5 font-bold text-white flex flex-col items-center justify-center'}>[  ]</div>
                        </div>
                    </motion.div>
                    <motion.div className={'w-14 h-10 md:w-36 md:h-24 flex flex-col items-center justify-center rounded-full bg-gray-300 relative'}
                                animate={controls}
                                variants={footerVariant3}
                                initial='hidden'
                    >
                        <AiOutlineArrowRight className={'text-3xl md:text-6xl font-bold text-white -rotate-45'}/>
                    </motion.div>
                    <motion.div className={'w-14 h-10 md:w-36 md:h-24 rounded-full relative'}
                                animate={controls}
                                variants={footerVariant4}
                                initial='hidden'
                    >
                        <Image src={footerImage3} alt={''} className={'w-full h-full rounded-full'}/>
                        <div className={'absolute flex flex-col items-center justify-center top-0 h-full w-full rounded-full backdrop-blur-[1px]'}>
                            <div className={'select-none text-3xl md:text-6xl pt-5 font-extrabold text-white flex flex-col items-center justify-center'}>*</div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <motion.div
                className={'relative w-full'}
                animate={controls}
                variants={footerVariant}
                initial='hidden'
            >
                <Image src={footerImage} alt={''} className={'w-full h-96 md:h-full object-cover rounded-[20px] md:rounded-[40px]'}/>
                <div className={'absolute top-0 h-full w-full bg-black rounded-[20px] md:rounded-[40px] opacity-[40%]'}>

                </div>
                <div className={'flex flex-col items-center justify-around absolute top-0 rounded-[40px] backdrop-blur-sm w-full h-full'}>
                    <div className={'text-3xl md:text-4xl md:text-5xl font-normal text-white'}>
                        JOIN NOW
                    </div>
                    <form className={'flex gap-2 items-center flex-col md:flex-row w-[90%] md:w-[70%] justify-around'}>
                        <input className={'focus:outline-none p-1 bg-white bg-opacity-[15%] text-center border border-white rounded-full text-white placeholder-white h-10 md:h-16 w-56 md:w-72'} placeholder={'Your name'} type={'text'}/>
                        <input className={'focus:outline-none p-1 bg-white bg-opacity-[15%] text-center border border-white rounded-full text-white placeholder-white h-10 md:h-16 w-56 md:w-72'} placeholder={'Your email'} type={'text'}/>
                        <button className={'hover:-translate-y-1 duration-500 transition-all p-1 h-10 md:h-16 rounded-full bg-black text-white w-28'}>Submit</button>
                    </form>
                    <div className={'flex flex-col md:flex-row gap-4 justify-between w-full mx-auto w-11/12 border-t border-white pt-4'}>
                        <div className={'font-bold text-gray-800'}>
                            This will be a good experience
                        </div>
                        <div className={'flex justify-between md:justify-normal md:gap-4'}>
                            <div className={'hover:-translate-y-1 duration-500 transition-all cursor-pointer px-1 bg-white font-thin rounded-full h-10 flex items-center'}>
                                Got any Questions?
                            </div>
                            <div className={'hover:-translate-y-1 duration-500 transition-all cursor-pointer px-1 bg-black text-white font-thin rounded-full h-10 flex items-center'}>
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