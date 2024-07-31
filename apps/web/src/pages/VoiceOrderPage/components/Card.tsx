import { OrderResponse } from '@kiotalk/api';
import { Flex, Image, rem, Text } from '@kiotalk/ui';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';

import voiceRedBgAnim from '@/assets/animations/lottie-voice-red-background.json';
import { formatToKRW } from '@/utils/format.ts';

type CardProps = {
  order?: OrderResponse;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};

const Card = ({ order }: CardProps) => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={itemVariants}>
        <Flex layerStyle="centerX" position="relative">
          <Flex position="absolute" layerStyle="center" top={rem(-82)}>
            <Lottie animationData={voiceRedBgAnim} loop={true} />
          </Flex>
          <Image src="/assets/img-card.png" mb={rem(208)} alt="card" height={rem(348)} zIndex={1} />
        </Flex>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Flex
          layerStyle="rowBetween"
          width={rem(680)}
          py={rem(50)}
          px={rem(50)}
          mb={rem(36)}
          borderRadius={rem(28)}
          bgColor="white"
        >
          <Text color="primary600" fontSize={rem(28)} fontWeight="semibold">
            총 결제 금액
          </Text>
          <Text color="gray900" fontSize={rem(28)} fontWeight="semibold">
            {formatToKRW(order?.cart?.task.totalPrice || 0)}원
          </Text>
        </Flex>
      </motion.div>
    </motion.div>
  );
};

export default Card;
