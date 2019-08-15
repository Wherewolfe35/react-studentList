import React from 'react';

class Select extends React.Component {
  constructor() {
    super ()
    this.selectedElement = React.creatRef();
  }

  static displayName = "Select"

  getPos = (left, top, height) => {
    this.setState(prevState => ({style: {...prevState.style, left, top: top + height}}))
  }

  render() { 
    const { children, open } = this.props;
    return React.cloneElement(children, {ref: this.selectedElement, onClick: open}  );
  }
}
 
export default Select;