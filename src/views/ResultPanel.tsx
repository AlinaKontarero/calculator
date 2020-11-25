import * as React from 'react'

interface Props {
  result: number
}

const ResultPanel= (props: Props) =>  {
  return (
    <div>
      <p> {props.result} </p> 
    </div>
  );
}

export default ResultPanel

