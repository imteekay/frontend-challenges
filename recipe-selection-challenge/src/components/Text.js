import styled from 'styled-components';
import { typography, space, color } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Text = styled.div`
  ${typography}
  ${space}
  ${color}
`;

Text.propTypes = {
  ...propTypes.typography,
  ...propTypes.space,
  ...propTypes.color,
};

export default Text;
