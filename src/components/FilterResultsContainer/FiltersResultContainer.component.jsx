import React, { useState } from 'react';
import { connect } from 'react-redux';

import './FiltersResultContainer.styles.scss';

import FilterCard from '../../components/FilterCard/FilterCard.component';

import { filterModels } from '../../assets/appData/filterModels';

const FiltersResultContainer = ({ correctedFlowRate }) => {
    return (
        <section className="filters-result-container">
            {
                !correctedFlowRate
                    ? <h2>Esperando parámetros...</h2>
                    : <div className="filter-cards-container">
                        <div className="top-data">
                            <h3>Flujo corregido: {correctedFlowRate} m3/min</h3>
                        </div>
                        {
                            filterModels[correctedFlowRate].map(model => (
                                <FilterCard key={model.title} modelData={model} />
                            ))
                        }
                    </div>
            }
        </section>
    );
}

const mapStateToProps = state => ({
    correctedFlowRate: state.filterData.correctedFlowRate
})

export default connect(mapStateToProps)(FiltersResultContainer);