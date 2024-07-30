import { Box, Divider, Flex, rem, Text } from '@sparcs/ui';

const BasketStatus = () => {
  return (
    <Flex
      layerStyle="columnCenterX"
      w={rem(680)}
      p={rem(55)}
      borderRadius={rem(28)}
      bgColor="white"
      boxShadow={`0 ${rem(4)} ${rem(30)} 0 rgba(0, 0, 0, 0.04)`}
    >
      <Flex gap={rem(44)}>
        <Flex layerStyle="columnCenterX" gap={rem(14)}>
          <Text color="gray500" fontSize={rem(20)} fontWeight="semibold">
            메뉴
          </Text>
          <Box w={rem(56)} h={rem(56)} borderRadius="50%" bgColor="gray100" />
        </Flex>
        <Flex layerStyle="columnCenterX" gap={rem(14)}>
          <Text color="gray500" fontSize={rem(20)} fontWeight="semibold">
            세트
          </Text>
          <Box w={rem(56)} h={rem(56)} borderRadius="50%" bgColor="gray100" />
        </Flex>
        <Flex layerStyle="columnCenterX" gap={rem(14)}>
          <Text color="gray500" fontSize={rem(20)} fontWeight="semibold">
            사이즈
          </Text>
          <Box w={rem(56)} h={rem(56)} borderRadius="50%" bgColor="gray100" />
        </Flex>
        <Flex layerStyle="columnCenterX" gap={rem(14)}>
          <Text color="gray500" fontSize={rem(20)} fontWeight="semibold">
            수량
          </Text>
          <Box w={rem(56)} h={rem(56)} borderRadius="50%" bgColor="gray100" />
        </Flex>
        <Flex layerStyle="columnCenterX" gap={rem(14)}>
          <Text color="gray500" fontSize={rem(20)} fontWeight="semibold">
            장소
          </Text>
          <Box w={rem(56)} h={rem(56)} borderRadius="50%" bgColor="gray100" />
        </Flex>
      </Flex>

      <Divider
        h={rem(2)}
        mt={rem(58)}
        mb={rem(24)}
        border="0"
        borderRadius={rem(2)}
        bgColor="gray100"
      />

      <Flex layerStyle="rowBetween" w="100%">
        <Text color="primary600" fontSize={rem(22)} fontWeight="semibold">
          총 결제 금액
        </Text>
        <Text color="gray900" fontSize={rem(22)} fontWeight="semibold">
          0원
        </Text>
      </Flex>
    </Flex>
  );
};

export default BasketStatus;
