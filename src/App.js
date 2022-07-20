import React from 'react';
import { connect } from 'react-redux';

import Nationalize from './components/Nationalize';
import { getNationalize } from './actions';
import './App.css';



function App(props) {
  const { name, country, isFetching, error } = props
  const handleSubmit = (e) => {
    e.preventDefault();
    props.getNationalize(name)
  }

  return (
    <div className="App">
      <h1>Find Nationality</h1>

      <form>
        <input />
        <button onClick={handleSubmit} value={name}>Search</button>
      </form>

      <button>Clear</button>

      {isFetching ? <h3>loading response</h3> : <Nationalize country={country}/>}
      
    </div>
  );
}
const mapStateToProps = state => {
  return {
    name: state.name,
    country: state.country,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getNationalize })(App);