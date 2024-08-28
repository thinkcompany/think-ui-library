import { IconSet as icons } from '../IconSet/IconSet.stories';

const treatments = ['flat', 'shadow', 'none'];
const postStyles = ['default', 'border'];
const layouts = ['top', 'side'];
const versions = ['classic', 'grid'];
const summaryVersions = ['default', 'reduced'];
const models = ['classic', 'deluxe-preview', 'deluxe'];
const textCardType = [
  'headline-only',
  'headline-only-filled',
  'headline-copy',
  'headline-copy-cta'
];

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
  heading: 'Technology, Strategy & Consulting',
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
  const { image, heading, treatment, style } = args;
  const styleClass = style === 'border' ? 'tco-card--post-alt' : '';

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container">
      <div class="tco-card tco-card--post tco-card-container--${treatment} ${styleClass}">
        <a href="#" class="tco-card-link tco-link--dark-theme">
          <div class="tco-card-image-container">
            <img class="tco-card-image" alt="Card image" src="${image}" />
          </div>
          <div class="tco-card-content-container">
            <p class="tco-card--post-date tco-body-default">July 17, 2024</p>
            <h2 class="tco-card--post-title tco-text-link tco-type-display--small">${heading}
              <svg class="tco-text-link-icon" width="20" height="20" viewBox="0 0 20 20" role="presentation">
                <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
              </svg>
            </h2>
            <div class="tco-byline tco-byline--no-image">
              <ul>
                <li class="tco-byline-name">By </li>
                <li class="tco-byline-name">Mackenzie Alleman</li>
              </ul>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>`;
};

const CaseStudyCardTemplate = args => {
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
            <p class="tco-card--post-date tco-body-default">July 17, 2024</p>
            <h3 class="tco-card--post-title tco-text-link tco-type-display--small">${heading}
              <svg class="tco-text-link-icon" width="20" height="20" viewBox="0 0 20 20" role="presentation">
                <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
              </svg>
            </h3>
          </div>
        </a>
      </div>
    </div>
  </div>`;
};

export const PostCard = PostCardTemplate.bind({});
export const CaseStudyCard = CaseStudyCardTemplate.bind({});

PostCard.args = {
  heading: 'Designing with intention: Our Config 2024 takeaways',
  image:
    'https://www.thinkcompany.com/wp-content/uploads/2024/07/Congfig-blog-post_Hero-Image-Full-Width-Image-1920x1080-1-1536x864.png',
  treatment: treatments[1],
  style: postStyles[0]
};

PostCard.argTypes = {
  treatment: {
    name: 'border treatment (dark theme)',
    control: 'inline-radio',
    options: treatments
  },
  style: {
    name: 'card style',
    control: 'inline-radio',
    options: postStyles
  }
};

CaseStudyCard.args = {
  eyebrow: 'Penn Mutual',
  heading: 'Using technology to improve how financial professionals service customers',
  image:
    'https://www.thinkcompany.com/wp-content/uploads/2022/05/Penn-Mu-featured-image-800x800-1.png',
  treatment: treatments[1]
};

CaseStudyCard.argTypes = {
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

const WorkCardTemplate = args => {
  const { heading, description } = args;

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container">
      <div class="tco-card tco-card--work">
        <div class="tco-card-content-container">
          <h2 class="tco-type-display--medium-36 tco-link--dark-theme tco-card--work-title">${heading}</h2>
          <p class="tco-type-body tco-card--work-body">${description}</p>
          <a href="#" class="tco-text-link tco-text-link--big-arrow tco-link--dark-theme" active="">
            Case studies
            <svg class="tco-text-link-icon tco-text-link-icon--alt" viewBox="0 0 31 29" role="presentation">
              <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
        <picture class="tco-card-work-image">
          <source srcset="/img/cards/work-grid.png" media="(min-width:608px)" />
          <img src="/img/cards/work-grid-s.png" alt="Case Study images" />
        </picture>
      </div>
    </div>
  </div>`;
};

export const WorkCard = WorkCardTemplate.bind({});

WorkCard.args = {
  heading: 'See our work',
  description:
    "We've helped teams like yours delight customers and employees with modern digital tools."
};

const TextCardTemplate = args => {
  const { heading, treatment } = args;

  const headlineOnly = `
    <a href="#" class="tco-card tco-card--text tco-card--text-headline tco-link--dark-theme">
      <h2 class="tco-card--text-title tco-type-body--jumbo tco-link--dark-theme">${heading}</h2>
      <svg class="tco-card--text-icon" viewBox="0 0 31 29" role="presentation">
        <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
      </svg>
    </a>
  `;

  const headlineOnlyFilled = `
    <a href="#" class="tco-card tco-card--text tco-card--text-headline-filled">
      <h2 class="tco-card--text-title tco-type-display--medium-36 tco-link--dark-theme">${heading}</h2>
      <svg class="tco-card--text-icon" viewBox="0 0 31 29" role="presentation">
        <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
      </svg>
    </a>
  `;

  const headlineCopy = `
    <a href="#" class="tco-card tco-card--text tco-card--text-headline-copy tco-link--dark-theme">
      <h2 class="tco-card--text-title tco-type-display--medium-36 tco-link--dark-theme">Digital product design & development</h2>
      <p class="tco-type-body tco-card--text-content">Design, develop, and enhance digital products that are easy to use and increase customer engagement.</p>
    </a>
  `;

  const headlineCopyCta = `
    <a href="" class="tco-card tco-card--text tco-card--text-headline-copy-cta">
      <h2 class="tco-card--text-title tco-type-display--medium-36">Reports</h2>
      <p class="tco-type-body--medium tco-card--text-content">Read custom research reports, papers, and more for a deeper dive into industry and practice insights.</p>
      <p class="tco-type-eyebrow tco-card--text-cta">
        <span class="tco-text-link tco-text-link--arrow tco-link--dark-theme">
          Read our reports
          <svg class="tco-text-link-icon tco-text-link-icon--alt" width="20" height="20" viewBox="0 0 20 20" role="presentation">
            <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
          </svg>
        </span>
      </p>
    </a>
  `;

  const cardOutput = () => {
    let output = '';

    let card = '';

    if (treatment === 'headline-copy-cta') {
      card = headlineCopyCta;
    } else if (treatment === 'headline-copy') {
      card = headlineCopy;
    } else if (treatment === 'headline-only-filled') {
      card = headlineOnlyFilled;
    } else {
      card = headlineOnly;
    }

    for (let i = 0; i < 3; i++) {
      output += card;
    }

    return output;
  };

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container">
      <div class="tco-card-grid tco-card-grid--3-column">

        ${cardOutput(treatment)}

      </div>
    </div>
  </div>`;
};

export const TextCard = TextCardTemplate.bind({});

TextCard.args = {
  heading: 'Technology strategy & consulting',
  treatment: textCardType[0]
};

TextCard.argTypes = {
  treatment: {
    name: 'card style',
    control: 'inline-radio',
    options: textCardType
  }
};

export default {
  title: 'Components / Card',
  component: [SummaryCard, PostCard, PersonCard, CalloutCard, MediaCard, WorkCard, TextCard],
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
