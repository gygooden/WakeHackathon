import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  const linkUrl1 = 'https://pubmed.ncbi.nlm.nih.gov/38938652/';
  const linkUrl2 = 'https://pubmed.ncbi.nlm.nih.gov/38759654/';

const handleCardClick = (url) => {
    window.open(url, '_blank');
};
  return (
    <div className='cards'>
      <h1>Relevant Publications</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='images/pubmed.jpg'
              text='Blood vessels in a dish: the evolution, challenges, and potential of vascularized tissues and organoids (2024)'
              label='Abilez, et al'
              onClick={() => handleCardClick(linkUrl1)}
            />
            <CardItem
              src='images/pubmed.jpg'
              text='Bioengineering methods for vascularizing organoids (2024)'
              label='Abilez,et al'
              onClick={() => handleCardClick(linkUrl2)}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
