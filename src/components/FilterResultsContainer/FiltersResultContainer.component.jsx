import React from 'react';
import { connect } from 'react-redux';

import './FiltersResultContainer.styles.scss';

import FilterCard from '../../components/FilterCard/FilterCard.component';

import { addFilterData } from '../../redux/filtersData/filtersActions';
import { filterModels } from '../../assets/appData/filterModels';
import { flowRateValues } from '../../assets/appData/filterInputValues';

const FiltersResultContainer = ({ correctedFlowRate, calculatedFlowRate, addFilterData }) => {
    const adjustSize = () => {
        const index = flowRateValues.m3min.indexOf(correctedFlowRate) + 1;
        console.log(index)
        addFilterData("correctedFlowRate", flowRateValues.m3min[index])
    }
    return (
        <section className="filters-result-container">
            {
                !correctedFlowRate
                    ? <h2>Esperando parámetros...</h2>
                    : (correctedFlowRate > 65)
                        ? <h2>Los parámetros rebasan la capacidad de nuestros secadorers</h2>
                        : <div className="filter-cards-container">
                            <div className="top-data">
                                <h3>Flujo calculado: {calculatedFlowRate.toFixed(2)} m3/min</h3>
                                <h3>Flujo corregido: {correctedFlowRate} m3/min</h3>
                                {
                                    (calculatedFlowRate > correctedFlowRate * .8)
                                        ? <div className="warning"><i className="fas fa-exclamation-triangle"></i><span>Se recomienda subir la capacidad del modelo sugerido</span></div>
                                        : null
                                }
                            </div>
                            {
                                filterModels[correctedFlowRate].map(model => (
                                    <FilterCard key={model.title} modelData={model} />
                                ))
                            }
                            <div className="bottom-data">
                                {
                                    (calculatedFlowRate > correctedFlowRate * .8)
                                        ? (calculatedFlowRate > 50)
                                            ? <div className="chage-flowrate-container"><span>* No es posible subir la capacidad del secador, consulte con su asesor</span></div>
                                            : <div className="chage-flowrate-container"><button onClick={adjustSize}>Subir capacidad</button><span>* Para asegurar el correcto funcionamiento hay que subir la capacidad del tren de filtraje</span></div>
                                        : null
                                }
                            </div>
                        </div>
            }
        </section>
    );
}

const mapStateToProps = state => ({
    correctedFlowRate: state.filterData.correctedFlowRate,
    calculatedFlowRate: state.filterData.calculatedFlowRate
})

const dispatchStateToProps = dispacth => ({
    addFilterData: (key, value) => dispacth(addFilterData(key, value))
})

export default connect(mapStateToProps, dispatchStateToProps)(FiltersResultContainer);