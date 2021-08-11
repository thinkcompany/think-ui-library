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
    'https://www.thinkcompany.com/wp-content/uploads/2021/07/Airtable-Illustration-5-1-500x262.jpg'
  );
  const heading = text(
    'Post title',
    'The Benefits of Using Airtable as a Content Management System and Collaboration Platform'
  );

  return `
  <div class="tco-card tco-card--post">
    <a href="#" class="tco-card-link">
      <div class="tco-card-image-container">
        <img class="tco-card-image" alt="Card image" src="${image}" />
      </div>
      <div class="tco-card-content-container">
        <p class="tco-type-body--sans-small">November 2, 2020</p>
        <h2 class="tco-text-link tco-type-body--large">${heading}
          <svg class="tco-text-link-icon" width="20" height="20" viewBox="0 0 20 20" role="presentation">
            <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
          </svg>
        </h2>
        <div class="tco-byline tco-byline--no-image">
          <ul>
            <li class="tco-byline-name">By</li>
            <li class="tco-byline-name">Ian McPhail,</li>
            <li class="tco-byline-name">Keith Rich</li>
          </ul>
        </div>
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

  return `
  <div class="tco-card tco-card--callout">
    <a href="#" class="tco-card-link">
      <div class="tco-card-image-container tco-card-image-container--callout">
        <svg class="tco-icon tco-card-image tco-card-image--callout" viewBox="0 0 44 44" role="presentation">
          <use xlink:href="/img/icons.svg#icon-sync-blue"></use>
        </svg>
      </div>
      <div class="tco-card-content-container">
        <h2 class="tco-card-content-heading">${heading}</h2>
        <p class="tco-card-content-description">${description}</p>
        <p class="tco-card-content-link">
        Tell us about your challenge
          <svg class="tco-text-link-icon" width="20" height="20" viewBox="0 0 20 20" role="presentation">
            <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
          </svg>
        </p>
      </div>
    </a>
  </div>`;
};

export const mediaCard = () => {
  const heading = text('Heading', 'Competitive Salary and Annual Increase');
  const summary = text(
    'Summary',
    'We pay you what you deserve to make and you can earn up to a 5% salary increase every year based on your individual performance.'
  );
  const image = text(
    'Image',
    'https://www.thinkcompany.com/wp-content/uploads/2020/12/Competitive-Salary-Annual-Increase-1-1.svg'
  );

  return `
    <div class="tco-card tco-card--no-link tco-card--summary tco-card--media">
      <div class="tco-card-image-container tco-card-image-container--summary">
        <img class="tco-card-image tco-card-image--summary" alt="Card image" src="${image}" />
      </div>
      <div class="tco-card-content-container">
        <h2 class="tco-card-content-heading">${heading}</h2>
        <p class="tco-card-content-description">${summary}</p>
      </div>
    </div>`;
};

export const jobCard = () => {
  const heading = text('Job', 'Senior UX Designer');
  const location = text('Location', 'Philadelphia, PA');

  return `
    <div class="tco-card tco-card--job">
      <a href="#" class="tco-card-link">
        <div class="tco-card-content-container">
          <h2 class="tco-card-content-heading">${heading}</h2>
          <span class="tco-card-content-location">${location}</span>
        </div>
        <div class="tco-card-content-container">
          <span href="#" class="tco-btn tco-btn--secondary">Apply Now</span>
        </div>
      </a>
    </div>`;
};

export default {
  title: 'Components / Card'
};
