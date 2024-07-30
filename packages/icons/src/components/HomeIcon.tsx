import React, { memo } from 'react';

import Icon from '../icon';
import { IconProps } from '../types';

const HomeIcon = memo<IconProps>(props => (
  <Icon type="fill" {...props}>
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 38.0014V28.0014H28V38.0014C28 39.1014 28.9 40.0014 30 40.0014H36C37.1 40.0014 38 39.1014 38 38.0014V24.0014H41.4C42.32 24.0014 42.76 22.8614 42.06 22.2614L25.34 7.20141C24.58 6.52141 23.42 6.52141 22.66 7.20141L5.93995 22.2614C5.25995 22.8614 5.67995 24.0014 6.59995 24.0014H9.99995V38.0014C9.99995 39.1014 10.9 40.0014 12 40.0014H18C19.1 40.0014 20 39.1014 20 38.0014Z"
        fill={props.fill}
      />
    </svg>
  </Icon>
));

HomeIcon.displayName = 'HomeIcon';

export default HomeIcon;
