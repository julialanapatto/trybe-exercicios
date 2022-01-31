import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    };

    this.printTextOne = this.printTextOne.bind(this);
    this.printTextTwo = this.printTextTwo.bind(this);
    this.printTextThree = this.printTextThree.bind(this);
  }

  printTextOne() {
    this.setState(({ clicksBtnOne }) => ({
      clicksBtnOne: clicksBtnOne + 1,
    }), () => {
      console.log(`Botão 1 ${this.changeColor(this.state.clicksBtnOne)}`);
    });
  }

  printTextTwo() {
    this.setState(({ clicksBtnTwo }) => ({
      clicksBtnTwo: clicksBtnTwo + 1,
    }), () => {
      console.log(`Botão 2 ${this.changeColor(this.state.clicksBtnTwo)}`);
    });
  }
  
  printTextThree() {
    this.setState(({ clicksBtnThree }) => ({
      clicksBtnThree: clicksBtnThree + 1,
    }), () => {
      console.log(`Botão 3 ${this.changeColor(this.state.clicksBtnThree)}`);
    });
  }

  changeColor(num) {
    return num % 2 === 0? 'green' : 'white';
  }

  render() {
    const {clicksBtnOne, clicksBtnTwo, clicksBtnThree} = this.state;
    return (
      <div>

      <button onClick={this.printTextOne}
      style={{ backgroundColor: this.changeColor(clicksBtnOne)}}
      > Botão 1 | Count = {clicksBtnOne}
      </button>

      <button onClick={this.printTextTwo}
      style={{ backgroundColor: this.changeColor(clicksBtnTwo)}}
      > Botão 2 | Count = {clicksBtnTwo}
      </button>

      <button onClick={this.printTextThree}
      style={{ backgroundColor: this.changeColor(clicksBtnThree)}}
      > Botão 3 | Count = {clicksBtnThree}
      </button>

    </div>
    );
  }
}

export default App;
