import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getNationalize } from '../actions';

const Nationalize = (props) => {
    const { name, country, isFetching, error } = props;

    

    return (
        <>
            <div>
                <h2>Nationalized: {name}</h2>
                <h3>Country: {country.country_id}, Probability: {Math.round(country.probability) * 100}%</h3>
                <h3>Country: {country.country_id}, Probability:{Math.round(country.probability) * 100}%</h3>
                <h3>Country: {country.country_id}, Probability:{Math.round(country.probability) * 100}%</h3>
                <button>X</button>
            </div>
        </>
    )
}

const mapStateToProps = state =>  {
    console.log(state)
    return {
        name: state.name,
        country: state.country,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getNationalize })(Nationalize);