import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import './InputContainer.styles.scss';

import { addCylinderMeasurement } from '../../redux/cylindersData/cylinderActions';

const InputContainer = ({ nomenclature, inputType, chartId, addCylinderMeasurement, cylinders, resultData, boreSize }) => {
    useEffect(() => {
        if (!cylinders[chartId]) {
            addCylinderMeasurement(chartId, nomenclature, "");
        }
    });
    const handleChange = e => {
        let value = e.target.value
        if (inputType === "text") {
            value = value.toUpperCase();
        }
        addCylinderMeasurement(chartId, nomenclature, value)
    };
    return (
        <div className="input-container">
            <span><b>{nomenclature}: </b></span>
            {
                (boreSize !== "-" && chartId !== "Cilindro")
                    ? <p>{cylinders[chartId][nomenclature]} <span>{typeof (cylinders[chartId][nomenclature]) === "number" ? "mm" : ""}</span> </p>
                    : <input
                        type={inputType}
                        placeholder={`${inputType === 'number' ? 'mm' : '-'}`}
                        onChange={e => {
                            handleChange(e);
                        }}
                    />
            }
            {
                resultData[nomenclature]
                    ? resultData[nomenclature]
                    : null
            }
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addCylinderMeasurement: (cylinderName, nomenclature, currentValue) => dispatch(addCylinderMeasurement(cylinderName, nomenclature, currentValue))
});

const mapStateToProps = state => ({
    resultData: state.comparisonData.resultData,
    cylinders: state.cylinders,
    boreSize: state.comparisonData.currentBoreSize
});

export default connect(mapStateToProps, mapDispatchToProps)(InputContainer);