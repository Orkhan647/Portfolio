import { useEffect, useState } from "react";
import PropTypes from "prop-types"; // PropTypes ekleyin

const HeroTypeWritter = ({ words, speed }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currenttext, setCurrenttext] = useState("");
  const currentWord = words[currentWordIndex];
  let typingInterval; // typingInterval'ı tanımlayın

  useEffect(() => {
    let charIndex = 0;

    typingInterval = setInterval(() => {
      if (charIndex <= currentWord.length) {
        setCurrenttext(currentWord.slice(0, charIndex));
        charIndex++;
      } else {
        // word typed out, clear and move to the next word
        clearInterval(typingInterval);

        setTimeout(() => {
          setCurrentWordIndex((prevIndex) =>
            prevIndex === words.length - 1 ? 0 : prevIndex + 1
          );
        }, 1000);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentWord, speed, words]);

  return (
    <span className="tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt-7">
      {currenttext}
    </span>
  );
};

HeroTypeWritter.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  speed: PropTypes.number.isRequired,
};

export default HeroTypeWritter;