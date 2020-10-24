import { COMPARISON_DATA_ACTION_TYPES } from './comparisonDataTypes';

const InitialState = {
    tolerance: 0,
    resultData: {},
    currentBoreSize: "-"
}

export const comparisonDataReducer = (state = InitialState, action) => {
    switch (action.type) {
        case COMPARISON_DATA_ACTION_TYPES.ADD_TOLERANCE:
            return {
                ...state,
                tolerance: action.payload
            };
        case COMPARISON_DATA_ACTION_TYPES.ADD_BORE_SIZE:
            return {
                ...state,
                currentBoreSize: action.payload
            }
        case COMPARISON_DATA_ACTION_TYPES.ADD_RESULT:
            return {
                ...state,
                resultData: { ...action.payload }
            };
        case COMPARISON_DATA_ACTION_TYPES.RESET_RESULT:
            return {
                ...state,
                resultData: {}
            }
        default:
            return state;
    }
}