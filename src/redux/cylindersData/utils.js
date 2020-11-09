import { cylinderData } from '../../assets/appData/cylinderData'

export const measureAdjustfunctions = {
    CG1: (obj, model) => {
        let measures = {
            ...obj,
        }
        const { longStrokeMeasurements } = cylinderData[model];
        if (obj.stroke && obj.boreSize) {
            if (Math.abs(obj.boreSize) === 20 && Math.abs(obj.stroke) > 200) {
                Object.keys(longStrokeMeasurements[obj.boreSize]).forEach(item => {
                    measures[item] = longStrokeMeasurements[obj.boreSize][item]
                })
            } else if (Math.abs(obj.boreSize) > 20 && Math.abs(obj.stroke) > 300) {
                Object.keys(longStrokeMeasurements[obj.boreSize]).forEach(item => {
                    measures[item] = longStrokeMeasurements[obj.boreSize][item]
                })
            }
        }
        return measures;
    }
}