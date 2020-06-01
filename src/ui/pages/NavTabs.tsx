import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { RouteProps, Route, Routes } from '../../core/configuration';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const NavTabs: React.FC<RouteProps> = (props): JSX.Element => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setValue(Routes.getRouteFromPath(location.pathname).index);
  }, [location]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleNavItemClicked = (index: number, route: Route) => () => {
    if (location.pathname !== route.path) {
      history.push(route.path);
    }
  };

  const list = () => (
    <Tabs value={value} onChange={handleChange} centered>
      {props.routes.map((route, index) => (
        <Tab
          key={index + ' - ' + route}
          onClick={handleNavItemClicked(index, route)}
          label={props.routes[index].title}
        />
      ))}
    </Tabs>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed">{list()}</AppBar>
    </div>
  );
};
