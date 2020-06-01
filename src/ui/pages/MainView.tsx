import React, { useEffect, useCallback, useMemo } from 'react';
import { Route, withRouter, useLocation } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import { Routes } from '../../core/configuration';

import { Responsive, DeviceTypes } from 'ui/helpers/Responsive';
import { NavDrawer } from './NavDrawer';
import { HomeView } from './HomeView';
import { ProductView } from './ProductView';
import { SoftwareView } from './SoftwareView';
import { HobbiesView } from './HobbiesView';
import { NavTabs } from './NavTabs';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbarOffset: theme.mixins.toolbar,
    boxRoot: {
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',
      padding: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(2),
      },
    },
  })
);

const _MainView: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    console.group('Main start');
    console.log(`location path: ${location.pathname}`);
    console.log(
      `location index: ${Routes.getRouteFromPath(location.pathname).index}`
    );
    return () => {
      console.log('Main end');
    };
  });

  return (
    <div>
      <Responsive displayIn={[DeviceTypes.Mobile]}>
        <NavDrawer routes={Routes.getRoutes()} />
      </Responsive>
      <Responsive displayIn={[DeviceTypes.Tablet, DeviceTypes.Desktop]}>
        <NavTabs routes={Routes.getRoutes()} />
      </Responsive>
      {/* Display content is below toolbar */}
      <div className={classes.toolbarOffset} />
      <Box className={classes.boxRoot}>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/product" component={ProductView} />
        <Route exact path="/software" component={SoftwareView} />
        <Route exact path="/hobbies" component={HobbiesView} />
      </Box>
    </div>
  );
};

_MainView.displayName = 'MainView';

export const MainView = withRouter(React.memo(_MainView));
