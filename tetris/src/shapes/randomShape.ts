import type { Position } from '../shared/types/Position';
import { iShape } from './iShape';
import { lShape } from './lShape';
import { oShape } from './oShape';
import { tShape } from './tShape';
import { zShape } from './zShape';

const shapes = [oShape, iShape, tShape, lShape, zShape];

export const randomShape = (): Position[] => {
  const shapeNumber = Math.round(Math.random() * (shapes.length - 1));
  // console.log(shapes[shapeNumber], shapeNumber);
  return shapes[shapeNumber];
};

randomShape();
