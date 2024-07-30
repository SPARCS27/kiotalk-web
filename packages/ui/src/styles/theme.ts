import { extendTheme, ThemeConfig } from '@chakra-ui/react';

import { globalStyles } from './global';
import { rem } from '../utils';

const fontFamily: string = `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`;

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const fonts = {
  heading: fontFamily,
  body: fontFamily,
};

const colors = {
  background: {
    normal: '#FBFBF9',
  },

  typography: {
    sub: '#808080',
    normal: '#1F1F1F',
  },

  branding: {},
};

const layerStyles = {
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerX: {
    display: 'flex',
    justifyContent: 'center',
  },
  centerY: {
    display: 'flex',
    alignItems: 'center',
  },
  rowBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  columnCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  columnCenterX: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  columnCenterY: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};

const textStyles = {
  title: {
    color: colors.typography.normal,
    fontSize: rem(64),
    fontWeight: 'bold',
    lineHeight: rem(48),
    textAlign: 'center',
  },
  subtitle: {
    color: colors.typography.sub,
    fontSize: rem(36),
    fontWeight: 'semibold',
    lineHeight: rem(84),
    textAlign: 'center',
  },
};

export const theme = extendTheme({
  fonts,
  colors,
  config,
  styles: globalStyles,
  layerStyles,
  textStyles,
});
