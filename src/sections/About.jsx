import React from 'react';
import Card from '../components/Card';
import { useRef, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import endercity from '/src/assets/thumbnails/endercity.png';
import loseMyMind from '/src/assets/thumbnails/lose my mind.png';
import synthking6900 from '/src/assets/thumbnails/synthking6900.png';
import timeless from '/src/assets/thumbnails/timeless.png';
import ITDesign from '/src/assets/ITDesign.png';
import visualizer from '/src/assets/visualizer.png';

// Tech Logos
import C from '/src/assets/Logos/Tech/C.png';
import java from '/src/assets/Logos/Tech/java.png';
import Cpp from '/src/assets/Logos/Tech/C++.png';
import NodeJS from '/src/assets/Logos/Tech/Node.js.png';
import HTML5 from '/src/assets/Logos/Tech/HTML5.png';
import CSS3 from '/src/assets/Logos/Tech/CSS3.png';
import javascript from '/src/assets/Logos/Tech/javascript.png';
import Dart from '/src/assets/Logos/Tech/Dart.png';
import Express from '/src/assets/Logos/Tech/Express.png';
import MongoDB from '/src/assets/Logos/Tech/MongoDB.png';
import MySQL from '/src/assets/Logos/Tech/MySQL.png';
import PHP from '/src/assets/Logos/Tech/PHP.png';
import Flutter from '/src/assets/Logos/Tech/Flutter.png';
import Python from '/src/assets/Logos/Tech/Python.png';
import ReactLogo from '/src/assets/Logos/Tech/React.png';

// Non-Tech Logos
import Ps from '/src/assets/Logos/Non Tech/Ps.png';
import Ae from '/src/assets/Logos/Non Tech/Ae.png';
import Pr from '/src/assets/Logos/Non Tech/pr.png';
import Vscode from '/src/assets/Logos/Non Tech/Vscode.png';
import Postgres from '/src/assets/Logos/Non Tech/Postgres.png';
import Intellij from '/src/assets/Logos/Non Tech/Intellij.png';
import GitHub from '/src/assets/Logos/Non Tech/GitHub.png';
import Figma from '/src/assets/Logos/Non Tech/Figma.png';
import Blender from '/src/assets/Logos/Non Tech/Blender.png';
import AndroidStudio from '/src/assets/Logos/Non Tech/Android Studio.png';
import flstudio from '/src/assets/Logos/Non Tech/flstudio.png';

function About({ id }) {

  const grid2Container = useRef(null);
  const grid3Container = useRef(null);
  const photos = [
    { src: endercity, link: 'https://youtu.be/auM0OONHDoM?si=uzSEwRw8haYNFPnu' },
    { src: loseMyMind, link: 'https://youtu.be/IXEHWZD5I0I?si=JnE1ET3XoYOg8QCz' },
    { src: synthking6900, link: 'https://youtu.be/YGTcbU8GxDQ?si=GRwk85ldfj6FiFLY' },
    { src: timeless, link: 'https://youtu.be/cceC8VN1FWc?si=x84GuS979r_t-sEr' }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id={id} className='c-space section-spacing'>
      <h1 className='text-heading'>About me</h1>
      <div className='grid grid-cols-1 md:grid-cols-6 gap-4 md:auto-rows-[18rem] mt-12'>
        {/* Grid 1 - Purple/Pink with diagonal gradient */}
        <div className="relative z-10 h-full rounded-xl md:rounded-2xl grid-1 p-4 md:p-6 bg-gradient-to-br from-purple-900 via-fuchsia-800 to-pink-600 flex flex-col justify-end">
          <img
            src={ITDesign}
            className='absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay'
            alt="Design background"
          />

          <div className="relative space-y-2 md:space-y-3 w-full">
            <p className="headtext text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 tracking-tight break-words">
              Hi I'm Aroshana
            </p>
            <div className="subtext text-xs md:text-sm text-pink-100 leading-snug md:leading-relaxed font-sans space-y-1 md:space-y-2">
              <p>
                <span className="text-cyan-300 font-medium">Dedicated undergraduate at SLIIT UNI</span> 🎓 with a passion for:
              </p>
              <div className="grid grid-cols-2 gap-x-1 md:gap-x-2 gap-y-0 md:gap-y-1">
                <span>• <span className="text-purple-300">Software</span> 💻</span>
                <span>• <span className="text-fuchsia-300">Web</span> 🌐</span>
                <span>• <span className="text-amber-300">Mobile</span> 📱</span>
                <span>• <span className="text-rose-300">UI/UX</span> 📲</span>
              </div>
              <p>
                Mastering new technologies ⚡
              </p>
              <p>
                Fast-learning mind ⏳
              </p>
              <p className="text-[0.7rem] md:text-[15px]">
                Merging <span className="text-cyan-200">creativity</span> with {' '}
                <span className="text-pink-200">technical skills</span>
              </p>
            </div>
          </div>
        </div>

        {/* Grid 2 - Electric Blue */}
        <div className='grid-2 rounded-xl md:rounded-2xl flex items-end bg-gradient-to-t from-blue-950 to-fuchsia-900 p-4'>
          <div ref={grid2Container} className='flex items-center justify-center w-full h-full'>
            <p className='flex items-end text-3xl text-grey-500'>Tech Skills Bucket</p>
            <Card
              style={{ rotate: '60deg', bottom: '30%', left: '70%' }}
              text="MERN Stack"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: '60deg', bottom: '55%', left: '0%' }}
              text="JSP Servelets"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: '15deg', bottom: '5%', left: '0%' }}
              image={C}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: '30deg', bottom: '10%', left: '50%' }}
              image={java}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: '15deg', bottom: '6%', left: '20%' }}
              image={Cpp}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: '0deg', bottom: '20%', left: '35%' }}
              image={NodeJS}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: '20deg', bottom: '70%', left: '75%' }}
              image={HTML5}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: '10deg', bottom: '70%', left: '60%' }}
              image={CSS3}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: '30deg', bottom: '15%', left: '70%' }}
              image={javascript}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: '0deg', bottom: '80%', left: '20%' }}
              image={Dart}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: '0deg', bottom: '50%', left: '88%' }}
              image={Express}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: '0deg', bottom: '40%', left: '70%' }}
              image={MongoDB}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: '0deg', bottom: '55%', left: '0%' }}
              image={MySQL}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: '0deg', bottom: '25%', left: '0%' }}
              image={PHP}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: '0deg', bottom: '80%', left: '40%' }}
              image={Flutter}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: '0deg', bottom: '30%', left: '20%' }}
              image={Python}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: '0deg', bottom: '60%', left: '35%' }}
              image={ReactLogo}
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 - Dark with neon border */}
        <div className='grid-3 rounded-xl md:rounded-2xl flex items-end bg-gradient-to-t from-purple-950 to-rose-900 border-b-4 border-cyan-400 p-4'>
          <div ref={grid3Container} className='flex items-center justify-center w-full h-full'>
            <p className='flex items-end text-3xl text-grey-500'>Other Skills Bucket</p>
            <Card
              style={{ rotate: '65deg', bottom: '15%', left: '3%' }}
              image={Ps}
              containerRef={grid3Container}
            />
            <Card
              style={{ rotate: '30deg', bottom: '10%', left: '50%' }}
              image={Ae}
              containerRef={grid3Container}
            />
            <Card
              style={{ rotate: '15deg', bottom: '10%', left: '20%' }}
              image={Pr}
              containerRef={grid3Container}
            />
            <Card
              style={{ rotate: '0deg', bottom: '20%', left: '35%' }}
              image={Vscode}
              containerRef={grid3Container}
            />
            <Card
              style={{ rotate: '20deg', bottom: '70%', left: '75%' }}
              image={Postgres}
              containerRef={grid3Container}
            />
            <Card
              style={{ rotate: '10deg', bottom: '70%', left: '60%' }}
              image={Intellij}
              containerRef={grid3Container}
            />
            <Card
              style={{ rotate: '30deg', bottom: '15%', left: '70%', border: '2px solid white', borderRadius: '2rem' }}
              image={GitHub}
              containerRef={grid3Container}
            />
            <Card
              style={{ rotate: '25deg', bottom: '75%', left: '30%' }}
              image={Figma}
              containerRef={grid3Container}
            />
            <Card
              style={{ rotate: '3deg', bottom: '70%', left: '88%' }}
              image={Blender}
              containerRef={grid3Container}
            />
            <Card
              style={{ rotate: '55deg', bottom: '40%', left: '80%' }}
              image={AndroidStudio}
              containerRef={grid3Container}
            />
            <Card
              style={{ rotate: '45deg', bottom: '55%', left: '0%' }}
              image={MySQL}
              containerRef={grid3Container}
            />
            <Card
              style={{ rotate: '2deg', bottom: '55%', left: '2%' }}
              image={flstudio}
              containerRef={grid3Container}
            />
          </div>
        </div>

        {/* Grid 4 - Hot Pink with grid lines */}
        <div className='grid-4 rounded-xl md:rounded-2xl flex items-end bg-gradient-to-b from-gray-900 to-indigo-600 p-4 relative'>
          <div className='absolute inset-0 bg-grid-pattern opacity-30'></div>
          <img
            src={visualizer}
            className='absolute inset-0 w-full h-full object-cover opacity-40 flex justify-end items-end mix-blend-overlay'
            alt="Design background"
          />

          <div className="relative space-y-2 md:space-y-3 w-full">
            <p className="headtext text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 tracking-tight break-words">
              And also....
            </p>
            <div className="subtext text-xs md:text-sm text-pink-100 leading-snug md:leading-relaxed font-sans space-y-1 md:space-y-2">
              <p>
                <span className="text-cyan-300 font-semibold">I am a freelance music producer <br />I mostly create,</span>
              </p>

              <div className="grid grid-cols-2 gap-x-1 md:gap-x-2 gap-y-0 md:gap-y-1">
                <span>• <span className="text-amber-400">Synthwaves</span> 🎹</span>
                <span>• <span className="text-amber-300">Afro House</span> 🌴</span>
                <span>• <span className="text-amber-200">Progressive House</span> 〽</span>
              </div>
              <p className="text-[0.7rem] md:text-[15px]">
                Check out my productions at{' '}
                <a
                  href="https://www.youtube.com/@aroshtunes_06"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="hover:text-red-200 transition-colors duration-200 text-green-400 inline-flex items-center">
                    aroshtunes_06 <i className="fab fa-youtube ml-1 text-red-600 text-[1.5em]"></i>
                  </span>
                </a>{' '}
                with{' '}
                <span className="text-pink-200">YouTube channel</span>
              </p>
            </div>
          </div>
        </div>

        {/* Grid 5 - Sunset Orange */}
        {/* Grid 5 - Photo Slider */}
        {/* Grid 5 - Photo Slider */}
        <div className='grid-5 rounded-xl md:rounded-2xl flex items-center justify-center bg-gradient-to-r from-orange-600 to-pink-600 p-4'>
          <div className="relative w-full h-full group">
            {/* Slider container with responsive height */}
            <div className="relative h-[180px] md:h-full w-full">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                >
                  <a
                    href={photo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()} // Prevent event bubbling
                  >
                    <img
                      src={photo.src}
                      alt={`Slide ${index + 1}`}
                      className="max-h-full max-w-full object-contain rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                    />
                  </a>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/90 text-white p-1 md:p-2 rounded-full opacity-70 md:opacity-0 group-hover:opacity-100 transition-opacity z-10"
            >
              <FiChevronLeft className="w-6 h-6 md:w-6 md:h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/90 text-white p-1 md:p-2 rounded-full opacity-70 md:opacity-0 group-hover:opacity-100 transition-opacity z-10"
            >
              <FiChevronRight className="w-6 h-6 md:w-6 md:h-6" />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2 z-10">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About