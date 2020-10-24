import { combineReducers } from 'redux';

import { cylinderReducer } from './cylindersData/cylinderReducer';
import { comparisonDataReducer } from './comparisonData/comparisonDataReducer';

const rootReducer = combineReducers({
    cylinders: cylinderReducer,
    comparisonData: comparisonDataReducer
});

export default rootReducer;