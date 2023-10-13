import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const MenuItem = ({ menu }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href={menu.uri}
      className={`w-12 h-12 rounded-full flex items-center justify-center group cursor-pointer hover:bg-gradient-to-br hover:from-primary hover:to-secondary relative`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {menu.Icon && (
        <menu.Icon
          className={`text-white group-hover:text-white text-xl`}  />
      )}
      {/* Tool Tip */}
      <AnimatePresence>
        {isHovered && (
          menu.name && (
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              className="hidden lg:block absolute bg-white rounded-md px-6 py-2 -left-[140px] after:absolute after:right-[-10px] after:top-3 after:w-3 after:h-3 after:bg-white after:rotate-45"
              style={{ boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.4)" }}
            >
              <p className="text-bgPrimary">{menu.name}</p>
            </motion.div>
          )
        )}
      </AnimatePresence>
    </a>
  );
};

MenuItem.propTypes = {
  menu: PropTypes.shape({
    uri: PropTypes.string.isRequired,
    Icon: PropTypes.elementType,
    name: PropTypes.string,
  }).isRequired,
};

export default MenuItem;
