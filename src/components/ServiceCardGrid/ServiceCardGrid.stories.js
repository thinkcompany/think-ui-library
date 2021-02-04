import { number, text, select } from '@storybook/addon-knobs';

const serviceCard = () => {
  const heading = 'Digital Transformation';
  const image = 'img/services/digital-transformation.svg';
  const description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin magna urna, tempor quis maximus ac, posuere nec.';

  return `
    <div class="tco-card tco-card--service">
      <a href="#" class="tco-card-link">
        <div class="tco-card-image-container tco-card-image-container--service">
          <img class="tco-card-image" alt="A brilliant description of the image" src="${image}" />
        </div>
        <div class="tco-card-content-container">
          <h3 class="tco-card-content-heading">${heading}</h3>
          <p class="tco-card-content-description">${description}</p>
        </div>
      </a>
    </div>
  `;
};

const serviceCardCTA = () => {
  const eyebrow = "Let's craft a solution";
  const heading =
    'Our services are designed to be combined to help solve your organization’s unique problems.';
  const ctaText = 'Get in touch to learn more';

  return `
    <div class="tco-card tco-card--service tco-card--service-cta">
      <a href="#" class="tco-card-link">
        <div class="tco-card-content-container">
          <span class="tco-card-eyebrow">${eyebrow}</span>
          <h3 class="tco-card-content-heading">${heading}</h3>
          <p class="tco-card-content-description tco-card-content-cta">
            ${ctaText}
            <svg class="tco-text-link-icon" width="20" height="20" viewBox="0 0 20 20" role="img" aria-labelledby="arrow">
              <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </p>
        </div>
      </a>
    </div>
  `;
};

export const Default = () => {
  return `
    <div class="tco-container-wrapper">
      <div class="tco-container">
        <div class="tco-card-grid tco-card-grid--service tco-card-grid--3-column">
          ${serviceCard()}
          ${serviceCard()}
          ${serviceCard()}
          ${serviceCard()}
          ${serviceCard()}
          ${serviceCardCTA()}
        </div>
      </div>
    </div>
  `;
};

export default {
  title: 'Components / Service Card Grid'
};
