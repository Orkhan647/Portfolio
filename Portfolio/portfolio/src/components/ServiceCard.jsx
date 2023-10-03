import PropTypes from "prop-types";

const ServiceCard = ({ count, text }) => {
  return (
    <div className="group w-full lg:w-52 h-32 rounded-md border border-[rgba(255,255,255,0.3)] flex items-center justify-center flex-col gap-2 hover:border-primary cursor-pointer relative bg-bgPrimary"
    style={{boxShadow: "inset 0 0 10px rgba(255,255,255,0.3" } }>
    <div className="hidden group-hover:block absolute -inset-1 blur-md bg-gradient-to-br from-primary to-secondary -z-10"></div>
    <p className="text-2xl text-texlight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary capitalize font-sans tracking-widest">{count}</p>
    <p className="text-base text-texlight group-hover:text-white">{text}</p>
  </div>
  
  );
};

ServiceCard.propTypes = {
  count: PropTypes.string.isRequired, 
  text: PropTypes.string.isRequired,
};

export default ServiceCard;
