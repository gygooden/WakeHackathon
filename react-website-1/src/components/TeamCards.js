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
              src='images/Oscar.jpg'
              text='Oscar Abilez, Md, PhD (Co-founder)'
              label='Co-founder'
              description={
                <div>
                  <ul className='bulleted_list'>
                    <li>Organoids, software, hardware</li>
                    <li>MD - Cornell, PhD - Stanford, Bioengineering</li>
                    <li>Stanford - Surgery Resident, Instructor (NIH K01), Senior Scientist</li>
                    <li>Research of 15+ yrs is basis for Bullseye</li>
                  </ul>
                </div>
              }
              linkedin='https://www.linkedin.com/in/oscarabilez/'
              twitter='https://x.com/oscarabilez'
              email='oscar@bullseyebio.com'
            />

            <CardItem
              src='images/Frankie.jpg'
              text='Frankie Myers, PhD (Co-founder)'
              label='Co-founder'
              description={
                <div>
                  <ul className='bulleted_list'>
                    <li>Organoids, software, hardware</li>
                    <li>PhD - UC Berkeley, Bioengineering</li>
                    <li>Mosaic Design Labs - Principal</li>
                    <li>Lucira Health - Director of Engineering</li>
                  </ul>
                </div>
              }
              linkedin='https://www.linkedin.com/in/frankiemyers/'
              twitter='https://x.com/fbmyers'
              email='frankie@bullseyebio.com'
            />
          </ul>
          
          <ul className='cards__items'>
            <CardItem
              src='images/Andy.jpg'
              text='Andy Gooden, MSEE (Co-founder)'
              label='Co-founder'
              description={
                <div>
                  <ul className='bulleted_list'>
                    <li>Software (AI/ML), hardware</li>
                    <li>MS - Stanford, Electrical Engineering & Computer Science</li>
                    <li>OpenX - Staff Data Scientist</li>
                    <li>Hewlett Packard - Lead Image Processing Engineer</li>
                  </ul>
                </div>
              }
              linkedin='https://www.linkedin.com/in/andy-gooden-1b891a3/'
              email='andy@bullseyebio.com'
            />

            <CardItem
              src='images/Grayson.jpg'
              text='Grayson Gooden, Student (Engineering Intern)'
              label='Intern'
              description={
                <div>
                  <ul className='bulleted_list'>
                    <li>Pursuing BS - Wake Forest, Computer Science and Finance</li>
                  </ul>
                </div>
              }
              linkedin='https://www.linkedin.com/in/grayson-gooden-48148924a/'
              email='gygooden@bullseyebio.com'
            />
            {/*
            <CardItem
              src='images/Andy.jpg'
              text='Intern, Student (Engineering Intern)'
              label='Intern'
              description={
                <div>
                  <ul className='bulleted_list'>
                    <li>Lorem Ipsum</li>
                  </ul>
                </div>
              }
              linkedin='https://www.linkedin.com/in/frankiemyers/'
              twitter='https://twitter.com/frankiemyers'
              email='frankie@example.com'
            />

            <CardItem
              src='images/Andy.jpg'
              text='Intern, Student (Engineering Intern)'
              label='Intern'
              description={
                <div>
                  <ul className='bulleted_list'>
                    <li>Lorem Ipsum</li>
                  </ul>
                </div>
              }
              linkedin='https://www.linkedin.com/in/frankiemyers/'
              twitter='https://twitter.com/frankiemyers'
              email='frankie@example.com'
            />
            */}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default TeamCards;