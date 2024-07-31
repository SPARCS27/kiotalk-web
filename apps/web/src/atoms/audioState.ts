import { atom } from 'recoil';

export const userInteractedState = atom({
  key: 'userInteractedState',
  default: false,
});

export const audioInstanceState = atom<HTMLAudioElement | null>({
  key: 'audioInstanceState',
  default: null,
});
