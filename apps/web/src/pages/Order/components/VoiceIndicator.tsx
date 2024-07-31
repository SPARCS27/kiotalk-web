import { Box, Flex, rem } from '@sparcs/ui';
import { AnimatePresence, motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

import voiceBgAnimation from '@/assets/animations/lottie-voice-background.json';
import voiceFgAnimation from '@/assets/animations/lottie-voice-foreground.json';
import VoiceIcon from '@/assets/icons/voice.svg?react';

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
};

const VoiceIndicator = forwardRef<HTMLButtonElement, VoiceIndicatorProps>(
  ({ listening, ...props }, ref) => {
    return (
      <Flex layerStyle="center" position="relative" w={rem(304)} h={rem(304)}>
        {listening && (
          <Lottie animationData={voiceBgAnimation} loop={true} width={rem(304)} height={rem(304)} />
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
            {listening ? (
              <motion.div
                key="listening"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
                transition={transition}
              >
                <Lottie animationData={voiceFgAnimation} loop={true} />
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
                <VoiceIcon width={rem(60)} />
              </motion.span>
            )}
          </AnimatePresence>
        </Box>
      </Flex>
    );
  },
);

export default VoiceIndicator;
