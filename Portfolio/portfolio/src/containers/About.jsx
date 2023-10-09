import { motion } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import about from "../assets/img/about.webp";

const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center flex-col gap-8 lg:gap-12 my-12"
    >
      {/* title */}
      <div className="w-full flex items-center justify-center py-24 ">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delat: 0.4 }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            About
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>
      {/* main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* image section */}
        <div className="w-full flex  justify-center px-8">
          <div className="w-full h-fit lg:w-96  p-[2px] rounded-md bg-gradient-to-br from-primary to-secondary relative">
            <img
              src={about}
              className="w-full rounded-md h-auto object-contain"
              alt=""
            />

            <div className="absolute w-full h-full -top-3 -left-2 bg-gradient-to-br from-primary to-secondary rounded-md blur-[5px] -z-10"></div>
          </div>
        </div>

       {/* content section */}
<div className="w-full px-8 flex flex-col gap-4 items-start justify-start ">
  <p className="text-texlight text-base tracking-wide text-justify ">
    Hello, I&apos;m Orxan Kerimov. I was born in the beautiful lands of
    Azerbaijan in 1995. My interest in computers and technology has
    influenced me since my childhood. However, I&apos;ve only recently
    discovered my curiosity for programming and have just embarked on
    this journey.
  </p>
  <p className="text-texlight text-base tracking-wide text-justify ">
    In the world of software, I am aware that there are many successful
    developers, and I am enthusiastic about improving myself in this
    field. At the moment, coding is a new adventure for me. I am
    learning to communicate with computers, create programs, and solve
    problems.
  </p>
  <p className="text-texlight text-base tracking-wide text-justify ">
    The projects and experiences of other developers that I see on
    social media platforms motivate me. I learn something new every day,
    and it propels me forward on the path to becoming a better
    programmer.
  </p>
  <p className="text-texlight text-base tracking-wide text-justify ">
    Initially, I may be far from tackling big projects in the software
    world, but I am determined to develop myself and progress at every
    step. I carry the dream of contributing to technology and creating
    my own projects. In the future, I hope to be more involved in the
    software world and develop new projects.
  </p>
  <p className="text-texlight text-base tracking-wide text-justify ">
    As someone who is just starting out in programming, I wanted to
    convey how exciting this journey is for me. Remember that everyone
    has to start somewhere and keep on learning! As for who I am, I&apos;m a
    curious individual eager to explore the vast world of programming
    and technology. My passion for learning and my determination to grow
    in this field drive me to take on new challenges and continuously
    expand my knowledge. I believe that the future holds endless
    possibilities for those who are willing to learn and innovate, and
    I&apos;m excited to be a part of that journey.
  </p>
</div>

      </div>
    </section>
  );
};

export default About;
