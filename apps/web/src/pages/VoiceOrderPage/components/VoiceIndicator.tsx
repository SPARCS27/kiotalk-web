import { Box, Flex, rem } from '@kiotalk/ui';
import { AnimatePresence, motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { useRecoilValue } from 'recoil';

import loadingRedAnim from '@/assets/animations/lottie-red-loading.json';
import voiceRedBgAnim from '@/assets/animations/lottie-voice-red-background.json';
import voiceRedFgAnim from '@/assets/animations/lottie-voice-red-foreground.json';
import voiceYellowBgAnim from '@/assets/animations/lottie-voice-yellow-background.json';
import voiceYellowFgAnim from '@/assets/animations/lottie-voice-yellow-foreground.json';
import loadingYellowAnim from '@/assets/animations/lottie-yellow-loading.json';
import VoiceIcon from '@/assets/icons/voice.svg?react';
import { loadingState } from '@/atoms/loadingState.ts';

const transition = {
  duration: 0.5,
  ease: 'easeInOut',
};

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

type VoiceIndicatorProps = ComponentPropsWithoutRef<'button'> & {
  listening: boolean;
  colorScheme?: 'RED' | 'YELLOW';
};

const VoiceIndicator = forwardRef<HTMLButtonElement, VoiceIndicatorProps>(
  ({ listening, colorScheme = 'YELLOW', ...props }, ref) => {
    const loading = useRecoilValue(loadingState);

    return (
      <Flex layerStyle="center" position="relative" w={rem(304)} h={rem(304)}>
        {listening && (
          <Lottie
            animationData={colorScheme === 'RED' ? voiceRedBgAnim : voiceYellowBgAnim}
            loop={true}
            width={rem(304)}
            height={rem(304)}
          />
        )}

        <Box
          as="button"
          layerStyle="center"
          position="absolute"
          top="50%"
          left="50%"
          w={rem(126)}
          h={rem(126)}
          p={rem(16)}
          borderRadius="50%"
          bgColor="white"
          transform="translate(-50%, -50%)"
          boxShadow={`0 ${rem(4)} ${rem(40)} 0 rgba(0, 0, 0, 0.05)`}
          ref={ref}
          {...props}
        >
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="listening"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
                transition={transition}
              >
                <Lottie
                  animationData={colorScheme === 'RED' ? loadingRedAnim : loadingYellowAnim}
                  loop={true}
                />
              </motion.div>
            ) : listening ? (
              <motion.div
                key="listening"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
                transition={transition}
              >
                <Lottie
                  animationData={colorScheme === 'RED' ? voiceRedFgAnim : voiceYellowFgAnim}
                  loop={true}
                />
              </motion.div>
            ) : (
              <motion.span
                key="not-listening"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
                transition={transition}
                style={{ paddingBottom: rem(-1) }}
              >
                <VoiceIcon width={rem(60)} color={colorScheme === 'RED' ? '#B82D28' : '#F6CA5C'} />
              </motion.span>
            )}
          </AnimatePresence>
        </Box>
      </Flex>
    );
  },
);

export default VoiceIndicator;
