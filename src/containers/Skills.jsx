import { motion } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import { SkillCard } from "../components";

const Skills = () => {
  return (
    <section
      id="skills"
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
            Skills
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>
      {/* main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* content section */}
        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start ">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            My Skills & Work Experience
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
  Throughout my career, I have developed a range of essential skills
  and gained various work experiences. Here is a summary of the
  knowledge and skills I have acquired during this journey: <br /> HTML 5: I
  have a proficiency level of 100% in HTML 5. I can effectively use
  HTML 5 in web development processes. <br /> CSS 3: My skills in CSS 3 are
  at 100%. I can create aesthetic and user-friendly interfaces in web
  design using CSS 3.
</p>
<p className="text-texlight text-base tracking-wide text-justify">
  JavaScript: I have a proficiency level of 70% in JavaScript. I am
  experienced in developing interactive web applications with these
  languages. <br /> Node.js: My Node.js skills are at 60%. I can use Node.js
  in server-side development and application development processes.
  React &amp; <br /> Next.js: My proficiency in React and Next.js is at 75%. I
  can efficiently use these technologies to create modern web
  applications.
</p>
<p className="text-texlight text-base tracking-wide text-justify">
  MongoDB &amp; Firebase: My skills in MongoDB and Firebase are at 50%.
  With my knowledge of database management and cloud-based
  applications, I can contribute to projects effectively. This is a
  brief summary of my career and skills. I look forward to working on
  creative projects and acquiring new skills. If you have any further
  questions or job offers, please feel free to contact me!
</p>

        </div>
        {/* image section */}
        <div className="w-full flex flex-col gap-4 items-center justify-center px-8">
          <SkillCard
            skill={"HTML 5"}
            percentage={"100%"}
            color={"#FF3F3F"}
            move={true}
          />
          <SkillCard
            skill={"CSS 3"}
            percentage={"100%"}
            color={"#008FFF"}
            move={false}
          />
          <SkillCard
            skill={"JavaScript"}
            percentage={"70%"}
            color={"#FFB900"}
            move={true}
          />
          <SkillCard
            skill={"Node Js"}
            percentage={"60%"}
            color={"#14D800"}
            move={false}
          />
          <SkillCard
            skill={"React & NextJs"}
            percentage={"75%"}
            color={"#00FFF3"}
            move={true}
          />
          <SkillCard
            skill={"Mongo DB & Firebase"}
            percentage={"50%"}
            color={"#FFF400"}
            move={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
