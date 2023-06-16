import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AiOutlineArrowRight, AiOutlineSwapRight } from 'react-icons/ai';
import post1 from '../images/postImage1.jpg';
import post2 from '../images/postImage2.jpg';
import post3 from '../images/postImage3.jpg';
import post4 from '../images/postImage4.jpg';
import Image from 'next/image';

const NewFeeds = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const NewFeedsHeadingVariants = {
        visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
        hidden: { opacity: 0, x: 500 },
    };

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const blogPreviews = [
        {
            description: 'Explore the world of freelancing and learn how to build a successful freelance career.',
            image: post1,
            date: '04 Sep 2023',
            type: 'Freelancing',
            variants: {
                visible: { opacity: 1 , transition: {delay: 1}},
                hidden: { opacity: 0},
            },
        },
        {
            description: 'Boost your productivity with effective time management strategies.',
            image: post2,
            date: '28 Jun 2023',
            type: 'Business',
            variants: {
                visible: { opacity: 1, transition: {delay: 1.25}},
                hidden: { opacity: 0 },
            },
        },
        {
            description: 'Learn essential negotiation skills to succeed in business deals.',
            image: post3,
            date: '16 Jul 2023',
            type: 'Business',
            variants: {
                visible: { opacity: 1 , transition: {delay: 1.5}},
                hidden: { opacity: 0 },
            },
        },
        {
            description: 'Discover proven marketing strategies to grow your business exponentially.',
            image: post4,
            date: '22 Aug 2023',
            type: 'Business',
            variants: {
                visible: { opacity: 1, transition: {delay: 1.75}},
                hidden: { opacity: 0},
            },
        },
    ];

    return (
        <div className={'mt-16 px-10 text-gray-800'} ref={ref}>
            <motion.div
                className="flex flex-col justify-center"
                animate={controls}
                variants={NewFeedsHeadingVariants}
                initial="hidden"
            >
                <div className={'flex gap-4'}>
                    <h1 className="tracking-tighter italic text-6xl font-normal">New Post</h1>
                    <div className={'flex gap-1 group hover:gap-2 duration-500 transition-all cursor-pointer'}>
                        <div className={'flex flex-col justify-end pt-4 text-md italic group-hover:tracking-[1px] duration-500 transition-all'}>
                            See all posts
                        </div>
                        <div className={'flex flex-col pt-2 items-center justify-end'}>
                            <AiOutlineSwapRight size={25} className={''} />
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-8 mt-8">
                {blogPreviews.map((blog, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-200 rounded-[40px] relative"
                        initial="hidden"
                        animate={controls}
                        whileHover={{scale: 1.05, transition: {duration: 0.5}}}
                        variants={blog.variants}
                    >
                        <Image src={blog.image} alt="Blog Preview" className="w-full h-full object-cover rounded-[40px] mb-4" />
                        <div className={'bg-opacity-50 absolute bg-white py-4 px-6 font-semibold top-6 start-6 rounded-[40px] text-2xl w-1/2'}>
                            {blog.description}
                        </div>
                        <div className={'absolute flex items-center justify-center top-6 end-6 bg-white w-10 h-10 rounded-full cursor-pointer hover:-translate-y-1 duration-500 transition-all'}>
                            <AiOutlineArrowRight size={25} className={'font-bold text-gray-800 -rotate-45'} />
                        </div>
                        <div className={'absolute text-md font-bold flex flex-col gap-2 items-center justify-center bottom-6 start-6'}>
                            <div className={'bg-white p-1 rounded-full text-center w-full'}>
                                {blog.date}
                            </div>
                            <div className={'bg-black bg-opacity-40 font-extralight border p-1 rounded-full text-center border-white text-white w-full'}>
                                {blog.type}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default NewFeeds;
