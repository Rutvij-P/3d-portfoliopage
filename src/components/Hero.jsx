import { motion } from 'framer-motion';
import Typical from 'react-typical';
import { useState, useEffect } from 'react';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.pageYOffset > 0);
    });

    return () => window.removeEventListener('scroll', setIsScrolled);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white font-Trap`}>Hello! I'm <span className="text-[#915eff]">
            <Typical 
              steps={["jivtur", 1500, "Rutvij-P", 1500, "Rutu", 1500]}
              wrapper="b"
            />
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white font-extralight`}>
          I am ambitious and dedicated Computer Science student with a passion for emerging technologies such as <span className="text-red-500">ML</span> and <span className="text-red-500">AI</span> as well with a keen interest in <span className="text-yellow-500"> UI/UX</span> aspects.
          </p>
        </div>

      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <motion.div 
            animate={{rotate: isHovered ? 180 : 0}}
            transition={{duration: 0.3}}
            className="w-[35px] h-[35px] rounded-full border-4 border-secondary flex justify-center items-center cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div 
              animate={{y: isHovered ? 6 : 0}}
              transition={{duration: 0.3}}
              className={`h-1 w-6 bg-white rounded-full transform-gpu ${isHovered && 'rotate-45'}`}
            />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
