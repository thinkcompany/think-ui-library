import { select, object } from '@storybook/addon-knobs';

const cardContents = [
  {
    id: 'nemours',
    eyebrow: 'Nemours',
    heading: 'Succinct headline that entices you to read the whole thing',
    imageMain: 'img/case-studies/nemours-mockup.png',
    imageBg: 'img/case-studies/nemours-background.jpg',
    description:
      'Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum',
    cta: 'View case study',
    offset: 'bottom'
  },
  {
    id: 'comcast',
    eyebrow: 'Comcast Corporate',
    heading: 'Succinct headline that entices you to read the whole thing',
    imageMain: 'img/case-studies/nemours-mockup.png',
    imageBg: 'img/case-studies/nemours-background.jpg',
    description:
      'Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum',
    cta: 'View case study',
    offset: 'bottom'
  },
  {
    id: 'merck',
    eyebrow: 'Merck',
    heading: 'Succinct headline that entices you to read the whole thing',
    imageMain: 'img/case-studies/nemours-mockup.png',
    imageBg: 'img/case-studies/nemours-background.jpg',
    description:
      'Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum',
    cta: 'View case study',
    offset: 'bottom'
  },
  {
    id: 'retail360',
    eyebrow: 'Retail 360',
    heading: 'Succinct headline that entices you to read the whole thing',
    imageMain: 'img/case-studies/nemours-mockup.png',
    imageBg: 'img/case-studies/nemours-background.jpg',
    description:
      'Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum',
    cta: 'View case study',
    offset: 'bottom'
  },
  {
    id: 'policy-map',
    eyebrow: 'Policy Map',
    heading: 'Succinct headline that entices you to read the whole thing',
    imageMain: 'img/case-studies/nemours-mockup.png',
    imageBg: 'img/case-studies/nemours-background.jpg',
    description:
      'Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum',
    cta: 'View case study',
    offset: 'bottom'
  },
  {
    id: 'einstein',
    eyebrow: 'Einstein',
    heading: 'Succinct headline that entices you to read the whole thing',
    imageMain: 'img/case-studies/nemours-mockup.png',
    imageBg: 'img/case-studies/nemours-background.jpg',
    description:
      'Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum',
    cta: 'View case study',
    offset: 'bottom'
  },
  {
    id: 'janney',
    eyebrow: 'Janney',
    heading: 'Succinct headline that entices you to read the whole thing',
    imageMain: 'img/case-studies/nemours-mockup.png',
    imageBg: 'img/case-studies/nemours-background.jpg',
    description:
      'Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum',
    cta: 'View case study',
    offset: 'bottom'
  },
  {
    id: 'abc',
    eyebrow: 'ABC',
    heading: 'Succinct headline that entices you to read the whole thing',
    imageMain: 'img/case-studies/nemours-mockup.png',
    imageBg: 'img/case-studies/nemours-background.jpg',
    description:
      'Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum',
    cta: 'View case study',
    offset: 'bottom'
  }
];

const groupId = 'casestudies';

const types = ['card', 'full-width'];

const caseStudyCard = input => {
  const cardType = select('Card type', types, 'card');
  const headingSize =
    cardType === 'full-width' ? 'body--large' : 'display-small';

  return `
    <div class="tco-card tco-card--case-study tco-card--case-study-${cardType} tco-card--case-study-${
    input.id
  }">
      <a href="#" class="tco-card-link">
        <div class="tco-card-image-container tco-card-image-container--case-study">
          <img class="tco-card-image tco-card-image--main tco-card-image-offset--${
            input.offset
          }" alt="A brilliant description of the image" src="${
    input.imageMain
  }" />
        </div>
        <div class="tco-card-content-container tco-card-content-container--${cardType} ">
          ${
            input.eyebrow
              ? '<span class="tco-card-eyebrow">' + input.eyebrow + '</span>'
              : ''
          }
          <h2 class="tco-card-content-heading">${input.heading}</h2>
          ${
            cardType === 'full-width'
              ? `
            <p class="tco-card-content-description">${input.description}</p>
          `
              : ''
          }
          <span class="tco-text-link">
            ${input.cta}
            <svg class="tco-text-link-icon" width="20" height="20" viewBox="0 0 20 20" role="presentation">
              <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </span>
        </div>
        <div class="tco-card-image-container tco-card-image-container--case-study-bg">
          <img class="tco-card-image tco-card-image--bg" alt="" src="${
            input.imageBg
          }" />
        </div>

      </a>
    </div>
  `;
};

export const Default = () => {
  const cardType = select('Card type', types, 'card');
  const gridType = cardType === 'card' ? '2' : '1';
  const itemList = object('Case Studies', cardContents, groupId);

  return `
    <div class="tco-container-wrapper tco-container-wrapper--bleed">
      <div class="tco-container">
        <div class="tco-card-grid tco-card-grid--case-study tco-card-grid--${gridType}-column">
          ${itemList.map(item => caseStudyCard(item)).join('')}
        </div>
      </div>
    </div>
  `;
};

export default {
  title: 'Components / Case Study Cards'
};
