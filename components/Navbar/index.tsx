import {
  Box,
  Button,
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
    <Flex bg='brand.300' color='white' px='1.25rem' justify='space-between'>
      <Flex px='1rem'>
        {/* Logo */}
        <Link as={NextLink} href='/' display='inline-block' py='10px'>
          <Image src='/logo.svg' height='1.75rem' alt={process.env.APP_NAME} />
        </Link>
        {/* Search */}
        <InputGroup h='100%' px='2rem'>
          <Input
            placeholder={`搜尋 ${process.env.APP_NAME}`}
            bg='brand.400'
            my='auto'
            minW='50vw'
            border='none'
            borderRadius='none'
            _placeholder={{ color: 'gray.300' }}
            _focus={{
              outline: 'none',
            }}
          />
          <InputRightElement h='100%' my='auto'>
            <Button variant='input'>
              <SearchIcon my='auto' />
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
      <Box>Right</Box>
    </Flex>
  );
}

export default Navbar;
