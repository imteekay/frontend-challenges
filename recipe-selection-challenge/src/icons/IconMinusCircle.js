import React from 'react';

import Icon from '../components/Icon';

const IconMinusCircle = (props) => (
  <Icon
    viewBox="0 0 32 32"
    content={
      <path d="M16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3zm0 1.5C9.649 4.5 4.5 9.649 4.5 16S9.649 27.5 16 27.5 27.5 22.351 27.5 16 22.351 4.5 16 4.5zM22 15v2H10v-2h12z" />
    }
    {...props}
  />
);

IconMinusCircle.displayName = 'IconMinusCircle';

export default IconMinusCircle;
