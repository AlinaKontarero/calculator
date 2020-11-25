import * as React from 'react'
import Button from '@material-ui/core/Button/Button';
import clsx from 'clsx';
interface Props {
  onClick: (e: any) => void
}
class ButtonsPanel extends React.Component<Props, never> {

    render() {
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

        const splitIntoColumns = (lineIndex: number) => {
          const firstButtonIndex: number = lineIndex === 1 
          ?  (lineIndex - 1) * 4
          : (lineIndex - 1) * 4 - 1;
          const buttonsInLine: number = firstButtonIndex === 0 ? 3 : 4;
          const lastButtonIndex: number = firstButtonIndex + buttonsInLine;
          return buttonsArr.slice(firstButtonIndex, lastButtonIndex)
        }

        return (
            <div className='column is-3 buttons-panel'>
              <div className="columns is-variable is-2" >
              {splitIntoColumns(5)}
            </div>
              <div className="columns is-variable is-2" >
              {splitIntoColumns(4)}
            </div>
            <div className="columns is-variable is-2" >
              {splitIntoColumns(3)}
            </div>
            <div className="columns is-variable is-2">
              {splitIntoColumns(2)}
            </div>
            <div className="columns is-variable is-2">
              {splitIntoColumns(1)}
            </div>
          </div>
        );
    }
}


export default ButtonsPanel;