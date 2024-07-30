import { Box, Image, rem, Text } from '@sparcs/ui';
import { domAnimation, LazyMotion } from 'framer-motion';

const LandingPage = () => {
  return (
    <LazyMotion features={domAnimation}>
      <Box as="section" layerStyle="columnCenterX" mt={rem(124)}>
        <Image src="/assets/img-branding-mcdonald.png" alt="branding" height={rem(110)} />
        <Text textStyle="subtitle" mt={rem(50)}>
          대화로 주문하려면 대화 주문을,
          <br />
          메뉴를 선택하려면 일반 주문을 선택하세요.
        </Text>
        <Text textStyle="title" mt={rem(32)}>
          주문 방법을 선택해주세요
        </Text>
      </Box>
    </LazyMotion>
  );
};

export default LandingPage;
