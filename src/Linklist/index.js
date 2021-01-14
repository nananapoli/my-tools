import React, { Component } from 'react';

import hnList from './huanong';
import jyList from './jinyang';

import './index.css';

class Linklist extends Component {
	renderList(list = []) {
		return (
			<div>
				{
					list.map((item,index) => {
						return (
							<div>
								<a href={item.href} target="_blank" key={index}>{item.label}</a>
								<br/>
							</div>
							
						)
					})
				}
			</div>
		)
	}

  render() {
    return (
      <div className="link-list-wrapper"> 
				{this.renderList(hnList)}
			</div>
    );
  }
}

export default Linklist;
