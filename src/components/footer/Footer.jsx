import Logo from "@/../public/brand/logo.png"
import Image from "next/image"
import { DM_Serif_Display, PT_Sans } from "next/font/google";
const dm_serif_display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const pt_sans = PT_Sans({ subsets: ["latin"], weight: "400" });

const Footer = () => {
  return (
    <div className={`${dm_serif_display.className} px-4 md:px-0 mt-20 md:mt-40 flex flex-col md:flex-row border-b-[1px] border-black mb-10 pb-8 gap-10 lg:gap-16 xl:gap-0`}>
      <div className="w-full md:w-2/5 mb-4 md:mb-0">
        <div className="w-[220px] md:w-[280px] mb-7">
          <Image className="object-fit" src={Logo} alt="Footer logo" />
        </div>
        <h1 className="text-[24px] text-primary mb-3">About Us</h1>
        <p className={`${pt_sans.className} text-[#7E7E7E]`}>Curabitur hendrerit diam vitae sem egestas ornare. Suspendisse ultrices risus eu quam scelerisque rutrum.</p>
      </div>
      <div className="scale-90 w-full flex flex-col md:w-3/5 md:flex-row xl:justify-evenly gap-4 flex-wrap md:gap-x-4 lg:gap-x-16 md:gap-y-0 xl:gap-0">
        <div>
          <h1 className="text-[24px] text-primary">Informations</h1>
          <ul className="text-[19px]">
            <li>About Us</li>
            <li>Services</li>
            <li>Petitions</li>
            <li>Gallery</li>
          </ul>
        </div>
        <div>
          <h1 className="text-[24px] text-primary">Helpful Links</h1>
          <ul className="text-[19px]">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Disclaimer</li>
          </ul>
        </div>
        <div>
          <h1 className="text-[24px] text-primary">Contact Us</h1>
          <ul className="text-[19px]">
            <li>99 Roving St,. Big City, Pku</li>
            <li>+123-234-1234</li>
            <li>hello@awesomesite.com</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer