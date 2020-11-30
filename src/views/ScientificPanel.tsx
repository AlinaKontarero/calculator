import * as React from 'react'
import Button from '@material-ui/core/Button/Button';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';
import Zoom from '@material-ui/core/Zoom/Zoom';

const ScientificPanel = () => {
  const buttons = ['Sqrt', 'LN', 'SIN', 'COS', 'TAN', '( )', 'STO', 'ASIN', 'ACOS', 'LOG', 'MIN', 'MAX', 
  'Abs', 'Pow', 'Floor', 'Round', 'Ceil', 'Add', 'Substr', 'Expo', 'Pi', 'e', 'MEMO', 'CLR', 'RPN']

  const buttonsArr = buttons.map((_button, index) => {
    const label = ():string => {
      switch(_button) {
        case 'Sqrt': 
          return '√';
        case 'Pi': 
          return String.fromCharCode(960);
        case 'LOG': 
          return 'ln(x)'
        default: 
          return _button
      }
    } 
    return (

      <div key={index}>
        <Tooltip title='Not available yet.' TransitionComponent={Zoom} arrow={true} placement={'top'}>
          <span>              
            <Button 
              variant='contained'
              color='secondary'
              fullWidth={true}
              disabled={true}
              size='large'
              >
              {label()}
            </Button>
          </span>
        </Tooltip>
      </div>
              )
  }
  )
  
  return (
    <div className='grid-container scientific-panel'>
      {buttonsArr}
    </div> 
  );
}


export default ScientificPanel;