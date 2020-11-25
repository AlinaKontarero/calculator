import * as React from 'react'
import ResultPanel from './views/ResultPanel'
import ButtonsPanel from './views/ButtonsPanel'
import './styles/global-styles.css'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './utils/theme'

interface State {
  result: number
}

class Calculator extends React.Component<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = { result: 0 }
  }
  private calculate = () => {
    console.log('hello')
  }
  public render() {

    return (
      <ThemeProvider theme={theme}>
        <h1>Calculator</h1>
        <ResultPanel result={this.state.result} />
        <ButtonsPanel calculate={this.calculate} />
      </ThemeProvider>
    );
  }
}

export default Calculator