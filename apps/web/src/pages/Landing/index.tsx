import { Text } from '@sparcs/ui';
import { domAnimation, LazyMotion } from 'framer-motion';

const LandingPage = () => {
  return (
    <LazyMotion features={domAnimation}>
      <Text>Text</Text>
    </LazyMotion>
  );
};

export default LandingPage;
