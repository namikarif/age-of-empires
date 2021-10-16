import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromReducer from './reducer';
import {UnitsDto} from '../models/units.dto';

export const selectUnitDetailState = createFeatureSelector<{unit: UnitsDto}>(fromReducer.featureKey);

export const selectUnitDetail = createSelector(selectUnitDetailState, (state: {unit: UnitsDto}) => state);
