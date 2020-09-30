import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { _cs } from '@togglecorp/fujs';

import Navbar from '#components/Navbar';
import DocumentTitle from '#components/DocumentTitle';
import Loading from '#components/Loading';

import routes from '#config/routes';
import { BasicViewProps } from '#types';

import styles from './styles.css';

export type MultiplexerProps = BasicViewProps;

function Multiplexer(props: MultiplexerProps) {
    const {
        className,
    } = props;

    return (
        <div className={_cs(className, styles.multiplexer)}>
            <Navbar className={styles.navbar} />
            <React.Suspense
                fallback={(
                    <Loading message="Please wait..." />
                )}
            >
                <Switch>
                    {routes.map((route) => {
                        const {
                            path,
                            name,
                            title,
                            load: Loader,
                        } = route;

                        return (
                            <Route
                                exact
                                className={styles.route}
                                key={name}
                                path={path}
                                render={() => (
                                    <>
                                        <DocumentTitle value={title} />
                                        <Loader className={styles.view} />
                                    </>
                                )}
                            />
                        );
                    })}
                </Switch>
            </React.Suspense>
        </div>
    );
}
export default Multiplexer;
