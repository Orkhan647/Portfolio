import { motion } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import { SkillCard } from "../components";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const {t}= useTranslation()
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
            {t('skills')}
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>
      {/* main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* content section */}
        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start ">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
           {t('bt')}
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
{t('infoSkills1')}
</p>
<p className="text-texlight text-base tracking-wide text-justify">
{t('infoSkills2')}
</p>
<p className="text-texlight text-base tracking-wide text-justify">
 {t('infoSkills3')}
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
