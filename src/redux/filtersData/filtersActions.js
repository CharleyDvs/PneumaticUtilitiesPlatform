import { FilterActionTypes } from './filtersTypes';

export const AddFilterData = (key, value) => ({
    type: FilterActionTypes.ADD_FILTER_DATA,
    payload: { [key]: value }
});