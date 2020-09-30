import React from 'react';
import { _cs } from '@togglecorp/fujs';

import styles from './styles.css';

export interface LoadingProps {
    message: string;
}

function Loading({ message }: LoadingProps) {
    return (
        <div className={styles.loading}>
            {message}
        </div>
    );
}

export default Loading;
