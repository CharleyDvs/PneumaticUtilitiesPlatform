import { addCylinderMeasurement } from '../../redux/cylindersData/cylinderActions';

export const measureAdjustfunctions = {
    CG1: (obj, wildcard) => {
        const measures = {
            ...obj,
            ...wildcard
        }
        console.log(measures)
    }
}