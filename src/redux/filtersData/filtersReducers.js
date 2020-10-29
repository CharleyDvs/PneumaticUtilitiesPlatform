import { FilterActionTypes } from './filtersTypes';

const InitialState = {
    compressorType: "reciprocating",
    inletFlow: .75,
    flowRateUnit: "hp",
    inletTemperature: 30,
    ambientTemperature: 25,
    airPressure: .2
}

export const filterReducer = (state = InitialState, action) => {
    switch (action.type) {
        case FilterActionTypes.ADD_FILTER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}