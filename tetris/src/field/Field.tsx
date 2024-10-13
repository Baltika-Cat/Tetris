import type React from 'react';

import classes from './Field.module.scss';
import { COLUMN_COUNT, ROW_COUNT } from './field-size';

export const Field: React.FC = () => {
  return (
    <div
      className={classes.field}
      style={{ gridTemplateRows: ROW_COUNT, gridTemplateColumns: COLUMN_COUNT }}
    />
  );
};
