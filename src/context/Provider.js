import React, { Component } from 'react';
import MyContext from './context';
import PropTypes from 'prop-types';

class Provider extends Component {
  constructor(){
    super()
    this.state = {
      redCar: false,
      blueCar: false,
      yellowCar: false,
    }
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(color, moveCar) {
    this.setState((prevState)=> ({
      ...prevState,
      [`${color}Car`]: moveCar
    }))
  }

  render() {
    const stateObj = ({ ...this.state, 'moveCar':this.moveCar })
    const { children } = this.props;
    return(
      <MyContext.Provider value={stateObj}>
      { children }
      </MyContext.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.object
}.isRequired

export default Provider;