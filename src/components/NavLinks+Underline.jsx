/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const navItems = ["Home", "About", "Projects", "Contact"];

function Navigation() {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <nav className="flex flex-col sm:flex-row justify-between text-white gap-4 sm:gap-6">
            {navItems.map((name) => (
                <motion.div
                    key={name}
                    className="relative"
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                >
                    <button
                        onClick={() => scrollToSection(name.toLowerCase())}
                        className="text-sm leading-6 text-gray-400 hover:text-white font-medium transition-colors duration-300 pb-2"
                    >
                        {name}
                    </button>

                    <motion.div
                        className="absolute bottom-0 left-0 right-0 h-[8px] pt-3 flex justify-center"
                        variants={{
                            hover: { opacity: 1 },
                            rest: { opacity: 0 },
                        }}
                        transition={{ duration: 0.8 }}
                    >
                        <svg width="37" height="8" viewBox="0 0 37 8" fill="none">
                            <motion.path
                                d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                                stroke="#7043EC"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeDasharray="84.2"
                                strokeDashoffset="84.2"
                                variants={{
                                    hover: {
                                        strokeDashoffset: 0,
                                        transition: { duration: 0.6 },
                                    },
                                    rest: {
                                        strokeDashoffset: 84.2,
                                    },
                                }}
                            />
                        </svg>
                    </motion.div>
                </motion.div>
            ))}
        </nav>
    );
}

export default Navigation;
