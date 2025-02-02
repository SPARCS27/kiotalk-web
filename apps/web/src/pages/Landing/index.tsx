import { Box, Flex, Image, rem, Text } from '@kiotalk/ui';
import { domAnimation, LazyMotion } from 'framer-motion';

const LandingPage = () => {
  return (
    <LazyMotion features={domAnimation}>
      <Box as="section" layerStyle="columnCenterX" mt={rem(90)}>
        <Image src="/assets/img-branding.png" alt="branding" height={rem(80)} />
        <Text textStyle="subtitle" mt={rem(30)}>
          대화로 주문하려면 대화 주문을,
          <br />
          메뉴를 선택하려면 일반 주문을 선택하세요.
        </Text>
        <Text textStyle="title" mt={rem(20)}>
          주문 방법을 선택해주세요
        </Text>
      </Box>

      <Flex mt={rem(210)} mx="auto" gap={rem(28)}>
        <Box
          as="a"
          href="/voice-order"
          layerStyle="columnCenter"
          w={rem(330)}
          h={rem(330)}
          borderRadius={rem(34)}
          backgroundColor="white"
          boxShadow="0px 4px 30px 0px rgba(0, 0, 0, 0.03)"
        >
          <Image src="/assets/img-landing-voice.png" alt="Voice" width={rem(136)} />
          <Text mt={rem(48)} color="gray700" fontSize={rem(28)} fontWeight="bold">
            대화 주문
          </Text>
        </Box>
        <Box
          as="a"
          href="/order"
          layerStyle="columnCenter"
          w={rem(330)}
          h={rem(330)}
          borderRadius={rem(34)}
          backgroundColor="white"
          boxShadow={`0 ${rem(4)} ${rem(30)} 0 rgba(0, 0, 0, 0.03)`}
        >
          <Image src="/assets/img-landing-normal.png" alt="Voice" width={rem(128)} />
          <Text mt={rem(27)} color="gray700" fontSize={rem(28)} fontWeight="bold">
            일반 주문
          </Text>
        </Box>
      </Flex>

      <Flex position="absolute" left={0} bottom={rem(142)} width="100%" justifyContent="center">
        <Flex gap={rem(24)}>
          <Box
            as="button"
            layerStyle="center"
            w={rem(114)}
            h={rem(114)}
            borderColor="primary600"
            borderWidth={rem(6)}
            borderRadius="50%"
            backgroundColor="primary300"
          >
            <Image src="/assets/img-flag-korean.png" alt="Korean" width={rem(68)} />
          </Box>
          <Box
            as="button"
            layerStyle="center"
            w={rem(114)}
            h={rem(114)}
            borderRadius="50%"
            backgroundColor="#FAECCA"
          >
            <Image src="/assets/img-flag-english.png" alt="English" width={rem(68)} />
          </Box>
        </Flex>
      </Flex>
    </LazyMotion>
  );
};

export default LandingPage;
