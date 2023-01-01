import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';
import { SearchIcon } from '@chakra-ui/icons';

type Props = {};

function Navbar({}: Props) {
  return (
    <Flex bg='brand.blue' color='white' px='1.25rem' justify='space-between'>
      <Flex px='1rem'>
        {/* Logo */}
        <Link as={NextLink} href='/' display='inline-block' py='10px'>
          <Image src='/logo.svg' alt={process.env.APP_NAME} height='1.75rem' />
        </Link>
        {/* Search */}
        <InputGroup h='100%' px='2rem'>
          <Input
            placeholder={`搜尋 ${process.env.APP_NAME}`}
            bg='blue.700'
            fontSize='0.75rem'
            py='10px'
            my='auto'
            minW='50vw'
            border='none'
            borderRadius='none'
            _placeholder={{ color: 'gray.300' }}
            _focus={{
              outline: 'none',
            }}
          />
          <InputRightElement pointerEvents='none' color='white'>
            <SearchIcon mb={2} />
          </InputRightElement>
        </InputGroup>
      </Flex>
      <Box>Right</Box>
    </Flex>
  );
}

export default Navbar;
