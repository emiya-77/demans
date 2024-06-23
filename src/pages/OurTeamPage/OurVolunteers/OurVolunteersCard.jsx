import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const OurVolunteersCard = ({info}) => {
    const {name, designation} = info || '';
  return (
    <div className="max-w-[410px]">
        <div className="bg-[#EDEDED] w-full h-[400px] md:h-[300px] lg:h-[300px] xl:h-[478px]">

        </div>
        <div className="bg-[#7E7E7E] p-6">
            <div className="text-center mb-5">
                <h2 className="font-primary text-[24px] text-white mb-1">{name}</h2>
                <p className="font-secondary text-primary">{designation}</p>
            </div>
            <div className="flex justify-center items-center gap-4 text-white">
                <div className="w-10 h-10 bg-black flex justify-center items-center">
                    <FaFacebookF size={20} />
                </div>
                <div className="w-10 h-10 bg-black flex justify-center items-center">
                    <FaTwitter size={20} />
                </div>
                <div className="w-10 h-10 bg-black flex justify-center items-center">
                    <FaLinkedinIn size={20} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurVolunteersCard