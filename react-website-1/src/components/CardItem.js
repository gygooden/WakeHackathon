import React from 'react';
import './Cards.css'; 
import './Footer.css'; 

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
          <div className='cards__item__pic-wrap' data-category={props.label}>
            <div className='card__image-container'>
              <img
                className='cards__item__img'
                alt={props.alt || 'Team member'}
                src={props.src}
              />
            </div>
          </div>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <p className='card_item_team_descriptions'>{props.description}</p>
            <div className='social-icons'>
              {props.linkedin && (
                <a
                  className='social-icon-link linkedin'
                  href={props.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='LinkedIn'
                >
                  <i className='fab fa-linkedin' />
                </a>
              )}
              {props.twitter && (
                <a
                  className='social-icon-link twitter'
                  href={props.twitter}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Twitter'
                >
                  <i className='fab fa-twitter' />
                </a>
              )}
              {props.email && (
                <a
                  className='social-icon-link email'
                  href={`mailto:${props.email}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Email'
                >
                  <i className='fas fa-envelope' />
                </a>
              )}
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
