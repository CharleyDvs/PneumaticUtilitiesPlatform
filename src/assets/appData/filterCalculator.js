export const filterCalculator = (flowRate, airPressure, inletTemperature, ambientTemperature) => {
    const inletFlowValues = {
        .75: .12,
        1.5: .235,
        2.2: .37,
        3.7: .57,
        5.5: .82,
        7.5: 1.32,
        11: 1.82,
        15: 3.1,
        22: 4.3,
        37: 6.1,
        55: 9.8,
        75: 12.4,
        120: 23,
        150: 30,
        190: 38,
        240: 50,
        370: 65
    }
    const correctionFactors = {
        inletAirTemperature: {
            37: {
                30: 1.3,
                35: 1,
                40: .82,
                45: .68,
                50: .57
            },
            240: {
                30: 1.35,
                35: 1.25,
                40: 1,
                45: .8,
                50: .6
            },
            370: {
                30: 1.25,
                35: 1,
                40: .83,
                45: .7,
                50: .6
            }
        },
        ambientTemperature: {
            75: {
                25: 1.14,
                30: 1.04,
                32: 1,
                35: .96,
                40: .9
            },
            240: {
                25: 1.1,
                30: 1.05,
                32: 1,
                35: .95,
                40: .9
            }
        },
        airPressure: {
            75: {
                .2: .62,
                .3: .72,
                .4: .81,
                .5: .88,
                .6: .95,
                .7: 1,
                .8: 1.06,
                .9: 1.11,
                1: 1.16
            },
            150: {
                .2: .84,
                .3: .87,
                .4: .9,
                .5: .93,
                .6: .96,
                .7: 1,
                .8: 1.03,
                .9: 1.06,
                1: 1.09
            },
            370: {
                .2: .68,
                .3: .77,
                .4: .84,
                .5: .90,
                .6: .95,
                .7: 1,
                .8: 1.03,
                .9: 1.06,
                1: 1.08
            }
        }
    }
    const initialInletFlow = inletFlowValues[flowRate]
    const correctionFactorValues = {}
    const correctionFactorKeys = Object.keys(correctionFactors);

    correctionFactorKeys.forEach(key => {
        const capacityValues = Object.keys(correctionFactors[key]).reverse();
        capacityValues.forEach(value => {
            if (flowRate <= value) {
                correctionFactorValues[key] = correctionFactors[key][value]
            }
        })
    });

    let calculatedFactor = correctionFactorValues.inletAirTemperature[inletTemperature] * correctionFactorValues.ambientTemperature[ambientTemperature] * correctionFactorValues.airPressure[airPressure];

    if (calculatedFactor > 1.5) {
        calculatedFactor = 1.5
    }

    console.log(correctionFactorValues);
    const inletFlowValuesArray = Object.keys(inletFlowValues).reverse();
    let correctedFlow;

    inletFlowValuesArray.forEach(value => {
        if ((initialInletFlow / calculatedFactor) < inletFlowValues[value]) {
            correctedFlow = inletFlowValues[value];
        }
    });
    return (correctedFlow);
}

// 2.2, .5, 40, 35