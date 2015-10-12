import React from 'react';
import ReactDOM from 'react-dom';

import GroupButton from './components/GroupButton';
import Button from './components/Button';

class App extends React.Component {
  render() {
    return (<div>
      <h1>CSS Modules</h1>
      <h2>Buttons</h2>
      <Button>Default</Button>
      <Button is="success">Success</Button>
      <Button is="error">Error</Button>
      <h2>Group button</h2>
      <GroupButton values={['First', 'Second', 'Third']}></GroupButton>
    </div>);
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
