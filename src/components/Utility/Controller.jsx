import React from 'react';
import ReactDOM from 'react-dom';

class Controller extends React.Component {
  state = {
    isOpen: false,
    style: {
      position: "absolute",
      top: 0,
      left: 0,
    }
  }

  componentDidUpdate() {
    setTimeout(() => {
      if (this.state.isOpen) {
        window.addEventListener('click', this.close)
      } else {
        window.removeEventListener('click', this.close)
      }
    }, 0)
  }

  open = () => {
    this.setState({ isOpen: true })
  }

  close = () => {
    this.setState({ isOpen: false })
  }

  render() {
    const { children } = this.props;
    const { isOpen, style } = this.state;

    const inputChildren = React.Children.map(children, child => {
      if (child.type.displayName === "Select") {
        return React.cloneElement(child, { open: this.open });
      }
      else {
        return (
          isOpen && ReactDOM.createPortal(
            <span onClick={e => e.stopPropagation()} style={style}>{React.cloneElement(child)}</span>, document.body)
        )
      }
    });
    return inputChildren;
  }
}

export default Controller;