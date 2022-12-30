import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';

type Props = {};

function Navbar({}: Props) {
  return (
    <Flex bg='brand-blue' color='white' p='0 1.25rem' justify='space-between'>
      <Box px='1rem'>
        <Box as='a'>
          <Image src='/logo.svg' alt='Logo' />
        </Box>
      </Box>
      <Box>Right</Box>
    </Flex>
  );
}

export default Navbar;
