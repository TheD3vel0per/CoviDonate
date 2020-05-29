import React from 'react';

function Test() {

    const [data, dataSet] = React.useState('test from browser');

    return (
        <h1>
            {data}
        </h1>
    );
}

export default Test;