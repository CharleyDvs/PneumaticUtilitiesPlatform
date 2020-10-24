import { CYLINDER_ACTION_TYPES } from './cylinderTypes';

export const addCylinderMeasurement = (cylinderName, nomenclature, value) => ({
    type: CYLINDER_ACTION_TYPES.ADD_CYLINDER_DATA,
    payload: { cylinderName, nomenclature, value }
});

export const setCylinder = (cylinderName, obj) => ({
    type: CYLINDER_ACTION_TYPES.SET_CYLINDER,
    payload: { cylinderName, obj }
});