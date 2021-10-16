import {Action, createReducer, on} from '@ngrx/store';
import * as UnitActions from './actions';
import {UnitsDto} from '../models/units.dto';

export const featureKey = "unitDetailState";

export const initialState: UnitsDto = new UnitsDto();

export const unitDetailReducer = createReducer(
  initialState,
  on(UnitActions.getUnitDetail, (state: UnitsDto, {unit}) => ({...state, unit})));

export function reducer(state: UnitsDto | undefined, action: Action): any {
  return unitDetailReducer(state, action);
}
