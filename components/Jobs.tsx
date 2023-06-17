import React, {useEffect} from 'react';
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

const Jobs = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(()=>{
        console.log('in view', inView)
        if(inView){
            controls.start("visible");
        }
    }, [controls, inView])
    const jobHeadingVariants = {
        visible: {opacity: 1, x:0, transition: {duration: 1}},
        hidden: {opacity: 0, x:500}
    }

    const jobVariants = {
        visible: {opacity: 1, y:0, transition: {duration: 2}},
        hidden: {opacity: 0, y:1000}
    }

    const jobList = [
        {
            title: 'Software Engineer',
            location: 'San Francisco, CA',
            description: 'Join our team of talented engineers and help build innovative software solutions.',
        },
        {
            title: 'Product Manager',
            location: 'New York, NY',
            description: 'Lead the product development process and drive the success of our flagship products.',
        },
        {
            title: 'Graphic Designer',
            location: 'Los Angeles, CA',
            description: 'Create visually stunning designs and illustrations for our marketing campaigns.',
        },
        {
            title: 'Data Analyst',
            location: 'Chicago, IL',
            description: 'Analyze and interpret complex data sets to drive data-driven insights and decision-making.',
        },
        {
            title: 'Marketing Specialist',
            location: 'Seattle, WA',
            description: 'Develop and execute effective marketing strategies to promote our products and services.',
        },
    ];

    return (
        <div ref={ref} className="my-10 px-2 md:px-10 text-gray-800 flex flex-col gap-4 md:gap-8 items-center">
            <motion.div
                className="flex flex-col items-center justify-center"
                animate={controls}
                variants={jobHeadingVariants}
                initial='hidden'
            >
                <div className={'flex gap-1'}>
                    <h1 className="tracking-tighter italic text-4xl md:text-6xl font-normal">Job Openings</h1>
                    <div className={'flex flex-col justify-end text-sm font-semibold'}>View More</div>
                </div>
            </motion.div>
            <motion.div
                animate={controls}
                variants={jobVariants}
                initial='hidden'
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {jobList.map((job, index) => (
                    <div key={index} className="bg-white p-6 rounded-[20px] md:rounded-[40px] shadow-md">
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <p className="text-gray-600">{job.location}</p>
                        <p className="mt-4">{job.description}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Jobs;
