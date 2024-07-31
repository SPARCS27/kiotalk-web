import { RecommendMenuType } from '@kiotalk/api';
import { Flex, rem, Image, Box, Text } from '@kiotalk/ui';

import { formatToKRW } from '@/utils/format.ts';

type RecommendMenuProps = {
  menu: RecommendMenuType;
};

const RecommendMenu = ({ menu }: RecommendMenuProps) => {
  return (
    <Flex
      layerStyle="rowBetween"
      w={rem(680)}
      py={rem(40)}
      px={rem(55)}
      mt={rem(64)}
      borderRadius={rem(28)}
      bgColor="white"
      boxShadow={`0 ${rem(4)} ${rem(30)} 0 rgba(0, 0, 0, 0.04)`}
    >
      <Flex layerStyle="column" flex={1} h={rem(150)}>
        <Box
          as="span"
          w="fit-content"
          py={rem(7)}
          px={rem(12)}
          color="white"
          fontSize={rem(16)}
          fontWeight="bold"
          borderRadius={rem(12)}
          bgColor="#B82D28"
        >
          인기
        </Box>
        <Text mt={rem(10)} color="#1F1F1F" fontSize={rem(26)} fontWeight="semibold">
          {menu.name}
        </Text>
        <Text mt={rem(2)} color="#70706E" fontSize={rem(22)} fontWeight="semibold">
          {formatToKRW(menu.price)}원
        </Text>
        <Text mt={rem(4)} color="#80807E" fontSize={rem(18)} fontWeight="semibold">
          {menu.ingredients.join(', ')}
        </Text>
      </Flex>
      <Flex layerStyle="center" w={rem(150)} h={rem(150)} borderRadius={rem(20)} bgColor="#F5F5F3">
        <Image src={menu.link} alt={menu.name} w={rem(128)} h={rem(128)} />
      </Flex>
    </Flex>
  );
};

export default RecommendMenu;
