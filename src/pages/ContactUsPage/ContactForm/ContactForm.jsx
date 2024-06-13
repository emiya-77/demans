import Button from "@/components/button/Button";
import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <div className="w-full h-[800px] flex items-center">
      <div className="h-[800px] absolute -z-10 bg-primary left-0 right-0"></div>
      <div className="w-full h-[543px] flex gap-6">
        <div className="w-1/2 h-full flex flex-col justify-center">
          <div>
            <h1 className="font-primary text-white text-[64px]">Write Your Message</h1>
          </div>
          <div className="">
            <form action="" className="w-full flex flex-col items-start">
              <input className="font-secondary w-full p-4 bg-transparent placeholder:text-white border-b-[1px] border-white mb-5 focus:outline-none" type="text" id="name" name="name" placeholder="Your Name" />
              <input className="font-secondary w-full p-4 bg-transparent placeholder:text-white border-b-[1px] border-white focus:outline-none" type="email" id="email" name="email" placeholder="Your Email" />
              <textarea className={`textarea font-secondary w-full p-4 bg-transparent placeholder:text-white border-b-[1px] border-white focus:outline-none ${styles.textarea}`} name="" id="" placeholder="Write Your Message" rows={8}></textarea>
              <div className="mt-12">
                <Button value="Send Message" />
              </div>
            </form>
          </div>
        </div>
        <div className="w-1/2 h-full bg-green-400">
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
