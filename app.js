import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name:'にんじゃわんこ'};
  }
  handleClick(name){
    this.setState({name:name});
  }

  render(){
    console.log(this.state);
    return(
      <div>
        <h1>こんにちは、{this.state.name}さん！</h1>
        {/* <button onClick={() => {console.log('ひつじ仙人')}}>ひつじ仙人</button> */}
        {/* <button onClick={() => {this.setState({name:'ひつじ仙人'})}}>ひつじ仙人</button> */}
        <button onClick={() => {this.handleClick('ひつじ仙人')}}>ひつじ仙人</button>
        <button onClick={() => {console.log('忍者わんこ')}}>忍者わんこ</button>
      </div>
    );
  }
}
export default App;