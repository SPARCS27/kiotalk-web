import { theme } from './theme';

export const globalStyles = {
  global: () => ({
    body: {
      height: 'calc(var(--vh, 1vh) * 100)',
      backgroundColor: theme.colors.white,
    },
    '#root': {
      display: 'flex',
      flexDirection: 'column',
      width: 'calc(var(--vh, 1vh) * 100 * 9 / 16)',
      height: 'calc(var(--vh, 1vh) * 100)',
      marginInline: 'auto',
      backgroundColor: theme.colors.background.normal,
    },
  }),
};
