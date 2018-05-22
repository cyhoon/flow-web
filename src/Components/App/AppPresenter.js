import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import RequestPresenter from 'Components/Request';
import NoticePresenter from 'Components/Notice';

const AppPresenter = () => (
    <Fragment>
        <BrowserRouter>
            <Fragment>
                <Route exact path='/' component={ RequestPresenter } />
                <Route path='/notice' component={ NoticePresenter } />
            </Fragment>
        </BrowserRouter>
    </Fragment>
);

export default AppPresenter;