import { select, object } from '@storybook/addon-knobs';

const cardContents = [
  {
    id: 'wawa',
    eyebrow: 'Wawa',
    heading: 'Succinct headline that entices you to read the whole thing',
    device: 'kiosk-2',
    imageBg: 'img/case-studies/nemours-background.jpg',
    description:
      'Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum',
    cta: 'View case study',
    opacity: 0.9
  },
  {
    id: 'nemours',
    eyebrow: 'Nemours',
    heading: 'Succinct headline that entices you to read the whole thing',
    device: 'phone',
    imageBg: 'img/case-studies/nemours-background.jpg',
    description:
      'Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum',
    cta: 'View case study',
    opacity: 0.9
  },
  {
    id: 'comcast',
    eyebrow: 'Comcast Corporate',
    heading: 'Succinct headline that entices you to read the whole thing',
    device: 'desktop',
    imageBg: 'img/case-studies/nemours-background.jpg',
    description:
      'Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum',
    cta: 'View case study',
    opacity: 0.9
  },
  {
    id: 'retail360',
    eyebrow: 'Comcast Retail360',
    heading: 'Succinct headline that entices you to read the whole thing',
    device: 'tablets',
    imageBg: 'img/case-studies/nemours-background.jpg',
    description:
      'Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum',
    cta: 'View case study',
    offset: 'bottom',
    opacity: 0.9
  },
  {
    id: 'merck',
    eyebrow: 'Merck',
    heading: 'Succinct headline that entices you to read the whole thing',
    device: 'desktop',
    imageBg: 'img/case-studies/nemours-background.jpg',
    description:
      'Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum',
    cta: 'View case study',
    opacity: 0.9
  },
  {
    id: 'policy-map',
    eyebrow: 'Policymap',
    heading: 'Succinct headline that entices you to read the whole thing',
    device: 'laptop',
    imageBg: 'img/case-studies/nemours-background.jpg',
    description:
      'Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum',
    cta: 'View case study',
    opacity: 0.9
  },
  {
    id: 'einstein',
    eyebrow: 'Comcast Einstein',
    heading: 'Succinct headline that entices you to read the whole thing',
    device: 'desktop',
    imageBg: 'img/case-studies/nemours-background.jpg',
    description:
      'Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum',
    cta: 'View case study',
    opacity: 0.9
  },
  {
    id: 'janney',
    eyebrow: 'Janney',
    heading: 'Succinct headline that entices you to read the whole thing',
    device: 'tablet-angle',
    imageBg: 'img/case-studies/nemours-background.jpg',
    description:
      'Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum',
    cta: 'View case study',
    opacity: 0.9
  },
  {
    id: 'abc',
    eyebrow: 'ABC',
    heading: 'Succinct headline that entices you to read the whole thing',
    device: 'laptop-angle',
    imageBg: 'img/case-studies/nemours-background.jpg',
    description:
      'Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum',
    cta: 'View case study',
    opacity: 0.9
  },
  {
    id: 'abc',
    eyebrow: 'Amerisource Bergen',
    heading: 'Succinct headline that entices you to read the whole thing',
    device: 'desktop-angle',
    imageBg: 'img/case-studies/nemours-background.jpg',
    description:
      'Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum',
    cta: 'View case study',
    opacity: 0.9
  },
  {
    id: 'nemours',
    eyebrow: 'Jackson',
    heading: 'Succinct headline that entices you to read the whole thing',
    device: 'report',
    imageBg: 'img/case-studies/nemours-background.jpg',
    description:
      'Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum',
    cta: 'View case study',
    opacity: 0.9
  }
];

const groupId = 'casestudies';

const types = ['card', 'full-width'];

const caseStudyCard = input => {
  const cardType = select('Card type', types, 'card');

  return `
    <div class="tco-card tco-card--case-study tco-card--case-study-${cardType} tco-card--case-study-${
    input.id
  }">
      <a href="#" class="tco-card-link">
        <div class="tco-case-study-image-container tco-case-study-image-container--case-study tco-case-study-image-container--${
          input.device
        }">
          <img class="tco-case-study-image tco-case-study-image--main" alt="A brilliant description of the image" src="img/case-studies/${
            input.device
          }.png" />
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
            <p class="tco-card-content-description">${input.description}</p>`
              : `<p class="tco-card-content-description"></p>`
          }
          <span class="tco-text-link">
            ${input.cta}
            <svg class="tco-text-link-icon" width="20" height="20" viewBox="0 0 20 20" role="presentation">
              <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </span>
        </div>
        <div class="tco-case-study-image-container tco-case-study-image-container--case-study-bg" style="--bg-alpha:${
          input.opacity
        };">
          <img class="tco-case-study-image tco-case-study-image--bg" alt="" src="${
            input.imageBg
          }" />
        </div>

      </a>
    </div>
  `;
};

export const Default = () => {
  const cardType = select('Card type', types, 'full-width');
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
