import { FC } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { styles } from '../style';

interface ISectionWrapper {
  children: any;
  idName: string
}

const SectionWrapper: FC<ISectionWrapper> = ({ children, idName }) => {
  return <motion.section
  variants={staggerContainer(undefined, undefined)}
  initial="hidden"
  whileInView={"show"}
  viewport={{once: true, amount: 0.25}}
  className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
  >
    <span className='hash-span' id={idName}>
        &nbsp;
    </span>
    {children}</motion.section>;
};

export default SectionWrapper;
