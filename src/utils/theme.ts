import { createMuiTheme } from '@material-ui/core/styles';

// Color palette: https://www.materialpalette.com/deep-orange/blue-grey 

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#FFCCBC',
      main: '#FF5722',
      dark: '#E64A19',
      contrastText: '#fff',
    },
    secondary: {
      light: '#607D8B',
      main: '#323232',
      dark: '#212121',
      contrastText: '#BDBDBD',
    },
    action: {
      disabled: '#607D8B',
      disabledBackground: '#212121'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        // borderRadius: '50%',
        // width: '15px',
        // height: '60px'
        // height: 40,
        // width: 20
        
      },
    },
    MuiTooltip: {
      tooltip: {
        fontSize: 12,
      }
    }
  }
});

export default theme