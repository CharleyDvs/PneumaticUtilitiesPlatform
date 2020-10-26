import React from 'react';
import { connect } from 'react-redux';

import './CylinderDataChart.styles.scss';

import InputContainer from '../InputContainer/InputContainer.component';

import { cylinderData } from './CylinderData';
import { addBoreSize, resetResult } from '../../redux/comparisonData/comparisonDataActions';
import { setCylinder } from '../../redux/cylindersData/cylinderActions';

const CylinderDataChart = ({ chartId, chartSeries, addBoreSize, setCylinder, resetResult }) => {
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
                        onChange={
                            e => {
                                if (chartId !== "Cilindro") {
                                    let boreNumber = e.target.value
                                    if (boreNumber !== "-") {
                                        boreNumber = Math.abs(e.target.value)
                                        setCylinder(chartId, measurements[boreNumber])
                                    } else {
                                        let cylinderInit = {};
                                        nomenclature.forEach(item => {
                                            cylinderInit[item] = ""
                                        });
                                        threadNomenclature.forEach(item => {
                                            cylinderInit[item] = ""
                                        });
                                        setCylinder(chartId, cylinderInit);
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
                    <input type="number" />
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
    boreSize: state.comparisonData.currentBoreSize
});

const mapDispatchToProps = dispatch => ({
    addBoreSize: num => dispatch(addBoreSize(num)),
    setCylinder: (cylinderName, obj) => dispatch(setCylinder(cylinderName, obj)),
    resetResult: () => dispatch(resetResult())
});

export default connect(mapStateToProps, mapDispatchToProps)(CylinderDataChart);