import * as React from 'react'
import formatThousands from '../utils/formatThousands'

interface Props {
  result: string
}

const ResultPanel= (props: Props) =>  {
  const numericalResult = parseInt(props.result)
  const res = Number.isInteger(numericalResult) ? formatThousands(numericalResult) : props.result;
  return (
    <div className='column is-full'>
      <p className='result'> {res} </p> 
    </div>
  );
}

export default ResultPanel

