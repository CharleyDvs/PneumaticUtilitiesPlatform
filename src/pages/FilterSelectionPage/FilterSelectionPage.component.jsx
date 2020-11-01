import React from 'react';
import { connect } from 'react-redux';

import './FilterSelectionPage.styles.scss';

import PageTitle from '../../components/PageTitle/PageTitle.component';
import FiltersResultContainer from '../../components/FilterResultsContainer/FiltersResultContainer.component';

import { addFilterData } from '../../redux/filtersData/filtersActions';
import { flowRateValues, inletTemperatureValues, ambientTemperatureValues, airPressureValues } from '../../assets/appData/filterInputValues';
import { filterCalculator } from '../../assets/appData/filterCalculator';

const FilterSelectionPage = ({ addFilterData, filterData }) => {
    const { inletFlow, flowRateUnit, inletTemperature, ambientTemperature, airPressure } = filterData;
    return (
        <main className="filter-selection-page">
            <PageTitle title="Selección de tren de filtraje" />
            <div className="form-container">
                <div className="filter-input-container">
                    <select name="compressorType" id="" onChange={e => {
                        addFilterData(e.target.name, e.target.value)
                    }}>
                        <option value="reciprocating">Pistón</option>
                        <option value="screw">Tornillo</option>
                    </select>
                </div>
                <div className="filter-input-container">
                    <select name="inletFlow" onChange={e => {
                        addFilterData(e.target.name, flowRateValues.kw[e.target.value]);
                    }}>
                        {
                            flowRateValues[flowRateUnit].map((item, index) => (
                                <option key={item} value={index}>{item}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="filter-input-container">
                    <select name="flowRateUnit" id="" onChange={e => {
                        addFilterData(e.target.name, e.target.value);
                        addFilterData("inletFlow", flowRateValues.kw[0])
                    }}>
                        <option value="hp">Hp</option>
                        <option value="kw">Kw</option>
                        <option value="lmin">L/min</option>
                        <option value="m3min">m3/min</option>
                        <option value="m3h">m3/h</option>
                        <option value="cfm">cfm</option>
                    </select>
                </div>
                <div className="filter-input-container">
                    <select name="ambientTemperature" id="" onChange={e => {
                        addFilterData(e.target.name, e.target.value)
                    }}>
                        {
                            ambientTemperatureValues.map(value => (
                                <option key={value} value={value}>{value}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="filter-input-container">
                    <select name="inletTemperature" id="" onChange={e => {
                        addFilterData(e.target.name, e.target.value)
                    }}>
                        {
                            inletTemperatureValues.map(value => (
                                <option key={value} value={value}>{value}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="filter-input-container">
                    <select name="airPressure" id="" onChange={e => {
                        addFilterData(e.target.name, e.target.value)
                    }}>
                        {
                            airPressureValues.map(value => (
                                <option key={value} value={value}>{value}</option>
                            ))
                        }
                    </select>
                </div>
                <button
                    onClick={() => {
                        const correctedFlowRate = filterCalculator(inletFlow, airPressure, inletTemperature, ambientTemperature);
                        addFilterData("correctedFlowRate", correctedFlowRate);
                    }}
                >Calcular</button>
            </div>
            <FiltersResultContainer />
        </main>
    );
}

const mapDispatchToProps = dispatch => ({
    addFilterData: (key, value) => dispatch(addFilterData(key, value))
});

const mapStateToProps = store => ({
    filterData: store.filterData
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelectionPage);