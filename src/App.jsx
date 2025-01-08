import React from 'react';
import './App.css';
import Baupro from './components/Baupro/Baupro';

const App = () => {
  const tariffsData = [
    {
      type: 'standart',
      title: 'Стандарт',
      discounts: ['', '', 'скидка', 'скидка'],
      prices: [
        { time: '1 час', default: 140, monWed: 110, morning: 90 },
        { time: '3 часа', default: 390, monWed: 310, morning: 270 },
        { time: '5 часов', default: 490, monWed: 390, morning: 340 },
        { time: '7 часов', default: 590, monWed: 470, morning: 390 },
        { time: 'Ночь', default: 690, monWed: 550, morning: '' },
        { time: 'День', default: 790, monWed: 630, morning: '' },
      ],
    },
    {
      type: 'standartplus',
      title: 'Стандарт +',
      discounts: ['', '', 'скидка', 'скидка'],
      prices: [
        { time: '1 час', default: 240, monWed: 190, morning: 160 },
        { time: '3 часа', default: 490, monWed: 390, morning: 340 },
        { time: '5 часов', default: 690, monWed: 550, morning: 480 },
        { time: '7 часов', default: 790, monWed: 630, morning: '' },
        { time: 'Ночь', default: 890, monWed: 710, morning: '' },
        { time: 'День', default: 990, monWed: 790, morning: '' },
      ],
    },
    {
      type: 'bootcamp',
      title: 'Boot Camp',
      discounts: ['', '', 'скидка', 'скидка'],
      prices: [
        { time: '1 час', default: 140, monWed: 110, morning: 90 },
        { time: '3 часа', default: 390, monWed: 310, morning: 270 },
        { time: '5 часов', default: 490, monWed: 390, morning: 340 },
        { time: '7 часов', default: 590, monWed: 470, morning: 390 },
        { time: 'Ночь', default: 690, monWed: 550, morning: '' },
        { time: 'День', default: 790, monWed: 630, morning: '' },
      ],
    },
    
  ];

  return (
    <>
      <Baupro tariffs={tariffsData} />
    </>
  );
};

export default App;
