import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from '../components/NavLinks+Underline';
import { useEffect } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
     const [isScrollingDown, setIsScrollingDown] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > prevScrollY && currentScrollY > 50) {
                // Scrolling down
                setIsScrollingDown(true);
            } else {
                // Scrolling up or at top
                setIsScrollingDown(false);
            }
            
            setPrevScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollY]);

    return (
        <>
            <div className='fixed inset-x-0 z-20 w-full bg-neutral py-3'>
                <div className='mx-auto px-4 max-w-7xl'>
                    <div className='flex items-center justify-between py-2 sm:py-0'>
                        <motion.a
                            href="/"
                            className='text-3xl font-bold'
                            animate={{
                                color: isOpen ? '#b300b3' : '#2563eb',
                                opacity: isScrollingDown ? 0 : 1,
                                transition: { 
                                    duration: 0.3,
                                    opacity: { duration: 0.2 }
                                }
                            }}
                            whileHover={{
                                color: '#1d4ed8',
                                textShadow: '0 0 8px rgba(29, 78, 216, 0.8)', // Blue glow
                                scale: 1.05, // Slight enlargement
                                transition: {
                                    duration: 0.2,
                                    ease: "easeOut"
                                }
                            }}
                        >
                            aroshtunes_06
                        </motion.a>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='text-white p-2 hover:bg-purple-900 rounded-md sm:hidden'
                        >
                            {isOpen
                                ? <i className="fas fa-times text-xl"></i>
                                : <i className="fas fa-bars text-xl"></i>}
                        </button>
                        <nav className='hidden sm:block'>
                            <Navigation />
                        </nav>
                    </div>
                </div>
                {/* HR line that moves with the menu */}

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className='flex justify-center text-center sm:hidden bg-neutral border-t border-neutral-800'
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                                height: 'auto',
                                opacity: 1,
                                transition: { duration: 0.3, ease: 'easeInOut' }
                            }}
                            exit={{
                                height: 0,
                                opacity: 0,
                                transition: { duration: 0.3, ease: 'easeInOut' }
                            }}
                        >
                            <div className='py-4'>
                                <Navigation />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div
                    animate={{
                        marginTop: isOpen ? '2rem' : '0.75rem',
                        borderColor: isOpen ? '#262626' : '#262626',
                        borderWidth: isOpen ? '1px' : '0px',
                        transition: { duration: 0.3, ease: 'easeInOut' }
                    }}
                />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className='sm:hidden fixed inset-0 z-14'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 5, backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>
             {/* Content Spacer - This creates space for the mobile menu
            <div 
                className={`sm:hidden transition-all duration-300 ${isOpen ? 'h-[100px]' : 'h-0'}`}
                aria-hidden="true"
            /> */}
        </>
    );
}

export default Navbar;
