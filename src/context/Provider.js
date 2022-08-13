import React, { useState } from 'react';
import Context from './Context';
import PropTypes from 'prop-types';

function Provider({ children }) {
    const [ currency, setCurrency ] = useState([]);
    const [ secCurrency, setSecCurrency ] = useState([]);
    const [ value, setValue ] = useState([]);

const data = {
    currency, setCurrency,
    secCurrency, setSecCurrency,
    value, setValue
}
    return(
        <Context.Provider value={ data }>
            { children }
        </Context.Provider>
    )
}

Provider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default Provider;