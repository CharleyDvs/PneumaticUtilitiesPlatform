import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import './ComparisonPage.styles.scss';

import PageTitle from '../../components/PageTitle/PageTitle.component';
import CylinderDataChart from '../../components/CylinderDataChart/CylinderDataChart.component';

import { cylinderData } from '../../components/CylinderDataChart/CylinderData';
import { addTolerance, addResult } from '../../redux/comparisonData/comparisonDataActions';

const ComparisonPage = ({ cylinders, tolerance, addTolerance, addResult }) => {
    const titleText = useParams().id;
    const comparison = () => {
        const { nomenclature, threadNomenclature } = cylinderData[titleText];
        let comparisonResult = {}
        nomenclature.forEach(item => {
            const measureDifference = Math.abs(cylinders[titleText][item] - cylinders.Cilindro[item]);
            let result = "";
            if (measureDifference > tolerance) {
                result = <i className="fas fa-times red"></i>
            } else if (measureDifference === 0) {
                result = <i className="fas fa-check green"></i>
            } else {
                result = <i className="fas fa-check yellow"></i>
            }
            comparisonResult = {
                ...comparisonResult,
                [item]: result
            }
        });
        threadNomenclature.forEach(item => {
            let result = "";
            if (cylinders[titleText][item] === cylinders.Cilindro[item]) {
                result = <i className="fas fa-check green"></i>
            } else {
                result = <i className="fas fa-times red"></i>
            }
            comparisonResult = {
                ...comparisonResult,
                [item]: result
            }
        });
        addResult(comparisonResult);
    }
    return (
        <main className="comparison-page">
            <PageTitle title={titleText} />
            <CylinderDataChart chartId="Cilindro" chartSeries={titleText} />
            <CylinderDataChart chartId={titleText} chartSeries={titleText} />
            <div className="user-options">
                <label htmlFor="tolerance">Tolerancia: </label>
                <input
                    type="number"
                    name="tolerance"
                    placeholder="mm"
                    onChange={e => {
                        addTolerance(e.target.value)
                    }}
                ></input>
                <button onClick={comparison}>Comparar</button>
            </div>
        </main>
    );
}

const mapStateToProps = state => ({
    cylinders: state.cylinders,
    tolerance: state.comparisonData.tolerance
});

const mapDispatchToProps = dispatch => ({
    addTolerance: num => dispatch(addTolerance(num)),
    addResult: obj => dispatch(addResult(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(ComparisonPage);