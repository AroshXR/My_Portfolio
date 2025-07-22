import { motion, useScroll, useTransform, useAnimation, useMotionValueEvent } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function ParallaxBackground() {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const [isScrolling, setIsScrolling] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Track scroll state
  useMotionValueEvent(scrollYProgress, "change", () => {
    setIsScrolling(true);
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => setIsScrolling(false), 100);
  });

  let scrollTimeout;

  // Spring-based motion value for smooth return
  const mountainY = useTransform(scrollYProgress, [0, 0.5], ["0%", "5%"]); // Reduced movement range

  useEffect(() => {
    if (!isScrolling) {
      controls.start({
        y: "0%",
        transition: { type: "spring", damping: 15 }
      });
    } else {
      controls.start({
        y: mountainY.get(),
        transition: { duration: 0.3 }
      });
    }
  }, [isScrolling, controls, mountainY]);

  return (
    <section 
      ref={containerRef}
      className='absolute inset-0 bg-black/40'
    >
      <div className='sticky top-0 h-screen overflow-hidden'>
        {/* Background layer */}
        <div className='absolute inset-0 w-full h-full -z-50'
          style={{
            backgroundImage: 'url(src/assets/BG-Layers/Background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
          }} />
        
        {/* Mountains layer */}
        <motion.div 
          className='absolute inset-0 w-full h-full -z-40'
          style={{
            backgroundImage: 'url(src/assets/BG-Layers/BG_Mountains.png)',
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
          initial={{ y: "20%" }}
          animate={controls}
        />
      </div>
    </section>
  );
}

export default ParallaxBackground;