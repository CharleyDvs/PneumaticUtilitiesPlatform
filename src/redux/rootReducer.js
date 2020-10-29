import { combineReducers } from 'redux';

import { cylinderReducer } from './cylindersData/cylinderReducer';
import { comparisonDataReducer } from './comparisonData/comparisonDataReducer';
import { filterReducer } from './filtersData/filtersReducers';

const rootReducer = combineReducers({
    cylinders: cylinderReducer,
    comparisonData: comparisonDataReducer,
    filterData: filterReducer
});

export default rootReducer;