import * as React from 'react'
import formatThousands from '../utils/formatThousands'

interface Props {
  result: string
}

interface State {
  scale: number
}
class Result extends React.Component<Props, State> {
  private myRef: React.RefObject<HTMLDivElement>
  constructor(props: Props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
      scale: 1
    }
  }

  public componentDidUpdate() {
      const node = this.myRef.current
    if(!node) {
      console.log('no node')
      return 
    }

    const parentEl = node.parentElement
    if(!parentEl) {
      console.log('no parent')
      return
    }
    
    const availableWidth = parentEl!.offsetWidth
    const actualWidth = node.offsetWidth
    const actualScale = availableWidth / actualWidth
    
    if (this.state.scale === actualScale)
      return
    
    if (actualScale < 1) {
      this.setState({ scale: actualScale })
    } else if (this.state.scale < 1) {
      this.setState({ scale: 1 })
    }
  }

  render() {
    const scale: number = this.state.scale
    const res = formatThousands(this.props.result)
    console.log('scale:::: ', scale)
    return (
      <div className='result-panel'
        ref={this.myRef}
        style={{ transform: `scale(${scale},${scale})`}}
      >
        <p className='result' 
        > 
        {res} </p> 
      </div>
  );
  }
}

export default Result
// maybe to use clamp() 


