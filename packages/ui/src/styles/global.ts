import { theme } from './theme';

export const globalStyles = {
  global: () => ({
    body: {
      height: '100dvh',
      backgroundColor: theme.colors.background.normal,
    },
    '#root': {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      marginInline: 'auto',
    },
  }),
};
