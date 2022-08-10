import React from 'react';
import Context from './Context';
import PropTypes from 'prop-types';

function Provider({ children }) {

const data = {

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