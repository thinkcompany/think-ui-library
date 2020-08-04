import { select, text } from '@storybook/addon-knobs';

export const summaryCard = () => {
  const heading = text('Heading', 'Full Experience & Service Design');
  const summary = text(
    'Summary',
    'The best experiences are consistent across all channels, so we always consider the entire ecosystem your users interact within—designing for people wherever they click, tap, talk, touch, work, or play.'
  );
  const image = text(
    'Image',
    'https://3vwizk2qtr8l3diwrm3r2ba0-wpengine.netdna-ssl.com/wp-content/themes/tbiv3/img/svgs/services-full-experience-service.svg'
  );

  return `
  <div class="tco-card tco-card--summary">
    <a href="#" class="tco-card-link">
      <div class="tco-card-image-container">
        <img class="tco-card-image" alt="An adorable kitten" src="${image}" />
      </div>
      <div class="tco-card-content-container">
        <h3 class="tco-card-content-heading">${heading}</h3>
        <p class="tco-card-content-description">${summary}</p>
      </div>
    </a>
  </div>`;
};

export const callToActionCard = () => {
  const summary = text(
    'Summary',
    "Interested in working with Think Company? We scope projects and build teams to meet your organization's unique needs. Tell us about your project today to start the conversation!"
  );
  const cta = text('Call to Action', 'Contact us');

  return `
  <div class="tco-card tco-card--cta">
    <div class="tco-card-content-container">
      <p class="tco-card-content-description">${summary}</p>
      
    <button type="button" class="btn btn--secondary btn--large">
    ${cta}
  </button>
    </div>
  </div>`;
};

export const personCard = () => {
  const name = text('Name', 'Abby DePrimo');
  const title = text('Title', 'Vice President, Design Operations');
  const image = text(
    'Image',
    'https://3vwizk2qtr8l3diwrm3r2ba0-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/AbbyDePrimo_Web.jpg'
  );

  return `
  <div class="tco-card tco-card--person" style="background-image: url(${image})">
    <a href="#" class="tco-card-link">
      <div class="tco-card-content-container">
        <h3 class="tco-card-content-heading">${name}</h3>
        <p class="tco-card-content-description">${title}</p>
      </div>
    </a>
  </div>`;
};

export default {
  title: 'Components / Card'
};
