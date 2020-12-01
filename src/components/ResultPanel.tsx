import * as React from 'react'
import formatThousands from '../utils/formatThousands'

interface Props {
  result: string
}

const Result = (props: Props) => {
  const res = formatThousands(props.result)
  const result = res === 'Warning' 
    ? <p style={{ fontSize: 24}}> {`${res}: the result is too big to be displayed`} </p>
    : <> {res} </>
  return (
    <div className='result-panel'>
      <div className='result'>{result}</div>
    </div>
  );
}

export default Result


