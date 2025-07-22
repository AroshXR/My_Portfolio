import React from 'react';

function Project({ title, description, tags, onClick }) {
    return (
        <>
            <div className='flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0'>
                <div>
                    <p className='text-2xl'>{title}</p>
                    <div className='flex gap-5 mt-2 text-sand'>
                        {tags.map((tag) => (
                            <span key={tag.id}>{tag.name}</span>
                        ))}
                    </div>
                </div>
                <button 
                    onClick={onClick} 
                    className='flex items-center gap-1 cursor-pointer hover:animation'
                >
                    Read more <i className='fas fa-arrow-right'></i>
                </button>
            </div>
            <div className='h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent w-full' />
        </>
    );
}

export default Project;