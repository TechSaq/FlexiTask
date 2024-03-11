import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useCounter } from '../../../providers/CounterProvider';

const CounterPage = () => {

  const { color, count, increaseCount } = useCounter()


  return (
    <div>

      <p>Counter Page</p>

      <button
        onClick={increaseCount}
        style={{ background: color }}
      >
        {count}
      </button>

      <Link to='/details'>Go to Details</Link>

    </div>
  )
}

export default CounterPage

const isEven = (value) => value % 2 === 0;