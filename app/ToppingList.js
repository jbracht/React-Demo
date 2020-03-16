import React from 'react';
import Topping from './Topping';

class ToppingList extends React.Component {
  constructor() {
    super();
    this.state = {
      // the default selected topping:
      selectedTopping: 'cheese'
    };
    this.changeSelectedTopping = this.changeSelectedTopping.bind(this);
  }

  componentDidMount() {
    console.log('<ToppingList> is mounted! Here is the initial state:');
    console.log(this.state);
  }

  changeSelectedTopping(topping) {
    console.log('in changeSelectedTopping');
    this.setState({
      selectedTopping: topping
    });
  }

  render() {
    console.log('<ToppingList> rendered!');

    return (
      <div>
        <h1>The selected pizza topping is: {this.state.selectedTopping}</h1>
        <Topping type="cheese" selectedTopping={this.state.selectedTopping} changeSelectedTopping={this.changeSelectedTopping} />
        <Topping type="broccoli" selectedTopping={this.state.selectedTopping} changeSelectedTopping={this.changeSelectedTopping} />
        <Topping type="anchovies" selectedTopping={this.state.selectedTopping} changeSelectedTopping={this.changeSelectedTopping} />
      </div>
    );
  }
}

export default ToppingList;
