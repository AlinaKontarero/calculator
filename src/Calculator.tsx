import * as React from 'react'
import ResultPanel from './views/ResultPanel'
import ButtonsPanel from './views/ButtonsPanel'
import './styles/global-styles.css'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './utils/theme'

interface State {
  result: string
}

class Calculator extends React.Component<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = { result: '0' }
  }

  private backspace = () => this.setState({
    result: this.state.result.slice(0, -1)
  })

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

private onClick = (_button: string) => {
  if(_button === 'C') {
    this.backspace()
  } else if(_button === '=') {
    this.calculate()
  } else if(_button === '.') {
    console.log('dot-dot-dot')
  } else if (_button === '%') {
    console.log('percentage')
  } else if(_button === '+/-') {
    console.log('change the sign')
  } else if (_button === 'x') {
    console.log('multiply')
  } else {
    this.setState({
      result: this.state.result + _button
  })
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