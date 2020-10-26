import { FilterActionTypes } from './filtersTypes';

const InitialState = {
    inletFlow: "",
    inletTemperature: "",
    ambientTemperature: ""
}

export const filterReducer = (state = InitialState, action) => {
    switch (action.payload) {
        case FilterActionTypes.ADD_FILTER_DATA:
            return {
                ...state,
                ...action.payload
            }
    }
}