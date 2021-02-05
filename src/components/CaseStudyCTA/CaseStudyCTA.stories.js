import { select } from '@storybook/addon-knobs';

const cardContents = [
  {
    eyebrow: 'Client Name',
    heading: 'Succinct headline that entices you to read the whole thing',
    imageMain: 'img/services/digital-transformation.svg',
    imageBg: 'img/services/digital-transformation.svg',
    cta: 'View case study'
  },
  {
    eyebrow: 'Client Name',
    heading: 'Succinct headline that entices you to read the whole thing',
    imageMain: 'img/services/digital-transformation.svg',
    imageBg: 'img/services/digital-transformation.svg',
    cta: 'View case study'
  },
  {
    eyebrow: 'Client Name',
    heading: 'Succinct headline that entices you to read the whole thing',
    imageMain: 'img/services/digital-transformation.svg',
    imageBg: 'img/services/digital-transformation.svg',
    cta: 'View case study'
  }
];

const types = ['card', 'full width'];

const caseStudyCard = input => {
  const cardType = select('Card type', types, 'card');

  return `
    <div class="tco-card tco-card--case-study">
      <a href="#" class="tco-card-link">
        <div class="tco-card-image-container tco-card-image-container--case-study">
          <img class="tco-card-image" alt="A brilliant description of the image" src="${input.image}" />
        </div>
        <div class="tco-card-content-container">
          <h3 class="tco-card-content-heading">${input.heading}</h3>
          <p class="tco-card-content-description">${input.description}</p>
        </div>
      </a>
    </div>
  `;
};

export const Default = () => {
  return `
    <div class="tco-container-wrapper">
      <div class="tco-container">
        <div class="tco-card-grid tco-card-grid--case-study tco-card-grid--3-column">
          ${cardContents.map(item => caseStudyCard(item)).join('')}
        </div>
      </div>
    </div>
  `;
};

export default {
  title: 'Components / Service Card Grid'
};
