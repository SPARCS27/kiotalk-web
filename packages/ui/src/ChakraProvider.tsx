import { ChakraProvider as BaseChakraProvider, CSSReset } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { theme } from './theme';

type ChakraProviderProps = {
  children: ReactNode;
};

export const ChakraProvider = ({ children }: ChakraProviderProps) => {
  return (
    <BaseChakraProvider theme={theme}>
      <CSSReset />
      {children}
    </BaseChakraProvider>
  );
};
