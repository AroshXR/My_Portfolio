import React from 'react';
import { PinContainer } from './HeroTextStyle';
import { motion } from 'framer-motion';

// Combined animation variants
const textVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        x: 0
    },
    visible: {
        opacity: 1,
        y: 0,
        x: [0, -5, 5, -5, 5, 0], // Wiggle movement
        transition: {
            opacity: { duration: 0.6, ease: "easeOut" },
            y: { duration: 0.6, ease: "easeOut" },
            x: {
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                delay: 0.4 // Delay wiggle until after fade-in
            }
        }
    }
};

function HeroText() {
    return (
        <motion.div
            className="flex items-center justify-center min-h-screen z-10"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }}
        >
            <PinContainer title="Visit my portfolio" href="/">
                <div className="text-center md:text-left px-2 max-w-full sm:max-w-md md:max-w-2xl mx-auto break-words overflow-hidden">
                    <motion.h1
                        className="text-xl sm:text-2xl md:text-5xl font-extrabold text-white py-3 drop-shadow-lg break-words overflow-hidden"
                        style={{
                            WebkitTextStroke: '3px #000',
                            textStroke: '3px #000',
                            paintOrder: 'stroke fill'
                        }}
                        variants={textVariants}
                        custom={0}
                    >
                        Hello There!
                    </motion.h1>

                    <motion.p
                        className="text-base sm:text-lg md:text-4xl font-semibold text-cyan-300 py-2 break-words overflow-hidden"
                        style={{
                            WebkitTextStroke: '3px #083344',
                            textStroke: '3px #083344',
                            paintOrder: 'stroke fill'
                        }}
                        variants={textVariants}
                        custom={1}
                        transition={{
                            ...textVariants.visible.transition,
                            x: {
                                ...textVariants.visible.transition.x,
                                delay: 3
                            }
                        }}
                    >
                        Welcome to the world of a developer <br /> dedicated to crafting
                    </motion.p>

                    <motion.p
                        className="text-base sm:text-lg md:text-3xl font-medium text-indigo-300 py-2 break-words overflow-hidden"
                        style={{
                            WebkitTextStroke: '3px #312e81',
                            textStroke: '3px #312e81',
                            paintOrder: 'stroke fill'
                        }}
                        variants={textVariants}
                        custom={2}
                        transition={{
                            ...textVariants.visible.transition,
                            x: {
                                ...textVariants.visible.transition.x,
                                delay: 5
                            }
                        }}
                    >
                        Amazing Digital Experiences
                    </motion.p>
                </div>
            </PinContainer>
        </motion.div>
    );
}

export default HeroText;