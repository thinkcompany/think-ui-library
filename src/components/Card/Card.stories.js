const SummaryCardTemplate = args => {
  const { heading, summary, image } = args;

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

export const SummaryCard = SummaryCardTemplate.bind({});

SummaryCard.args = {
  heading: 'Work Together.',
  summary:
    'The best experiences are consistent across all channels, so we always consider the entire ecosystem your users interact within—designing for people wherever they click, tap, talk, touch, work, or play.',
  image:
    'https://3vwizk2qtr8l3diwrm3r2ba0-wpengine.netdna-ssl.com/wp-content/themes/tbiv3/img/svgs/services-full-experience-service.svg'
};

const PersonCardTemplate = args => {
  const { name, title, image } = args;

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

export const PersonCard = PersonCardTemplate.bind({});

PersonCard.args = {
  name: 'Abby DePrimo',
  title: 'Vice President, Design Operations',
  image:
    'https://3vwizk2qtr8l3diwrm3r2ba0-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/AbbyDePrimo_Web.jpg'
};

const PostCardTemplate = args => {
  const { image, heading } = args;

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

export const PostCard = PostCardTemplate.bind({});

PostCard.args = {
  heading:
    'The Benefits of Using Airtable as a Content Management System and Collaboration Platform',
  image:
    'https://www.thinkcompany.com/wp-content/uploads/2021/07/Airtable-Illustration-5-1-500x262.jpg'
};

const CalloutCardTemplate = args => {
  const { heading, description } = args;

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

export const CalloutCard = CalloutCardTemplate.bind({});

CalloutCard.args = {
  heading: 'Problem Solving Workshops for COVID-19 Support',
  description: 'We want to help organizations supporting the frontline response'
};

const MediaCardTemplate = args => {
  const { heading, summary, image } = args;

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

export const MediaCard = MediaCardTemplate.bind({});

MediaCard.args = {
  heading: 'Competitive Salary and Annual Increase',
  summary:
    'We pay you what you deserve to make and you can earn up to a 5% salary increase every year based on your individual performance.',
  image:
    'https://www.thinkcompany.com/wp-content/uploads/2020/12/Competitive-Salary-Annual-Increase-1-1.svg'
};

const JobCardTemplate = args => {
  const { heading, location } = args;

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

export const JobCard = JobCardTemplate.bind({});

JobCard.args = {
  heading: 'Senior UX Designer',
  location: 'Philadelphia, PA'
};

export default {
  title: 'Components / Card',
  component: [SummaryCard, PostCard, PersonCard, CalloutCard, MediaCard]
};
