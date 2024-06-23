import Button from "@/components/button/Button";
import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <div className="w-full h-[1100px] md:h-[1050px] lg:h-[650px] flex items-start md:flex-center">
      <div className="h-[1100px] md:h-[1050px] lg:h-[650px] absolute -z-10 bg-primary left-0 right-0"></div>
      <div className="w-full h-[543px] flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center mt-24 lg:mt-16">
          <div className="flex justify-center items-center lg:justify-start lg:items-start">
            <h1 className="font-primary text-white text-[40px] md:text-[64px] lg:text-[40px]">Write Your Message</h1>
          </div>
          <div className="scale-90">
            <form action="" className="text-white w-full flex flex-col items-start">
              <input className="font-secondary w-full p-4 bg-transparent placeholder:text-[#EDEDED] border-b-[1px] border-white mb-5 focus:outline-none" type="text" id="name" name="name" placeholder="Your Name" />
              <input className="font-secondary w-full p-4 bg-transparent placeholder:text-[#EDEDED] border-b-[1px] border-white focus:outline-none" type="email" id="email" name="email" placeholder="Your Email" />
              <textarea className={`textarea font-secondary w-full p-4 bg-transparent placeholder:text-[#EDEDED] border-b-[1px] border-white focus:outline-none ${styles.textarea}`} name="" id="" placeholder="Write Your Message" rows={5}></textarea>
              <div className="mt-12">
                <Button value="Send Message" />
              </div>
            </form>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center md:flex-row lg:flex-col">
          <div className="w-full md:w-1/2 lg:w-auto font-primary text-white bg-transparent text-[19.2px] p-8 space-y-2">
            <h2>
              99 Roving St,. Big City, Pku
            </h2>
            <h2>
              +123-234-1234
            </h2>
            <h2>
              hello@awesomesite.com
            </h2>
          </div>
          <div className="w-full md:w-1/2 lg:w-full h-[234px] bg-white">
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
