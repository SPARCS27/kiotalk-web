import { OrderResponse, OrderRoleEnum, useClovaVoice, useOrderChat } from '@sparcs/api';
import { Box, Flex, Image, rem, Text } from '@sparcs/ui';
import { domAnimation, LazyMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

import useSpeechTimeout from '@/hooks/useSpeechTimeout';

import BasketStatus from './components/BasketStatus';
import GuideMessage from './components/GuideMessage';
import OrderNavigation from './components/OrderNavigation';
import VoiceIndicator from './components/VoiceIndicator';

const TIMEOUT_DURATION: number = 3000;

const OrderPage = () => {
  const [message, setMessage] = useState<string>('무엇을 드시고 싶으신가요?');
  const [order, setOrder] = useState<OrderResponse | undefined>();

  const { mutate: orderChatMutation } = useOrderChat();
  const onSuccessComplete = () => {
    orderChatMutation(
      {
        turn: { role: OrderRoleEnum.user, content: finalTranscript },
        history: order?.history || [],
      },
      {
        onSuccess: data => {
          setMessage(data.message.content);
          setOrder(data);
        },
      },
    );

    resetTranscript();
  };

  const { transcript, listening, handleVoice, finalTranscript, resetTranscript } = useSpeechTimeout(
    TIMEOUT_DURATION,
    onSuccessComplete,
  );

  const { mutate: colvaVoiceMutation } = useClovaVoice();
  useEffect(() => {
    if (message) {
      colvaVoiceMutation(
        { text: message },
        {
          onSuccess: async data => {
            const audio = new Audio(data.link);
            audio.src = data.link;
            await audio.play();
          },
        },
      );
    }
  }, [colvaVoiceMutation, message]);

  return (
    <LazyMotion features={domAnimation}>
      <Box as="section" layerStyle="columnCenterX" mt={rem(90)}>
        <Image src="/assets/img-branding-mcdonald.png" alt="branding" height={rem(80)} />
        <Text textStyle="subtitle" mt={rem(30)} color="primary600">
          대화를 통해 원하는 메뉴를 주문하세요.
        </Text>
        <Text
          textStyle="title"
          w={rem(680)}
          mt={rem(20)}
          textAlign="center"
          whiteSpace="pre-wrap"
          wordBreak="keep-all"
        >
          {message}
        </Text>

        {!listening && <GuideMessage />}

        {listening && (
          <Text
            textStyle="subtitle"
            w={rem(680)}
            mt={rem(110)}
            textAlign="center"
            wordBreak="keep-all"
          >
            "{transcript || '...'}"
          </Text>
        )}
      </Box>

      <Flex
        as="section"
        layerStyle="columnCenterX"
        position="absolute"
        left={0}
        bottom={rem(64)}
        w="100%"
        justifyContent="center"
      >
        <VoiceIndicator listening={listening} onClick={handleVoice} />
        <BasketStatus order={order} />
        <OrderNavigation />
      </Flex>
    </LazyMotion>
  );
};

export default OrderPage;
