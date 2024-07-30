import { Box, Flex, Image, rem, Text } from '@sparcs/ui';
import { domAnimation, LazyMotion } from 'framer-motion';

import BasketStatus from '@/pages/Order/components/BasketStatus.tsx';
import OrderNavigation from '@/pages/Order/components/OrderNavigation.tsx';

const OrderPage = () => {
  return (
    <LazyMotion features={domAnimation}>
      <Box as="section" layerStyle="columnCenterX" mt={rem(90)}>
        <Image src="/assets/img-branding-mcdonald.png" alt="branding" height={rem(80)} />
        <Text textStyle="subtitle" mt={rem(30)} color="primary600">
          대화를 통해 원하는 메뉴를 주문하세요.
        </Text>
        <Text textStyle="title" mt={rem(20)}>
          무엇을 드시고 싶으신가요?
        </Text>

        <Text textStyle="subtitle" mt={rem(72)}>
          “슈슈 버거 세트 포장할게.”
        </Text>
        <Text textStyle="subtitle" mt={rem(16)}>
          “불고기 버거 단품에 커피 한 잔."
        </Text>
      </Box>

      <Flex
        as="section"
        layerStyle="columnCenterX"
        position="absolute"
        left={0}
        bottom={rem(64)}
        w="100%"
        justifyContent="center"
      >
        <BasketStatus />
        <OrderNavigation />
      </Flex>
    </LazyMotion>
  );
};

export default OrderPage;
