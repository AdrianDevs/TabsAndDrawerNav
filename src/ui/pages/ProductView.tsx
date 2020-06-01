import React from 'react';
import { Typography } from '@material-ui/core';

export const ProductView: React.FC = (): JSX.Element => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {`Product`}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`All about product`}
      </Typography>
    </div>
  );
};
