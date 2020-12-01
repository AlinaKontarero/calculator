import * as React from 'react'
import Button from '@material-ui/core/Button/Button';
interface Props {
  onClick: (e: any) => void
}
class MainPanel extends React.Component<Props, never> {
    render() {
      const buttonsLabels = ['C', '+/-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']
      const buttonsArr = buttonsLabels.map((_button, index) => {
        const buttonLabel: string = _button === '*' ? 'x' : _button;
        const isZeroButton: boolean = _button === '0' 
        return (
          <div key={index} className={isZeroButton ? 'zero-button' : ''}>
            <Button 
              disableElevation
              variant='contained'
              onClick={() => this.props.onClick(_button)}
              color={Number.isInteger(parseInt(_button)) || _button === '.' 
              ? 'secondary' 
              : (index >= 0 && index < 3
                ? 'default' 
                : 'primary')
            }
              style={isZeroButton ? {}: { borderRadius: '50%', minWidth: 60}}
              fullWidth={isZeroButton}
            >
            {buttonLabel}
          </Button>
          </div>
        )}
      )

      return (
        <div className='grid-container main-panel'>
          {buttonsArr}
        </div>
      );
    }
}


export default MainPanel;