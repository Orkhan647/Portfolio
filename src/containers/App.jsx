import { AnimatePresence } from "framer-motion";
import {
  About,
  Contact,
  Header,
  Home,
  ParticlesContainer,
  Projects,
  ServiceCount,
  Skills,
} from "./";
import { HomeSocialLinks } from "../components";
import { Socials } from "../utils/helper";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full xl:w-[1200px] p-30 px-4 lg:px-12 pr-4 lg:pr-32">
      {/* particles container */}
      <ParticlesContainer />
      {/* header */}
      <Header />
      {/* home container  */}
      <Home />
      {/* Services count cards */}
      <div
        className="w-full"
        data-aos="fade-left"
        data-aos-easing=" ease-out-cubic"
        data-aos-duration="500"
      >
        <ServiceCount />
      </div>
      {/* about container  */}
      <div
        className="w-full"
        data-aos="zoom-in-down"
        data-aos-easing=" ease-out-cubic"
        data-aos-duration="500"
      >
        {" "}
        <About />
      </div>

      {/* skills container */}
      <div
        data-aos="zoom-in"
        data-aos-easing=" ease-out-cubic"
        data-aos-duration="700"
      >
        <Skills />
      </div>
      {/* projexts container */}
      <div
        data-aos="fade-up"
        data-aos-easing=" ease-out-cubic"
        data-aos-duration="500"
      >
        <Projects />
      </div>
      {/* contact container */}
      <div
        className="w-full"
        data-aos="fade-up"
        data-aos-easing=" ease-out-cubic"
        data-aos-duration="500"
      >
        <Contact />
      </div>
      {/* footer container */}
      <div className="w-full flex flex-col items-center justify-start mt-32 mb-12">
        <p
          className="text-3xl tracking-wide text-texlight"
          data-aos="fade-up"
          data-aos-easing=" ease-out-cubic"
          data-aos-duration="500"
        >
          {t("name")}{" "}
        </p>
        <div className="flex items-center justify-center gap-16 mt-16">
          <AnimatePresence>
            {Socials &&
              Socials.map((item, index) => (
                <HomeSocialLinks key={index} data={item} index={index} />
              ))}
          </AnimatePresence>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 mt-12">
          <p className="text-texlight text-center">
         {t('footerContent1')}
          </p>
          <p className="text-texlight text-center">
          {t('footerContent2')}
          </p>

          <div className="w-full flex flex-col items-center justify-center gap-3">
            <p className="text-texlight text-center">
              <a href="mailto:orxank0434@gmail.com">orxank0434@gmail.com</a>
            </p>
            <p className="text-texlight text-center">
              <a href="tel:+994552780434">+994 55 278 04 34</a>
            </p>
            <a href="tel:+994552780434">
              <p className="text-primary text-center">Hire Me</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
