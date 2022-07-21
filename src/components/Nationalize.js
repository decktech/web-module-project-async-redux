import React from 'react';
import { connect } from 'react-redux';
import { removeNationalize } from '../actions';


import { getNationalize } from '../actions';

const Nationalize = (props) => {
    const { name, country, isFetching, error } = props;

    const handleClear = () => {
        props.removeNationalize()
    }

    if (error) {
        return <h2>OH NO!</h2>
    }

    if (isFetching) {
        return <h2>Loading...</h2>
    }

    if (name === '') {
        return null
    }

    return (
        <>
            <div>
                <h2>Nationalized: {name}</h2>
                <h3>Country: {country[0].country_id}, Probability: {Math.round(country[0].probability * 100) }%</h3>
                <h3>Country: {country[1].country_id}, Probability: {Math.round(country[1].probability * 100) }%</h3>
                <h3>Country: {country[2].country_id}, Probability: {Math.round(country[2].probability * 100) }%</h3>
                <button onClick={handleClear}>X</button>
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

export default connect(mapStateToProps, { getNationalize, removeNationalize })(Nationalize);