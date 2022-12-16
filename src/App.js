import React, { useState } from 'react';

import Header from '../src/components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() { 
  const [iscartIsShown, setIsCartIsShown] = useState(false);

  const showCartHandler = () => {
    setIsCartIsShown(true);
  }

  const hideCartHandler = () => {
    setIsCartIsShown(false);
  }

  return (
    <>
      { iscartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
