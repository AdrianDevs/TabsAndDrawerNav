import React from 'react';

import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

/**
 * Displays child componenets if they match the screensize
 * Screen sizes according Material-UI (https://material-ui.com/customization/breakpoints/)
 * - xs, extra-small: 0px
 * - sm, small: 600px
 * - md, medium: 960px
 * - lg, large: 1280px
 * - xl, extra-large: 1920px
 */

export enum DeviceTypes {
  Desktop = 'desktop',
  Tablet = 'tablet',
  Mobile = 'mobile',
}

type DeviceType = DeviceTypes.Desktop | DeviceTypes.Tablet | DeviceTypes.Mobile;

interface Props {
  displayIn: DeviceType[];
}

const _Responsive: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const theme = useTheme();
  const Mobile = useMediaQuery(theme.breakpoints.down('sm'));
  const Tablet = useMediaQuery(theme.breakpoints.down('md'));
  const Desktop = useMediaQuery(theme.breakpoints.up('md'));

  const renderChildrenForScreenType = renderCheck();

  function renderCheck(): boolean {
    if (Mobile) {
      return props.displayIn.indexOf(DeviceTypes.Mobile) !== -1;
    }
    if (Tablet) {
      return props.displayIn.indexOf(DeviceTypes.Tablet) !== -1;
    }
    if (Desktop) {
      return props.displayIn.indexOf(DeviceTypes.Desktop) !== -1;
    }
    return false;
  }

  return (
    <React.Fragment>
      {renderChildrenForScreenType ? props.children : null}
    </React.Fragment>
  );
};

_Responsive.displayName = 'ResponsiveContainerView';

export const Responsive = _Responsive;
