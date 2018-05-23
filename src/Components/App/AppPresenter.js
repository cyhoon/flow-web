import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NoticePresenter from 'Components/Notice';
import RequestPresenter from 'Components/Request';

const AppPresenter = () => (
    <Fragment>
        <BrowserRouter>
            <Fragment>
                <Route exact path='/' component={ NoticePresenter } />
                <Route path='/out' component={ RequestPresenter } />
            </Fragment>
        </BrowserRouter>
    </Fragment>
);

export default AppPresenter;