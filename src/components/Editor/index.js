import React, { Component } from 'react';

import './style.less'

class Editor extends Component {

  componentDidMount = () => {
    document.addEventListener('copy', (e) => {
      const selection = document.getSelection();
      const surfix = `  
      
「Why your brain needs exercise -- Scientific American 2020-01」`;
      e.clipboardData.setData('text/plain', selection.toString() + surfix);
      e.preventDefault();
    })
  }

  render() {
    return (
      <div id="editor" contentEditable> 

      </div>
    );
  }
}

export default Editor;
