import About from "./sub-pages/About";
import Contact from "./sub-pages/Contact";
import Hero from "./sub-pages/Hero";
import MyApps from "./sub-pages/MyApps";
import Portfolio from "./sub-pages/Portfolio";
import Skills from "./sub-pages/Skills";
import Timeline from "./sub-pages/Timeline";

const Home = () => {
  return (
    <article className="px-5 mt-4 sm:mt-6 md:mt-8 lg:mt-12 xl:mt-14 sm:mx-auto w-full max-w-[1050px] flex flex-col gap-14">
      <Hero />
      <Timeline />
      <About />
      <Skills />
      <Portfolio />
      <MyApps />
      <Contact />
    </article>
  );
};

export default Home;
