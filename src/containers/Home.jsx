import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Hero } from '../assets';
import { HeroTypeWritter, HomeSocialLinks } from '../components';
import { Socials } from '../utils/helper';
import { useTranslation } from "react-i18next";
import Language from '../components/language';


const Home = ({setSiteLang}) => {
  const {t}= useTranslation()

  return (
    <section
      id="home"
      className="flex items-center justify-center flex-col gap-8 lg:gap-12 relative"
    >
      {/* Language Selection */}
     
      <div className="mt-4 flex items-center justify-center">
  <div className="w-40 md:w-auto">
    <Language setSiteLang={setSiteLang} />
  </div>
</div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* Content section */}
        <div className="w-full h-full flex flex-col items-center pt-7 lg:items-start justify-center gap-4">
          <h2 className="text-3xl lg:text-4xl text-texlight">
           {t("hello")}
            <span className="block tracking-wider text-4xl lg:text-6xl mt-2 lg:mt-4 text-white">
              {' '}
              {t('name')}
            </span>
          </h2>
          {/* typewriter */}
          <h2 className="text-2xl lg:text-4xl text-texlight mt-4 ">
           {t('i')}{'  '}
            <HeroTypeWritter speed={100} words={[t("dev"), t("fre")]} />
          </h2>
          <p className="text-base text-texlight mt-6 text-center lg:text-left">
            {t('info1')}
          </p>
          {/* social media links */}
          <div className="flex items-center justify-center gap-8 mt-16">
            <AnimatePresence>
              {Socials &&
                Socials.map((item, index) => (
                  <HomeSocialLinks key={index} data={item} index={index} />
                ))}
            </AnimatePresence>
          </div>

          {/* hire me */}
          <a
            href="https://github.com/Orkhan647/Portfolio/blob/main/src/assets/cv/Orxans%20Cv.pdf"
            target='_blank'
            style={{ boxShadow: 'inset 0px 0px 10px rgba(255,255,255,0.3)' }}
            className="mt-12 border border-[rgba(255,255,255,0.3)] rounded-xl px-8 py-3 active:95 group hover:border-primary"
          >
            <p className="text-texlight group-hover:text-transparent bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary">
            {t("cv")}
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
              ease: 'linear',
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
