import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const HomeSocialLinks = ({ data, index }) => {
  const [isHovered,setIsHovered] = useState(false)
  const Icon = data.Icon;

  return (
    <motion.a
     key={index}
     href={data.uri}
     target="_blank"
     initial={{opacity : 0, y : 25 }}
     animate={{opacity : 1, y : 0 }}
     exit={{opacity : 0, y : 25 }}
     transition={{delay : index * 0.1}}
     className=" rounded-full bg-gradient-to-br from-primary to-secondary relative p-[2px] cursor-pointer"
     onMouseEnter={()=> setIsHovered(true)}
     onMouseLeave={()=> setIsHovered(false)}>
    
        
      <AnimatePresence>

        {isHovered && (
          <motion.div className={`absolute inset-1 blur-md bg-gradient-to-br from-primary to-secondary -z-10`}>

          </motion.div>
        )}

        <div className="w-8 h-8 rounded-full bg-bgPrimary flex items-center justify-center">
          {Icon && <Icon className="text-texlight text-base" />}
        </div>
      </AnimatePresence>
    </motion.a>
  );
};

HomeSocialLinks.propTypes = {
  data: PropTypes.shape({
    Icon: PropTypes.elementType,
    uri: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default HomeSocialLinks;
