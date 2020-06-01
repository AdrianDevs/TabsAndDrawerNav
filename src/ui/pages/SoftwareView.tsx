import React from 'react';
import { Typography } from '@material-ui/core';

export const SoftwareView: React.FC = (): JSX.Element => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {`Software`}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`All about software`}
      </Typography>
    </div>
  );
};
