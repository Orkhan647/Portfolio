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
        <div className="w-full h-full flex flex-col items-center lg:items-start justify-center gap-4">
          <h2 className="text-3xl lg:text-4xl text-texlight">
            Hello It&apos;s me
            <span className="block tracking-wider text-4xl lg:text-6xl mt-2 lg:mt-4 text-white">
              {" "}
              Karimov Orkhan
            </span>
          </h2>
          {/* typewritter */}
          <h2 className= "text-2xl lg:text-4xl text-texlight mt-4">
            And I&apos;m{"  "}
            <HeroTypeWritter
              speed={100}
              words={["a Developer...", " a Freelancer.."]}
            />
          </h2>
          <p className="text-base text-texlight mt-6 text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum
            vel, velit saepe placeat nulla blanditiis perferendis veritatis
            quaerat nam asperiores, ullam voluptatibus suscipit cum voluptatem?
            Numquam assumenda sed et.
          </p>
          {/* social media links */}
          <div className="flex items-center justify-center gap-16 mt-16">
            <AnimatePresence>
              {Socials && Socials.map((item, index) => (
                <HomeSocialLinks key={index} data={item} index={index} />
              ))}
            </AnimatePresence>
          </div>
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
