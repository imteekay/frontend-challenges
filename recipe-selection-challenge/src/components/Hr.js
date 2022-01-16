import styled from 'styled-components';
import css from '@styled-system/css';

const Hr = styled.hr`
  ${css({
    borderTopColor: 'neutral_400',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    marginBottom: '8px',
  })}
`;

Hr.displayName = 'Hr';

export default Hr;
