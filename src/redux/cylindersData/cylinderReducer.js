import { CYLINDER_ACTION_TYPES } from './cylinderTypes';
import { measureAdjustfunctions } from './utils';

const InitialState = {
}

export const cylinderReducer = (state = InitialState, action) => {
    switch (action.type) {
        case CYLINDER_ACTION_TYPES.ADD_CYLINDER_DATA:
            {
                const { cylinderName, nomenclature, value } = action.payload;
                return {
                    ...state,
                    [cylinderName]: {
                        ...state[cylinderName],
                        [nomenclature]: value
                    }
                };
            }
        case CYLINDER_ACTION_TYPES.SET_CYLINDER:
            {
                const { cylinderName, obj } = action.payload;
                const adjustedMeasures = measureAdjustfunctions[cylinderName](obj); //When an object with the cylinder dimensions is received, the value is passed to a function that changes the final measures
                return {
                    ...state,
                    [cylinderName]: {
                        ...adjustedMeasures
                    }
                };
            }
        default:
            return state
    }
}