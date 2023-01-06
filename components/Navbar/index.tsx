import {
  Button,
  Container,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';
import { SearchIcon, TriangleDownIcon } from '@chakra-ui/icons';

type Props = {};

function Navbar({}: Props) {
  return (
    <Box bg='brand.300'>
      <Container maxW='7xl' centerContent>
        <Flex width='100%' color='white' px='1.25rem' justify='space-between'>
          <Flex px='1rem'>
            {/* Logo */}
            <NextLink href='/' passHref>
              <Link
                display='inline-block'
                py='10px'
                title={process.env.APP_NAME}
              >
                <Image src='/logo.svg' height='1.75rem' />
              </Link>
            </NextLink>
            {/* Search */}
            <InputGroup h='100%' px='2rem'>
              <Input
                placeholder={`搜尋 ${process.env.APP_NAME}`}
                bg='brand.400'
                my='auto'
                minW='40vw'
                border='none'
                borderRadius='none'
                _placeholder={{ color: 'gray.300' }}
                _focus={{
                  outline: 'none',
                }}
              />
              <InputRightElement h='100%' right='-5px' zIndex='10'>
                <Button
                  colorScheme='brand.200'
                  border='2px solid'
                  borderColor='brand.400'
                  borderLeftColor='none'
                  borderRadius='none'
                  my='auto'
                  outline='none'
                >
                  <SearchIcon my='auto' />
                </Button>
              </InputRightElement>
            </InputGroup>
          </Flex>
          {/* Right Content */}
          <Flex px='1rem' justifyContent='center' alignItems='center'>
            <Button colorScheme='brand.300'>註冊 / 登入</Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Navbar;
