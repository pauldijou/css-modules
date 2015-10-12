import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';

@CSSModules(styles)
export default class Button extends React.Component {
  render() {
    return (<button type="button" styleName={this.props.is || 'button'}>{this.props.children}</button>);
  }
}
