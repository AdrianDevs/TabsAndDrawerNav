import React from 'react';
import { Typography } from '@material-ui/core';

export const HobbiesView: React.FC = (): JSX.Element => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {`Hobbies`}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`All about hobbies`}
      </Typography>
    </div>
  );
};
