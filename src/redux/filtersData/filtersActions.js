import { FilterActionTypes } from './filtersTypes';

export const addFilterData = (key, value) => ({
    type: FilterActionTypes.ADD_FILTER_DATA,
    payload: { [key]: value }
});