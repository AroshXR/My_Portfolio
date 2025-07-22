import { motion, useScroll, useTransform, useAnimation, useMotionValueEvent } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import bgImage from '/src/assets/BG-Layers/Background.png';
import mountainsImage from '/src/assets/BG-Layers/BG_Mountains.png';

const ParallaxBackground = () => {
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
        <div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        ></div>
        {/* Mountains layer */}
        <motion.div
          y={mountainY}
          className='absolute inset-0 w-full h-full -z-10'
          style={{
            backgroundImage: `url(${mountainsImage})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
          initial={{ y: "20%" }}
          animate={controls}
        />
      </div>
    </section>
  );
}

export default ParallaxBackground;