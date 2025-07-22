import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

function ProjectDetails({ title, description, subDescription, href, image, tags, closeModal }) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto bg-black bg-opacity-50 backdrop-blur-sm'
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.2 }}
        className='relative max-w-2xl mx-4 my-8 border shadow-sm rounded-2xl bg-gradient-to-r from-fuchsia-950 to-blue-800 border-b-pink-500'
      >
        <button
          onClick={closeModal}
          className='absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500 transition-colors'
          aria-label='Close modal'
        >
          <i className='fas fa-times text-white'></i>
        </button>
        
        <div className='max-h-[80vh] overflow-y-auto'>
          <img src={image} alt={title} className='w-full rounded-t-2xl' />
          
          <div className='p-5'>
            <h5 className='mb-2 text-2xl font-bold text-white'>{title}</h5>
            <p className='mb-3 font-normal text-neutral-300'>{description}</p>
            
            {subDescription.map((item, index) => (
              <p key={index} className='mb-3 font-normal text-neutral-400'>{item}</p>
            ))}
            
            <div className='flex items-center justify-between mt-4'>
              <div className='flex gap-6'>
                {tags.map((tag) => (
                  <img 
                    key={tag.id} 
                    src={tag.path} 
                    alt={tag.name} 
                    className='rounded-lg size-10 hover:scale-110 transition-transform' 
                  />
                ))}
              </div>
            </div>
            
            <a
              className='inline-flex items-center pt-5 text-amber-400 gap-1 font-medium hover:text-amber-300 transition-colors'
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeModal}
            >
              View Project <i className='fas fa-arrow-right'></i>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectDetails;