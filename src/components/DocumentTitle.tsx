import React from 'react';

export interface DocumentTitleProps {
    value: string;
}

export function DocumentTitle({ value }: DocumentTitleProps) {
    React.useEffect(
        () => {
            document.title = value;
        },
        [value],
    );
    return null;
}

export default DocumentTitle;
