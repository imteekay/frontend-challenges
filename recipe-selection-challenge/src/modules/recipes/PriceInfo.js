import React, { useRef, useState } from 'react';

import IconButton from '../../components/IconButton';
import IconInfoCircle from '../../icons/IconInfoCircle';
import { TooltipContainer } from '../../components/Tooltip';
import PriceSummaryTooltip from './PriceSummaryTooltip';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const PriceInfo = () => {
  const ref = useRef();
  const [isTooltipOpen, setTooltipOpen] = useState(false);
  const onClickOpenTooltip = () => setTooltipOpen(!isTooltipOpen);

  useOnClickOutside(ref, () => setTooltipOpen(false));

  return (
    <TooltipContainer ref={ref}>
      <IconButton onClick={onClickOpenTooltip} aria-label="Click to open price summary">
        <IconInfoCircle size="20" />
      </IconButton>
      {isTooltipOpen ? <PriceSummaryTooltip /> : null}
    </TooltipContainer>
  );
};

export default PriceInfo;
