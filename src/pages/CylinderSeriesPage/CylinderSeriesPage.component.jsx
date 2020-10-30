import React from 'react';

import './CylinderSeriesPage.styles.scss';

import SeriesCard from '../../components/SeriesCard/SeriesCard.component';
import PageTitle from '../../components/PageTitle/PageTitle.component';

import { cylinderPreviewData } from '../../assets/appData/cylinderPreviewData';

const CylinderSeries = () => {
    return (
        <section className="cylinder-series-container">
            <PageTitle title="Cilindros" />
            {
                cylinderPreviewData.map(item =>
                    <SeriesCard key={item.seriesName} seriesData={item} />
                )
            }
        </section>
    );
}

export default CylinderSeries;