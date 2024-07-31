import { useMutation } from '@tanstack/react-query';

import { fetcher } from '../fetcher';
import { OrderMessageType, OrderResponse } from '../types';

type Request = {
  turn: OrderMessageType;
  history: OrderMessageType[];
};

const postOrderChat = (params: Request) => {
  return fetcher.post<OrderResponse>('/chat', params);
};

const useOrderChat = () => useMutation({ mutationFn: postOrderChat });

export default useOrderChat;
