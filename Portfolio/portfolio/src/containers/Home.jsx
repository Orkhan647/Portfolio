import { AnimatePresence, motion } from "framer-motion";
import { Hero } from "../assets";
import { HeroTypeWritter, HomeSocialLinks } from "../components";
import { Socials } from "../utils/helper";

const Home = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center flex-col gap-8 lg:gap-12 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* Content section */}
        <div className="w-full h-full flex flex-col items-center pt-7 lg:items-start justify-center gap-4">
          <h2 className="text-3xl lg:text-4xl text-texlight">
            Hello It&apos;s me
            <span className="block tracking-wider text-4xl lg:text-6xl mt-2 lg:mt-4 text-white">
              {" "}
              Karimov Orkhan
            </span>
          </h2>
          {/* typewritter */}
          <h2 className="text-2xl lg:text-4xl text-texlight mt-4 ">
            And I&apos;m{"  "}
            <HeroTypeWritter
              speed={100}
              words={["a Developer...", " a Freelancer.."]}
            />
          </h2>
          <p className="text-base text-texlight mt-6 text-center lg:text-left">
          Writing code is not just about assembling lines; it&apos;s also about
            connecting thoughts. Our ability to communicate with computers not
            only solves problems but also enables us to create new worlds. As a
            developer, our keyboard and code are the magical keys that help us
            unlock the doors to the digital realm.
          </p>
          {/* social media links */}
          <div className="flex items-center justify-center gap-16 mt-16">
            <AnimatePresence>
              {Socials &&
                Socials.map((item, index) => (
                  <HomeSocialLinks key={index} data={item} index={index} />
                ))}
            </AnimatePresence>
          </div>

          {/* hire me */}
          <a
            href="#contact"
            style={{ boxShadow: "inset 0px 0px 10px rgba(255,255,255,0.3)" }}
            className="mt-12 border border-[rgba(255,255,255,0.3)] rounded-xl px-8 py-3 active:95 group hover:border-primary"
          >
            <p className="text-texlight group-hover:text-transparent bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary">
              Hire Me
            </p>
          </a>
        </div>

        {/* Hero image */}
        <div className="w-full h-full flex items-center justify-center lg:items-start">
          <motion.img
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 10, -10] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
            }}
            src={Hero}
            className="w-auto h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
