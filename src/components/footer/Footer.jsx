import Logo from "@/../public/brand/logo.png"
import Image from "next/image"
import { DM_Serif_Display, PT_Sans } from "next/font/google";
const dm_serif_display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const pt_sans = PT_Sans({ subsets: ["latin"], weight: "400" });

import footer1 from '@/../public/brand/footer-1.png';
import footer2 from '@/../public/brand/footer-2.png';
import footer3 from '@/../public/brand/footer-3.png';

const Footer = () => {
  return (
    <div className={`${dm_serif_display.className} border-b-[1px] border-black mb-[54px] pb-8 2xl:h-[287px] mt-[156px]`}>
      <div className="w-full  px-4 md:px-0 flex flex-col md:flex-row gap-10 lg:gap-16 xl:gap-0 2xl:gap-[30px]">
        <div className="w-full md:w-2/5 2xl:w-[520px] mb-4 md:mb-0">
          <div className="w-[220px] md:w-[280px] mb-7">
            <Image className="object-fit" src={Logo || ''} alt="Footer logo" />
          </div>
          <h1 className="text-[24px] text-primary mb-3">About Us</h1>
          <p className={`${pt_sans.className} text-[#7E7E7E]`}>Curabitur hendrerit diam vitae sem egestas ornare. Suspendisse ultrices risus eu quam scelerisque rutrum.</p>
        </div>
        <div className="scale-90 2xl:scale-100 w-full flex flex-col md:w-3/5 2xl:w-auto md:flex-row xl:justify-evenly gap-4 flex-wrap md:gap-x-4 lg:gap-x-16 md:gap-y-0 xl:gap-[30px]">
          <div className="2xl:w-[190px]">
            <h1 className="text-[24px] text-primary 2xl:mb-[23px]">Informations</h1>
            <ul className="text-[19px] 2xl:space-y-[10px]">
              <li>About Us</li>
              <li>Services</li>
              <li>Petitions</li>
              <li>Gallery</li>
            </ul>
          </div>
          <div className="2xl:w-[190px]">
            <h1 className="text-[24px] text-primary 2xl:mb-[23px]">Helpful Links</h1>
            <ul className="text-[19px] 2xl:space-y-[10px]">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Disclaimer</li>
            </ul>
          </div>
          <div className="2xl:w-[262px]">
            <h1 className="text-[24px] text-primary 2xl:mb-[23px]">Contact Us</h1>
            <ul className="text-[19.2px] 2xl:space-y-[10px]">
              <li className="flex items-center gap-[15px]">
                <div className="w-[20px] h-[20px] flex justify-center items-center">
                  <Image src={footer1} className="w-full" alt="footer image"/>
                </div>
                <h4>99 Roving St,. Big City, Pku</h4>
              </li>
              <li className="flex items-center gap-[15px]">
                <div className="w-[20px] h-[20px] flex justify-center items-center">
                  <Image src={footer2} className="w-full" alt="footer image"/>
                </div>
                <h4>+123-234-1234</h4>
                </li>
                <li className="flex items-center gap-[15px]">
                <div className="w-[20px] h-[20px] flex justify-center items-center">
                  <Image src={footer3} className="w-full" alt="footer image"/>
                </div>
                <h4>hello@awesomesite.com</h4>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer