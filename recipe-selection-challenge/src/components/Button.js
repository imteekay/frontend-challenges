import styled from 'styled-components';
import { layout, space, variant } from 'styled-system';
import css from '@styled-system/css';

const variants = {
  primary: {
    color: 'white',
    borderWidth: 'sm',
    borderStyle: 'solid',
    borderColor: 'primary_600',
    backgroundColor: 'primary_600',
    boxShadow: 'sm',
    ':hover:enabled': {
      backgroundColor: 'primary_700',
      borderColor: 'primary_700',
    },
    ':active:enabled': {
      backgroundColor: 'primary_800',
      borderColor: 'primary_800',
    },
  },
  secondary: {
    color: 'primary_600',
    borderWidth: 'sm',
    borderStyle: 'solid',
    borderColor: 'primary_600',
    backgroundColor: 'white',
    boxShadow: 'sm',
    ':hover:enabled': {
      backgroundColor: 'primary_200',
      borderColor: 'primary_700',
    },
    ':active:enabled': {
      backgroundColor: 'primary_300',
      borderColor: 'primary_800',
    },
  },
};

const Button = styled.button`
  ${variant({
    variants,
  })}
  ${css({
    padding: '0 24px',
    lineHeight: '40px',
    textDecoration: 'none',
    textAlign: 'center',
    borderRadius: 'md',
    cursor: 'pointer',
    display: 'block',
    textTransform: 'uppercase',
    outline: 'none',
    width: 'fit-content',
  })}
  ${layout}
  ${space}
  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

export default Button;
