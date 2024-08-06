const summaryCard = () => {
  return `
    <div class="tco-card tco-card--summary">
      <a href="#" class="tco-card-link tco-link--dark-theme">
        <div class="tco-card-image-container tco-card-image-container--summary">
          <img class="tco-card-image tco-card-image--summary" alt="Card image" src="https://www.thinkcompany.com/wp-content/uploads/2021/10/Be-kind-to-people.png" />
        </div>
        <div class="tco-card-content-container">
          <h2 class="tco-card-content-heading tco-link--dark-theme">Work Together.</h2>
          <p class="tco-card-content-description">The best experiences are consistent across all channels, so we always consider the entire ecosystem your users interact within—designing for people wherever they click, tap, talk, touch, work, or play.</p>
        </div>
      </a>
    </div>`;
};

const personCard = () => {
  return `
  <div class="tco-card tco-card--person" style="background-image: url(https://www.thinkcompany.com/wp-content/uploads/2020/03/AbbyDePrimo_Web.jpg)">
    <a href="#" class="tco-card-link">
      <div class="tco-card-content-container">
        <h2 class="tco-card-content-heading tco-link--dark-theme">Abby DePrimo</h2>
        <p class="tco-card-content-description">Vice President, Design Operations</p>
      </div>
    </a>
  </div>`;
};

const postCard = () => {
  return `
  <div class="tco-card tco-card--post">
    <a href="#" class="tco-card-link tco-link--dark-theme">
      <div class="tco-card-image-container">
        <img class="tco-card-image" alt="Card image" src="https://www.thinkcompany.com/wp-content/uploads/2024/07/Congfig-blog-post_Hero-Image-Full-Width-Image-1920x1080-1-1536x864.png" />
      </div>
      <div class="tco-card-content-container">
        <p class="tco-card--post-date tco-body-default">July 17, 2024</p>
        <h2 class="tco-card--post-title tco-text-link tco-type-display--small">Designing with intention: Our Config 2024 takeaways
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
  </div>`;
};

const caseStudyCard = () => {
  return `
  <div class="tco-card tco-card--post">
        <a href="#" class="tco-card-link tco-link--dark-theme">
          <div class="tco-card-image-container">
            <img class="tco-card-image" alt="Card image" src="https://www.thinkcompany.com/wp-content/uploads/2022/05/Penn-Mu-featured-image-800x800-1.png" />
          </div>
          <div class="tco-card-content-container">
            <p class="tco-card--post-date tco-body-default">Penn Mutual</p>
            <h3 class="tco-card--post-title tco-text-link tco-type-display--small">
              Using technology to improve how financial professionals service customers
              <svg class="tco-text-link-icon" width="20" height="20" viewBox="0 0 20 20" role="presentation">
                <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
              </svg>
            </h3>
          </div>
        </a>
      </div>`;
};

const calloutCard = () => {
  return `
  <div class="tco-card tco-card--callout">
    <a href="#" class="tco-card-link tco-link--dark-theme">
      <div class="tco-card-image-container tco-card-image-container--callout">
        <svg class="tco-icon tco-card-image tco-card-image--callout" viewBox="0 0 44 44" role="presentation">
          <use xlink:href="/img/icons.svg#icon-sync-blue"></use>
        </svg>
      </div>
      <div class="tco-card-content-container">
        <h2 class="tco-card-content-heading tco-link--dark-theme">Problem Solving Workshops for COVID-19 Support</h2>
        <p class="tco-card-content-description">We want to help organizations supporting the frontline response</p>
        <p class="tco-card-content-link tco-link--dark-theme">
        Tell us about your challenge
          <svg class="tco-text-link-icon" width="20" height="20" viewBox="0 0 20 20" role="presentation">
            <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
          </svg>
        </p>
      </div>
    </a>
  </div>`;
};

const mediaCard = () => {
  return `
    <div class="tco-card tco-card--no-link tco-card--summary tco-card--media">
      <div class="tco-card-image-container tco-card-image-container--summary">
        <img class="tco-card-image tco-card-image--summary" alt="Card image" src="https://www.thinkcompany.com/wp-content/uploads/2020/12/Competitive-Salary-Annual-Increase-1-1.svg" />
      </div>
      <div class="tco-card-content-container">
        <h2 class="tco-card-content-heading tco-link--dark-theme">Competitive Salary and Annual Increase</h2>
        <p class="tco-card-content-description">We pay you what you deserve to make and you can earn up to a 5% salary increase every year based on your individual performance.</p>
      </div>
    </div>`;
};

const jobCard = () => {
  return `
    <div class="tco-card tco-card--job">
      <a href="#" class="tco-card-link tco-link--dark-theme">
        <div class="tco-card-content-container">
          <h2 class="tco-card-content-heading tco-link--dark-theme">Senior UX Designer</h2>
          <span class="tco-card-content-location">Philadelphia, PA</span>
        </div>
        <div class="tco-card-content-container">
          <span href="#" class="tco-btn tco-btn--secondary">Apply Now</span>
        </div>
      </a>
    </div>`;
};

const colors = ['default', 'glass'];
const cardTypes = ['post', 'summary', 'person', 'callout', 'media', 'job', 'casestudy'];
const alignments = ['center', 'left', 'right'];
const sizes = ['medium', 'extra-large', 'large', 'small'];
const ledeSizes = ['default', 'large', 'sans-small'];
const containerSizes = ['default', 'mid', 'narrow', 'none'];
const cardMaxWidth = ['default', 'no max width'];

const Template = args => {
  const {
    bg,
    columns,
    count,
    cardType,
    cardMax,
    headingContainer,
    introHeading,
    headingSize,
    lede,
    ledeSize,
    ledeContainer,
    textAlignment
  } = args;

  const cardItems = () => {
    let output = '';

    let card = '';

    if (cardType === 'post') {
      card = postCard();
    } else if (cardType === 'summary') {
      card = summaryCard();
    } else if (cardType === 'person') {
      card = personCard();
    } else if (cardType === 'callout') {
      card = calloutCard();
    } else if (cardType === 'media') {
      card = mediaCard();
    } else if (cardType === 'job') {
      card = jobCard();
    } else if (cardType === 'casestudy') {
      card = caseStudyCard();
    }

    for (let i = 0; i < count; i++) {
      output += card;
    }

    return output;
  };

  let containerOpen = '';

  let containerClose = '';

  let maxWidth = '';

  if (introHeading || lede) {
    containerOpen =
      '<div class="tco-card-grid-header tco-container--' +
      textAlignment +
      ' tco-container--' +
      headingContainer +
      '">';
    containerClose = '</div>';
  }

  if (cardMax === 'no max width') {
    maxWidth = 'tco-card-no-max';
  }

  return `
    <div class="tco-container-wrapper tco-container-wrapper--${bg}">
      <div class="tco-container">
        ${containerOpen}
          ${
            introHeading
              ? `
              <h1 class="tco-card-grid-heading tco-type-display--${headingSize}">${introHeading}</h1>
            `
              : ''
          }
          ${
            lede
              ? `
              <div class="tco-card-grid-lede-container tco-container tco-container--${ledeContainer}">
                <p class="tco-card-grid-lede tco-type-body--${ledeSize}">${lede}</p>
              </div>
            `
              : ''
          }
        ${containerClose}
        <div class="tco-card-grid tco-card-grid--${columns}-column ${maxWidth}">
          ${cardItems()}
        </div>
      </div>
    </div>
  `;
};

export const CardGrid = Template.bind({});

export default {
  title: 'Components / Card Grid',
  parameters: {
    component: CardGrid,
    componentSubtitle:
      'The Post, Job, Media, Callout, Person, Summary, CTA, Service, and Process Cards are available in the Card Grid. Different card types can be used within the same instance, and content is manually input.'
  },
  args: {
    bg: colors[0],
    columns: 3,
    count: 6,
    cardType: cardTypes[0],
    cardMax: cardMaxWidth[0],
    headingContainer: containerSizes[0],
    introHeading: 'Card grid section',
    headingSize: sizes[0],
    lede: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque nunc vel turpis tempor tincidunt. Maecenas in felis suscipit, ornare felis at, posuere eros.',
    ledeSize: ledeSizes[0],
    ledeContainer: containerSizes[0],
    textAlignment: alignments[0]
  },
  argTypes: {
    cardType: {
      name: 'card type',
      control: 'inline-radio',
      options: cardTypes,
      table: {
        type: { summary: 'select' }
      }
    },
    bg: {
      name: 'background color',
      control: 'inline-radio',
      options: colors,
      table: {
        type: { summary: 'select' }
      },
      defaultValue: { summary: 'default(white)' }
    },
    count: {
      name: ' card count',
      control: 'number',
      description: 'Based on cards added in CMS',
      table: {
        type: { summary: 'number' }
      },
      defaultValue: { summary: '3' }
    },
    cardMax: {
      name: 'card max width',
      control: 'inline-radio',
      options: cardMaxWidth,
      table: {
        type: { summary: 'radio' },
        defaultValue: { summary: 'has max width' }
      }
    },
    columns: {
      name: 'column count',
      control: 'number',
      table: {
        type: { summary: 'number' }
      },
      defaultValue: { summary: '3' }
    },
    introHeading: {
      name: 'heading',
      table: {
        type: {
          summary: 'text field'
        }
      }
    },
    headingContainer: {
      name: 'component container',
      control: 'inline-radio',
      options: containerSizes,
      description: 'Controls width of container surrounding Card Grid Header (Heading + Lede)',
      table: {
        type: {
          summary: 'radio'
        },
        defaultValue: { summary: 'narrow' }
      }
    },
    headingSize: {
      name: 'heading size',
      control: 'inline-radio',
      options: sizes,
      table: {
        type: {
          summary: 'select'
        },
        defaultValue: { summary: 'small' }
      }
    },
    lede: {
      table: {
        type: {
          summary: 'text area'
        }
      }
    },
    ledeSize: {
      name: 'lede size',
      control: 'inline-radio',
      options: ledeSizes,
      table: {
        type: {
          summary: 'radio'
        },
        defaultValue: { summary: 'default' }
      }
    },
    ledeContainer: {
      name: 'lede container',
      control: 'inline-radio',
      options: containerSizes,
      table: {
        type: {
          summary: 'radio'
        },
        defaultValue: { summary: 'narrow' }
      }
    },
    textAlignment: {
      name: 'text alignment',
      control: 'inline-radio',
      options: alignments,
      table: {
        type: {
          summary: 'radio'
        },
        defaultValue: { summary: 'center' }
      }
    }
  }
};
