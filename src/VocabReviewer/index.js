import React, { Component } from 'react';

import data from './data';

import './index.less';

/*
  todo:
    - 洗牌算法
    - 增加react-route
    - 发布到github，支持远端查看
*/

class VocabReviewer extends Component {
  state = {
    vocabArr: [],
    selectedVocab: null,
    modalVisible: false,
  }

  componentDidMount() {
    this.getRandomVocab()
  }

  getRandomVocab = () => {
    const len = data.length;
    const vocabArr = []
    for (let i = 0; i < 12 ;i++) {
      const randomIndex = Math.floor(Math.random() * len);
      vocabArr.push(data[randomIndex]);
    }
    this.setState({ vocabArr });
    window.scrollTo({
      top: 0,
      behavior: "smooth"
  })
  }

  onVocabClick = (data) => {
    this.setState({ 
      selectedVocab: data,
      modalVisible: true,
    })
  }

  renderModal = () => {
    const { selectedVocab, modalVisible } = this.state;
    if (!modalVisible) return null;
    
    const { vocab, meaning, note } = selectedVocab;
    return (
      <div className="vocab-modal" onClick={() => this.setState({ modalVisible: false })}>
        <div className="inner-wrapper">
          <div className="vocab">{vocab}</div>
          <div className="meaning">{meaning}</div>
          <div className="note">{note}</div>
        </div>
      </div>
    )
  }

  render() {
    const { vocabArr, selectedVocab} = this.state;
    console.log(selectedVocab);
    return (
      <div className="vocab-reviewer">
        <div className="vocab-list">
          {
            vocabArr.map((item, index) => {
              return (
                <div className="vocab-card" key={index} onClick={() => this.onVocabClick(item)}>{item.vocab}</div>
              )
            })
          }
        </div>
        <div className="refresh-btn" onClick={this.getRandomVocab}>REFRESH</div>
        {this.renderModal()}
      </div>
    );
  }
}

export default VocabReviewer;
