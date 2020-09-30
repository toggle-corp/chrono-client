import React from 'react';
import { _cs } from '@togglecorp/fujs';

import styles from './styles.css';

interface HomeProps {
    className?: string;
}

function Home(props: HomeProps) {
    const {
        className,
    } = props;

    return (
        <div className={_cs(className, styles.home)}>
            <h1 className={styles.heading}>
                Chrono
            </h1>
            <p className={styles.message}>
                Welcome to Chrono
            </p>
        </div>
    );
}

export default Home;
