import { Box, Flex, rem } from '@kiotalk/ui';

import HomeIcon from '@/assets/icons/home.svg?react';
import { ColorSchemeType } from '@/types/color.ts';

type OrderNavigationProps = {
  accentButtonTitle?: string;
  colorScheme?: ColorSchemeType;
};

const OrderNavigation = ({
  accentButtonTitle = '장바구니 확인하기',
  colorScheme = 'YELLOW',
}: OrderNavigationProps) => {
  return (
    <Flex as="nav" mt={rem(34)} gap={rem(24)}>
      <Box as="a" href="/" p={rem(26)} borderRadius={rem(22)} bgColor="gray600">
        <HomeIcon width={rem(48)} height={rem(48)} fill="#FFFFFF" />
      </Box>
      <Box
        as="a"
        href="/"
        layerStyle="center"
        w={rem(190)}
        h={rem(100)}
        color="gray600"
        fontSize={rem(28)}
        fontWeight="bold"
        borderRadius={rem(22)}
        bgColor="gray300"
      >
        이전으로
      </Box>
      <Box
        as="a"
        href="/voice-pay"
        layerStyle="center"
        width={rem(350)}
        height={rem(100)}
        color={colorScheme === 'YELLOW' ? 'white' : '#4D4D4D'}
        fontSize={rem(28)}
        fontWeight="bold"
        borderRadius={rem(22)}
        backgroundColor={colorScheme === 'YELLOW' ? 'primary600' : '#F6CA5C'}
      >
        {accentButtonTitle}
      </Box>
    </Flex>
  );
};

export default OrderNavigation;
