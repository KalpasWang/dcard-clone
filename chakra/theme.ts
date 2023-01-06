import { extendTheme } from '@chakra-ui/react';
import { Button } from './button';

export const theme = extendTheme({
  fonts: {
    body: `Roboto, 'Helvetica Neue', Helvetica, Arial, 'PingFang TC', '黑體-繁', 'Heiti TC', '蘋果儷中黑', 'Apple LiGothic Medium', '微軟正黑體', 'Microsoft JhengHei', sans-serif`,
  },
  colors: {
    brand: {
      100: '#5AB0DB',
      200: '#3397CF',
      300: '#006AA6',
      400: '#00588A',
      500: '#00324E',
    },
  },
  components: {
    Button,
  },
});
