import { text } from '@storybook/addon-knobs';
import { byline } from '../Byline/byline.stories';

export const summaryCard = () => {
  const heading = text('Heading', 'Work together.');
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
        <div class="tco-card-image-container tco-card-image-container--summary">
          <img class="tco-card-image tco-card-image--summary" alt="Card image" src="${image}" />
        </div>
        <div class="tco-card-content-container">
          <h2 class="tco-card-content-heading">${heading}</h2>
          <p class="tco-card-content-description">${summary}</p>
        </div>
      </a>
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
        <h2 class="tco-card-content-heading">${name}</h2>
        <p class="tco-card-content-description">${title}</p>
      </div>
    </a>
  </div>`;
};

export const postCard = () => {
  const image = text(
    'Post image',
    'https://thinkcompany.com/wp-content/uploads/2020/07/BlogImage-LGM-9-Kanban-708x472.png'
  );
  const eyebrow = text('Post type', 'Case Study');
  const heading = text(
    'Post title',
    'How to Use Kanban to Manage a Design System'
  );
  const description = text(
    'Post excerpt',
    'Kanban originated in the world of automotive manufacturing at Toyota, by way of Japanese industrial engineer Taiichi Ohno.'
  );

  return `
  <div class="tco-card tco-card--post">
    <a href="#" class="tco-card-link">
      <div class="tco-card-image-container">
        <img class="tco-card-image" alt="Card image" src="${image}" />
      </div>
      <div class="tco-card-content-container">
        ${
          eyebrow ? '<span class="tco-card-eyebrow">' + eyebrow + '</span>' : ''
        }
        <h2 class="tco-card-content-heading">${heading}</h2>
        <p class="tco-card-content-description">${description}</p>

        ${byline()}
      </div>
    </a>
  </div>`;
};

export const calloutCard = () => {
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
  <div class="tco-card tco-card--callout">
    <div class="tco-card-image-container tco-card-image-container--callout">
      <img class="tco-card-image tco-card-image--callout" alt="Card image" src="${image}" />
    </div>
    <div class="tco-card-content-container">
      <h2 class="tco-card-content-heading">${heading}</h2>
      <p class="tco-card-content-description">${description}</p>
      <a class="tco-card-content-link" href="#">
      Tell us about your challenge
      <svg class="tco-text-link-icon" width="20" height="20" viewBox="0 0 20 20" role="presentation">
        <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
    </svg>
    </a>
    </div>
  </div>`;
};

export default {
  title: 'Components / Card'
};
