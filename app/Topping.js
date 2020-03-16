import React from 'react';

const Topping = (props) => {
  console.log('PROPS', props);

  // set 'isUnderlined' to reflect if i am the selectedTopping
  let isUnderlined = (props.type === props.selectedTopping) ? 'underlined' : '';

  return (
  <li
    className={isUnderlined}
    onClick={() => {
      props.changeSelectedTopping(props.type);
    }}>
    {props.type}
  </li>);
};

export default Topping;
