import React from 'react'

import { download } from '../assets'
import {downloadImage} from '../utils'

const Card = (_id,name,prompt,photo) => {
    return (
      <div className='rounded-x1 group relative shadow-card
      hover:shadow-cardhover card'>
        <img
          className='w-full h-auto object-cover rounded-x1'
          src={photo}
          alt={prompt} 
        />
        <div className='group-hover:flex flex-col max-h-[94.5%]
        hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2
        p-4 rounded-md'>
          <p className='text-white ttext-sm overflow-y-auto
          prompt'>{prompt}</p>

          <div className='mt-5 flex justify-between items-center gap-2'>
            <div className='flex items-center gap-2'>
              <div className='w-7 h-7 rounded-full object-hover flex justify-center items-center
              text-whitee text-xs font-bold'>
                {name[0]}
              </div>
              <p className='text-white text-smm'>{name}</p>
            </div>
            <button type='button'  onClick={() =>
            downloadImage(_id,photo)} className='outline-none bg-transparent
            border-none'>
              <img src={download} alt="download" 
              className='w-6 h-6 object-contain invert'
              />
            </button>
          </div>
        </div>
    </div>
  )
}

export default Card