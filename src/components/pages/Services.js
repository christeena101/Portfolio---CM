import React from 'react';
import '../../App.css';
import CardItem from '../CardItem.js'; // Assuming CardItem is imported

export default function Services() {
  return (
    <div>
      <h1 className='services'>PROJECTS</h1>

      <div className='cards'>
        <h1> Check Out My Projects Down Below!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/employ.png'
                text='Employ Management System'
                label='C# | SQL '
                path='/services' 
                gitLink='https://github.com/christeena101/Employ-Management-System'
                
              />
              </ul>
              <ul>
              <CardItem
                src='images/aracde.png'
                text='Arcade Game Box'
                label='Android Studio | Java'
                path='/services'
                gitLink='https://github.com/christeena101/Arcade-Game-Box'
              />
            </ul>
        
          </div>
        </div>
      </div>
    </div>
  );
}
