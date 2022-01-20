/**
 * For the purpose of this challenge the implementation
 * of Tooltip is simplified to only work for a bottom-right alignment.
 */
import PropTypes from 'prop-types';
import Box from '../components/Box';
import styled from 'styled-components';
import css from '@styled-system/css';

const arrow = {
  'box-shadow': '-1.41px 1.41px 1px 0 rgba(0,0,0,0.01), -3.66px 3.66px 8px 0 rgba(0,0,0,0.04)',
  right: '4px',
  'margin-right': '-8px',
  'transform-origin': '0 0',
  transform: 'rotate(-225deg)',
  top: '0',
};

const tooltipPosition = { top: '100%' };

const tooltipAlign = { right: 0 };

const Tooltip = styled(Box)`
  ${css({
    marginTop: 'xs',
    display: 'inline',
    position: 'absolute',
    boxShadow: 'lg',
    backgroundColor: 'white',
    ...tooltipPosition,
    ...tooltipAlign,
    '::after': {
      content: "''",
      position: 'absolute',
      width: 0,
      height: 0,
      borderWidth: '4px',
      borderStyle: 'solid',
      borderColor: 'transparent transparent white white',
      ...arrow,
    },
  })}
`;

Tooltip.propTypes = {
  children: PropTypes.any.isRequired,
};

export const TooltipContainer = styled.div`
  position: relative;
  z-index: 100;
`;

export default Tooltip;
