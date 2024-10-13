import type React from 'react';

import { CELL_WIDTH } from '../../shared/consts';
import type { CellProps } from '../../shared/types';
import classes from './Cell.module.scss';

export const Cell: React.FC<CellProps> = ({ color }) => {
  return (
    <div
      className={classes.cell}
      style={{ width: `${String(CELL_WIDTH)}px`, backgroundColor: color }}
    />
  );
};
