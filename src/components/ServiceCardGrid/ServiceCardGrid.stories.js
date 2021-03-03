const cardContents = [
  {
    heading: 'Digital Transformation',
    image: 'img/services/digital-transformation.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin magna urna, tempor quis maximus ac, posuere nec.',
    id: 'digital-transformation'
  },
  {
    heading: 'Product Design & Development',
    image: 'img/services/product-design.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin magna urna, tempor quis maximus ac, posuere nec.',
    id: 'product-design'
  },
  {
    heading: 'Rapid Concept Realization',
    image: 'img/services/rapid-concept-realization.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin magna urna, tempor quis maximus ac, posuere nec.',
    id: 'rapid-concept-realization'
  },
  {
    heading: 'Strategy & Visioning',
    image: 'img/services/strategy-visioning.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin magna urna, tempor quis maximus ac, posuere nec.',
    id: 'strategy-visioning'
  },
  {
    heading: 'Audit & Analysis',
    image: 'img/services/audit-analysis.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin magna urna, tempor quis maximus ac, posuere nec.',
    id: 'audit-analysis'
  }
];

const serviceCard = input => {
  return `
    <div class="tco-card tco-card--service">
      <a href="#" class="tco-card-link">
        <div class="tco-card-image-container tco-card-image-container--service tco-card-image-container--${input.id}">
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

const serviceCardCTA = () => {
  const eyebrow = "Let's craft a solution";
  const heading =
    'Our services are <strong>designed to be combined</strong> to help solve your organization’s unique problems.';
  const ctaText = 'Get in touch to learn more';

  return `
    <div class="tco-card tco-card--service tco-card--service-cta">
      <a href="#" class="tco-card-link">
        <div class="tco-card-content-container">
          <span class="tco-card-eyebrow">${eyebrow}</span>
          <h3 class="tco-card-content-heading tco-card-content-heading--cta">${heading}</h3>
          <p class="tco-card-content-description tco-card-content-cta">
            ${ctaText}
            <svg class="tco-text-link-icon" width="20" height="20" viewBox="0 0 20 20" role="presentation">
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
          ${cardContents.map(item => serviceCard(item)).join('')}
          ${serviceCardCTA()}
        </div>
      </div>
    </div>
  `;
};

export default {
  title: 'Components / Service Card Grid'
};
