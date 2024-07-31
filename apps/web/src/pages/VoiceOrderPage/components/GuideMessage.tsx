import { Flex, rem, Text } from '@kiotalk/ui';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';

import { ColorSchemeType } from '@/types/color.ts';

type GuideMessageProps = {
  colorScheme?: ColorSchemeType;
};

const exampleTexts = [
  '새우 버거 세트 포장할게.',
  '불고기 버거 단품에 콜라 한 잔.',
  '맥스파이시 상하이 버거 세트 먹고 갈게요.',
  '맛있는 버거 추천해주세요.',
  '여기 화장실이 어디인가요?',
];

const GuideMessage = ({ colorScheme = 'YELLOW' }: GuideMessageProps) => {
  const [currentTexts, setCurrentTexts] = useState([0, 1]);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTexts(prev => {
        const newSecond = (prev[1] + 1) % exampleTexts.length;
        const newFirst = prev[1];
        setDirection(1);
        return [newFirst, newSecond];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Flex layerStyle="columnCenterX" w={rem(680)} mt={rem(72)}>
      <AnimatePresence custom={direction}>
        {currentTexts.map((textIndex, index) => (
          <motion.div
            key={textIndex}
            custom={direction}
            initial={index === 1 ? { opacity: 0, y: rem(80) } : { opacity: 1, y: rem(index * 40) }}
            animate={{ opacity: 1, y: rem(index * 40) }}
            exit={index === 0 ? { opacity: 0, y: rem(-40) } : { opacity: 1, y: rem(40) }}
            transition={{ duration: 0.5 }}
            style={{ position: 'absolute' }}
          >
            <Text
              textStyle="subtitle"
              textAlign="center"
              color={
                colorScheme === 'RED'
                  ? `rgba(255, 255, 255, ${0.6 + index * 0.2})`
                  : index === 0
                    ? 'gray350'
                    : 'gray400'
              }
            >
              {exampleTexts[textIndex]}
            </Text>
          </motion.div>
        ))}
      </AnimatePresence>
    </Flex>
  );
};

export default GuideMessage;
