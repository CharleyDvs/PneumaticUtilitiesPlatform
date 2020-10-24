const nomenclature = ["zz", "mm", "kk"];
const valueArray1 = [5, 10, 5];
const valueArray2 = [20, 15, 5];

const cylinderMeasurements = (nomenclatureArray, valueArray) => {
    let resultObject = {};
    nomenclatureArray.forEach((item, index) => {
        resultObject = {
            ...resultObject,
            [item]: valueArray[index]
        }
    })
    return (resultObject);
}

const cylinderComparation = (nomenclatureArray, cylinderA, cylinderB) => {
    return (nomenclatureArray.map(item => cylinderA[item] - cylinderB[item]))
}

const userCylinder = cylinderMeasurements(nomenclature, valueArray1);
const currentCylinder = cylinderMeasurements(nomenclature, valueArray2);
const resultArray = (cylinderComparation(nomenclature, userCylinder, currentCylinder));

console.log(userCylinder, currentCylinder);
console.log(resultArray);