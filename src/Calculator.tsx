import * as React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import ResultPanel from './components/ResultPanel'
import MainPanel from './components/MainPanel'
import ScientificPanel from './components/ScientificPanel'
import theme from './utils/theme'
import './styles/global-styles.css'

type IOperator = '+' | '-' | '*' | '/' | '='

interface State {
  displayedResult: string,
  isOperatorNext: boolean
  calculatedResult: number | null,
  operator: null | IOperator,
}

class Calculator extends React.Component<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = { 
      displayedResult: '0',
      isOperatorNext: false,
      calculatedResult: null,
      operator: null
    }
  }
 
  private setDecimals = () => {    
    if (!(/\./).test(this.state.displayedResult)) {
      this.setState({
        displayedResult: this.state.displayedResult + '.',
        isOperatorNext: false
      })
    }
  }

  private removeLastChar = () => {
    this.setState({
      displayedResult: this.state.displayedResult.substring(0, this.state.displayedResult.length - 1) || '0'
    })
  }
  
  private setOppositeSign = () =>  {
    const newValue = parseFloat(this.state.displayedResult) * (-1)
    this.setState({
      displayedResult: String(newValue)
    })
  }
  
 private getPercentage = () => {
    const currentValue = parseFloat(this.state.displayedResult)
    if (currentValue === 0) {
      return
    }
    
    const fixedDigits = this.state.displayedResult.replace(/^-?\d*\.?/, '')
    const res = parseFloat(this.state.displayedResult) / 100
    
    this.setState({
      displayedResult: String(res.toFixed(fixedDigits.length + 2))
    })
  }
    
  private handleIntegers = (int: number) => {
    const { displayedResult, isOperatorNext } = this.state
    if (isOperatorNext) {
      this.setState({
        displayedResult: String(int),
        isOperatorNext: false
      })
    } else {
      this.setState({
        displayedResult: displayedResult === '0' ? String(int) : displayedResult + int
      })
    }
  }
  
  private performOperation = (nextOperator: IOperator) => {    
    const { calculatedResult, displayedResult, operator } = this.state
    const inputValue = parseFloat(displayedResult)
    
    if (calculatedResult === null) {
      this.setState({
        calculatedResult: inputValue
      })
    } else if (operator) {
      const currentValue = calculatedResult || 0
      const newValue = this.handleMath(operator, currentValue, inputValue)
      
      this.setState({
        calculatedResult: newValue,
        displayedResult: String(newValue)
      })
    }
    
    this.setState({
      isOperatorNext: true,
      operator: nextOperator
    })
  }

  private handleMath = (operator: IOperator, current: number, addedValue: number ) => {
    if(operator === '+') {
      return current + addedValue
    } else if(operator === '-') {
      return current - addedValue
    } else if(operator === '*') {
      return current * addedValue
    } else if(operator === '/') {
      return current / addedValue
    } else return addedValue
  }
  
  private handleCalculation = (_value: IOperator | string) => {
    const isOperator: boolean = _value === '+' || _value === '-' || _value === '/' || _value === '*' || _value === '='

    if ((/\d/).test(_value)) {
      this.handleIntegers(parseInt(_value, 10))
    } else if (isOperator) {
      this.performOperation(_value as IOperator)
    } else if (_value === '.') {
      this.setDecimals()
    } else if (_value === '%') {
      this.getPercentage()
    } else if (_value === 'C') {
      this.removeLastChar()
    } else if(_value === '+/-') {
      this.setOppositeSign()
    }
  };

  public render() {
    return (
      <ThemeProvider theme={theme}>
        <div className='grid-container panel'> 
          <ResultPanel result={this.state.displayedResult} />
          <div className='grid-container calculator'>
            <ScientificPanel />
            <MainPanel onClick={this.handleCalculation} />
          </div> 
        </div>
      </ThemeProvider>
    );
  }
}

export default Calculator