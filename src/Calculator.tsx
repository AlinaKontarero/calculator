import * as React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import ResultPanel from './views/ResultPanel'
import ButtonsPanel from './views/ButtonsPanel'
import theme from './utils/theme'
import './styles/global-styles.css'

interface State {
  result: string
}

class Calculator extends React.Component<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = { result: '' }
  }

  private backspace = () => this.setState({
    result: this.state.result.slice(0, -1)
  })

  private revertSign = () => {
    const oppositeValue: number = parseInt(this.state.result) * (-1);
    this.setState({ result: oppositeValue.toString() })
  }

  private calculate = () => {
    try {
        this.setState({
          // eslint-disable-next-line
          result: (eval(this.state.result) || "" ) + ""
        })
    } catch (e) {
        this.setState({
            result: "error"
        })
    }
};

private addValue = (_value: string) => {
  const numRegex = /^[0-9]*$/;
  const isNumericalValue: boolean = !!_value.match(numRegex)
  const zeroAtBeginning: boolean = this.state.result.length === 1 && 
    this.state.result[0] === '0' && isNumericalValue

  if(zeroAtBeginning) {
    this.setState({ result: _value })
    } else {
      this.setState({
        result: this.state.result + _value
    })
  }
}

private onClick = (_buttonValue: string) => {
  if(_buttonValue === 'C') {
    this.backspace()
  } else if(_buttonValue === '=') {
    this.calculate()
  } else if(_buttonValue === '+/-') {
    this.revertSign()
  } else {
    this.addValue(_buttonValue)
  }
}

  public render() {
    return (
      <ThemeProvider theme={theme}>
        <div className='columns is-multiline calculator'>
          <ResultPanel result={this.state.result} />
          <ButtonsPanel onClick={this.onClick} />
       </div> 
      </ThemeProvider>
    );
  }
}

export default Calculator