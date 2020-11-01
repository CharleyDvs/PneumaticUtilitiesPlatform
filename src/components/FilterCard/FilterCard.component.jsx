import React from 'react';

import './FilterCard.styles.scss';

const FilterCard = ({ modelData }) => {
    const { title, model, extraInfo } = modelData;
    const copyModel = (result) => {
        const temporalInput = document.createElement("input");
        temporalInput.className = 'temporalInput'
        document.body.appendChild(temporalInput);
        temporalInput.value = result;
        temporalInput.select();
        document.execCommand("copy");
        document.body.removeChild(temporalInput);
    }
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
                <i class="fas fa-clipboard" onClick={() => {
                    copyModel(model)
                }}></i>
                <h3 className={gradeColor}>{filterGrade}</h3>
                <div className={`grade-explanation ${gradeColor}`}></div>
            </div>
        </div>
    );
}

export default FilterCard;