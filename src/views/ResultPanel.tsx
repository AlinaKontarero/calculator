import * as React from 'react'
import formatThousands from '../utils/formatThousands'

interface Props {
  result: string
}

const Result = (props: Props) => {
  const res = formatThousands(props.result)
  return (
    <div className='result-panel'>
      <div className='result'>{res}</div>
    </div>
  );
}

export default Result


