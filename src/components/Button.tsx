import * as React from 'react'
import MaterialButton, { ButtonProps } from '@material-ui/core/Button'

interface Props extends ButtonProps{

}

interface State {

}

class Button extends React.Component<Props, State> {

  public render() {
    return (
      <MaterialButton>
        {this.props.children}
      </MaterialButton>
    )
  }

}

export default Button

//https://medium.com/@nitinpatel_20236/how-to-build-a-simple-calculator-application-with-react-js-bc10a4568bbd