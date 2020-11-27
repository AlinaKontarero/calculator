import * as React from 'react'
import Button from '@material-ui/core/Button/Button';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';
import Zoom from '@material-ui/core/Zoom/Zoom';

const ScientificPanel = () => {
  const buttons = ['Sqrt', 'LN', 'SIN', 'COS', 'TAN', '( )', 'STO', 'ASIN', 'ACOS', 'LOG', 'MIN', 'MAX', 
  'Abs', 'Pow', 'Floor', 'Round', 'Ceil', 'Add', 'Substr', 'Expo', 'Pi', 'e', 'MEMO', 'CLR', 'RPN']
  const buttonsArr = buttons.map((_button, index) => (
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
              {_button === 'Sqrt' ? '√' : _button}
            </Button>
          </span>
        </Tooltip>
      </div>
    )
  )
  
  return (
    <div className='grid-container scientific-panel'>
      {buttonsArr}
    </div> 
  );
}


export default ScientificPanel;