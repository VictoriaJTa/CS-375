import React from 'react';
import PropTypes from 'prop-types';


function List(props) {
  const ComponentToRender = props.component;
  const ToggleItem = props.toggleItem;
  let content = <div />;  

  // If we have items, render them
  try {
    if (props.items) {
      content = props.items.map((item, index) => (
        <ComponentToRender key={index} item={item} toggleItem={ToggleItem} />
      ));
    } else {
      // Otherwise render a single component
      content = <ComponentToRender />;
    }
  
  } catch(error) {
    content = <li>Add something to the cart</li>
  }
  
  return (
      <div>
          <ul>{content}</ul>
      </div>  
  );
}

List.propTypes = {
  component: PropTypes.elementType.isRequired,
  items: PropTypes.array,
  onClickHandler: PropTypes.func,
};


export default List;
