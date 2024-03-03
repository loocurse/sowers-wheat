import type { DeepPartial, Theme } from '@chakra-ui/react';
import '@fontsource/caudex';
import '@fontsource/lato';

export const fonts: DeepPartial<Theme['fonts']> = {
  heading: `'caudex', serif`,
  body: `'lato', serif`,
};
