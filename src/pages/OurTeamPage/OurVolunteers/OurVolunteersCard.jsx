import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

import "./OurVolunteersCard.css"

const OurVolunteersCard = ({info}) => {
    const {img, name, designation} = info || '';
  return (
    <div className="max-w-[410px] relative">
        <div className="relative bg-[#EDEDED] w-full h-[600px] md:h-[500px] lg:h-[440px] xl:h-[600px] 2xl:h-[680px] overflow-hidden">
            {/* bg-[#7E7E7E] */}
            <Image
                src={img || ''} 
                alt="Volunteer Image" 
                layout="fill" 
                objectFit="cover"
                className="hover:scale-110 transition-all duration-300 ease-in-out"
            />
        </div>
        <div className="absolute left-0 right-0 bottom-0 bg-black backdrop-blur-sm bg-opacity-70 p-6">
            <div className="text-center mb-5">
                <h2 className="font-primary text-[24px] text-white mb-1">{name}</h2>
                <p className="font-secondary text-primary">{designation}</p>
            </div>
            <div className="cont flex justify-center items-center gap-4 text-white">
                <div className="li hover:scale-110 transition-all duration-300 ease-in">
                    <FaFacebookF className="a" size={20} />
                </div>
                <div className="li hover:scale-110 transition-all duration-300 ease-in">
                    <FaTwitter className="a" size={20} />
                </div>
                <div className="li hover:scale-110 transition-all duration-300 ease-in">
                    <FaLinkedinIn className="a" size={20} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurVolunteersCard