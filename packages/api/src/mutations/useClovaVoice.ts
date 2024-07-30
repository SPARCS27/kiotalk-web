import { useMutation } from '@tanstack/react-query';

import { fetcher } from '../fetcher';
import { TTSResponse } from '../types';

type Request = {
  text: string;
};

const postClovaVoice = (params: Request) => {
  return fetcher.post<TTSResponse>('/tts', params);
};

const useClovaVoice = () => useMutation({ mutationFn: postClovaVoice });

export default useClovaVoice;
