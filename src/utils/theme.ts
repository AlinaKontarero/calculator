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
    }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 8,
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