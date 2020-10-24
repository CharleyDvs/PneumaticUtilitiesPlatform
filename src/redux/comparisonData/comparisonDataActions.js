import { COMPARISON_DATA_ACTION_TYPES } from './comparisonDataTypes';

export const addTolerance = num => ({
    type: COMPARISON_DATA_ACTION_TYPES.ADD_TOLERANCE,
    payload: num
});

export const addBoreSize = num => ({
    type: COMPARISON_DATA_ACTION_TYPES.ADD_BORE_SIZE,
    payload: num
});

export const addResult = obj => ({
    type: COMPARISON_DATA_ACTION_TYPES.ADD_RESULT,
    payload: obj
});

export const resetResult = () => ({
    type: COMPARISON_DATA_ACTION_TYPES.RESET_RESULT
});