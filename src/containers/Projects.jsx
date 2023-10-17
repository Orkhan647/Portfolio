import { AnimatePresence, motion } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import { ProjectsData } from "../utils/helper";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const {t} = useTranslation()
  return (
    <section
      id="projects"
      className="flex items-center justify-center flex-col gap-8 lg:gap-12 my-12"
    >
      {/* title */}
      <div className="w-full flex items-center justify-center py-24">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            {t('project')}
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>
      {/* main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <AnimatePresence>
          {ProjectsData &&
            ProjectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      key={project.id}
      className="overflow-hidden cursor-pointer relative rounded-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.img
        whileHover={{ scale: 1.1 }}
        className="w-full h-full object-contain rounded-lg"
        src={project.imgSrc}
        alt={project.name}
      />
      {isHovered && (
        <motion.div className="absolute inset-0 backdrop-blur-md bg-[rgba(0,0,0,0.6)] flex items-center justify-center flex-col gap-2">
          <p className="text-xl text-primary">{project?.name}</p>
          <a href={project?.gitURL} target="_blank" className="">
            <FaGithub className="text-3xl text-white hover:text-primary" />
          </a>
        </motion.div>
      )}
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gitURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default Projects;
