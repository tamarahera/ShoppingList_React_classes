import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ShopAdd from '../shopAdd/ShopAdd';
import ShopFilter from '../shopFilter/ShopFilter';
import ShopFind from '../shopFind/ShopFind';
import { ShopList, InitTitle, NoMatchTitle } from '../shopList/ShopList';
import ShopTotal from '../shopTotal/ShopTotal';
import Footer from '../footer/Footer';

import './app.scss';

const dataItems = [
  /* {
    name: 'Bananas', 
    amount: 2, 
    price: 3,
    checked: false, 
    important: false,
    id: uuidv4()
  },
  {
    name: 'Cat`s food', 
    amount: 5, 
    price: 10,
    checked: false, 
    important: true,
    id: uuidv4()
  },
  {
    name: 'Bread', 
    amount: 4, 
    price: 8,
    checked: false, 
    important: false,
    id: uuidv4()
  },
  {
    name: 'Milk', 
    amount: 3, 
    price: 6,
    checked: true, 
    important: false,
    id: uuidv4()
  } */
];


const App = () => {
  return (
    <div className='app'>
      <header>
        <h1 className='app__header'>Shopping list</h1>
      </header>
      <main className='container'>
        <section className='search'>
          <ShopFind/>
          <ShopFilter/>
        </section>
        <section className='list'>
          <ShopList/>
        </section>
        <ShopAdd/>
        <ShopTotal/>
      </main>
      <Footer />
    </div>
  );
}

export default App;