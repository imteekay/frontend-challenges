import styled from 'styled-components';

const IconButton = styled.button`
  cursor: pointer;
  padding: 0;
  background-color: transparent;
  color: inherit;
  border: none;
  display: block;
  &:hover {
    background-color: transparent;
    color: inherit;
  }
  & > svg {
    display: flex;
  }
`;

export default IconButton;
