import { Box, rem, Text } from '@sparcs/ui';

const GuideMessage = () => {
  return (
    <Box>
      <Text textStyle="subtitle" mt={rem(72)} color="gray350">
        “슈슈 버거 세트 포장할게.”
      </Text>
      <Text textStyle="subtitle" mt={rem(16)} color="gray400">
        “불고기 버거 단품에 커피 한 잔."
      </Text>
    </Box>
  );
};

export default GuideMessage;
