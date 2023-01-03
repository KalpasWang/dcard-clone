import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    color: 'white',
    bg: 'brand.200',
    _hover: {
      bg: 'brand.100',
    },
    _active: {
      bg: 'brand.100',
    },
    _focus: {
      outline: 'none',
    },
  },
  variants: {
    input: {
      border: '1px solid',
      borderColor: 'brand.400',
      bg: 'brand.300',
      borderRadius: 'none',
      _hover: {
        bg: 'brand.300',
      },
      _active: {
        bg: 'brand.300',
      },
    },
  },
});
