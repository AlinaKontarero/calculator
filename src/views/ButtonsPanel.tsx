import * as React from 'react'
import Button from '@material-ui/core/Button/Button';
interface Props {
  onClick: (e: any) => void
}
class ButtonsPanel extends React.Component<Props, never> {
    render() {
      const buttonsLabels = ['C', '+/-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']
      const buttonsArr = buttonsLabels.map((_button, index) => (
        <div key={index} className={_button === '0' ? 'zero-button' : ''}>
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
              fullWidth={true}
              size='large'
            >
            {_button}
          </Button>
          </div>
      ))


      return (
        <div className='grid-container main-panel'>
          {buttonsArr}
        </div>
      );
    }
}


export default ButtonsPanel;