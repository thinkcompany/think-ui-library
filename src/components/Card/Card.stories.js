import { IconSet as icons } from '../IconSet/IconSet.stories';

const treatments = ['flat', 'shadow', 'none'];
const layouts = ['top', 'side'];
const versions = ['classic', 'grid'];
const summaryVersions = ['default', 'reduced'];
const models = ['classic', 'deluxe-preview', 'deluxe'];

const SummaryCardTemplate = args => {
  const { heading, summary, treatment, summaryVersion } = args;

  let image = 'https://www.thinkcompany.com/wp-content/uploads/2021/10/Be-kind-to-people.png';

  if (summaryVersion === 'reduced') {
    image = 'img/cards/client-side-apps.png';
  }

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container">
      <div class="tco-card tco-card--summary tco-card-container--${treatment} tco-card--summary-${summaryVersion}">
        <a href="#" class="tco-card-link tco-link--dark-theme">
          <div class="tco-card-image-container tco-card-image-container--summary">
            <img class="tco-card-image tco-card-image--summary" alt="Card image" src="${image}" />
          </div>
          <div class="tco-card-content-container">
            <h2 class="tco-card-content-heading tco-link--dark-theme">${heading}</h2>
            ${
              summaryVersion === 'default'
                ? `<p class="tco-card-content-description">${summary}</p>`
                : ''
            }
          </div>
        </a>
      </div>
    </div>
  </div>`;
};

export const SummaryCard = SummaryCardTemplate.bind({});

SummaryCard.args = {
  heading: 'Work Together',
  summary:
    'The best experiences are consistent across all channels, so we always consider the entire ecosystem your users interact within—designing for people wherever they click, tap, talk, touch, work, or play.',
  treatment: treatments[1],
  summaryVersion: summaryVersions[0]
};

SummaryCard.argTypes = {
  treatment: {
    name: 'border treatment (dark theme)',
    control: 'inline-radio',
    options: treatments
  },
  summaryVersion: {
    name: 'version',
    control: 'inline-radio',
    options: summaryVersions
  }
};

const PersonCardTemplate = args => {
  const { name, title, image, treatment } = args;

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container">
      <div class="tco-card tco-card--person tco-card-container--${treatment}">
        <a href="#" class="tco-card-link">
          <div class="tco-card-content-container">
            <h2 class="tco-card-content-heading tco-link--dark-theme">${name}</h2>
            <p class="tco-card-content-description">${title}</p>
          </div>
          <img class="tco-person-image" alt="${name}" src="${image}" loading="lazy" />
        </a>
      </div>
    </div>
  </div>`;
};

export const PersonCard = PersonCardTemplate.bind({});

PersonCard.args = {
  name: 'Abby DePrimo',
  title: 'Vice President, Design Operations',
  image: 'https://www.thinkcompany.com/wp-content/uploads/2020/03/AbbyDePrimo_Web.jpg',
  treatment: treatments[1]
};

PersonCard.argTypes = {
  treatment: {
    name: 'border treatment (dark theme)',
    control: 'inline-radio',
    options: treatments
  }
};

const PostCardTemplate = args => {
  const { image, heading, treatment } = args;

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container">
      <div class="tco-card tco-card--post tco-card-container--${treatment}">
        <a href="#" class="tco-card-link tco-link--dark-theme">
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
      </div>
    </div>
  </div>`;
};

export const PostCard = PostCardTemplate.bind({});

PostCard.args = {
  heading:
    'The Benefits of Using Airtable as a Content Management System and Collaboration Platform',
  image:
    'https://www.thinkcompany.com/wp-content/uploads/2021/07/Airtable-Illustration-5-1-500x262.jpg',
  treatment: treatments[1]
};

PostCard.argTypes = {
  treatment: {
    name: 'border treatment (dark theme)',
    control: 'inline-radio',
    options: treatments
  }
};

const CalloutCardTemplate = args => {
  const { heading, description, treatment, version } = args;

  let container = '<a href="#" class="tco-card-link tco-link--dark-theme">';
  let containerClose = '</a>';
  let link = 'p';
  let linkClose = '</p>';

  if (version === 'grid') {
    container = '<div class="tco-card-link tco-link--dark-theme">';
    containerClose = '</div>';
    link = 'a href="#"';
    linkClose = '</a>';
  }

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container">
      <div class="tco-card tco-card--callout tco-card--callout-${version} tco-card-container--${treatment}">
        ${container}
          <div class="tco-card-image-container tco-card-image-container--callout">
            <svg class="tco-icon tco-card-image tco-card-image--callout" viewBox="0 0 44 44" role="presentation">
              <use xlink:href="/img/icons.svg#icon-sync-blue"></use>
            </svg>
          </div>
          <div class="tco-card-content-container">
            <h2 class="tco-card-content-heading tco-link--dark-theme">${heading}</h2>
            <p class="tco-card-content-description">${description}</p>
            <${link} class="tco-card-content-link tco-link--dark-theme">
            Tell us about your challenge
              <svg class="tco-text-link-icon" width="20" height="20" viewBox="0 0 20 20" role="presentation">
                <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
              </svg>
            ${linkClose}
          </div>
        ${containerClose}
      </div>
    </div>
  </div>`;
};

export const CalloutCard = CalloutCardTemplate.bind({});

CalloutCard.args = {
  heading: 'Problem Solving Workshops for COVID-19 Support',
  description: 'We want to help organizations supporting the frontline response',
  treatment: treatments[1],
  version: versions[1]
};

CalloutCard.argTypes = {
  treatment: {
    name: 'border treatment (dark theme)',
    control: 'inline-radio',
    options: treatments
  },
  version: {
    name: 'card version',
    control: 'inline-radio',
    options: versions
  }
};

const MediaCardTemplate = args => {
  const { heading, summary, image, layout, treatment } = args;

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container">
      <div class="tco-card tco-card--no-link tco-card--summary tco-card--media tco-card--media-${layout} tco-card-container--${treatment}">
        <div class="tco-card-image-container tco-card-image-container--summary">
          <img class="tco-card-image tco-card-image--summary" alt="Card image" src="${image}" />
        </div>
        <div class="tco-card-content-container">
          <h2 class="tco-card-content-heading tco-link--dark-theme">${heading}</h2>
          <p class="tco-card-content-description">${summary}</p>
        </div>
      </div>
    </div>
  </div>`;
};

export const MediaCard = MediaCardTemplate.bind({});

MediaCard.args = {
  heading: 'Competitive Salary and Annual Increase',
  summary:
    'We pay you what you deserve to make and you can earn up to a 5% salary increase every year based on your individual performance.',
  image:
    'https://www.thinkcompany.com/wp-content/uploads/2020/12/Competitive-Salary-Annual-Increase-1-1.svg',
  layout: layouts[0]
};

MediaCard.argTypes = {
  treatment: {
    name: 'border treatment (dark theme)',
    control: 'inline-radio',
    options: treatments
  },
  layout: {
    name: 'media position',
    control: 'inline-radio',
    options: layouts
  }
};

const JobCardTemplate = args => {
  const { heading, location, treatment, model } = args;

  let container = '<a href="#" class="tco-card-link tco-link--dark-theme">';
  let containerClose = '</a>';
  let link = '<span';
  let linkClose = '</span>';

  if (model === 'deluxe-preview') {
    container = '<div class="tco-card-link tco-link--dark-theme">';
    containerClose = '</div>';
    link = '<a href="#"';
    linkClose = '</a>';
  }

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container tco-container--mid">
      <div class="tco-card tco-card--job tco-card-container--${treatment} tco-card--job-${model}">
        ${container}
          <div class="tco-card-content-container">
            <h2 class="tco-card-content-heading tco-link--dark-theme">${heading}</h2>
            ${
              model === 'deluxe' || model === 'deluxe-preview'
                ? `
              ${icons('layout')}
              <p class="tco-type-body--default tco-deluxe-description">Like an archaeologist, you love strategically exploring a UX challenge, disecting it down to its working parts, and then getting to know the user and other stuff that I’ll eventualy fill in here but that’s not important right now. It’s three lines though.</p>
            `
                : `<p class="tco-card-content-location">${location}</p>`
            }
          </div>
          <div class="tco-card-content-container">
            ${link} href="#" class="tco-btn tco-btn--secondary">View Job${linkClose}
          </div>
          ${
            model === 'deluxe'
              ? `
            <svg class="tco-icon tco-icon--job-cta tco-icon--chevron-right" title="Arrow forward" viewBox="0 0 22 30">
              <use xlink:href="/img/icons.svg#icon-chevron-right"></use>
            </svg>
          `
              : ''
          }
        ${containerClose}
      </div>
    </div>
  </div>`;
};

export const JobCard = JobCardTemplate.bind({});

JobCard.args = {
  heading: 'Senior UX Designer',
  location: 'Philadelphia, PA',
  treatment: treatments[1],
  model: models[1]
};

JobCard.argTypes = {
  treatment: {
    name: 'border treatment (dark theme)',
    control: 'inline-radio',
    options: treatments
  },
  model: {
    name: 'card version',
    control: 'inline-radio',
    options: models
  }
};

export default {
  title: 'Components / Card',
  component: [SummaryCard, PostCard, PersonCard, CalloutCard, MediaCard],
  parameters: {
    component: SummaryCard,
    componentSubtitle: 'Cards are used on the site via the Post Grid, and Card Grid components.',
    docs: {
      description: {
        component:
          'The <a href="#post-card">Post</a>, <a href="#person-card">Person</a>, Event, and Case Study cards are available within the <strong>Post Grid</strong>, and content is populated automatically based on the selected post. Only one type of card (content type) can be used within the Post Grid.<br><br>The <strong>Card Grid</strong> offers more flexibility, as the <a href="#post-card">Post</a>, <a href="#job-card">Job</a>, <a href="#media-card">Media</a>, <a href="#callout-card">Callout</a>, <a href="person-card">Person</a>, <a href="#anchor--components-card--summary-card">Summary</a>, Service, and Process cards are available. Different card types can be used within the same Card Grid instance, and content is manually input.<br><br><br><h3 class="sbdocs-h3" style="margin-left:0;">Summary Card</h3>'
      }
    }
  },
  argTypes: {
    heading: {
      table: {
        type: { summary: 'text field' }
      }
    },
    image: {
      description:
        'Summary: Display width 302px. Upload @1.5x = 451px<br>Person: Display width 250px. Upload @1.5x = 375px<br>Post: Display width 478px. Upload @1.5x = 717px<br>Callout: Display width: 44px. Upload @1.5x = 66px<br>Media: Display width 328px. Upload @1.5x = 492px',
      table: {
        type: { summary: 'image' }
      }
    },
    treatment: {
      description: 'Cards have 3 border treatment options <em>for Dark mode only</em>',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'flat' }
      }
    }
  }
};
