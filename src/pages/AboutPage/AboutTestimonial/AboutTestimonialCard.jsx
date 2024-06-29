import React from 'react'
import { LiaStarSolid } from 'react-icons/lia'

const AboutTestimonialCard = ({info, currentTestimonial, isAnimating}) => {
    const {img, text, name, designation} = info || "";

  return (
    <div className={`w-full h-full bg-[#EDEDED] flex flex-shrink-0 flex-grow-0 justify-center items-center transition-all duration-1000 ease-in-out bg-cover bg-center`} style={{
        translate: `${-101.4 * currentTestimonial}%`,
        backgroundImage: `url(${img.src})`,
    }}>
        <div className='absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-10 -z-10 backdrop-blur-sm'>

        </div>
        <div className='px-8 space-y-4'>
        <div className="flex text-primary gap-1">
            <LiaStarSolid size={20} />
            <LiaStarSolid size={20} />
            <LiaStarSolid size={20} />
            <LiaStarSolid size={20} />
            <LiaStarSolid size={20} />
        </div>
        <h3 className="font-primary text-white text-[16px] xl:text-[24px] leading-[25px] xl:leading-[30px]">
            {text}
        </h3>
        <div className="flex justify-start gap-8">
            <div className="w-[60px] h-[60px] rounded-full bg-[#EDEDED]">
            </div>
        <div>
            <h4 className="font-primary text-[19.2px]">
                {name}
            </h4>
            <p className="font-secondary">{designation}</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default AboutTestimonialCard