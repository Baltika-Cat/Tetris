import type React from 'react';

import { CELL_WIDTH } from '../shared/consts';
import type { FieldProps } from '../shared/types';
import { Cell } from './cell/Cell';

export const Field: React.FC<FieldProps> = ({ fieldProps }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${String(fieldProps[0].length)}, ${String(CELL_WIDTH)}px)`,
      }}
    >
      {fieldProps.map((row, rowIndex) =>
        row.map((color, columnIndex) => {
          return (
            <Cell
              key={`${String(rowIndex)}-${String(columnIndex)}`}
              color={color}
            />
          );
        })
      )}
    </div>
  );
};
