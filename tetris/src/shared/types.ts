export interface Position {
  x: number;
  y: number;
}

export interface Shape {
  position: Position[];
  color: string;
}

export interface CellProps {
  color: string;
}

export interface FieldProps {
  fieldProps: string[][];
}
