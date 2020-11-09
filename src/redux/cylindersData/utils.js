import { cylinderData } from '../../assets/appData/cylinderData'


// These functions modify the measures for the cylinder according to each cylinder series data, each function receives two parameters: an object with the original dimensions and the name of the current cylinder series. With that name the data for the modified measures is addresed form the cylinder data. The modified measures object is then combined with the original measures and finally a new object is return that contains the final measures 
export const measureAdjustfunctions = {
    CG1: (obj, model) => {
        let measures = {
            ...obj,
        } // The original object is deconstructed to a new object
        const { longStrokeMeasurements } = cylinderData[model];
        if (obj.stroke && obj.boreSize) {                      // An if state is implemented to ensure that the stroke and bore size info exists in the object. This verification is also made directly in the data chart component
            if (Math.abs(obj.boreSize) === 20 && Math.abs(obj.stroke) > 200) {
                Object.keys(longStrokeMeasurements[obj.boreSize]).forEach(item => {
                    measures[item] = longStrokeMeasurements[obj.boreSize][item]
                })
            } else if (Math.abs(obj.boreSize) > 20 && Math.abs(obj.stroke) > 300) {
                Object.keys(longStrokeMeasurements[obj.boreSize]).forEach(item => {
                    measures[item] = longStrokeMeasurements[obj.boreSize][item]
                })
            } // If the bore size and the stroke are presents then the data goes to another if statement, these conditions are particular for each cylinder series
        }
        return measures;
    }
}