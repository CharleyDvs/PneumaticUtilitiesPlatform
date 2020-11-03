import React from 'react';
import { connect } from 'react-redux';

import './CylinderDataChart.styles.scss';

import InputContainer from '../InputContainer/InputContainer.component';

import { cylinderData } from '../../assets/appData/cylinderData'; //Cylinder data with all the info of the models
import { measureAdjustfunctions } from '../../assets/appData/measureAdjustFunctions'; //Fuctions to adjust cylinder dimensions under special conditions ex.: when you have a longer stroke than usual
import { addBoreSize, resetResult } from '../../redux/comparisonData/comparisonDataActions';
import { setCylinder, addCylinderMeasurement } from '../../redux/cylindersData/cylinderActions';

const CylinderDataChart = ({ chartId, chartSeries, addBoreSize, boreSize, setCylinder, resetResult, addCylinderMeasurement, cylinders }) => {
    const { nomenclature, threadNomenclature, boreSizes, measurements } = cylinderData[chartSeries];
    return (
        <div className="data-chart-container">
            <div className="title-container">
                <h1>{chartId}</h1>
            </div>
            <div className="image-container"></div>
            <div className="data-chart">
                <h2>Dimensiones:</h2>
                <div className="input-container">
                    <span>Émbolo: </span>
                    <select
                        name="boreSize"
                        // When a change in the value of the bore size is detected, triggers a function that sends all the cylinder data to another function that can change the current cylinder dimension according to the info
                        onChange={
                            e => {
                                if (chartId !== "Cilindro") {
                                    let boreNumber = e.target.value
                                    if (boreNumber !== "-") {
                                        boreNumber = Math.abs(e.target.value)
                                        const totalMeasurements = {
                                            ...measurements[boreNumber],
                                            stroke: cylinders[chartId].stroke
                                        }
                                        setCylinder(chartId, totalMeasurements) //this is made in order to set dimensions according to the data and preserving the stroke value
                                        measureAdjustfunctions[chartId](cylinders[chartId], { boreSize: e.target.value })
                                    } else {
                                        let cylinderInit = { stroke: cylinders[chartId].stroke };
                                        nomenclature.forEach(item => {
                                            cylinderInit[item] = ""
                                        });
                                        threadNomenclature.forEach(item => {
                                            cylinderInit[item] = ""
                                        });
                                        setCylinder(chartId, cylinderInit); //this cleans all the cylinder measurements but preserves the current stroke value
                                    }
                                    addBoreSize(boreNumber);
                                    resetResult();
                                }
                            }
                        }
                    >
                        <option>-</option>
                        {
                            boreSizes.map(item =>
                                <option key={chartId + item} value={item}>{item}</option>
                            )
                        }
                    </select>
                </div>
                <div className="input-container">
                    <span>Carrera: </span>
                    <input type="number" onChange={e => {
                        addCylinderMeasurement(chartId, 'stroke', e.target.value)
                        if (chartId !== "Cilindro" && boreSize !== "-") {
                            measureAdjustfunctions[chartId](cylinders[chartId], { stroke: e.target.value, boreSize })
                        } // Whenever the stroke value changes, triggers a function that sends all the current cylinder data to another function that can make changes if needed. This only happens if there is a bore size assigned
                    }} />
                </div>
                {
                    nomenclature.map(item =>
                        <InputContainer
                            key={item + chartId}
                            nomenclature={item}
                            inputType="number"
                            chartId={chartId}
                        />
                    )
                }
                {
                    threadNomenclature.map(item =>
                        <InputContainer
                            key={item + chartId}
                            nomenclature={item}
                            inputType="text"
                            chartId={chartId}
                        />
                    )
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    boreSize: state.comparisonData.currentBoreSize,
    cylinders: state.cylinders
});

const mapDispatchToProps = dispatch => ({
    addBoreSize: num => dispatch(addBoreSize(num)),
    setCylinder: (cylinderName, obj) => dispatch(setCylinder(cylinderName, obj)),
    resetResult: () => dispatch(resetResult()),
    addCylinderMeasurement: (cylinderName, nomenclature, value) => dispatch(addCylinderMeasurement(cylinderName, nomenclature, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(CylinderDataChart);