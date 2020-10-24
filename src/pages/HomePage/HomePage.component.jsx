import React from 'react';
import { useHistory } from 'react-router-dom';

import './HomePage.styles.scss';

import PageTitle from '../../components/PageTitle/PageTitle.component';

const HomePage = () => {
    const history = useHistory();
    return (
        <main className="home">
            <PageTitle title="Plataforma de utilidades" />
            <nav>
                <ul>
                    <li onClick={() => history.push('./homologacion')}>Homologación de cilindros</li>
                </ul>
            </nav>
        </main>
    );
}

export default HomePage;