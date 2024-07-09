import Banner from "@/components/Banner/Banner";
import ContactForm from "@/pages/ContactUsPage/ContactForm/ContactForm";
import ContactMap from "@/pages/ContactUsPage/ContactMap/ContactMap";

import contactBannerImg from "@/../public/img/contact/contact-2.jpg"

const ContactUsPage = () => {
  return (
    <div>
      <Banner value="Contact" img={contactBannerImg}/>
      <ContactForm />
      <div className="mb-20 md:mb-0">
        <ContactMap />
      </div>
    </div>
  )
}

export default ContactUsPage;