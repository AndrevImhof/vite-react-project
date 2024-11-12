import { useContext } from "react";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProjectsList from "../components/ProjectsList/ProjectsList";

// CONTEXT
import { AppContext } from "../Contexts/AppContext";

function Projects() {
  const appContext = useContext(AppContext);

  return (
    <>
      <Header />
      <Banner
        image="projects.jpg"
        title={appContext.languages[appContext.language].menu.projects}
      />
      <div className="container">
        <ProjectsList />
      </div>
      <Footer />
    </>
  );
}

export default Projects;
