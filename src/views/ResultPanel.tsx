import * as React from 'react'

interface Props {
  result: string
}

const ResultPanel= (props: Props) =>  {
  return (
    <div className='column is-full'>
      <p className='result'> {props.result} </p> 
    </div>
  );
}

export default ResultPanel

