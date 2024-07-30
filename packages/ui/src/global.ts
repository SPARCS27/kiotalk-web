import { theme } from './theme';

export const globalStyles = {
  global: () => ({
    body: {
      height: '100dvh',
      backgroundColor: theme.colors.gray[100],
    },
    '#root': {
      height: '100%',
    },
  }),
};
