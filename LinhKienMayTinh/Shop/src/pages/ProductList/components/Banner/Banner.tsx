import { useState } from 'react'
import { useSpring, animated } from 'react-spring'

import banner1 from 'src/assets/images/banner1.png'
import banner2 from 'src/assets/images/banner2.jpg'

const images = [banner1, banner2]

export default function Banner() {
  const [index, setIndex] = useState(0)

  const slideProps = useSpring({
    opacity: 1,
    transform: `translateX(${-index * 100}%)`
  })

  const Prev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const Next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <div className='relative w-full bg-orange overflow-hidden'>
      <button className='absolute left-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 text-white' onClick={Prev}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-5 h-5'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
        </svg>
      </button>
      <animated.div className='w-full h-full flex' style={slideProps}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`banner${index + 1}`} className='w-full' />
        ))}
      </animated.div>
      <button className='absolute right-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 text-white' onClick={Next}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-5 h-5'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
        </svg>
      </button>
    </div>
  )
}
