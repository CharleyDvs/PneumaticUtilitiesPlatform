import React from 'react';

import './FilterCard.styles.scss';

const FilterCard = ({ modelData }) => {
    const { title, model, extraInfo } = modelData;
    let filterGrade;
    let gradeColor;
    switch (title) {
        case ("Secador refrigerativo"):
            filterGrade = "A"
            gradeColor = "red"
            break;
        default:
            filterGrade = "D"
    }
    return (
        <div className="filter-card">
            <h3>{title}</h3>
            <h4>Modelo: {model}</h4>
            <div className="image-container">

            </div>
            <p>{extraInfo}</p>
            <div className="technical-data">
                <i class="fas fa-file-pdf"></i>
                <i class="fas fa-clipboard"></i>
                <h3 className={gradeColor}>{filterGrade}</h3>
            </div>
        </div>
    );
}

export default FilterCard;