import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function PublicationCards() {
  /*TeamCards creates the cards displayed on the publication page, using calls to Cards.css*/
  const linkUrls = [
    'https://pubmed.ncbi.nlm.nih.gov/38938652/',
    'https://pubmed.ncbi.nlm.nih.gov/38759654/',
    'https://www.biorxiv.org/content/10.1101/2022.07.08.499233v1.full',
    'https://pubmed.ncbi.nlm.nih.gov/33002105/',
    'https://pubmed.ncbi.nlm.nih.gov/32763147/',
    'https://pubmed.ncbi.nlm.nih.gov/30480100/',
    'https://pubmed.ncbi.nlm.nih.gov/29086457/',
    'https://pubmed.ncbi.nlm.nih.gov/27642787/',
    'https://pubmed.ncbi.nlm.nih.gov/26906959/',
    'https://pubmed.ncbi.nlm.nih.gov/24930130/',
    'https://pubmed.ncbi.nlm.nih.gov/24141327/',
    'https://pubmed.ncbi.nlm.nih.gov/23290139/',
    'https://pubmed.ncbi.nlm.nih.gov/23207961/',
    'https://pubmed.ncbi.nlm.nih.gov/22517884/',
    'https://pubmed.ncbi.nlm.nih.gov/21943413/',
    'https://pubmed.ncbi.nlm.nih.gov/16784327/',
    'https://pubmed.ncbi.nlm.nih.gov/16542683/',
  ];

  const cardData = [
    {
      src: 'images/pubmed.jpg',
      text: 'Blood vessels in a dish: the evolution, challenges, and potential of vascularized tissues and organoids',
      label: '2024',
      link: linkUrls[0],
    },
    {
      src: 'images/pubmed.jpg',
      text: 'Bioengineering methods for vascularizing organoids',
      label: '2024',
      link: linkUrls[1],
    },
    {
      src: 'images/bioxriv.jpg',
      text: 'Micropatterned Organoids Enable Modeling of the Earliest Stages of Human Cardiac Vascularization',
      label: '2022',
      link: linkUrls[2],
    },
    {
      src: 'images/pubmed.jpg',
      text: 'Transcriptome analysis of non human primate-induced pluripotent stem cell-derived cardiomyocytes in 2D monolayer culture vs. 3D engineered heart tissue',
      label: '2020',
      link: linkUrls[3],
    },
    {
      src: 'images/pubmed.jpg',
      text: 'Endogenous Retrovirus-Derived lncRNA BANCR Promotes Cardiomyocyte Migration in Humans and Non-human Primates',
      label: '2020',
      link: linkUrls[4],
    },
    {
      src: 'images/pubmed.jpg',
      text: 'Big bottlenecks in cardiovascular tissue engineering',
      label: '2018',
      link: linkUrls[5],
    },
    {
      src: 'images/pubmed.jpg',
      text: 'Passive Stretch Induces Structural and Functional Maturation of Engineered Heart Muscle as Predicted by Computational Modeling',
      label: '2017',
      link: linkUrls[6],
    },
    {
      src: 'images/pubmed.jpg',
      text: 'iPSC-derived cardiomyocytes reveal abnormal TGF-β signalling in left ventricular non-compaction cardiomyopathy',
      label: '2016',
      link: linkUrls[7],
    },
    {
      src: 'images/pubmed.jpg',
      text: 'Stem cell reprogramming: A 3D boost',
      label: '2016',
      link: linkUrls[8],
    },
    {
      src: 'images/pubmed.jpg',
      text: 'Chemically defined generation of human cardiomyocytes',
      label: '2014',
      link: linkUrls[9],
    },
    {
      src: 'images/pubmed.jpg',
      text: 'Robust pluripotent stem cell expansion and cardiomyocyte differentiation via geometric patterning',
      label: '2013',
      link: linkUrls[10],
    },
    {
      src: 'images/pubmed.jpg',
      text: 'Abnormal calcium handling properties underlie familial hypertrophic cardiomyopathy pathology in patient-specific induced pluripotent stem cells',
      label: '2013',
      link: linkUrls[11],
    },
    {
      src: 'images/pubmed.jpg',
      text: 'Label-free electrophysiological cytometry for stem cell-derived cardiomyocyte clusters',
      label: '2012',
      link: linkUrls[12],
    },
    {
      src: 'images/pubmed.jpg',
      text: 'Patient-specific induced pluripotent stem cells as a model for familial dilated cardiomyopathy',
      label: '2012',
      link: linkUrls[13],
    },
    {
      src: 'images/pubmed.jpg',
      text: 'Multiscale computational models for optogenetic control of cardiac function',
      label: '2011',
      link: linkUrls[14],
    },
    {
      src: 'images/pubmed.jpg',
      text: 'P19 progenitor cells progress to organized contracting myocytes after chemical and electrical stimulation: implications for vascular tissue engineering',
      label: '2006',
      link: linkUrls[15],
    },
    {
      src: 'images/pubmed.jpg',
      text: 'A novel culture system shows that stem cells can be grown in 3D and under physiologic pulsatile conditions for tissue engineering of vascular grafts',
      label: '2006',
      link: linkUrls[16],
    },
  ];

  const handleCardClick = (url) => {
    window.open(url, '_blank');
  };

  const renderCardItems = () => {
    const cardItems = [];
    for (let i = 0; i < cardData.length; i += 3) {
      const items = cardData.slice(i, i + 3).map((card, index) => (
        <CardItem
          key={index}
          src={card.src}
          text={card.text}
          label={card.label}
          onClick={() => handleCardClick(card.link)}
        />
      ));
      cardItems.push(<ul className='cards__items' key={i}>{items}</ul>);
    }
    return cardItems;
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

export default PublicationCards;
