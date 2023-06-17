import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import EventsCard from '@/components/EventsCard';
import image1 from '../images/eventImage1.jpg';
import image2 from '../images/eventImage2.jpeg';
import image3 from '../images/eventImage3.jpg';
import { useInView } from 'react-intersection-observer';

const Events = () => {
    const [width, setWidth] = useState(0);
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const carousel = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, []);

    const eventVariants = {
        visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
        hidden: { opacity: 0, y: 500 },
    };

    const eventHeadingVariants = {
        visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
        hidden: { opacity: 0, x: 500 },
    };

    useEffect(() => {
        console.log('in view', inView);
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    useEffect(() => {
        const updateWidth = () => {
            if (carousel.current) {
                setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);

        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, []);

    return (
        <div ref={ref} className="px-2 md:px-0 h-screen flex flex-col items-center gap-4 md:gap-8 mt-10 md:mt-16 text-gray-800">
            <motion.div
                className="flex flex-col items-center justify-center"
                animate={controls}
                variants={eventHeadingVariants}
                initial="hidden"
            >
                <div className="flex gap-1">
                    <h1 className="tracking-tighter italic text-4xl md:text-6xl font-normal">Events Calendar</h1>
                    <div className="flex flex-col justify-end text-sm font-semibold">Category</div>
                </div>
            </motion.div>
            <motion.div
                animate={controls}
                variants={eventVariants}
                initial="hidden"
                ref={carousel}
                className="cursor-grab w-full md:w-11/12 h-full md:h-[80%] overflow-hidden"
                whileTap={{ cursor: 'grabbing' }}
            >
                <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="flex gap-4 md:gap-8 h-full">
                    <EventsCard
                        imag={image1}
                        eventDate="June 20, 2023"
                        eventName="Tech Career Fair"
                        eventDescription="Join us for an exciting opportunity to explore the latest tech trends."
                    />
                    <EventsCard
                        imag={image2}
                        eventDate="July 2, 2023"
                        eventName="Marketing Workshop"
                        eventDescription="Learn effective marketing strategies from industry experts in this interactive workshop."
                    />
                    <EventsCard
                        imag={image3}
                        eventDate="August 8, 2023"
                        eventName="Finance Symposium"
                        eventDescription="Dive into the world of finance and gain insights from top professionals."
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Events;
