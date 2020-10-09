import { select, text } from '@storybook/addon-knobs';

const sizes = ['xlarge', 'large', 'medium', 'small'];

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
    </a>
      <div class="tco-card-image-container">
        <img class="tco-card-image" alt="Card image" src="${image}" />
      </div>
      <div class="tco-card-content-container">
        <h3 class="tco-card-content-heading">${heading}</h3>
        <span class="tco-card-content-description">${summary}</span>
      </div>
    
  </div>`;
};

export const callToActionCard = () => {
  const description = text(
    'Description',
    "Interested in working with Think Company? We scope projects and build teams to meet your organization's unique needs. Tell us about your project today to start the conversation!"
  );
  const cta = text('Call to Action', 'Contact us');

  return `
  <div class="tco-card tco-card--cta">
    <div class="tco-card-content-container">
      <span class="tco-card-content-description">${description}</span>
      
    <button type="button" class="tco-btn tco-btn--secondary tco-btn--large">
    ${cta}
  </button>
    </div>
  </div>`;
};

export const personCard = () => {
  const name = text('Name', 'Abby DePrimo');
  const title = text('Title', 'Vice President, Design Operations');
  const image = text(
    'Person image',
    'https://3vwizk2qtr8l3diwrm3r2ba0-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/AbbyDePrimo_Web.jpg'
  );

  return `
  <div class="tco-card tco-card--person" style="background-image: url(${image})">
    <a href="#" class="tco-card-link">
      <div class="tco-card-content-container">
        <h3 class="tco-card-content-heading">${name}</h3>
        <span class="tco-card-content-description">${title}</span>
      </div>
    </a>
  </div>`;
};

export const smallCallToAction = () => {
  const cta = text(
    'Small Call to Action',
    'Learn more about working at Think Company'
  );

  return `
  <div class="tco-card tco-card--cta-small">
    <a href="#" class="tco-card-link">
      <div class="tco-card-content-container">
        <span class="tco-card-content-description">${cta}</span>
      </div>
    </a>
  </div>`;
};

export const postCard = () => {
  const size = select('Size', sizes, 'medium');
  const image = text(
    'Post image',
    'https://thinkcompany.com/wp-content/uploads/2020/07/BlogImage-LGM-9-Kanban-708x472.png'
  );
  const eyebrow = text('Post type', '');
  const heading = text(
    'Post title',
    'How to Use Kanban to Manage a Design System'
  );
  const description = text(
    'Post excerpt',
    'Kanban originated in the world of automotive manufacturing at Toyota, by way of Japanese industrial engineer Taiichi Ohno.'
  );
  const author = text('Post author', 'Keith Rich');
  const authorImage = text(
    'Post author image',
    'https://thinkcompany.com/wp-content/uploads/2018/05/KeithRich_Web.jpg'
  );
  const date = text('Post date', 'May 21, 2020');

  return `
  <div class="tco-card tco-card--post tco-card--post--${size}">
    <a href="#" class="tco-card-link">
      <div class="tco-card-image-container">
        <img class="tco-card-image" alt="Card image" src="${image}" />
      </div>
      <div class="tco-card-content-container">
        ${
          eyebrow
            ? '<span class="tco-card-content-eyebrow">' + eyebrow + '</span>'
            : ''
        }
        <h3 class="tco-card-content-heading">${heading}</h3>
        <span class="tco-card-content-description">${description}</span>
        <div class="tco-card-info">
          <div class="tco-card-info-image-container">
            <img alt="${author} photo" class="tco-card-info-image" src="${authorImage}">
          </div>
          <div class="tco-card-info-author">
            <p class="tco-card-info-author-name">By ${author}</p>
            <p class="tco-card-info-author-date">${date}</p>
          </div>
        </div>
      </div>
    </a>
  </div>`;
};

export const calloutCard = () => {
  const size = select('Callout size', ['large', 'medium', 'small'], 'medium');
  const heading = text(
    'Callout heading',
    'Problem Solving Workshops for COVID-19 Support'
  );
  const description = text(
    'Callout description',
    'We want to help organizations supporting the frontline response'
  );
  const image = text(
    'Callout image',
    'https://thinkstaging.wpengine.com/wp-content/themes/tbiv3/img/svgs/icon-sync.svg'
  );

  return `
  <div class="tco-card tco-card--callout tco-card--callout--${size}">
    <div class="tco-card-image-container">
      <img class="tco-card-image" alt="Card image" src="${image}" />
    </div>
    <div class="tco-card-content-container">
      <h3 class="tco-card-content-heading">${heading}</h3>
      <span class="tco-card-content-description">${description}</span>
      <a class="tco-card-content-link" href="#">Tell us about your challenge</a>
    </div>
  </div>`;
};

export const all = () => {
  const itemWrapper = children => `
    <div
      class="documentation-grid--item"
      style="text-align:center; margin: 0 0 20px 40px; padding: 20px 0; flex: 0 0 auto"
    >
      ${children}
    </div>`;

  const variations = [
    summaryCard,
    callToActionCard,
    postCard,
    personCard,
    smallCallToAction,
    calloutCard
  ];

  const examples = variations.map(variation => itemWrapper(variation()));

  return `<div class="documentation-grid">${examples.join('')}</div>`;
};

export default {
  title: 'Components / Card'
};
