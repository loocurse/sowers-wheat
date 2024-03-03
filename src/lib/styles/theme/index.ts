import { extendTheme } from '@chakra-ui/react';

import { colors } from './colors';
import { components } from './components';
import { config } from './config';
import { fonts } from './fonts';

const customTheme = extendTheme({
  fonts,
  colors,
  config,
  components,
  styles: {
    global: {
      '.article > p': {
        margin: '5px 0 0 0',
      },
      '.article > h1, .article > h2, .article > h3': {
        fontWeight: '600',
        marginTop: '20px',
      },
    },
  },
});

export default customTheme;
