import { OrderResponse } from '@sparcs/api';
import { Box, Divider, Flex, rem, Text } from '@sparcs/ui';
import { useEffect, useState } from 'react';

import { formatToKRW } from '@/utils/format.ts';

import {
  BasketStatusEnum,
  basketStatusKeys,
  basketStatusLabels,
  BasketStatusType,
  initialBasketStatus,
} from './types.ts';

type BasketStatusProps = {
  order?: OrderResponse;
};

const BasketStatus = ({ order }: BasketStatusProps) => {
  const [status, setStatus] = useState<BasketStatusType>(initialBasketStatus);

  useEffect(() => {
    if (order) {
      const { menus, pickupStrategy } = order.cart.task;
      const newStatus = {
        menu: menus.length > 0,
        combo: menus.length > 0 && menus.every(menu => menu.isCombo !== undefined),
        size: menus.length > 0 && menus.every(menu => menu.size !== undefined),
        purchase:
          menus.length > 0 && menus.every(menu => menu.purchase !== undefined && menu.purchase > 0),
        pickupStrategy: !!pickupStrategy,
      };
      setStatus(newStatus);
    }
  }, [order]);

  return (
    <Flex
      layerStyle="columnCenterX"
      w={rem(680)}
      p={rem(55)}
      mt={rem(66)}
      borderRadius={rem(28)}
      bgColor="white"
      boxShadow={`0 ${rem(4)} ${rem(30)} 0 rgba(0, 0, 0, 0.04)`}
    >
      <Flex gap={rem(44)}>
        {basketStatusKeys.map(key => (
          <Flex layerStyle="columnCenterX" gap={rem(14)} key={key}>
            <Text color="gray500" fontSize={rem(20)} fontWeight="semibold">
              {basketStatusLabels[BasketStatusEnum[key]]}
            </Text>
            <Box
              w={rem(56)}
              h={rem(56)}
              borderRadius="50%"
              bgColor={status[key] ? '#F6CA5C' : 'gray100'}
            />
          </Flex>
        ))}
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
          {formatToKRW(order?.cart.task.totalPrice)}원
        </Text>
      </Flex>
    </Flex>
  );
};

export default BasketStatus;
