import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import LicensesAndCertifications from "./sections/LicensesAndCertifications";
import Volunteering from "./sections/Volunteering";
import HonorsAndAwards from "./sections/HonorsAndAwards";
import Languages from "./sections/Languages";
import About from "./sections/About";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <TechStack />
    <ShowcaseSection />
    <LogoShowcase />
    <FeatureCards />
    <Experience />
    <Education />
    <LicensesAndCertifications />
    <Volunteering />
    <HonorsAndAwards />
    <Testimonials />
    <Languages />
    <Contact />
    <Footer />
  </>
);

export default App;
