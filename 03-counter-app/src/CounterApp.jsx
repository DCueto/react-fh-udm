import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ({ value }) => {
  const [ counter, setCounter ] = useState( value );

  const handleAdd = (e) => {
    // setCounter( counter + 1);
    setCounter( (c) => c + 1 );
  }

  const handleSubtract = () => setCounter( counter - 1);
  const handleReset = () => setCounter( value );

  return (
    <div className='card'>
      <h1>CounterApp</h1>
      <h2>{ counter }</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubtract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}