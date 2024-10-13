import type React from 'react';

import { Field } from './field/Field';
import { COLUMN_COUNT, ROW_COUNT } from './shared/consts';

const startedField = Array.from({ length: ROW_COUNT }, () => {
  return Array(COLUMN_COUNT).fill('white') as string[];
});
for (let i = 0; i < startedField.length; i += 1) {
  console.log(i);
  for (let j = 0; j < startedField[i].length; j += 1) {
    console.log(startedField[i][j]);
  }
}

export const App: React.FC = () => {
  return (
    <div>
      <Field fieldProps={startedField} />
    </div>
  );
};
