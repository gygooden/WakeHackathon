import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function RelevantWork() {
  const cardData = [
    {
      src: 'images/GithubLogo.png',
      text: 'Iron Grip, a Workout Tracking Application',
      label: '2024',
      github: 'https://github.com/gygooden/IronGrip',
    },
  ];

  const renderCardItems = () => {
    return cardData.map((card, index) => (
      <ul className='cards__items' key={index}>
        <CardItem
          key={index}
          src={card.src}
          text={card.text}
          label={card.label}
          github={card.github} // Pass GitHub link as a prop
        />
      </ul>
    ));
  };

  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {renderCardItems()}
        </div>
      </div>
    </div>
  );
}

export default RelevantWork;
