import * as React from 'react'
import formatThousands from '../utils/formatThousands'

interface Props {
  result: string
}

const ResultPanel= (props: Props) =>  {
  console.log('result:::: ', props.result)
  const numericalResult = parseInt(props.result)
  const res = Number.isInteger(numericalResult) ? formatThousands(numericalResult) : props.result;
  return (
    <div className='result-panel'>
      <p className='result'> {res} </p> 
    </div>
  );
}

export default ResultPanel

