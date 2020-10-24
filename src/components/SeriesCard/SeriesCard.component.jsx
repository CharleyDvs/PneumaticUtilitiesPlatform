import React from 'react';
import { useHistory } from 'react-router-dom';

import './SeriesCard.styles.scss';

const SeriesCard = ({ seriesData }) => {
    const history = useHistory();
    const { seriesName, diameters, stroke } = seriesData;
    return (
        <div className="card-container" onClick={() => { history.push(`/cilindros/${seriesName}`) }}>
            <div className="card-title">
                <h1>{seriesName}</h1>
            </div>
            <div className="series-info">
                <ul>
                    <li><b>Diámetros: </b>{diameters}</li>
                    <li><b>Carrera: </b>{stroke}</li>
                </ul>
            </div>
        </div>
    );
}

export default SeriesCard;