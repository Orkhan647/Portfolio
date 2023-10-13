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

const App = () => {
  return (
    <div className="w-full xl:w-[1200px] p-30 px-4 lg:px-12 pr-4 lg:pr-32">
      {/* particles container */}
      <ParticlesContainer/>
      {/* header */}
      <Header />
      {/* home container  */}
      <Home />
      {/* Services count cards */}
      <ServiceCount />
      {/* about container  */}
      <About />
      {/* skills container */}
      <Skills />
      {/* projexts container */}
      <Projects />
      {/* contact container */}
      <Contact />
      {/* footer container */}
      <div className="w-full flex flex-col items-center justify-start mt-32 mb-12">
        <p className="text-3xl tracking-wide text-texlight">Karimov Orkhan</p>
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            cumque itaque sapiente. Adipisci voluptates magni, doloremque,
            tenetur quisquam dolorem, fugiat maxime deserunt perspiciatis ipsa
            consequuntur quia non quam nobis? Laborum!
          </p>
          <p className="text-texlight text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            cumque itaque sapiente. Adipisci voluptates magni, doloremque,
            tenetur quisquam dolorem, fugiat maxime deserunt perspiciatis ipsa
            consequuntur quia non quam nobis? Laborum!
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
