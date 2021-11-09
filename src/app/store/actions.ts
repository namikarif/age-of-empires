import {Action, createAction} from '@ngrx/store';
import {UnitsDto} from '../models/units.dto';

export const getUnitDetail = createAction('[UNITS] Get Detail', (unit: UnitsDto) => ({unit}));

// export class denemeAction implements Action {
//   readonly type = 'deneme';
//
//   constructor(payload) {
//   }
// }
