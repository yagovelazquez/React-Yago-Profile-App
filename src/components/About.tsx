import { motion } from 'framer-motion';

import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../style';
import { Tilt } from 'react-tilt';
import { SectionWrapper } from '../hoc';

interface ServiceCardProps {
  title: string;
  icon: string;
  index: number;
}

const ServicesCard = ({ title, icon, index }: ServiceCardProps) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-cenbter flex-col">
          <img
            src={icon}
            alt={title}
            className="text-white text-[20px] font-bold text-center"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <SectionWrapper idName="about">
      <motion.div variants={textVariant(undefined)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Passionate about creating impactful and user-friendly websites, I am a
        web developer with a strong background in front-end and back-end
        technologies. I have expertise in JavaScript, TypeScript, Python, and
        its related tools. Most of my experience of developer were using
        frameworks like React, Django, Node.js. My expertise in these
        technologies allows me to help your organization to develop dynamic,
        high-performance web applications that deliver an exceptional user
        experience. Let's collaborate and create innovative solutions together!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServicesCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default About;
