import React from 'react';
import './Cards.css'; 
import CardItem from './CardItem';

function TeamCards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Max.png'
              text='Max Finegan, PhD (Owner)'
              label='Owner'
              description={
                <div>
                  <ul className='bulleted_list'>
                    <li>Benches 405, Supermodel, International Mystery Man</li>
                    <li>Pursuing BS - Wake Forest, Computer Science</li>
                    <li>Oversaw backend development</li>
                  </ul>
                </div>
              }
              linkedin='https://www.linkedin.com/in/maxfinegan/'
              github='https://github.com/mfinegan23'
              email='finems23@wfu.edu'
            />
          </ul>
          <CardItem
            src='images/Grayson1.png'
            text='Grayson Gooden, Student (Intern)'
            label='Lowly Intern'
            description={
              <div>
                <ul className='bulleted_list'>
                  <li>Pursuing BS - Wake Forest, Computer Science and Mathematics</li>
                  <li>Oversaw frontend development and integration</li>
                </ul>
              </div>
            }
            linkedin='https://www.linkedin.com/in/grayson-gooden-48148924a/'
            github='https://github.com/gygooden'
            email='goodgy24@wfu.edu'
          />
        </div>
      </div>
    </div>
  );
}

export default TeamCards;
