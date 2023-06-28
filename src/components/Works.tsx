import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../style';
import { projects } from '../constants';
import { SectionWrapper } from '../hoc';
import { Tilt } from 'react-tilt';
import { github } from '../assets';

type Tag = {
  name: string;
  color: string;
};

export type Project = {
  name: string;
  description: string | ReactNode;
  tags: Tag[];
  image: string;
  source_code_link: string;
  features: string[];
  website_code_link: string;
};

interface ProjectCardProps extends Project {
  index: number;
}

const ProjectCard = ({
  index,
  name,
  description,
  features,
  tags,
  website_code_link,
  image,
  source_code_link,
}: ProjectCardProps) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full rounded-2xl" />
          <div onClick={() => window.open(website_code_link, '_blank')} className="cursor-pointer absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
          <ul className="mt-2 list-disc text-secondary text-[14px]">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <SectionWrapper idName="">
      <motion.div variants={textVariant(undefined)}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Although my portfolios may not entirely encompass the breadth of my
          current knowledge, they serve as a testament to my growth and
          expertise. Each project is accompanied by a concise description and
          includes links to both the code repositories and live demos. These
          projects showcase my ability to tackle complex problems, work with
          diverse technologies, and effectively manage projects.
        </motion.p>
      </div>
      <div className="mt-20 flex justify-center md:justify-start flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Works;
