import React, { Component } from 'react';

import './style.less';

class AudioList extends Component {

  renderList = (list) => {
    return (
      <ul>
        {
          list.map((item, index) => {
            return (
              <li key={index} style={{ fontSize: '20px', height: '30px'}}><span>{item.name}</span>  <span style={{ fontWeight: 'bolder'}}>{item.time}</span></li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    const dataString = '[{"name":"011 Briefing","duration":21},{"name":"056 International","duration":21},{"name":"089 Graphic detail","duration":22},{"name":"030 China","duration":27},{"name":"004 Leaders","duration":28},{"name":"019 The Americas","duration":28},{"name":"058 Business","duration":28},{"name":"040 Europe","duration":29},{"name":"076 Science and technology","duration":29},{"name":"022 Asia","duration":30},{"name":"082 Books and arts","duration":30},{"name":"013 United States","duration":31},{"name":"047 Britain","duration":31},{"name":"034 Middle East and Africa","duration":33},{"name":"066 Finance and economics","duration":33},{"name":"001 Introduction","duration":37},{"name":"027 Asia - Dress codes in Japan","duration":162},{"name":"043 Europe - German trains","duration":177},{"name":"086 Books and arts - New American fiction","duration":177},{"name":"038 Middle East and Africa - Media freedom","duration":185},{"name":"029 Asia - Extremism in Indonesia","duration":190},{"name":"081 Science and technology - Trick photography","duration":192},{"name":"087 Books and arts - Urban photography","duration":209},{"name":"090 Graphic detail - British universities","duration":229},{"name":"051 Britain - Polygraphs","duration":234},{"name":"062 Business - Data protection","duration":237},{"name":"073 Finance and economics - Regulating auditors","duration":250},{"name":"045 Europe - Money-laundering","duration":254},{"name":"060 Business - European industry","duration":260},{"name":"016 United States - Riding bulls","duration":262},{"name":"052 Britain - Nuclear power","duration":265},{"name":"053 Britain - Exporting health care","duration":268},{"name":"036 Middle East and Africa - Egypt_s new capital","duration":270},{"name":"050 Britain - Mike Ashley","duration":274},{"name":"032 China - The judiciary","duration":277},{"name":"080 Science and technology - Modern life","duration":279},{"name":"028 Asia - Politics in Afghanistan","duration":282},{"name":"061 Business - Bartleby","duration":287},{"name":"063 Business - Huawei","duration":289},{"name":"054 Britain - Teesside","duration":290},{"name":"074 Finance and economics - Unwinding quantitative easing","duration":292},{"name":"020 The Americas - Venezuela_s crisis","duration":295},{"name":"039 Middle East and Africa - Congo_s new president","duration":295},{"name":"079 Science and technology - Palaeontology","duration":315},{"name":"042 Europe - Germany_s economy","duration":316},{"name":"049 Britain - Brexit and Parliament","duration":318},{"name":"006 Leaders - Venezuela","duration":319},{"name":"071 Finance and economics - Italian banks","duration":321},{"name":"037 Middle East and Africa - Repression in Zimbabwe","duration":322},{"name":"068 Finance and economics - China_s economy","duration":331},{"name":"026 Asia - Education in India","duration":336},{"name":"078 Science and technology - Marine biology","duration":337},{"name":"085 Books and arts - Native American history","duration":337},{"name":"007 Leaders - Drones","duration":346},{"name":"015 United States - Democrats and democratic socialists","duration":346},{"name":"009 Leaders - Index funds","duration":347},{"name":"024 Asia - Banyan","duration":347},{"name":"003 The world this week - Business this week","duration":349},{"name":"044 Europe - Trying war crimes","duration":350},{"name":"084 Books and arts - The elite that failed","duration":359},{"name":"072 Finance and economics - Buttonwood","duration":363},{"name":"008 Leaders - Democratic Republic of Congo","duration":378},{"name":"064 Business - Ofo","duration":380},{"name":"025 Asia - South Korea_s judiciary","duration":382},{"name":"002 The world this week - Politics this week","duration":395},{"name":"055 Britain - Bagehot","duration":434},{"name":"048 Britain - Theresa May_s government","duration":435},{"name":"017 United States - Foxconn in Wisconsin","duration":440},{"name":"070 Finance and economics - Benchmark interest rates","duration":441},{"name":"069 Finance and economics - Monetary policy in Africa","duration":447},{"name":"067 Finance and economics - Cyber-insurance","duration":447},{"name":"046 Europe - Charlemagne","duration":451},{"name":"088 Obituary - Marcel Azzola","duration":451},{"name":"018 United States - Lexington","duration":458},{"name":"033 China - Chaguan","duration":462},{"name":"065 Business - Schumpeter","duration":469},{"name":"023 Asia - Defending Taiwan","duration":474},{"name":"075 Finance and economics - Free exchange","duration":477},{"name":"014 United States - Early education","duration":493},{"name":"021 The Americas - Murder in Brazil","duration":505},{"name":"035 Middle East and Africa - Binyamin Netanyahu and the press","duration":516},{"name":"010 Letters - On housing_ Europe_ Britain_ Pakistan_ the military_ Chairman Mao","duration":525},{"name":"031 China - Foreign students","duration":525},{"name":"005 Leaders - Global business","duration":563},{"name":"041 Europe - Battling superbugs","duration":579},{"name":"077 Science and technology - Combating drones","duration":595},{"name":"083 Books and arts - Political theory","duration":600},{"name":"059 Business - Reliance Jio","duration":701},{"name":"057 International - Sport and safety","duration":731},{"name":"012 Briefing - Slowbalisation","duration":1778}]';
    const data = JSON.parse(dataString);
    console.log(data)

    data.forEach(item => {
      const min = Math.floor(item.duration / 60);
      const second = item.duration % 60 < 10 ? '0' + item.duration % 60 : item.duration % 60;
      item.time = min + ':' + second;
    });

    const short = data.filter(item => item.duration > 60 && item.duration <= 360);
    const medium = data.filter(item => item.duration > 360 && item.duration <= 480);
    const long = data.filter(item => item.duration > 480 );

    return (
      <div>  
        <h2>too short({short.length})</h2>
        {this.renderList(short)}
        <h2>appropriate({medium.length})</h2>
        {this.renderList(medium)}
        <h2>too long({long.length})</h2>
        {this.renderList(long)}
      </div>
    );
  }
}

export default AudioList;
