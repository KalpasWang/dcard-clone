import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    _focus: {
      outline: 'none',
    },
  },
  variants: {
    primary: {
      color: 'white',
      bg: 'brand.200',
      px: '0.875rem',
      _hover: {
        bg: 'brand.100',
      },
      _active: {
        bg: 'brand.100',
      },
    },
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
    auth: {
      bg: 'transparent',
      _hover: {
        bg: 'transparent',
      },
      _active: {
        bg: 'transparent',
      },
    },
  },
  defaultProps: {
    variant: 'primary',
  },
});
