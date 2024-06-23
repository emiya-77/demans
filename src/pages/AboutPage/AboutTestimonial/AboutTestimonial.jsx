import Button from "@/components/button/Button";
import Content from "@/components/content/Content";
import { LiaStarSolid } from "react-icons/lia";

const testimonialInfo = {
    subTitle: "Testimonial", 
    title: "Volunteers Stroy", 
    titleColor: "#000000", 
    description: "Phasellus nibh urna, varius in varius scelerisque, tempus eu lorem. In commodo nisl nec mi scelerisque vestibulum. Suspendisse bibendum libero non mauris consequat, vel sagittis lectus suscipit.", 
    descriptionColor: "#7E7E7E", 
    alignment: "start",
}

const AboutTestimonial = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center h-[305px] my-32 md:my-10 px-6 gap-12">
        <div className="w-full md:w-1/2 h-full bg-[#7E7E7E] flex justify-center items-center">
            <div className="w-full py-6 px-8 space-y-6">
                <div className="flex text-primary gap-1">
                    <LiaStarSolid size={20}/>
                    <LiaStarSolid size={20}/>
                    <LiaStarSolid size={20}/>
                    <LiaStarSolid size={20}/>
                    <LiaStarSolid size={20}/>
                </div>
                <h3 className="font-primary text-white text-[16px] xl:text-[24px] leading-[25px] xl:leading-[30px]">
                    Ut varius nec nunc id dictum. Etiam malesuada, quam eu fermentum hendrerit, augue eros tempus diam, tincidunt auctor urna erat ac mauris.
                </h3>
                <div className="flex justify-start gap-8">
                    <div className="w-[60px] h-[60px] rounded-full bg-[#EDEDED]">
                    </div>
                    <div>
                        <h4 className="font-primary text-[19.2px]">
                            Zean Rui
                        </h4>
                        <p className="font-secondary">Designation</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col justify-between items-start">
            <Content info={testimonialInfo} />
            <Button value="More Testimonials" />
        </div>
    </div>
  )
}

export default AboutTestimonial