import React from 'react';

import Icon from '../components/Icon';

const IconPlusCircle = (props) => (
  <Icon
    viewBox="0 0 32 32"
    content={
      <path d="M16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3zm0 1.5C9.649 4.5 4.5 9.649 4.5 16S9.649 27.5 16 27.5 27.5 22.351 27.5 16 22.351 4.5 16 4.5zm1 5.5v5h5v2h-5v5h-2v-5h-5v-2h5v-5h2z" />
    }
    {...props}
  />
);

IconPlusCircle.displayName = 'IconPlusCircle';

export default IconPlusCircle;
