import { useClovaVoice } from '@kiotalk/api';
import { Box, Flex, Image, rem, Text } from '@kiotalk/ui';
import { AnimatePresence, domAnimation, LazyMotion, motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import checkAnim from '@/assets/animations/lottie-check.json';
import { audioInstanceState } from '@/atoms/audioState.ts';

const CompletePage = () => {
  const navigate = useNavigate();
  const audio = useRecoilValue(audioInstanceState);

  const { mutate: colvaVoiceMutation } = useClovaVoice();
  useEffect(() => {
    colvaVoiceMutation(
      { text: '음식이 준비되면 카운터에서 안내해드리겠습니다' },
      {
        onSuccess: async data => {
          if (audio) {
            audio.src = data.link;
            await audio.play();

            setTimeout(() => {
              navigate('/', { replace: true });
            }, 8000);
          }
        },
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <Flex layerStyle="columnCenterX" h="100dvh" bgColor="primary600">
        <Box as="section" layerStyle="columnCenterX" mt={rem(90)}>
          <Image src="/assets/img-branding-red.png" alt="branding" height={rem(80)} />
        </Box>

        <Flex layerStyle="columnCenterX" mt={rem(314)}>
          <Flex layerStyle="center" width={rem(180)} height={rem(180)}>
            <Lottie animationData={checkAnim} loop={false} />
          </Flex>
          <Text mt={rem(44)} color="white" fontSize={rem(80)} fontWeight="bold">
            930번
          </Text>
        </Flex>

        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.5 }}
          >
            <Text
              w={rem(680)}
              mt={rem(110)}
              color="white"
              fontSize={rem(46)}
              fontWeight="bold"
              textAlign="center"
              wordBreak="keep-all"
            >
              음식이 준비되면 카운터에서 안내해드리겠습니다
            </Text>
          </motion.div>
        </AnimatePresence>
      </Flex>
    </LazyMotion>
  );
};

export default CompletePage;
