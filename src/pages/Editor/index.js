import React, { Component } from 'react';

import './style.less'
class Editor extends Component {

  state = {
    surfix: '666',
  }

  componentDidMount = () => {
    document.addEventListener('copy', (e) => {
      let { surfix } = this.state;
      const selection = document.getSelection();
      surfix = `
      
--  ${surfix}`
      e.clipboardData.setData('text/plain', selection.toString() + surfix);
      e.preventDefault();
    })
  }

  render() {
    return (
      <div className="editor-wrapper">
        <input 
          onChange={(e) => {
            const value = e.target.value;
            this.setState({
              surfix: value
            })
          }}
        />
        <textarea />
      </div>
    );
  }
}

export default Editor;
