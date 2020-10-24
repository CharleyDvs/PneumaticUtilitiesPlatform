import { CYLINDER_ACTION_TYPES } from './cylinderTypes';

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
                return {
                    ...state,
                    [cylinderName]: {
                        ...obj
                    }
                };
            }
        default:
            return state
    }
}