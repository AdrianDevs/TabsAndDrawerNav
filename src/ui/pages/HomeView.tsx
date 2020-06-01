import React from 'react';
import { Typography } from '@material-ui/core';

export const HomeView: React.FC = (): JSX.Element => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {`Home`}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`All about Me`}
      </Typography>
    </div>
  );
};
