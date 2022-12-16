import React from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

export default function MealItemForm(props){

   const addHandlerFormInput = (event) => {
    event.preventDefault();
    console.log("Add one")
   }

  return (
    <form className={classes.form} onSubmit={addHandlerFormInput}>
      <Input label="Amount" input={{
        id: 'amount' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
      }}/>
      <button onChange={addHandlerFormInput}>+ Add</button>
    </form>
  );
}
