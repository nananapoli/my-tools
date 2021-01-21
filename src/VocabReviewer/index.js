import React, { Component } from 'react';

import data from './data';

import './index.less';

/*
  todo:
    - 增加react-route，做成SPA
    - 发布到github，支持远端查看
    - 简化更新流程
*/

class VocabReviewer extends Component {
  state = {
    vocabArr: [],
    selectedVocab: null,
    modalVisible: false,
  }

  componentDidMount() {
    this.getRandomVocabShuffle();
  }

  getRandomVocabShuffle = () => {
    const newData = data.sort(() => Math.random() - 0.5);
    const vocabArr = newData.slice(0, 12)
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
    
    let { vocab, meaning, note } = selectedVocab;
    note = note.replace(new RegExp('\n','g'), '<br/>')
    note = note.replace(new RegExp(vocab,'ig'), `<b>${vocab}</b>`)
    
    return (
      <div className="vocab-modal" onClick={() => this.setState({ modalVisible: false })}>
        <div className="inner-wrapper">
          <div className="vocab">{vocab}</div>
          <div className="meaning">{meaning}</div>
          <div className="note" dangerouslySetInnerHTML={{ __html: note }} />
        </div>
      </div>
    )
  }

  render() {
    const { vocabArr } = this.state;
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
        <div className="refresh-btn" onClick={this.getRandomVocabShuffle}>REFRESH</div>
        {this.renderModal()}
      </div>
    );
  }
}

export default VocabReviewer;
