import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

interface Props {
}

function Root(props: Props) {
    return (
        <BrowserRouter>
            <App
                {...props} // eslint-disable-line react/jsx-props-no-spreading
            />
        </BrowserRouter>
    );
}

export default Root;
