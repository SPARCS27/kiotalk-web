import { Box, rem, Text } from '@kiotalk/ui';

import { ColorSchemeType } from '@/types/color.ts';

type GuideMessageProps = {
  colorScheme?: ColorSchemeType;
};

const GuideMessage = ({ colorScheme = 'YELLOW' }: GuideMessageProps) => {
  return (
    <Box>
      <Text
        textStyle="subtitle"
        mt={rem(72)}
        color={colorScheme === 'RED' ? 'rgba(255, 255, 255, 0.6)' : 'gray350'}
      >
        “슈슈 버거 세트 포장할게.”
      </Text>
      <Text
        textStyle="subtitle"
        mt={rem(16)}
        color={colorScheme === 'RED' ? 'rgba(255, 255, 255, 0.8)' : 'gray400'}
      >
        “불고기 버거 단품에 커피 한 잔."
      </Text>
    </Box>
  );
};

export default GuideMessage;
