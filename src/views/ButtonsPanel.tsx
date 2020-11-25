import * as React from 'react'
import Button from '@material-ui/core/Button/Button';


interface Props {
  calculate: (e: any) => void
}


class ButtonsPanel extends React.Component<Props, never> {

    render() {
        const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
        return (
            <div className="button columns is-multiline">
             {buttons.map((_button, index) => (
               <div key={index} className='column is-1'>
                  <Button 
                    variant='contained'
                    onClick={() => this.props.calculate(_button)}
                    color='primary'
                    className={'is-round'}
                    size='large'
                  >
                   {_button}
                 </Button>
                </div>
             ) )}
            </div>
        );
    }
}


export default ButtonsPanel;