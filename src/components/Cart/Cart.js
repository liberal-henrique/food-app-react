import React from 'react';
import classes from './Cart.module.css';

export default function Cart() {
  const cartItems = <ul>{[
    { id: 'c1',
    name: 'Sushi',
    descriptions: 'Good',
    price: 35.99
  },
  ].map(item => <li>{item.name}</li>)}</ul>;

  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};
