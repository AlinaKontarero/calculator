import * as React from 'react'
import Button from '@material-ui/core/Button/Button';
import clsx from 'clsx';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';
import Zoom from '@material-ui/core/Zoom/Zoom';
// import { Tooltip } from '@material-ui/core';
interface Props {
  onClick: (e: any) => void
}
class ButtonsPanel extends React.Component<Props, never> {

    render() {
        const scientificButtons = ['Sqrt', 'LN', 'SIN', 'COS', 'TAN', '( )', 'STO', 'ASIN', 'ACOS', 'LOG', 'MIN', 'MAX', 'Abs', 'Pow', 'Floor', 'Round', 'Ceil', 'Add', 'Substr', 'Expo', 'Pi', 'e', 'MEMO', 'CLR', 'RPN']
        const scientificButtonsArr = scientificButtons.map((_button, index) => (
          <div key={index} className='column'>
            <Tooltip title='Not available yet.' TransitionComponent={Zoom} arrow={true} placement={'top'}>
              <span>              
                <Button 
                  variant='contained'
                  color='secondary'
                  fullWidth={true}
                  // disabled={true}
                >
                {_button}
              </Button>
              </span>
              </Tooltip>
           </div>
        ))
        const buttonsLabels = ['0', '.', '=', '1', '2', '3', '+',  '4', '5', '6', '-', '7', '8', '9', 'x', 'C', '+/-', '%', '=']
        const buttonsArr = buttonsLabels.map((_button, index) => (
          <div key={index} className={clsx('column', _button === '0' ? 'is-half' : 'is-one-quarter')}>
             <Button 
               variant='contained'
               onClick={() => this.props.onClick(_button)}
               color={Number.isInteger(parseInt(_button)) || _button === '.' 
               ? 'secondary' 
               : (index > 14 && index < 18 
                  ? 'inherit' 
                  : 'primary')
              }
               fullWidth={true}
             >
              {_button}
            </Button>
           </div>
        ))

        const splitIntoColumns = (buttonsArr: JSX.Element[], lineIndex: number, buttonsInLine: number) => {
          const firstButtonIndex: number = lineIndex === 1 
          ?  0
          : (lineIndex - 1) * 4 - 1;
          const lastButtonIndex: number = firstButtonIndex + buttonsInLine;
          return buttonsArr.slice(firstButtonIndex, lastButtonIndex)
        }

        return (
            <div className='column is-full buttons-panel'>
              <div className='columns'>
                <div className='column'>
                  <div className="columns is-variable is-2" >
                  {splitIntoColumns(scientificButtonsArr, 5, 5)}
                </div>
                  <div className="columns is-variable is-2" >
                  {splitIntoColumns(scientificButtonsArr, 4, 5)}
                </div>
                <div className="columns is-variable is-2" >
                  {splitIntoColumns(scientificButtonsArr, 3, 5)}
                </div>
                <div className="columns is-variable is-2">
                  {splitIntoColumns(scientificButtonsArr, 2, 5)}
                </div>
                <div className="columns is-variable is-2">
                  {splitIntoColumns(scientificButtonsArr, 1, 5)}
                    </div>
                </div>
                <div className='column is-3'>
                  <div className="columns is-variable is-2" >
                  {splitIntoColumns(buttonsArr, 5, 4)}
                </div>
                  <div className="columns is-variable is-2" >
                  {splitIntoColumns(buttonsArr, 4, 4)}
                </div>
                <div className="columns is-variable is-2" >
                  {splitIntoColumns(buttonsArr, 3, 4)}
                </div>
                <div className="columns is-variable is-2">
                  {splitIntoColumns(buttonsArr, 2, 4)}
                </div>
                <div className="columns is-variable is-2">
                  {splitIntoColumns(buttonsArr, 1, 3)}
                    </div>
            </div>
          </div>
          </div>
        );
    }
}


export default ButtonsPanel;