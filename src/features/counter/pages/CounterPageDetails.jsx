import React from 'react'
import { Link } from 'react-router-dom';
import { useCounter } from '../../../providers/CounterProvider';

const CounterPageDetails = () => {

  const { color, count } = useCounter()

  return (
    <div>

      <p>Count = {count}</p>
      <p>Count = {color}</p>

      <Link to='/'>Go to Counter</Link>

    </div>
  )
}

export default CounterPageDetails