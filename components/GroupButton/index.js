import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';

@CSSModules(styles)
export default class GroupButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  isSelected = value => {
    return this.state.selected === value
  }

  select = value => {
    this.setState({
      selected: value
    });
  }

  render() {
    return (<div>
      <ul styleName="group">
        {
          this.props.values.map(b => {
            return (<li onClick={this.select.bind(this, b)} styleName={this.isSelected(b) ? 'active' : 'button'} key={b}>{b}</li>)
          })
        }
      </ul>
      <div>Selected: {this.state.selected}</div>
    </div>);
  }
}
