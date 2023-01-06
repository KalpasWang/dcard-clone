import {
  Button,
  Container,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Select,
} from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';
import { SearchIcon, TriangleDownIcon } from '@chakra-ui/icons';

type Props = {};

function Navbar({}: Props) {
  return (
    <Container as='div' bg='brand.300' maxW='7xl' centerContent>
      <Flex color='white' px='1.25rem' justify='space-between'>
        <Flex px='1rem'>
          {/* Logo */}
          <Link
            as={NextLink}
            href='/'
            display='inline-block'
            py='10px'
            title={process.env.APP_NAME}
          >
            <Image
              src='/logo.svg'
              height='1.75rem'
              alt={process.env.APP_NAME}
            />
          </Link>
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
            <InputRightElement h='100%' my='auto'>
              <Button variant='input'>
                <SearchIcon my='auto' />
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
        <Flex px='1rem' justifyContent='end' alignItems='center'>
          <Button variant='auth'>註冊 / 登入</Button>
          <Select
            variant='unstyled'
            icon={<TriangleDownIcon />}
            defaultValue={0}
            placeholder=''
            title='更多'
            aria-label='更多'
          >
            <option color='black' value={1} title='服務條款'>
              服務條款
            </option>
            <option color='black' value={2} title='常見問題'>
              常見問題
            </option>
            <option color='black' value={3} title='回報問題'>
              回報問題
            </option>
          </Select>
          <Button>下載</Button>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Navbar;
