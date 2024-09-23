import { IconSet as icons } from '../IconSet/IconSet.stories';

const treatments = ['flat', 'shadow', 'none'];
const versions = ['classic', 'grid'];
// const summaryVersions = ['default', 'reduced'];
const models = ['classic', 'deluxe-preview', 'deluxe'];
const textCardType = [
  'headline-only',
  'headline-only-filled',
  'headline-copy',
  'headline-copy-cta'
];

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

// const SummaryCardTemplate = args => {
//   const { heading, summary, treatment, summaryVersion } = args;

//   let image = 'https://www.thinkcompany.com/wp-content/uploads/2021/10/Be-kind-to-people.png';

//   if (summaryVersion === 'reduced') {
//     image = 'img/cards/client-side-apps.png';
//   }

//   return `
//   <div class="tco-container-wrapper">
//     <div class="tco-container">
//       <div class="tco-card tco-card--summary tco-card-container--${treatment} tco-card--summary-${summaryVersion}">
//         <a href="#" class="tco-card-link tco-link--dark-theme">
//           <div class="tco-card-image-container tco-card-image-container--summary">
//             <img class="tco-card-image tco-card-image--summary" alt="Card image" src="${image}" />
//           </div>
//           <div class="tco-card-content-container">
//             <h2 class="tco-card-content-heading tco-link--dark-theme">${heading}</h2>
//             ${
//               summaryVersion === 'default'
//                 ? `<p class="tco-card-content-description">${summary}</p>`
//                 : ''
//             }
//           </div>
//         </a>
//       </div>
//     </div>
//   </div>`;
// };

const PostCardTemplate = args => {
  const { image, heading } = args;

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container">
      <div class="tco-card tco-card--post tco-card--post-alt">
        <a href="#" class="tco-card-link tco-link--dark-theme">
          <div class="tco-card-image-container">
            <img class="tco-card-image" alt="Card image" src="${image}" />
          </div>
          <div class="tco-card-content-container">
            <p class="tco-card--post-date tco-type-body">July 17, 2024</p>
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

const ExpandingCardTemplate = args => {
  const { image, heading, content, eyebrow } = args;

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container">
      <div class="tco-card tco-card--post tco-card--post-alt tco-card--expanding">
        <a href="#" class="tco-card-link tco-link--dark-theme">
          <div class="tco-card-image-container">
            <img class="tco-card-image" alt="Card image" src="${image}" />
          </div>
          <div class="tco-card-content-container">
            ${eyebrow ? `<p class="tco-card--eyebrow tco-type-body">${eyebrow}</p>` : ''}
            <h2 class="tco-card--expanding-title tco-text-link tco-type-display--small">${heading}</h2>
            <div class="tco-card--post-content">
              <p class="tco-type-body">${content}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
  <div class="tco-container-wrapper">
    <div class="tco-container">
      <div class="tco-card tco-card--post tco-card--post-alt tco-card--expanding tco-card--expanded">
        <a href="#" class="tco-card-link tco-link--dark-theme">
          <div class="tco-card-image-container">
            <img class="tco-card-image" alt="Card image" src="${image}" />
          </div>
          <div class="tco-card-content-container">
            ${eyebrow ? `<p class="tco-card--eyebrow tco-type-body">${eyebrow}</p>` : ''}
            <h2 class="tco-card--expanding-title tco-text-link tco-type-display--small">${heading}</h2>
            <div class="tco-card--post-content tco-card--post-content-expanded">
              <p class="tco-type-body">${content}</p>
              <p class="tco-card--pill tco-type-body--small">e-Book</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>`;
};

const ExpandedCardTemplate = args => {
  const { image, heading, content, eyebrow } = args;

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container">
      <div class="tco-card tco-card--post tco-card--post-alt tco-card--expanding tco-card--expanded">
        <a href="#" class="tco-card-link tco-link--dark-theme">
          <div class="tco-card-image-container">
            <img class="tco-card-image" alt="Card image" src="${image}" />
          </div>
          <div class="tco-card-content-container">
            ${eyebrow ? `<p class="tco-card--eyebrow tco-type-body">${eyebrow}</p>` : ''}
            <h2 class="tco-card--expanding-title tco-text-link tco-type-display--small">${heading}</h2>
            <div class="tco-card--post-content tco-card--post-content-expanded">
              <p class="tco-type-body">${content}</p>
              <p class="tco-card--pill tco-type-body--small">e-Book</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>`;
};

const CaseStudyCardTemplate = args => {
  const { image, heading } = args;

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container">
      <div class="tco-card tco-card--post tco-card--post-alt">
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

export const PostCard = PostCardTemplate.bind({});
export const TextCard = TextCardTemplate.bind({});
export const ExpandingCard = ExpandingCardTemplate.bind({});
export const ExpandedCard = ExpandedCardTemplate.bind({});
export const CaseStudyCard = CaseStudyCardTemplate.bind({});
export const JobCard = JobCardTemplate.bind({});
export const WorkCard = WorkCardTemplate.bind({});
export const CalloutCard = CalloutCardTemplate.bind({});
// export const SummaryCard = SummaryCardTemplate.bind({});

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

PostCard.args = {
  heading: 'Designing with intention: Our Config 2024 takeaways',
  image:
    'https://www.thinkcompany.com/wp-content/uploads/2024/07/Congfig-blog-post_Hero-Image-Full-Width-Image-1920x1080-1-768x432.png'
};

CaseStudyCard.args = {
  eyebrow: 'Penn Mutual',
  heading: 'Using technology to improve how financial professionals service customers',
  image:
    'https://www.thinkcompany.com/wp-content/uploads/2022/05/Penn-Mu-featured-image-800x800-1.png'
};

ExpandingCard.args = {
  eyebrow: 'UX Design',
  heading: 'A guide to amplifying customer satisfaction in call centers',
  content:
    'The call center is at the heart of customer service, and consumer expectations are sky high. This guide outlines the CX fundamentals that companies must know and implment to operate a successful call center while reducing costs.',
  image: 'https://www.thinkcompany.com/wp-content/uploads/2021/03/events-at-think-company.jpg'
};

ExpandedCard.args = {
  eyebrow: 'UX Design',
  heading: 'A guide to amplifying customer satisfaction in call centers',
  content:
    'The call center is at the heart of customer service, and consumer expectations are sky high. This guide outlines the CX fundamentals that companies must know and implment to operate a successful call center while reducing costs.',
  image: 'https://www.thinkcompany.com/wp-content/uploads/2021/03/events-at-think-company.jpg'
};

CalloutCard.args = {
  heading: 'Problem Solving Workshops for COVID-19 Support',
  description: 'We want to help organizations supporting the frontline response',
  treatment: treatments[0],
  version: versions[1]
};

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

WorkCard.args = {
  heading: 'See our work',
  description:
    "We've helped teams like yours delight customers and employees with modern digital tools."
};

// SummaryCard.args = {
//   heading: 'Technology, Strategy & Consulting',
//   summary:
//     'The best experiences are consistent across all channels, so we always consider the entire ecosystem your users interact within—designing for people wherever they click, tap, talk, touch, work, or play.',
//   treatment: treatments[1],
//   summaryVersion: summaryVersions[0]
// };

// SummaryCard.argTypes = {
//   treatment: {
//     name: 'border treatment (dark theme)',
//     control: 'inline-radio',
//     options: treatments
//   },
//   summaryVersion: {
//     name: 'version',
//     control: 'inline-radio',
//     options: summaryVersions
//   }
// };

// const MediaCardTemplate = args => {
//   const { heading, summary, image, layout, treatment } = args;

//   return `
//   <div class="tco-container-wrapper">
//     <div class="tco-container">
//       <div class="tco-card tco-card--no-link tco-card--summary tco-card--media tco-card--media-${layout} tco-card-container--${treatment}">
//         <div class="tco-card-image-container tco-card-image-container--summary">
//           <img class="tco-card-image tco-card-image--summary" alt="Card image" src="${image}" />
//         </div>
//         <div class="tco-card-content-container">
//           <h2 class="tco-card-content-heading tco-link--dark-theme">${heading}</h2>
//           <p class="tco-card-content-description">${summary}</p>
//         </div>
//       </div>
//     </div>
//   </div>`;
// };

// export const MediaCard = MediaCardTemplate.bind({});

// MediaCard.args = {
//   heading: 'Competitive Salary and Annual Increase',
//   summary:
//     'We pay you what you deserve to make and you can earn up to a 5% salary increase every year based on your individual performance.',
//   image:
//     'https://www.thinkcompany.com/wp-content/uploads/2020/12/Competitive-Salary-Annual-Increase-1-1.svg',
//   layout: layouts[0]
// };

// MediaCard.argTypes = {
//   treatment: {
//     name: 'border treatment (dark theme)',
//     control: 'inline-radio',
//     options: treatments
//   },
//   layout: {
//     name: 'media position',
//     control: 'inline-radio',
//     options: layouts
//   }
// };

export default {
  title: 'Components / Card',
  tags: ['autodocs'],
  parameters: {
    component: [
      PostCard,
      TextCard,
      ExpandingCard,
      ExpandedCard,
      CaseStudyCard,
      JobCard,
      WorkCard,
      CalloutCard
    ],
    componentSubtitle:
      'Cards are used on the site in the Post Grid and Card Grid components. The Post Grid component is used to display content from a single post type. Only one type of card can be used within the Post Grid. Different card types can be used within the same Card Grid component, and content is manually input.',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ct2FjvVgu901FLjKWzdFlP/Redlining?node-id=15-1260&m=dev'
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
    }
  }
};
