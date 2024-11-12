import { useContext } from "react";
import AboutText from "../components/AboutText/AboutText";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";

// CONTEXT
import { AppContext } from "../Contexts/AppContext";

function About() {
  const appContext = useContext(AppContext);
  return (
    <>
      <Header />
      <Banner
        image="about.jpg"
        title={appContext.languages[appContext.language].menu.about}
      />
      <AboutText />
      <Footer />
    </>
  );
}
export default About;
