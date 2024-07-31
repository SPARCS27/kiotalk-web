import {
  OrderResponse,
  OrderRoleEnum,
  OrderStepType,
  useClovaVoice,
  useOrderChat,
} from '@kiotalk/api';
import { Box, Flex, Image, rem, Text } from '@kiotalk/ui';
import { AnimatePresence, domAnimation, LazyMotion, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { audioInstanceState } from '@/atoms/audioState.ts';
import { loadingState } from '@/atoms/loadingState.ts';
import { TIMEOUT_DURATION } from '@/constants/voice.ts';
import useSpeechTimeout from '@/hooks/useSpeechTimeout';
import { ColorSchemeType } from '@/types/color.ts';

import BasketStatus from './components/BasketStatus';
import Card from './components/Card.tsx';
import GuideMessage from './components/GuideMessage';
import OrderNavigation from './components/OrderNavigation';
import RecommendMenu from './components/RecommendMenu.tsx';
import VoiceIndicator from './components/VoiceIndicator';

const VoiceOrderPage = () => {
  const navigate = useNavigate();
  const audio = useRecoilValue(audioInstanceState);

  const [step, setStep] = useState<OrderStepType>(OrderStepType.INITIAL);
  const [colorScheme, setColorScheme] = useState<ColorSchemeType>('YELLOW');
  const [message, setMessage] = useState<string>('무엇을 도와드릴까요?');
  const [order, setOrder] = useState<OrderResponse | undefined>();

  const setLoading = useSetRecoilState(loadingState);
  const { mutate: orderChatMutation } = useOrderChat();
  const onSuccessComplete = () => {
    setLoading(true);
    orderChatMutation(
      {
        turn: { role: OrderRoleEnum.user, content: finalTranscript },
        history: order?.history || [],
      },
      {
        onSuccess: data => {
          setOrder(data);
          setStep(data?.cart?.task.step || OrderStepType.ORDER);
          setMessage(data.message.content);
        },
        onSettled: () => {
          setLoading(false);
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
    if (message && audio) {
      colvaVoiceMutation(
        { text: message },
        {
          onSuccess: async data => {
            audio.src = data.link;
            await audio.play();

            if (order?.cart?.task.step === OrderStepType.PAY) {
              setTimeout(
                async () => {
                  setColorScheme('RED');
                  setMessage('그림을 참고하여 투입구에 카드를 삽입해주세요');
                  setStep(OrderStepType.CARD);

                  setTimeout(() => {
                    navigate('/complete', { replace: true });
                  }, 6000);
                },
                audio.duration * 1000 + 2000,
              );
            } else if (order?.recommend) {
              setTimeout(async () => await handleVoice(), audio.duration * 1000 + 3000);
            } else if (!order?.message.content.includes('직원')) {
              setTimeout(async () => await handleVoice(), audio.duration * 1000 + 1000);
            }
          },
        },
      );
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message, audio]);

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {colorScheme === 'RED' && (
          <motion.div
            initial={{ width: 0, height: 0 }}
            animate={{ width: '250vmax', height: '250vmax' }}
            exit={{ width: 0, height: 0 }}
            transition={{ duration: 1 }}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#B82D28',
              borderRadius: '50%',
              zIndex: -1,
            }}
          />
        )}
      </AnimatePresence>
      <Box as="section" layerStyle="columnCenterX" mt={rem(90)}>
        <Image
          src={colorScheme === 'RED' ? '/assets/img-branding-red.png' : '/assets/img-branding.png'}
          alt="branding"
          height={rem(80)}
        />

        {step === OrderStepType.INITIAL && (
          <Text textStyle="subtitle" mt={rem(30)} color="primary600">
            대화를 통해 원하는 메뉴를 주문하세요.
          </Text>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={message}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.5 }}
          >
            <Text
              textStyle="title"
              w={rem(680)}
              mt={step === OrderStepType.INITIAL ? rem(20) : rem(44)}
              color={colorScheme === 'RED' ? 'white' : '#1F1F1F'}
              textAlign="center"
              whiteSpace="pre-wrap"
              wordBreak="keep-all"
            >
              {message}
            </Text>
          </motion.div>
        </AnimatePresence>

        {!listening && step === OrderStepType.INITIAL && <GuideMessage />}

        {order?.recommend && <RecommendMenu menu={order.recommend.menu} />}

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
        {step === OrderStepType.CARD ? (
          <Card order={order} />
        ) : (
          step !== OrderStepType.COMPLETE && (
            <>
              <VoiceIndicator
                colorScheme={colorScheme}
                listening={listening}
                onClick={handleVoice}
              />
              <BasketStatus order={order} />
              <OrderNavigation colorScheme={colorScheme} />
            </>
          )
        )}
      </Flex>
    </LazyMotion>
  );
};

export default VoiceOrderPage;
