import { useContext } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

// CONTEXT
import { AppContext } from "../Contexts/AppContext";

function Contact() {
  const appContext = useContext(AppContext);
  return (
    <>
      <Header />
      <Banner
        image="contact.jpg"
        title={appContext.languages[appContext.language].menu.contact}
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
