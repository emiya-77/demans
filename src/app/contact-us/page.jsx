import Banner from "@/components/Banner/Banner";
import ContactForm from "@/pages/ContactUsPage/ContactForm/ContactForm";
import ContactMap from "@/pages/ContactUsPage/ContactMap/ContactMap";

const ContactUsPage = () => {
  return (
    <div>
      <Banner value="Contact"/>
      <ContactForm />
      <ContactMap />
    </div>
  )
}

export default ContactUsPage;