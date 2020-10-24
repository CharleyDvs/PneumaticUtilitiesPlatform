import React from 'react';

import './PageTitle.styles.scss';

const PageTitle = ({ title }) => (
    <header className="page-title">
        <div className="title-bg">
            <h1>{title}</h1>
        </div>
    </header>
);

export default PageTitle;